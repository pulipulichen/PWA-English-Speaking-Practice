let ControllerMenuBottomBar = {
  props: ['config', 'localConfig', 'utils'],
  data () {    
    this.$i18n.locale = this.localConfig.locale
    return {
      isSpeaking: false
    }
  },
  watch: {
    'localConfig.locale'() {
      this.$i18n.locale = this.localConfig.locale;
    },
  },
//  computed: {
//    
//  },
//  mounted() {
//    
//  },
  methods: {
    
    goToPreviousSentence () {
      if (this.localConfig.playingIndex > 0) {
        this.localConfig.playingIndex--
      }
    },
    goToNextSentence () {
      if (this.localConfig.playingIndex < this.config.sentenceList.length - 1) {
        this.localConfig.playingIndex++
      }
    },
    speakCurrentSentence: async function () {
//      if (this.isSpeaking === true) {
//        this.$parent.speakCurrentSentence()
//        this.isSpeaking = false
//        return false
//      }
//      
//      this.isSpeaking = true
//      await this.$parent.speakCurrentSentence()
//      this.isSpeaking = false
      this.utils.LearningInstructor.speakCurrentSentence()
    }
  }
}

export default ControllerMenuBottomBar