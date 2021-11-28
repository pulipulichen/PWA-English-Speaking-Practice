import $ from 'jquery'

let WordModal = {
  props: ['config', 'localConfig', 'utils'],
  data () {    
    this.$i18n.locale = this.localConfig.locale
    return {
      modal: null,
      isOpened: false,
      isSpeaking: false,
      wordTrans: null
    }
  },
  watch: {
    'localConfig.locale'() {
      this.$i18n.locale = this.localConfig.locale;
    },
    'config.practiceWord': async function () {
      //console.log(this.config.practiceWord)
      
      this.wordTrans = null
      if (this.config.practiceWord 
              && this.config.practiceWord !== '') {
        this.open()
        this.wordTrans = await this.utils.TransUtils.transZHTW(this.config.practiceWord)
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
    }
  },
//  mounted() {
//    
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
        }
      })
    },
    open: async function () {
      if (!this.modal) {
        this.init()
      }
      
      this.modal.modal('show', () => {
        this.speakWord()
      })
    },
    close () {
      this.modal.modal('hide', () => {
        this.config.practiceWord = null
      })
    },
    
    speakWord: async function () {
      while (!await this.utils.LearningInstructor) {
        await this.utils.AsyncUtils.sleep()
      }
      
      this.isSpeaking = true
      await this.utils.LearningInstructor.speakWord(this.config.practiceWord)
      this.isSpeaking = false
    },
    
    practiceWord: async function () {
      while (!await this.utils.LearningInstructor) {
        await this.utils.AsyncUtils.sleep()
      }
      
      this.isPracting = true
      await this.utils.LearningInstructor.practiceWord(this.config.practiceWord)
      this.isPracting = false
    },
    
    openDictionary () {
      this.utils.DictUtils.openDict(this.config.practiceWord)
    }
  }
}

export default WordModal