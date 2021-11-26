let debugPractice = true

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
        await this.utils.TextToSpeechUtils.startSpeak(this.$t(`Please speak again.`))
        this.config.firstSpeakHint = false
      }
      this.beep.play()

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

    if (debugPractice === false) {
      while (typeof(this.config.practiceSentence) !== 'string') {
        this.config.practiceSentence = await this.utils.SpeechToTextUtils.startListen(this.currentSentence, (processing) => {
          this.config.practiceSentence = processing
        })
        await this.utils.AsyncUtils.sleep()
      }
    }
    else {
      this.config.practiceSentence = 'ok ok not ok'
      await this.utils.AsyncUtils.sleep(10000)
    }
    //this.config.practiceSentence = 'ok'

    this.config.practiceSentenceEvaluationResult = this.evaluateSentencePractice(this.config.practiceSentence, this.currentSentence)
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

    this.config.currentSentenceMask = false
    await this.utils.AsyncUtils.sleep(2000)
  }

  LearningInstructor.methods.evaluateSentencePractice = function (source, target) {
    source = this.utils.DictUtils.filterWord(source)
    target = this.utils.DictUtils.filterWord(target)
    
    return this.utils.DiffUtils.diffWords(source, target)
  }
  
  LearningInstructor.methods.scoreEvaluate = function (results) {
    let error = 0
    results.forEach(r => {
      if (r.added) {
        error = error + r.value.split(' ').length
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
}