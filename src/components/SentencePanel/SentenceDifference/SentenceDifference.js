let SentenceDifference = {
  props: ['config', 'localConfig', 'utils'],
  data () {    
    this.$i18n.locale = this.localConfig.locale
    return {
      currentPracticeWord: null,
      redraw: false
    }
  },
  watch: {
    'localConfig.locale'() {
      this.$i18n.locale = this.localConfig.locale;
    },
    'config.practiceWordScore': async function () {
      //console.log(this.config.practiceWordScore)
      if (this.currentPracticeWord && this.config.practiceWordScore >= 0.7) {
        /*
        await this.utils.AsyncUtils.sleep()
        this.redraw = true
        await this.utils.AsyncUtils.sleep(1)
        this.redraw = false
        */
        for (let i = 0; i < this.config.practiceSentenceEvaluationResult.length; i++) {
          let r = this.config.practiceSentenceEvaluationResult[i]
          if (r.value.trim() === this.currentPracticeWord) {
            this.config.practiceSentenceEvaluationResult[i].added = false
          } 
        }
        this.currentPracticeWord = null
      }
    }
  },
  computed: {
    results () {
      let results = []
      if (this.redraw === true) {
        //console.log('redrawing')
        return []
      }
      
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
      this.currentPracticeWord = word
      this.config.currentWord = word
    },
    computedAddedWord: function (word) {
      let score = 0
      if (this.utils.LearningInstructor) {
        score = this.utils.LearningInstructor.getWordToLearnScore(word)
        //console.log(word, score)
      }
      
      if (score > 5) {
        return 'word-to-learn'
      }
      //let score = this.
    }
  }
}

export default SentenceDifference