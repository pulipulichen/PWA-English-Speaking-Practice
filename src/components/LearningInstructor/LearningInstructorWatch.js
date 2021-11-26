export default function (LearningInstructor) {
  LearningInstructor.watch = {
    'localConfig.locale'() {
      this.$i18n.locale = this.localConfig.locale;
    },
    'localConfig.playingIndex' () {
      this.config.practiceSentence = null
    },
    'autoPlay.autoPlay' () {
      this.config.firstSpeakHint = true
    }
  }
}