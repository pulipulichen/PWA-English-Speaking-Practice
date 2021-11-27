import CurrentSentence from './../CurrentSentence/CurrentSentence.vue'
import SentenceDifference from './../SentenceDifference/SentenceDifference.vue'

let MainSentencePanel = {
  props: ['config', 'localConfig', 'utils', 'sentence'],
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
    CurrentSentence,
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
//  mounted() {
//    
//  },
  methods: {
    practice () {
      if (!this.utils.LearningInstructor) {
        return false
      }
      this.utils.LearningInstructor.practiceSentence()
    }
  }
}

export default MainSentencePanel