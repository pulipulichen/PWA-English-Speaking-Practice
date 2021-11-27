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
//  computed: {
//  },
  mounted() {
    
  },
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
      if (this.isSpeaking === true) {
        this.utils.TextToSpeechUtils.stopSpeak()
        return false
      }
      
      this.isSpeaking = true
      await this.utils.TextToSpeechUtils.startSpeak(this.config.practiceWord)
      this.isSpeaking = false
    },
    
    openDictionary () {
      this.utils.DictUtils.openDict(this.config.practiceWord)
    }
  }
}

export default WordModal