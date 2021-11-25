let CurrentSentence = {
  props: ['config', 'localConfig', 'utils'],
  data () {    
    this.$i18n.locale = this.localConfig.locale
    return {
      isSpeaking: false,
      speakingWordIndex: null
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
    words () {
      let parts = this.currentSentence.split(' ')
      let words = []
      
      parts.forEach((part, i) => {
        let otherPartString = ''
        part = part.trim()
        let otherPart = part.slice(-1)
        //console.log(otherPart)
        while (!!otherPart.match(/^[.,:!?]$/)) {
          otherPartString = otherPart + otherPartString
          part = part.slice(0, -1)
          otherPart = part.slice(-1)
        }
        
        if (part.length > 0) {
          words.push(part)
        }
        if (otherPartString.length > 0) {
          words.push(otherPartString)
        }
        
        if (i < parts.length - 1) {
          words.push(' ')
        }
        
        //console.log(words)
      })
      
      return words
    },
  },
  mounted() {
    
  },
  methods: {
    speakCurrentSentence: async function () {
      this.isSpeaking = true
      await this.utils.TextToSpeechUtil.startSpeak(this.currentSentence, this.localConfig.pitch, this.localConfig.rate)
      this.isSpeaking = false
    },
    startSpeakWord: async function (word, i) {
      if (this.isSpeakable(word) === false) {
        return false
      }
      
      this.speakingWordIndex = i
      await this.utils.TextToSpeechUtil.startSpeak(word, this.localConfig.pitch, this.localConfig.rate)
      this.speakingWordIndex = null
    },
    openDict (word) {
      this.utils.DictUtil.openDict(word)
    },
    isSpeakable (word) {
      //console.log(word)
      if (!word || word.trim() === '') {
        return false
      }
      
      
      let lastChar = word.slice(-1)
      if (!!lastChar.match(/^[.,:!?]$/)) {
        return false
      }
      
      return true
    }
  }
}

export default CurrentSentence