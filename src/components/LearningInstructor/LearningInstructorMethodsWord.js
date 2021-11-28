/* global LearningInstructor */

export default function (LearningInstructor) {
    LearningInstructor.methods.speakWord = async function (word) {
      await this.utils.TextToSpeechUtils.startSpeak(word)
      
      await this.practiceWord(word)
      
    }
    
    LearningInstructor.methods.practiceWord = async function (word) {
      
      this.config.practiceWord = null
      
      this.config.currentWordMask = this.localConfig.practiceSentenceMask
      
      let muteCancel = false
      setTimeout(() => {
        if (this.config.practiceWord && this.config.practiceWord !== '') {
          return true
        }
        this.utils.SpeechToTextUtils.stopListen()
        muteCancel = true
      }, 3000)
      
      // --------------------------
      
      await this.utils.AsyncUtils.sleep()
      this.beep.play()
      
      // --------------------------
      
      let hasReceivcePracticeSentence = false
      let thresholdWordsCount = 1
      
      while (!hasReceivcePracticeSentence) {
      
        this.config.practiceWord = await this.utils.SpeechToTextUtils.startListen(word, (processing) => {
          this.config.practiceWord = processing
        })
      
        let practiceWords = this.tokenizeSentenceToWords(this.config.practiceWord)
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
      } // while (!hasReceivcePracticeSentence) {
      
      this.config.currentWordMask = false
      
      //console.log(word)
      
      this.config.practiceWordScore = this.evaluateWordPractice(this.config.practiceWord, word)
      await this.speakPracticeFeedback(this.config.practiceWordScore)
    }
    
    LearningInstructor.methods.evaluateWordPractice = function (source, target) {
      let score = 1
      
      console.log(source, target)
      console.error('尚未完成')
      
      return score
    }
        
}