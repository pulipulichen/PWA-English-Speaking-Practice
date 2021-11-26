export default function (LearningInstructor) {

  LearningInstructor.methods.speakCurrentSentence = async function () {
    if (this.config.currentSentenceIsSpeaking === true) {
      this.utils.TextToSpeechUtils.stopSpeak()
      this.tryToStop = true
      await this.utils.AsyncUtils.sleep(100)
      this.config.currentSentenceIsSpeaking = false
      this.tryToStop = false
      return false
    }

    this.config.currentSentenceIsSpeaking = true
    let time = await this.utils.TextToSpeechUtils.startSpeak(this.currentSentence)
    if (this.tryToStop === true) {
      return false
    }
    this.config.currentSentenceIsSpeaking = false

    if (this.localConfig.speakingInstructionStrategy !== 'none') {

      await this.utils.AsyncUtils.sleep()
      await this.utils.TextToSpeechUtils.startSpeak(this.$t(`Please speak again.`))
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

    /*
    this.config.practiceSentence = await this.utils.SpeechToTextUtils.startListen(this.currentSentence, (processing) => {
      this.config.practiceSentence = processing
    })
    */
    this.config.practiceSentence = 'ok'

    await this.utils.AsyncUtils.sleep()
    this.config.practiceSentenceEvaluationResult = this.evaluateSentencePractice(this.config.practiceSentence, this.currentSentence)
    //console.log(result)
    //await this.utils.AsyncUtils.sleep(time)

    this.config.currentSentenceMask = false
    await this.utils.AsyncUtils.sleep(1000)
  }

  LearningInstructor.methods.evaluateSentencePractice = function (source, target) {
    source = this.utils.DictUtils.filterWord(source)
    target = this.utils.DictUtils.filterWord(target)
    
    return this.utils.DiffUtils.diffWords(source, target)
  }
}