import beepSound from './sound/censor-beep-01.mp3'

let LearningInstructor = {
  props: ['config', 'localConfig', 'utils'],
  data () {    
    this.$i18n.locale = this.localConfig.locale
    return {
      beep: null
    }
  },
  watch: {
    'localConfig.locale'() {
      this.$i18n.locale = this.localConfig.locale;
    },
  },
  computed: {
    currentSentence () {
      if (this.localConfig.playingIndex === null 
              || this.localConfig.playingIndex === undefined
              || !this.config.sentenceList
              || !this.config.sentenceList[this.config.playingIndex]) {
        return ''
      }
      return this.config.sentenceList[this.localConfig.playingIndex]
    },
  },
  mounted() {
    this.initBeep()
  },
  methods: {
    initBeep () {
      this.beep = this.utils.SoundUtil.create(beepSound)
    },
    speakCurrentSentence: async function () {
      if (this.config.currentSentenceIsSpeaking === true) {
        this.utils.TextToSpeechUtil.stopSpeak()
        return false
      }
      
      this.config.currentSentenceIsSpeaking = true
      let time = await this.utils.TextToSpeechUtil.startSpeak(this.currentSentence)
      this.config.currentSentenceIsSpeaking = false
      
      await this.practice(time)
      
      if (this.localConfig.autoPlay === true) {
        if (this.goToNextSentence()) {
          await this.utils.AsyncUtils.sleep()
          this.speakCurrentSentence()
        }
      }
    },
    practice: async function (time) {
      
      if (this.localConfig.practiceSentenceMask !== 'none') {
        this.config.currentSentenceMask = this.localConfig.practiceSentenceMask
        //console.log(time)
        time = time + 1000
        await this.utils.AsyncUtils.sleep()
        await this.utils.TextToSpeechUtil.startSpeak(this.$t(`Please speak.`))
        this.beep.play()
        await this.utils.AsyncUtils.sleep(time)
        this.config.currentSentenceMask = false
        await this.utils.AsyncUtils.sleep(1000)
      }
    },
    
    goToPreviousSentence () {
      if (this.localConfig.playingIndex > 0) {
        this.localConfig.playingIndex--
        return true
      }
      return false
    },
    goToNextSentence () {
      if (this.localConfig.playingIndex < this.config.sentenceList.length - 1) {
        this.localConfig.playingIndex++
        return true
      }
      return false
    },
  }
}

export default LearningInstructor