let LearningInstructor = {
  props: ['config', 'localConfig', 'utils'],
  data () {    
    this.$i18n.locale = this.localConfig.locale
    return {
    }
  },
  watch: {
    'localConfig.locale'() {
      this.$i18n.locale = this.localConfig.locale;
    },
  },
  computed: {
    currentSentence () {
      if (this.localConfig.playingIndex === null 
              || this.localConfig.playingIndex === undefined
              || !this.config.sentenceList
              || !this.config.sentenceList[this.config.playingIndex]) {
        return ''
      }
      return this.config.sentenceList[this.localConfig.playingIndex]
    },
  },
//  mounted() {
//    
//  },
  methods: {
    speakCurrentSentence: async function () {
      if (this.config.currentSentenceIsSpeaking === true) {
        this.utils.TextToSpeechUtil.stopSpeak()
        return false
      }
      
      this.config.currentSentenceIsSpeaking = true
      let time = await this.utils.TextToSpeechUtil.startSpeak(this.currentSentence)
      this.config.currentSentenceIsSpeaking = false
      
      console.log(time)
    }
  }
}

export default LearningInstructor