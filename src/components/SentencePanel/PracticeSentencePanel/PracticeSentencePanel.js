import SentenceDifference from './../SentenceDifference/SentenceDifference.vue'

let PracticeSentencePanel = {
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
  components: {
    SentenceDifference
  },
  computed: {
    isPracticing () {
      return (this.config.practiceSentence && this.config.practiceSentenceEvaluationResult.length === 0)
    },
    readEvaluationResult () {
      return (this.config.practiceSentence && this.config.practiceSentenceEvaluationResult.length > 0)
    }    
  },
  mounted() {
    setTimeout(() => {
      this.practice()
    }, 3000)
  },
  methods: {
    practice () {
      if (!this.utils.LearningInstructor) {
        return false
      }
      this.utils.LearningInstructor.practiceSentence()
    }
  }
}

export default PracticeSentencePanel