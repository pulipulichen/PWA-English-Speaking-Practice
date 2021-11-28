
export default function (LearningInstructor) {
  
  let feedbackWonderful = null
  let feedbackGreat = null
  let feedbackGood = null
  let feedbackOK = null
  
  LearningInstructor.methods.speakPracticeFeedback = async function (score) {
    
    if (!feedbackWonderful) {
      // https://www.soeasyedu.com.tw/blog/online-learning/2018/09/to-encourage-somebody
      feedbackWonderful = this.utils.RandomUtils(['Wonderful!', 'Perfect!', 'Awesome!'])
      feedbackGreat = this.utils.RandomUtils(['Great.', 'Good Job.', 'Well done.'])
      feedbackGood = this.utils.RandomUtils(['Good.', 'Not bad.', 'Keep it up!'])
      feedbackOK = this.utils.RandomUtils(['OK.', 'Try again?', 'Stay strong!'])
    }
    
    //console.log(result)
    //await this.utils.AsyncUtils.sleep(time)
    await this.utils.AsyncUtils.sleep()
    if (score === 1) {
      let option = {
        pitch: Math.ceil(Math.random() * 3)/10 + 1
      } 
      await this.utils.TextToSpeechUtils.startSpeak(this.$t(feedbackWonderful.sampleUnduplicated()), option)
    }
    else if (score >= 0.7) {
      let option = {
        pitch: Math.ceil(Math.random() * 5)/10 + 0.8
      }
      await this.utils.TextToSpeechUtils.startSpeak(this.$t(feedbackGreat.sampleUnduplicated()), option)
    }
    else if (score >= 0.5) {
      let option = {
        pitch: Math.ceil(Math.random() * 4)/10 + 0.7
      }
      await this.utils.TextToSpeechUtils.startSpeak(this.$t(feedbackGood.sampleUnduplicated()), option)
    }
    else {
      let option = {
        pitch: Math.ceil(Math.random() * 5)/10 + 0.5
      }
      await this.utils.TextToSpeechUtils.startSpeak(this.$t(feedbackOK.sampleUnduplicated()), option)
    }
  }
}