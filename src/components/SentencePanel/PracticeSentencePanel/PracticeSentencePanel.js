import SentenceDifference from './../SentenceDifference/SentenceDifference.vue'

let PracticeSentencePanel = {
  props: ['config', 'localConfig', 'utils'],
  data () {    
    this.$i18n.locale = this.localConfig.locale
    return {
      checkSubmitTimer: null,
      isSubmiting: false
    }
  },
  watch: {
    'localConfig.locale'() {
      this.$i18n.locale = this.localConfig.locale;
    },
    'config.practiceSentence' () {
      if (this.localConfig.practiceMode === 'writing') {
        if (this.checkSubmitTimer) {
          clearTimeout(this.checkSubmitTimer)
        }
        
        this.checkSubmitTimer = setTimeout(() => {
          let source = this.utils.DictUtils.filterWord(this.config.practiceSentence)
          let target = this.utils.DictUtils.filterWord(this.currentSentence)

          if (source === target) {
            this.practiceSubmit()
          }
        }, 500)
      }
    }
  },
  components: {
    SentenceDifference
  },
  computed: {
    isPracticing () {
      return ((this.config.practiceSentence || this.config.practiceSentence === '') && this.config.practiceSentenceEvaluationResult.length === 0)
    },
    practiceStarted () {
      return (this.config.practiceSentence && this.config.practiceSentence.trim() !== '')
    },
    readEvaluationResult () {
      return (this.config.practiceSentence && this.config.practiceSentenceEvaluationResult.length > 0)
    }    
  },
//  mounted() {
//    setTimeout(() => {
//      this.practice()
//    }, 3000)
//  },
  methods: {
    practice: async function () {
      if (this.isPracticing) {
        return false
      }
      
      while (!this.utils.LearningInstructor) {
        await this.utils.AsyncUtils.sleep()
      }
      
      this.utils.LearningInstructor.practiceSentence()
      if (this.localConfig.practiceMode === 'writing') {
        await this.utils.AsyncUtils.sleep(100)
        this.$refs.TypingPracticeTextarea.focus()
      }
    },
    practiceSubmit: async function () {
      if (this.isSubmiting) {
        return false
      }
      
      this.isSubmiting = true
      //console.log('practiceSubmit', this.practiceStarted)
      if (!this.practiceStarted) {
        return false
      }
      
      while (!this.utils.LearningInstructor) {
        await this.utils.AsyncUtils.sleep()
      }
      await this.utils.LearningInstructor.practiceSentenceSubmit()
      this.isSubmiting = false
    }
  }
}

export default PracticeSentencePanel