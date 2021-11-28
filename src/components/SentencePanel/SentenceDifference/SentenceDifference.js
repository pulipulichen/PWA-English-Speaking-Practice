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
      //console.log(this.config.practiceSentenceEvaluationResult)
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
//  mounted() {
//    
//  },
  methods: {
    practiceWord: function (word) {
      this.config.currentWord = word
    },
    computedAddedWord: function (word) {
      let score = 0
      if (this.utils.LearningInstructor) {
        score = this.utils.LearningInstructor.getWordToLearnScore(word)
      }
      
      if (score > 5) {
        return 'word-to-learn'
      }
      //let score = this.
    }
  }
}

export default SentenceDifference