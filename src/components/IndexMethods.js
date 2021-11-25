const Tokenizer = require('sentence-tokenizer');

import IndexMethodsLocalStorage from './IndexMethodsLocalStorage.js'
import IndexMethodsDictionary from './IndexMethodsDictionary.js'

export default function (Index) {
  IndexMethodsLocalStorage(Index)
  IndexMethodsDictionary(Index)
  
  // --------------------

  Index.methods.initSynth = async function () {
    this.synth = window.speechSynthesis
    //console.log(this.synth)
    
    let voices = []
    while (voices.length === 0) {
      
      await this.utils.AsyncUtils.sleep(500)
      voices = this.synth.getVoices()
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
      let pos = this.voiceNameList.indexOf(preferName[i])
      if (pos > -1) {
        voiceIndex = pos
        break
      }
    }
    this.voice = voices[voiceIndex]
    this.localConfig.voiceName = this.voice.name
  }
  Index.methods.initRecognition = function () {
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
    this.recognition.interimResults = true;
    this.recognition.maxAlternatives = 10

    this.recognition.onresult = (event) => {
      this.recognitionResult = event.results[0][0].transcript;
      //console.log(event.results)
      //let result = event.results[ event.results.length - 1 ]
      //let transcript = result[ result.length - 1 ].transcript.trim()
      //let caption = this.recognition.getCaption()
      //console.log(transcript, event.results)

      //
      //console.log(color)
      //console.log('Confidence: ' + event.results[0][0].confidence);

    }

    this.recognition.onspeechend = () => {
      this.recognition.stop();
      this.recognitionResultEnd = true
    }

    //this.recognition.start()
  }
  Index.methods.loadDemo = async function () {
    let article = await this.utils.AxiosUtils.get('./demo/article1.txt')

    //console.log(article)

    article = article.split(`“`).join('"')
    article = article.split(`”`).join('"')
    article = article.split(`\n`).join(' ')
    article = article.split(`\t`).join(' ')
    while (article.indexOf('  ') > -1) {
      article = article.split(`  `).join(' ')
    }

    this.localConfig.fieldArticle = article
  }
  Index.methods.buildSentenceList = function () {
    //console.log(this.fieldArticle)

    var tokenizer = new Tokenizer('Chuck')
    tokenizer.setEntry(this.localConfig.fieldArticle)

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
  }
  Index.methods.buildUtter = function (sentence, onend) {
    var utterThis = new SpeechSynthesisUtterance(sentence);

    utterThis.onend = onend
    utterThis.voice = this.voice;
    utterThis.pitch = Number(this.localConfig.pitch)
    utterThis.rate = Number(this.localConfig.rate)

    return utterThis
  }
  Index.methods.speak = function (sentence, i) {
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
      //console.log('SpeechSynthesisUtterance.onend');
      this.speakingIndex = null
      if (this.practiceIndex === null && this.localConfig.repeatPractice) {
        this.practice(i)
      }
    });

    this.synth.speak(utterThis);
    this.localConfig.lastPlayIndex = i
  }
  Index.methods.speakWord = async function (word, i, j) {
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
    this.localConfig.lastPlayIndex = i
  }
  Index.methods.speakDiffWord = async function (word, i, j) {
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
    this.localConfig.lastPlayIndex = i
  }
  Index.methods.practice = async function (i) {
    this.synth.cancel()
    this.practiceIndex = i
    this.diffList[i] = []
    this.practiceList[i] = null


    let words = this.filterWord(this.sentenceList[i]).split(' ')
    words = words.filter(function (item, pos) {
      return words.indexOf(item) === pos
    })
    let grammar = '#JSGF V1.0; grammar actions; public <actions> = ' + words.join(' | ') + ';';
    //console.log(grammar)
    let speechRecognitionList = new webkitSpeechGrammarList();
    speechRecognitionList.addFromString(grammar, 1);
    this.recognition.grammars = speechRecognitionList;

    this.recognitionResult = null
    this.recognitionAbort = false
    this.recognitionResultEnd = false
    this.recognition.start()
    while (this.recognitionResultEnd === false) {
      if (this.recognitionAbort === true) {
        this.practiceIndex = null
        this.recognitionResultEnd = true
        return false
      }
      //console.log(this.recognitionResult)
      this.practiceList[i] = this.recognitionResult
      await this.utils.AsyncUtils.sleep()
    }

    this.practiceList[i] = this.recognitionResult
    this.practiceIndex = null

    let diff = this.utils.DiffUtils.diffWords(this.filterWord(this.practiceList[i]), this.filterWord(this.sentenceList[i]))
    //console.log(diff)
    this.diffList[i] = diff
    this.localConfig.lastPlayIndex = i
  }
  Index.methods.filterWord = function (word) {
    return word.replace(/[^\w\s]|_/g, "")
            .replace(/\s+/g, " ")
            .toLowerCase()
            .trim()
  }
  
  
  Index.methods.scrollToLastPlay = async function () {
    if (this.localConfig.lastPlayIndex === null) {
      return false
    }

    let element = document.querySelector('#sentence' + this.localConfig.lastPlayIndex)
    while (!element) {
      await this.utils.AsyncUtils.sleep()
      //console.log('wait')
      element = document.querySelector('#sentence' + this.localConfig.lastPlayIndex)
    }

    element.scrollIntoView({block: "start", inline: "start"})
  }
}