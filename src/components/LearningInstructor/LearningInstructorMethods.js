import beepSound from './sound/censor-beep-01.mp3'

export default function (LearningInstructor) {
  LearningInstructor.methods.initBeep = function () {
    this.beep = this.utils.SoundUtils.create(beepSound)
  }
  
  LearningInstructor.methods.tokenizeSentenceToWords = function (sentence) {
    return sentence.split(' ')
  }
}