let ControllerMenuTopBar = {
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
    'localConfig.rate'() {
      this.utils.TextToSpeechUtils.setRate(this.localConfig.rate)
    },
  },
  computed: {
    currentIndex () {
      if (!this.localConfig.speakingIndex) {
        return '0'
      }
      else {
        return this.localConfig.speakingIndex
      }
    }    
  },
//  mounted() {
//    
//  },
  methods: {
    openArticleModal () {
      this.$parent.openArticleModal()
    },
    openConfigurationModal () {
      this.$parent.openConfigurationModal()
    },
    
    rateSlow () {
      this.localConfig.rate = this.localConfig.rate - 0.25
      if (this.localConfig.rate < 0.5) {
        this.localConfig.rate = 0.5
      }
    },
    rateFast () {
      this.localConfig.rate = this.localConfig.rate + 0.25
      if (this.localConfig.rate > 1.5) {
        this.localConfig.rate = 1.5
      }
    },
  }
}

export default ControllerMenuTopBar