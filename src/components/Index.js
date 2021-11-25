var Tokenizer = require('sentence-tokenizer');

/* global Node, webkitSpeechRecognition, webkitSpeechGrammarList, webkitSpeechRecognitionEvent */
let Index = {
  props: ['config', 'localConfig', 'utils'],
  data () {    
    this.$i18n.locale = this.config.localConfig
    return {
      fieldArticle: ``,
      
      autoPractice: true,
      sentenceList: [],
      practiceList: [],
      diffList: [],
      
      synth: null,
      voice: null,
      voices: null,
      voiceName: null,
      voiceNameList: [],
      
      pitch: 1,
      rate: 1,
      speakingIndex: null,
      speakingWordIndex: null,
      speakingDiffWordIndex: null,
      
      practiceIndex: null,
      
      recognition: null,
      recognitionResult: null,
      recognitionAbort: false,
    }
  },
  mounted () {
    this.loadDemo()
    this.initSynth()
    this.initRecognition()
  },
//  components: {
//  },
//  computed: {
//  },
  watch: {
    fieldArticle: async function () {
      await this.utils.AsyncUtils.sleep()
      this.buildSentenceList()
    },
    recognitionAbort() {
      if (this.recognitionAbort === true) {
        this.recognition.abort()
      }
    },
    voiceName () {
      let pos = this.voiceNameList.indexOf(this.voiceName)
      this.voice = this.voices[pos]
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
      
      this.voices = voices
      this.voiceNameList = voices.map(v => v.name)
      
      let preferName = [
        'Google US English',
        'Google US English Male',
        'Google UK English Female',
        'Google UK English Male',
        'Chrome OS US English 1'
      ]
      
      let voiceIndex = 0
      //console.log(voicesNames)
      for (let i = 0; i < preferName.length; i++) {
        //console.log(preferName[i])
        let pos = this.voiceNameList.indexOf(preferName[i])
        if (pos > -1) {
          voiceIndex = pos
          break
        }
      }
      this.voice = voices[voiceIndex]
      this.voiceName = this.voice.name
    },
    initRecognition () {
      //console.log(1)
      var SpeechRecognition = SpeechRecognition || webkitSpeechRecognition
      var SpeechGrammarList = SpeechGrammarList || webkitSpeechGrammarList
      var SpeechRecognitionEvent = SpeechRecognitionEvent || webkitSpeechRecognitionEvent
      
      this.recognition = new SpeechRecognition();
      
      //var speechRecognitionList = new SpeechGrammarList();
      //var grammar = '#JSGF V1.0; grammar colors; public <color> = aqua | azure | beige | bisque | black | blue | brown | chocolate | coral | crimson | cyan | fuchsia | ghostwhite | gold | goldenrod | gray | green | indigo | ivory | khaki | lavender | lime | linen | magenta | maroon | moccasin | navy | olive | orange | orchid | peru | pink | plum | purple | red | salmon | sienna | silver | snow | tan | teal | thistle | tomato | turquoise | violet | white | yellow ;'
      //speechRecognitionList.addFromString(grammar, 1);
      //this.recognition.grammars = speechRecognitionList;
      //console.log(speechRecognitionList[0].src); // should return the same as the contents of the grammar variable
      //console.log(speechRecognitionList[0].weight); // should return 1 - the same as the weight set in line 4.
      
      this.recognition.continuous = false;
      this.recognition.lang = 'en-US';
      this.recognition.interimResults = false;
      this.recognition.maxAlternatives = 1;
      
      this.recognition.onresult = (event) => {
        this.recognitionResult = event.results[0][0].transcript;
        //console.log(color)
        //console.log('Confidence: ' + event.results[0][0].confidence);
        
      }
      
      this.recognition.onspeechend = () => {
        this.recognition.stop();
      }
      
      //this.recognition.start()
    },
    loadDemo: async function () {
      let article = await this.utils.AxiosUtils.get('./demo/article1.txt')
      
      //console.log(article)
      
      article = article.split(`“`).join('"')
      article = article.split(`”`).join('"')
      article = article.split(`\n`).join(' ')
      article = article.split(`\t`).join(' ')
      while (article.indexOf('  ') > -1) {
        article = article.split(`  `).join(' ')
      } 
      
      this.fieldArticle = article
    },
    buildSentenceList () {
      //console.log(this.fieldArticle)
      
      var tokenizer = new Tokenizer('Chuck')
      tokenizer.setEntry(this.fieldArticle)
      
      let sentences = tokenizer.getSentences()
      let sentenceList = []
      sentences.forEach(sentence => {
//        while (sentence.indexOf(', ') > -1) {
//          let pos = sentence.indexOf(', ')
//          let part = sentence.slice(0, pos + 2).trim()
//          sentenceList.push(part)
//          sentence = sentence.slice(pos + 2).trim()
//        }
        while (sentence.indexOf('. ') > -1) {
          let pos = sentence.indexOf('. ')
          let part = sentence.slice(0, pos + 2).trim()
          sentenceList.push(part)
          sentence = sentence.slice(pos + 2).trim()
        }
        
        if (sentence.length > 0) {
          sentenceList.push(sentence.trim())
        }
      })
      
      this.sentenceList = sentenceList
    },
    buildUtter (sentence, onend) {
      var utterThis = new SpeechSynthesisUtterance(sentence);
      
      utterThis.onend = onend
      utterThis.voice = this.voice;
      utterThis.pitch = this.pitch;
      utterThis.rate = this.rate;
      
      return utterThis
    },
    speak (sentence, i) {
      this.synth.cancel()
      if (i === this.speakingIndex 
              && !this.speakingWordIndex) {
        this.speakingIndex = null
        return false
      }
      
      //console.log(sentence)
      this.speakingIndex = i
      this.recognitionAbort = true
      
      var utterThis = this.buildUtter(sentence, (event) => {
        console.log('SpeechSynthesisUtterance.onend');
        this.speakingIndex = null
        if (this.practiceIndex === null && this.autoPractice) {
          this.practice(i)
        }
      });
      
      this.synth.speak(utterThis);
    },
    speakWord: async function (word, i, j) {
      this.synth.cancel()
      
      if (i === this.speakingIndex 
              && j === this.speakingWordIndex) {
        this.speakingIndex = null
        this.speakingWordIndex = null
        return false
      }
      
      //console.log(sentence)
      this.speakingIndex = i
      this.speakingWordIndex = j
      this.recognitionAbort = true
      
      var utterThis = this.buildUtter(word, (event) => {
        this.speakingIndex = null
        this.speakingWordIndex = null
      });
      
      this.synth.speak(utterThis);
    },
    speakDiffWord: async function (word, i, j) {
      this.synth.cancel()
      
      if (i === this.speakingIndex 
              && j === this.speakingDiffWordIndex) {
        this.speakingIndex = null
        this.speakingDiffWordIndex = null
        return false
      }
      //this.recognition.abort()
      
      //console.log(sentence)
      this.speakingIndex = i
      this.speakingDiffWordIndex = j
      this.recognitionAbort = true
      
      
      var utterThis = this.buildUtter(word, (event) => {
        this.speakingIndex = null
        this.speakingDiffWordIndex = null
      });
      
      this.synth.speak(utterThis);
    },
    practice: async function (i) {
      this.synth.cancel()
      if (this.practiceIndex === i) {
        this.recognitionResult = null
        this.recognitionAbort = true
        this.practiceIndex = null
        return false
      }
      
      this.practiceIndex = i
      this.diffList[i] = []
      
      this.recognitionResult = null
      this.recognitionAbort = false
      this.recognition.start()
      while (this.recognitionResult === null) {
        if (this.recognitionAbort === true) {
          this.practiceIndex = null
          return false
        }
        await this.utils.AsyncUtils.sleep()
      }
      
      this.practiceList[i] = this.recognitionResult
      this.practiceIndex = null
      console.log(this.practiceList[i])
      
      let diff = this.utils.DiffUtils.diffWords(this.filterWord(this.practiceList[i]), this.filterWord(this.sentenceList[i]))
      //console.log(diff)
      this.diffList[i] = diff
    },
    filterWord (word) {
      return word.replace(/[^\w\s]|_/g, "")
         .replace(/\s+/g, " ")
         .trim()
    },
    openDict (word) {
      word = this.filterWord(word)
      if (word === '') {
        return false
      }
 
      let url = `https://dictionary.cambridge.org/zht/%E8%A9%9E%E5%85%B8/%E8%8B%B1%E8%AA%9E-%E6%BC%A2%E8%AA%9E-%E7%B9%81%E9%AB%94/` + word
      //window.open(url, word)
      
      this.popupCenter({url, title: word})
    },
    popupCenter ({url, title, w = 800, h = 480}) {
      // Fixes dual-screen position                             Most browsers      Firefox
      const dualScreenLeft = window.screenLeft !==  undefined ? window.screenLeft : window.screenX;
      const dualScreenTop = window.screenTop !==  undefined   ? window.screenTop  : window.screenY;

      const width = window.innerWidth ? window.innerWidth : document.documentElement.clientWidth ? document.documentElement.clientWidth : screen.width;
      const height = window.innerHeight ? window.innerHeight : document.documentElement.clientHeight ? document.documentElement.clientHeight : screen.height;

      const systemZoom = width / window.screen.availWidth;
      const left = (width - w) / 2 / systemZoom + dualScreenLeft
      const top = (height - h) / 2 / systemZoom + dualScreenTop
      const newWindow = window.open(url, title, 
        `
        scrollbars=yes,
        width=${w / systemZoom}, 
        height=${h / systemZoom}, 
        top=${top}, 
        left=${left}
        `
      )

      if (window.focus) newWindow.focus();
    }
  }
}

export default Index