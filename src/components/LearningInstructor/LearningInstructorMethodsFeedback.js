
export default function (LearningInstructor) {
  
  LearningInstructor.methods.speakPracticeFeedback = async function (score) {
    
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