export default function (LearningInstructor) {

  LearningInstructor.methods.goToPreviousSentence = function () {
    if (this.localConfig.playingIndex > 0) {
      this.localConfig.playingIndex--
      return true
    }
    return false
  }
  LearningInstructor.methods.goToNextSentence = function () {
    if (this.localConfig.playingIndex < this.config.sentenceList.length - 1) {
      this.localConfig.playingIndex++
      return true
    }
    return false
  }
}