import $ from 'jquery'

let WordModal = {
  props: ['config', 'localConfig', 'utils'],
  data () {    
    this.$i18n.locale = this.localConfig.locale
    return {
      modal: null,
      isOpened: false,
      isSpeaking: false,
      wordTrans: null,
      currentWord: null,
      isPracticing: false
    }
  },
  watch: {
    'localConfig.locale'() {
      this.$i18n.locale = this.localConfig.locale;
    },
    'config.currentWord': async function () {
      //console.log(this.config.practiceWord)
      
      if (this.currentWord === null) {
        this.wordTrans = null
      }
      if (this.config.currentWord 
              && this.config.currentWord !== '') {
        this.wordTrans = false
        this.currentWord = this.config.currentWord
        this.config.practiceWord = null
        this.config.practiceWordScore = null
        this.open()
        
      }
      else {
        await this.close()
        //await this.utils.AsyncUtils.sleep(1000)
        this.currentWord = null
        this.config.currentWord = null
      }
    },
    'currentWord': async function () {
      if (!this.currentWord) {
        return false
      }
      //console.log(this.currentWord)
      this.wordTrans = await this.utils.TransUtils.transZHTW(this.currentWord)
    }
  },
  computed: {
    computedWordMaskClassesWithoutTrans () {
      let classes = []
      
      let mask = this.config.currentWordMask
      if (mask === 'translation' 
              || mask === 'word-block' 
              || mask === 'sentence-block' ) {
        classes.push('masked')
      }
      return classes
    },
    computedWordMaskClassesWithTrans () {
      let classes = []
      
      let mask = this.config.currentWordMask
      if (mask === 'word-block' 
              || mask === 'sentence-block' ) {
        classes.push('masked')
      }
      return classes
    },
    computedPracticeWordClasses () {
      let classes = []
      
      if (!this.isPracticing 
              && this.config.practiceWord === null) {
        classes.push('icon')
      }
      
      if (this.isPracticing) {
        classes.push('isPracticing')
      }
      if (this.isPracticing && this.config.practiceWord === null) {
        //console.log('go')
        classes.push('keep-going')
      }
      
      if (this.config.practiceWordScore
              && this.config.practiceWordScore > 0.7) {
        classes.push('positive')
      }
      
      return classes
    }
  },
//  mounted() {
//    let result = this.utils.DiffUtils.diffChars('word', 'weord')
//    console.log(result)
//  },
  methods: {
    init: function () {
      this.modal = $(this.$refs.Modal)
      
      this.modal.modal({
        onShow: () => {
          //console.log('open')
          this.isOpened = true
        },
        onHidden: () => {
          this.isOpened = false
          this.config.currentWord = null
        }
      })
    },
    open: async function () {
      if (!this.modal) {
        this.init()
      }
      
      return new Promise((resolve) => {
        this.modal.modal('show', () => {
          resolve()
          this.speakWord()
        })
      })
    },
    close () {
      return new Promise((resolve) => {
        this.modal.modal('hide', () => {
          this.config.currentWord = null
          resolve()
        })
      })
    },
    
    speakWord: async function () {
      while (!await this.utils.LearningInstructor) {
        await this.utils.AsyncUtils.sleep()
      }
      
      this.isSpeaking = true
      await this.utils.LearningInstructor.speakWord(this.config.currentWord)
      this.isSpeaking = false
      
      await this.practiceWord()
    },
    
    practiceWord: async function () {
      while (!await this.utils.LearningInstructor) {
        await this.utils.AsyncUtils.sleep()
      }
      
      this.isPracticing = true
      await this.utils.LearningInstructor.practiceWord(this.config.currentWord)
      this.isPracticing = false
    },
    
    openDictionary () {
      this.utils.DictUtils.openDict(this.config.currentWord)
    }
  }
}

export default WordModal