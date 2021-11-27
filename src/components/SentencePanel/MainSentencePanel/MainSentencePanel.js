import CurrentSentence from './../CurrentSentence/CurrentSentence.vue'
import PracticeSentencePanel from './../PracticeSentencePanel/PracticeSentencePanel.vue'

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
    PracticeSentencePanel
  },
//  computed: {
//
//  },
//  mounted() {
//    
//  },
//  methods: {
//
//  }
}

export default MainSentencePanel