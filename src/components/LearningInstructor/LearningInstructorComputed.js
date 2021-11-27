import Snowball from 'snowball'

export default function (LearningInstructor) {
  LearningInstructor.computed = {
    currentSentence () {
      if (this.localConfig.playingIndex === null 
              || this.localConfig.playingIndex === undefined
              || !this.config.sentenceList
              || !this.config.sentenceList[this.config.playingIndex]) {
        return ''
      }
      return this.config.sentenceList[this.localConfig.playingIndex]
    },
    
    currentSentenceWords () {
      return this.tokenizeSentenceToWords(this.currentSentence)
    },
    
    previousSentence () {
      //console.log(this.localConfig.playingIndex)
      if (this.localConfig.playingIndex === 0) {
        return ''
      }
      return this.config.sentenceList[(this.localConfig.playingIndex - 1)]
    },
    nextSentence () {
      //console.log(this.localConfig.playingIndex)
      if (this.localConfig.playingIndex === this.config.sentenceList.length - 1) {
        return ''
      }
      return this.config.sentenceList[(this.localConfig.playingIndex + 1)]
    },
    
    stemmer () {
      let stemmer = new Snowball('English');
      return stemmer
    }
  }
}