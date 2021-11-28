
//import IndexMethodsLocalStorage from './IndexMethodsLocalStorage.js'
//import IndexMethodsDictionary from './IndexMethodsDictionary.js'

export default function (Index) {
//  IndexMethodsLocalStorage(Index)
//  IndexMethodsDictionary(Index)
  
  // --------------------

  Index.methods.openConfigurationModal = function () {
    this.$refs.ConfigurationModal.open()
  }
  
  Index.methods.openArticleModal = function () {
    this.$refs.ArticleModal.open()
  }
  
//  Index.methods.speakCurrentSentence = async function () {
//    await this.$refs.SentencePanel.speakCurrentSentence()
//  }

  /*
  Index.methods.initSynth = async function () {
    this.config.synth = window.speechSynthesis
    //console.log(this.synth)
    
    let voices = []
    while (voices.length === 0) {
      
      await this.utils.AsyncUtils.sleep(500)
      voices = this.config.synth.getVoices()
    }

    this.voices = voices
    this.voiceNameList = voices.map(v => v.name)
    //console.log(this.voiceNameList)

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
      let pos = this.config.voiceNameList.indexOf(preferName[i])
      if (pos > -1) {
        voiceIndex = pos
        break
      }
    }
    this.config.voice = voices[voiceIndex]
    this.localConfig.voiceName = this.config.voice.name
  }
  */
  
//  Index.methods.initRecognition = function () {
//    //console.log(1)
//    var SpeechRecognition = SpeechRecognition || webkitSpeechRecognition
//    var SpeechGrammarList = SpeechGrammarList || webkitSpeechGrammarList
//    var SpeechRecognitionEvent = SpeechRecognitionEvent || webkitSpeechRecognitionEvent
//
//    this.config.recognition = new SpeechRecognition();
//
//    //var speechRecognitionList = new SpeechGrammarList();
//    //var grammar = '#JSGF V1.0; grammar colors; public <color> = aqua | azure | beige | bisque | black | blue | brown | chocolate | coral | crimson | cyan | fuchsia | ghostwhite | gold | goldenrod | gray | green | indigo | ivory | khaki | lavender | lime | linen | magenta | maroon | moccasin | navy | olive | orange | orchid | peru | pink | plum | purple | red | salmon | sienna | silver | snow | tan | teal | thistle | tomato | turquoise | violet | white | yellow ;'
//    //speechRecognitionList.addFromString(grammar, 1);
//    //this.recognition.grammars = speechRecognitionList;
//    //console.log(speechRecognitionList[0].src); // should return the same as the contents of the grammar variable
//    //console.log(speechRecognitionList[0].weight); // should return 1 - the same as the weight set in line 4.
//
//    this.config.recognition.continuous = false;
//    this.config.recognition.lang = 'en-US';
//    this.config.recognition.interimResults = true;
//    this.config.recognition.maxAlternatives = 10
//
//    this.config.recognition.onresult = (event) => {
//      this.config.recognitionResult = event.results[0][0].transcript;
//      //console.log(event.results)
//      //let result = event.results[ event.results.length - 1 ]
//      //let transcript = result[ result.length - 1 ].transcript.trim()
//      //let caption = this.recognition.getCaption()
//      //console.log(transcript, event.results)
//
//      //
//      //console.log(color)
//      //console.log('Confidence: ' + event.results[0][0].confidence);
//
//    }
//
//    this.config.recognition.onspeechend = () => {
//      this.config.recognition.stop();
//      this.config.recognitionResultEnd = true
//    }
//
//    //this.recognition.start()
//  }
  
//  Index.methods.buildUtter = function (sentence, onend) {
//    let utterThis = new SpeechSynthesisUtterance(sentence);
//
//    utterThis.onend = onend
//    utterThis.voice = this.config.voice;
//    utterThis.pitch = Number(this.localConfig.pitch)
//    utterThis.rate = Number(this.localConfig.rate)
//
//    return utterThis
//  }
//  Index.methods.speak = function (sentence, i) {
//    this.config.synth.cancel()
//    if (i === this.config.speakingIndex
//            && !this.config.speakingWordIndex) {
//      this.config.speakingIndex = null
//      return false
//    }
//
//    //console.log(sentence)
//    this.config.speakingIndex = i
//    this.config.recognitionAbort = true
//
//    var utterThis = this.buildUtter(sentence, (event) => {
//      //console.log('SpeechSynthesisUtterance.onend');
//      this.config.speakingIndex = null
//      if (this.config.practiceIndex === null && this.localConfig.repeatPractice) {
//        this.practice(i)
//      }
//    });
//
//    this.config.synth.speak(utterThis);
//    this.localConfig.lastPlayIndex = i
//  }
//  Index.methods.speakWord = async function (word, i, j) {
//    this.synth.cancel()
//
//    if (i === this.config.speakingIndex
//            && j === this.config.speakingWordIndex) {
//      this.config.speakingIndex = null
//      this.config.speakingWordIndex = null
//      return false
//    }
//
//    //console.log(sentence)
//    this.config.speakingIndex = i
//    this.config.speakingWordIndex = j
//    this.config.recognitionAbort = true
//
//    var utterThis = this.buildUtter(word, (event) => {
//      this.config.speakingIndex = null
//      this.config.speakingWordIndex = null
//    });
//
//    this.synth.speak(utterThis);
//    this.localConfig.lastPlayIndex = i
//  }
//  Index.methods.speakDiffWord = async function (word, i, j) {
//    this.config.synth.cancel()
//
//    if (i === this.config.speakingIndex
//            && j === this.config.speakingDiffWordIndex) {
//      this.config.speakingIndex = null
//      this.config.speakingDiffWordIndex = null
//      return false
//    }
//    //this.recognition.abort()
//
//    //console.log(sentence)
//    this.config.speakingIndex = i
//    this.config.speakingDiffWordIndex = j
//    this.config.recognitionAbort = true
//
//
//    var utterThis = this.buildUtter(word, (event) => {
//      this.config.speakingIndex = null
//      this.config.speakingDiffWordIndex = null
//    });
//
//    this.config.synth.speak(utterThis);
//    this.localConfig.lastPlayIndex = i
//  }
//  Index.methods.practice = async function (i) {
//    this.config.synth.cancel()
//    this.config.practiceIndex = i
//    this.config.diffList[i] = []
//    this.config.practiceList[i] = null
//
//
//    let words = this.filterWord(this.sentenceList[i]).split(' ')
//    words = words.filter(function (item, pos) {
//      return words.indexOf(item) === pos
//    })
//    let grammar = '#JSGF V1.0; grammar actions; public <actions> = ' + words.join(' | ') + ';';
//    //console.log(grammar)
//    let speechRecognitionList = new webkitSpeechGrammarList();
//    speechRecognitionList.addFromString(grammar, 1);
//    this.config.recognition.grammars = speechRecognitionList;
//
//    this.config.recognitionResult = null
//    this.config.recognitionAbort = false
//    this.config.recognitionResultEnd = false
//    this.config.recognition.start()
//    while (this.config.recognitionResultEnd === false) {
//      if (this.recognitionAbort === true) {
//        this.config.practiceIndex = null
//        this.config.recognitionResultEnd = true
//        return false
//      }
//      //console.log(this.recognitionResult)
//      this.config.practiceList[i] = this.recognitionResult
//      await this.utils.AsyncUtils.sleep()
//    }
//
//    this.config.practiceList[i] = this.recognitionResult
//    this.config.practiceIndex = null
//
//    let diff = this.utils.DiffUtils.diffWords(this.filterWord(this.practiceList[i]), this.filterWord(this.sentenceList[i]))
//    //console.log(diff)
//    this.diffList[i] = diff
//    this.localConfig.lastPlayIndex = i
//  }
//  Index.methods.filterWord = function (word) {
//    return word.replace(/[^\w\s]|_/g, "")
//            .replace(/\s+/g, " ")
//            .toLowerCase()
//            .trim()
//  }
  
  
//  Index.methods.scrollToLastPlay = async function () {
//    if (this.localConfig.lastPlayIndex === null) {
//      return false
//    }
//
//    let element = document.querySelector('#sentence' + this.localConfig.lastPlayIndex)
//    while (!element) {
//      await this.utils.AsyncUtils.sleep()
//      //console.log('wait')
//      element = document.querySelector('#sentence' + this.localConfig.lastPlayIndex)
//    }
//
//    element.scrollIntoView({block: "start", inline: "start"})
//  }
}