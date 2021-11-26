
import WordModal from './WordModal/WordModal.vue'
import MainSentencePanel from './MainSentencePanel/MainSentencePanel.vue'

let SentencePanel = {
  props: ['config', 'localConfig', 'utils'],
  data () {    
    this.$i18n.locale = this.localConfig.locale
    return {
      show: false
    }
  },
  watch: {
    'localConfig.locale'() {
      this.$i18n.locale = this.localConfig.locale;
    },
  },
  computed: {
    currentSentence () {
      if (this.utils.LearningInstructor) {
        return this.utils.LearningInstructor.currentSentence
      }
      else {
        return ''
      }
    },
    previousSentence () {
      //console.log(this.localConfig.playingIndex)
      if (this.localConfig.playingIndex === 0) {
        return ''
      }
      return this.config.sentenceList[(this.localConfig.playingIndex - 1)]
    },
    nextSentence () {
      //console.log(this.localConfig.playingIndex)
      if (this.localConfig.playingIndex === this.config.sentenceList.length - 1) {
        return ''
      }
      return this.config.sentenceList[(this.localConfig.playingIndex + 1)]
    }
  },
  components: {
//    CurrentSentence,
    MainSentencePanel,
    WordModal
  },
//  mounted() {
//    
//  },
  methods: {
    goToPreviousSentence () {
      this.utils.LearningInstructor.goToPreviousSentence()
    },
    goToNextSentence () {
      this.utils.LearningInstructor.goToNextSentence()
    },
//    speakCurrentSentence: async function () {
//      await this.$refs.CurrentSentence.speakCurrentSentence()
//    }
  }
}

export default SentencePanel