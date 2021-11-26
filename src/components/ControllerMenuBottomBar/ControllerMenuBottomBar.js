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
      this.utils.LearningInstructor.goToPreviousSentence()
    },
    goToNextSentence () {
      this.utils.LearningInstructor.goToNextSentence()
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
    },
    practice () {
      if (!this.utils.LearningInstructor) {
        return false
      }
      //console.log('go')
      this.utils.LearningInstructor.practiceSentence()
    }
  }
}

export default ControllerMenuBottomBar