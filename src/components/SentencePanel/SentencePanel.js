let SentencePanel = {
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
    previousSentence () {
      if (this.config.playingIndex === 0) {
        return ''
      }
      return this.config.sentenceList[(this.config.playingIndex - 1)]
    },
    nextSentence () {
      if (this.config.playingIndex === this.config.sentenceList.length - 1) {
        return ''
      }
      return this.config.sentenceList[(this.config.playingIndex + 1)]
    }
  },
  mounted() {
    
  },
  methods: {
    goToPreviousSentence () {
      if (this.config.playingIndex > 0) {
        this.config.playingIndex--
      }
    },
    goToNextSentence () {
      if (this.config.playingIndex < this.config.sentenceList.length - 1) {
        this.config.playingIndex++
      }
    }
  }
}

export default SentencePanel