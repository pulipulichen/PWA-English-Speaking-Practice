
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

    if (this.localConfig.practiceMode === 'writing') {
      this.config.practiceSentence = ''
    }
    else if (this.localConfig.practiceMode === 'speaking') {
      this.config.practiceSentence = null
    }
    
    this.config.practiceSentenceEvaluationResult = []
    this.config.practiceSentenceEvaluationScore = null
    this.config.currentSentenceMask = this.localConfig.practiceSentenceMask

    // --------------------------

    if (!this.md.mobile()) {
      await this.utils.AsyncUtils.sleep()
      await this.beep.play()
      await this.utils.AsyncUtils.sleep()
    }

    // --------------------------
    if (this.localConfig.practiceMode === 'speaking') {
      await this.practiceSentenceSpeaking()
      await this.practiceSentenceSubmitSubmit()
    }
  }
  
  LearningInstructor.methods.practiceSentenceSpeaking = async function (time) {
    if (!time) {
      time = this.currentSentence.length * 100
      //console.log(time)
    }
    time = time + 1000

//    if (debugPractice === false) {
    let muteCancel = false
    setTimeout(() => {
      if (this.config.practiceSentence && this.config.practiceSentence !== '') {
        return true
      }
      this.utils.SpeechToTextUtils.stopListen()
      muteCancel = true
    }, 5000)

    // --------------------------

    let hasReceivcePracticeSentence = false
    let thresholdWordsCount = Math.round(this.currentSentenceWords.length / 2)

    while (!hasReceivcePracticeSentence) {
      this.config.practiceSentence = await this.utils.SpeechToTextUtils.startListen(this.currentSentence, (processing) => {
        this.config.practiceSentence = processing
      }, this.localConfig.debugSpeechToTextUtilsMockup)

      if (muteCancel === true) {
        return false
      }

      // 如果字數太短，那也要重新聽取
      //if (this.config.practiceSentence.split(' ').length < )
      let practiceWords = this.tokenizeSentenceToWords(this.config.practiceSentence)
      if (practiceWords.length >= thresholdWordsCount) {
        hasReceivcePracticeSentence = true
        await this.utils.AsyncUtils.sleep()
      } else {
        await this.utils.AsyncUtils.sleep()
        await this.utils.TextToSpeechUtils.startSpeak(this.$t(`Please speak again.`))
        await this.utils.AsyncUtils.sleep()
        this.beep.play()
      }

      if (muteCancel === true) {
        return false
      }
    } // while (!hasReceivcePracticeSentence) {
  }
    
  LearningInstructor.methods.practiceSentenceSubmit = async function () {
    
    this.config.currentSentenceMask = false
    //this.config.practiceSentence = 'ok'

    this.config.practiceSentenceEvaluationResult = this.evaluateSentencePractice(this.config.practiceSentence, this.currentSentence)
    this.config.practiceSentenceEvaluationScore = LearningInstructor.methods.scoreSentenceEvaluate(this.config.practiceSentenceEvaluationResult)
    //console.log(this.config.practiceSentenceEvaluationScore)
    await this.speakPracticeFeedback(this.config.practiceSentenceEvaluationScore)
    
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
  
  LearningInstructor.methods.scoreSentenceEvaluate = function (results) {
    let error = 0
    results.forEach(r => {
      //console.log(r.added)
      if (r.added === true) {
        error++
      } 
    })
    
    //console.log(error)
    
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
  
}