
import WordModal from './WordModal/WordModal.vue'
import MainSentencePanel from './MainSentencePanel/MainSentencePanel.vue'

let SentencePanel = {
  props: ['config', 'localConfig', 'utils'],
  data () {    
    this.$i18n.locale = this.localConfig.locale
    return {
      //show: false,
      pageTransition: false,
      pageTransitionShow: false,
      pageTransitionToNext: true,
      pageTransitionBeforeSentence: '',
      pageTransitionAfterSentence: '',
    }
  },
  watch: {
    'localConfig.locale'() {
      this.$i18n.locale = this.localConfig.locale;
    },
    'localConfig.playingIndex': async function (newIndex, oldIndex) {
      //console.log(newIndex, oldIndex)
      this.pageTransitionToNext = (newIndex > oldIndex)
      
      this.pageTransitionAfterSentence = this.currentSentence + ''
      this.pageTransitionBeforeSentence = this.config.sentenceList[oldIndex] + ''
      
      this.pageTransition = true
      this.pageTransitionShow = true
      //console.log('before', this.pageTransitionBeforeSentence)
      //console.log('after', this.pageTransitionAfterSentence)
      //this.pageTransitionNextSentence
      await this.utils.AsyncUtils.sleep(500)
      this.pageTransition = false
      this.pageTransitionShow = false
      //console.log(this.pageTransition)
    }
  },
  computed: {
    currentSentence () {
      //console.log(this.utils.LearningInstructor)
      if (this.config.inited === true) {
        //console.log(this.utils.LearningInstructor.currentSentence)
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