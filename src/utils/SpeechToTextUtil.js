/* global webkitSpeechRecognition, webkitSpeechGrammarList, webkitSpeechRecognitionEvent */

let inited = false
let recognition

let recognitionResultEnd = true
let isStarted = false

import DictUtil from './DictUtil.js'

export default {
  init () {
    if (inited === true) {
      return true
    }
    
    //console.log(1)
    var SpeechRecognition = SpeechRecognition || webkitSpeechRecognition
    var SpeechGrammarList = SpeechGrammarList || webkitSpeechGrammarList
    var SpeechRecognitionEvent = SpeechRecognitionEvent || webkitSpeechRecognitionEvent

    recognition = new SpeechRecognition();

    recognition.continuous = false;
    recognition.lang = 'en-US';
    recognition.interimResults = true;
    recognition.maxAlternatives = 10

    
    inited = true
  },
  setupGrammers (grammarsString) {
    if (!grammarsString) {
      let speechRecognitionList = new webkitSpeechGrammarList();
      recognition.grammars = speechRecognitionList
      return false
    }
    
    let words = DictUtil.filterWord(grammarsString).split(' ')
    words = words.filter(function (item, pos) {
      return words.indexOf(item) === pos
    })
    
    let grammar = '#JSGF V1.0; grammar actions; public <actions> = ' + words.join(' | ') + ';';
    //console.log(grammar)
    let speechRecognitionList = new webkitSpeechGrammarList();
    speechRecognitionList.addFromString(grammar, 1);
    recognition.grammars = speechRecognitionList;
  },
  startListen: async function (grammarsString) {
    this.init()
    
    if (isStarted === true) {
      recognition.stop()
    }
    
    this.setupGrammers(grammarsString)
    
    return new Promise((resolve) => {
      isStarted = true
      let result
      recognition.onresult = (event) => {
        result = event.results[0][0].transcript
      }
      
      recognition.onspeechend = () => {
        recognition.stop()
        isStarted = false
        resolve(result)
      }
    })
  },
  stopListen () {
    this.init()
    isStarted = false
    recognition.stop()
  }
}