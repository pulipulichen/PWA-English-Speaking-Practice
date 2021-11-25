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
  },
//  computed: {
//    
//  },
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
    }
  }
}

export default ControllerMenuTopBar