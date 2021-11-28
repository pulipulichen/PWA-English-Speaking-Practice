
export default function (LearningInstructor) {
    LearningInstructor.methods.speakWord = async function (word) {
      await this.utils.TextToSpeechUtils.startSpeak(word)
      
      await this.practiceWord(word)
      
    }
    
    LearningInstructor.methods.practiceWord = async function (word) {
      
      this.config.practiceSentence = null
      
      this.config.currentWordMask = this.localConfig.practiceSentenceMask
      
      
      this.config.currentWordMask = false
      console.log(word)
    }
}