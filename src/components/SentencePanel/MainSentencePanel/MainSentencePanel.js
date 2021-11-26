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
//  computed: {
//    
//  },
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