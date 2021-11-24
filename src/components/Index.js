var Tokenizer = require('sentence-tokenizer');

/* global Node */
let Index = {
  props: ['config', 'localConfig', 'utils'],
  data () {    
    this.$i18n.locale = this.config.localConfig
    return {
      fieldArticle: ``,
      fieldArticleTimer: null,
      sentenceList: [],
      practiceList: [],
      diffList: [],
      
      synth: null,
      voice: null,
      pitch: 1,
      rate: 1,
      speakingIndex: null,
      
      practiceIndex: null
    }
  },
  mounted () {
    this.loadDemo()
    this.initSynth()
  },
//  components: {
//  },
  computed: {
    
  },
  watch: {
    fieldArticle: async function () {
      await this.utils.AsyncUtils.sleep()
      this.buildSentenceList()
    }
  },
  methods: {
    initSynth: async function () {
      this.synth = window.speechSynthesis
      //console.log(this.synth)
      
      let voices = []
      while (voices.length === 0) {
        await this.utils.AsyncUtils.sleep(500)
        voices = this.synth.getVoices()
      }
      
      let voicesNames = voices.map(v => v.name)
      let preferName = [
        'Google US English',
        'Google US English Male',
        'Google UK English Female',
        'Google UK English Male',
      ]
      
      let voiceIndex
      for (let i = 0; i < preferName.length; i++) {
        if (voicesNames.indexOf(preferName[i])) {
          voiceIndex = i
          break
        }
      }
      this.voice = voices[voiceIndex]
      //console.log(voices)
    },
    loadDemo: async function () {
      let article = await this.utils.AxiosUtils.get('./demo/article1.txt')
      this.fieldArticle = article
    },
    buildSentenceList () {
      //console.log(this.fieldArticle)
      
      var tokenizer = new Tokenizer('Chuck')
      tokenizer.setEntry(this.fieldArticle)
      this.sentenceList = tokenizer.getSentences()
    },
    speak (sentence, i) {
      //console.log(sentence)
      this.speakingIndex = i
      
      var utterThis = new SpeechSynthesisUtterance(sentence);
      
      utterThis.onend = (event) => {
        console.log('SpeechSynthesisUtterance.onend');
        this.speakingIndex = null
        this.practice(i)
      }
      utterThis.onerror = (event) => {
        console.error('SpeechSynthesisUtterance.onerror');
        this.speakingIndex = null
      }
      
      utterThis.voice = this.voice;
      utterThis.pitch = this.pitch;
      utterThis.rate = this.rate;
      this.synth.speak(utterThis);
    },
    practice: async function (i) {
      this.practiceIndex = i
      this.diffList[i] = []
      
      await this.utils.AsyncUtils.sleep()
      
      this.practiceList[i] = 'test'
      this.practiceIndex = null
      
      let diff = this.utils.DiffUtils.diffWords(this.practiceList[i], this.sentenceList[i])
      //console.log(diff)
      this.diffList[i] = diff
    }
  }
}

export default Index