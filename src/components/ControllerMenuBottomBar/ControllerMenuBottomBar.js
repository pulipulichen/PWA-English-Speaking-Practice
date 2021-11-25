let ControllerMenuBottomBar = {
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
    
  },
  mounted() {
    
  },
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
    }
  }
}

export default ControllerMenuBottomBar