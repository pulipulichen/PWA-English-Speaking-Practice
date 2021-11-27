
export default function (LearningInstructor) {

  LearningInstructor.methods.speakCurrentSentence = async function () {
    if (this.config.currentSentenceIsSpeaking === true) {
      this.utils.TextToSpeechUtils.stopSpeak()
      this.tryToStop = true
      await this.utils.AsyncUtils.sleep(100)
      this.config.currentSentenceIsSpeaking = false
      this.tryToStop = false
      this.config.firstSpeakHint = true
      return false
    }

    this.config.currentSentenceIsSpeaking = true
    let time = await this.utils.TextToSpeechUtils.startSpeak(this.currentSentence)
    if (this.tryToStop === true) {
      return false
    }
    this.config.currentSentenceIsSpeaking = false

    if (this.localConfig.speakingInstructionStrategy !== 'none') {

      if (this.config.firstSpeakHint) {
        await this.utils.AsyncUtils.sleep()
        await this.utils.TextToSpeechUtils.startSpeak(this.$t(`Please repeat.`))
        this.config.firstSpeakHint = false
      }
      await this.practiceSentence(time)
    }


    if (this.localConfig.autoPlay === true) {
      if (this.goToNextSentence()) {
        await this.utils.AsyncUtils.sleep()
        this.speakCurrentSentence()
      }
    }
  }
  
  LearningInstructor.methods.practiceSentence = async function (time) {
    if (!time) {
      time = this.currentSentence.length * 100
      //console.log(time)
    }

    this.config.practiceSentence = null
    this.config.practiceSentenceEvaluationResult = []
    this.config.currentSentenceMask = this.localConfig.practiceSentenceMask
    //console.log(time)
    time = time + 1000

//    if (debugPractice === false) {
      let muteCancel = false
      setTimeout(() => {
        if (this.config.practiceSentence && this.config.practiceSentence !== '') {
          return true
        }
        this.utils.SpeechToTextUtils.stopListen()
        muteCancel = true
      }, 3000)
      
      await this.utils.AsyncUtils.sleep()
      this.beep.play()
      
      let hasReceivcePracticeSentence = false
      let thresholdWordsCount = Math.round(this.currentSentenceWords.length / 2)
      
      while (!hasReceivcePracticeSentence) {
        this.config.practiceSentence = await this.utils.SpeechToTextUtils.startListen(this.currentSentence, (processing) => {
          this.config.practiceSentence = processing
        })
        
        if (muteCancel === true) {
          return false
        }
        
        // 如果字數太短，那也要重新聽取
        //if (this.config.practiceSentence.split(' ').length < )
        let practiceWords = this.tokenizeSentenceToWords(this.config.practiceSentence)
        if (practiceWords.length >= thresholdWordsCount) {
          hasReceivcePracticeSentence = true
          await this.utils.AsyncUtils.sleep()
        }
        else {
          await this.utils.AsyncUtils.sleep()
          await this.utils.TextToSpeechUtils.startSpeak(this.$t(`Please speak again.`))
          await this.utils.AsyncUtils.sleep()
          this.beep.play()
        }
        
        if (muteCancel === true) {
          return false
        }
      }
//    }
//    else {
//      this.config.practiceSentence = 'ok ok not ok ok ok not okok ok not okok ok not okok ok not okok ok not okok ok not okok ok not ok'
//      for (let i = 0; i < 3; i++) {
//        this.config.practiceSentence = this.config.practiceSentence + this.config.practiceSentence
//      }
//      await this.utils.AsyncUtils.sleep(100)
//    }
    
    this.config.currentSentenceMask = false
    //this.config.practiceSentence = 'ok'

    this.config.practiceSentenceEvaluationResult = this.evaluateSentencePractice(this.config.practiceSentence, this.currentSentence)
    
    await this.sentencePracticeFeedback()
    
    await this.utils.AsyncUtils.sleep(2000)
  }

  LearningInstructor.methods.evaluateSentencePractice = function (source, target) {
    source = this.utils.DictUtils.filterWord(source)
    target = this.utils.DictUtils.filterWord(target)
    
    
    let resultRaw = this.utils.DiffUtils.diffWords(source, target)
    //console.log(resultRaw)
    let result = []
    
    resultRaw.forEach(r => {
      if (!r.added) {
        result.push(r)
      }
      else {
        let words = this.tokenizeSentenceToWords(r.value)
        
        words.forEach(w => {
          this.recordWordsToLearn(w)
          
          result.push({
            added: true,
            removed: false,
            value: w
          })
        })
      }
    })
    
    return result
  }
  
  LearningInstructor.methods.scoreEvaluate = function (results) {
    let error = 0
    results.forEach(r => {
      if (r.added) {
        error = error++
      } 
    })
    
    if (error > 5) {
      return 0
    }
    else if (error <= 5 && error > 2) {
      return 0.5
    }
    else if (error >= 1 && error <= 2) {
      return 0.7
    }
    else {
      return 1
    }
  }
  
  LearningInstructor.methods.sentencePracticeFeedback = async function (results) {
    let score = LearningInstructor.methods.scoreEvaluate(this.config.practiceSentenceEvaluationResult)
    //console.log(result)
    //await this.utils.AsyncUtils.sleep(time)
    await this.utils.AsyncUtils.sleep()
    if (score === 1) {
      await this.utils.TextToSpeechUtils.startSpeak(this.$t(`Wonderful!`))
    }
    else if (score >= 0.7) {
      await this.utils.TextToSpeechUtils.startSpeak(this.$t(`Great.`))
    }
    else if (score >= 0.5) {
      await this.utils.TextToSpeechUtils.startSpeak(this.$t(`Good.`))
    }
    else {
      await this.utils.TextToSpeechUtils.startSpeak(this.$t(`OK.`))
    }
  }
}