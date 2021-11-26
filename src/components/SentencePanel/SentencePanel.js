import CurrentSentence from './CurrentSentence/CurrentSentence.vue'
import WordModal from './WordModal/WordModal.vue'

let SentencePanel = {
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
    CurrentSentence,
    WordModal
  },
//  mounted() {
//    
//  },
  methods: {
    goToPreviousSentence () {
      if (this.localConfig.playingIndex > 0) {
        this.localConfig.playingIndex--
      }
    },
    goToNextSentence () {
      if (this.localConfig.playingIndex < this.config.sentenceList.length - 1) {
        this.localConfig.playingIndex++
      }
    },
    speakCurrentSentence: async function () {
      await this.$refs.CurrentSentence.speakCurrentSentence()
    }
  }
}

export default SentencePanel