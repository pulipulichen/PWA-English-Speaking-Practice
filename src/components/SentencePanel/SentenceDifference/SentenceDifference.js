let SentenceDifference = {
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
    results () {
      let results = []
      
      for (let i = 0; i < this.config.practiceSentenceEvaluationResult.length; i++) {
        if (i > 0) {
          results.push({
            //value: '&nbsp;'
            value: ' '
          })
        }
        
        let r = this.config.practiceSentenceEvaluationResult[i]
        r.value = r.value.trim()
        results.push(this.config.practiceSentenceEvaluationResult[i])
      }
      
      return results
    } 
  },
  mounted() {
    
  },
  methods: {
    
  }
}

export default SentenceDifference