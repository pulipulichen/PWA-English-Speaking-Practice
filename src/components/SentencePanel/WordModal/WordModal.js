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
      isPracticing: false,
      checkSubmitTimer: null,
      isPerfect: false
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
        this.isPerfect = false
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
    },
    'config.practiceWord' () {
      if (this.localConfig.practiceMode === 'writing') {
        if (this.checkSubmitTimer) {
          clearTimeout(this.checkSubmitTimer)
        }
        
        this.checkSubmitTimer = setTimeout(() => {
          let source = this.utils.DictUtils.filterWord(this.config.practiceWord)
          let target = this.utils.DictUtils.filterWord(this.currentWord)

          if (source === target) {
            this.isPerfect = true
            this.practiceWordSubmit()
          }
        }, 500)
      }
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
      
      if (this.isPracticing && this.localConfig.practiceMode === 'speaking') {
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
    },
    computedWritingPracticeHintFieldClasses () {
      //let classes = []
      
      if (this.isPerfect) {
        return 'perfect'
      }
      if (this.isPracticing) {
        return 'practicing'
      }
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
      
      if (this.localConfig.practiceMode === 'speaking') {
        await this.utils.LearningInstructor.practiceWord(this.config.currentWord)
        this.isPracticing = false
      }
      else if (this.localConfig.practiceMode === 'writing') {
        await this.utils.LearningInstructor.practiceWord(this.config.currentWord)
        await this.utils.AsyncUtils.sleep(10)
        
        let input = this.$refs.TypingPracticeInput
        input.focus()
        input.click()
      }
    },
    
    practiceWordSubmit: async function () {
      this.isPracticing = false
      await this.utils.LearningInstructor.practiceWordSubmit(this.currentWord)
    },
    
    openDictionary () {
      this.utils.DictUtils.openDict(this.config.currentWord)
    }
  }
}

export default WordModal