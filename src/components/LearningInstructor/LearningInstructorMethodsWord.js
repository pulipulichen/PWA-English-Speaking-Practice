/* global LearningInstructor */

export default function (LearningInstructor) {
    LearningInstructor.methods.speakWord = async function (word) {
      await this.utils.TextToSpeechUtils.startSpeak(word)
      
    }
    
    LearningInstructor.methods.practiceWord = async function (word) {
      
      this.config.practiceWord = null
      this.config.practiceWordScore = null
      
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
      await this.beep.play()
      await this.utils.AsyncUtils.sleep()
      
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
      
      //return false
      if (this.config.practiceWordScore >= 0.7) {
        await this.utils.AsyncUtils.sleep()
        this.clearWordToLearn(word)
        this.config.currentWord = null
      }
      else {
        this.reduceWordsToLearn(word)
      }
    }
    
    LearningInstructor.methods.evaluateWordPractice = function (source, target) {
      let score = 1
      
      source = this.utils.DictUtils.filterWord(source)
      target = this.utils.DictUtils.filterWord(target)
    
      let result = this.utils.DiffUtils.diffChars(source, target)
      //console.log(result)
      let addedCharCount = 0
      result.forEach(r => {
        if (r.added === true) {
          addedCharCount = addedCharCount + r.count
        }
      })
      
      //console.log(addedCharCount, target.length)
      
      let percent = (target.length - addedCharCount) / target.length
      
      if (percent >= 0.8) {
        score = 1
      }
      else if (percent >= 0.7) {
        score = 0.7
      }
      else if (percent >= 0.3) {
        score = 0.5
      }
      else {
        score = 0
      }
      
      return score
    }
        
}