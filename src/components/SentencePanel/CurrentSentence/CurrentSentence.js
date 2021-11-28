let CurrentSentence = {
  props: ['config', 'localConfig', 'utils', 'sentence'],
  data () {    
    this.$i18n.locale = this.localConfig.locale
    return {
      isSpeaking: false,
      speakingWordIndex: null,
      translationMask: null
    }
  },
  watch: {
    'localConfig.locale'() {
      this.$i18n.locale = this.localConfig.locale;
    },
    'localConfig.practiceSentenceMask' () {
      this.initTranslationMask()
    },
    sentence () {
      this.initTranslationMask()
    }
  },
  computed: {
    currentSentence () {
      return this.sentence
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
    computeCurrentSentenceClasses () {
      // {isSpeaking: config.currentSentenceIsSpeaking}
      
      let classes = []
      
      if (this.config.currentSentenceIsSpeaking) {
        classes.push('isSpeaking')
      }
      
      if (this.config.currentSentenceMask 
              && this.config.currentSentenceMask !== 'none') {
        classes.push(this.config.currentSentenceMask)
      }
      
      return classes
    }
  },
  mounted: async function () {
    this.initTranslationMask()
    
//    setTimeout(() => {
//      this.initTranslationMask()
//    }, 500)
  },
  methods: {
    initTranslationMask: async function () {
      if (this.localConfig.practiceSentenceMask !== 'translation'
              || this.translationMask
              || !this.sentence) {
        return false
      }
      this.translationMask = await this.utils.TransUtils.trans(this.sentence, 'zh-TW')
      //console.log(this.translationMask)
    },
    speakCurrentSentence: async function () {
//      if (this.isSpeaking === true) {
//        this.utils.TextToSpeechUtil.stopSpeak()
//        return false
//      }
//      
//      this.isSpeaking = true
//      await this.utils.TextToSpeechUtil.startSpeak(this.currentSentence)
//      this.isSpeaking = false
      this.utils.LearningInstructor.speakCurrentSentence()
      
    },
    startSpeakWord: async function (word, i) {
      if (this.isSpeakable(word) === false) {
        return false
      }
      
//      this.speakingWordIndex = i
//      await this.utils.TextToSpeechUtil.startSpeak(word)
//      this.speakingWordIndex = null
      this.config.currentWord = this.utils.DictUtils.filterWord(word)
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
    },
    computedWordClasses (word, i) {
      // {isSpeaking: (i === speakingWordIndex), speakable: isSpeakable(word)}
      
      let classes = []
      
      if (i === this.speakingWordIndex) {
        classes.push('isSpeaking')
      }
      if (this.isSpeakable(word)) {
        classes.push('speakable')
      }
      
      return classes
    }
  }
}

export default CurrentSentence