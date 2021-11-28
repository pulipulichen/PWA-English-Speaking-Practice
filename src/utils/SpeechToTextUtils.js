/* global webkitSpeechRecognition, webkitSpeechGrammarList, webkitSpeechRecognitionEvent */

let inited = false
let recognition

let recognitionResultEnd = true
let isStarted = false

import AsyncUtils from './AsyncUtils.js'
import DictUtils from './DictUtils.js'

//import config from './../config.js'
const MobileDetect = require('mobile-detect')
const md = new MobileDetect(window.navigator.userAgent)

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
    
    let words = DictUtils.filterWord(grammarsString).split(' ')
    words = words.filter(function (item, pos) {
      return words.indexOf(item) === pos
    })
    
    //console.log(words)
    
    let grammar = '#JSGF V1.0; grammar actions; public <actions> = ' + words.join(' | ') + ';';
    //console.log(grammar)
    let speechRecognitionList = new webkitSpeechGrammarList();
    speechRecognitionList.addFromString(grammar, 1);
    recognition.grammars = speechRecognitionList;
  },
  startListen: async function (grammarsString, processingCallback, debug = 'false') {
    if (!grammarsString) {
      return false
    }
    
    if (debug === 'auto') {
      return this.mockupAuto(grammarsString)
    }
    if (debug === 'perfect') {
      return grammarsString
    }
    //console.log(grammarsString)
    this.init()
    
    if (isStarted === true) {
      recognition.stop()
    }
    
    this.setupGrammers(grammarsString)
    
    grammarsString = grammarsString.toLowerCase()
    
    return new Promise((resolve) => {
      isStarted = true
      let result
      let locked = false
      
      recognition.onresult = (event) => {
        if (locked === true) {
          return false
        }
        result = event.results[0][0].transcript
        
        if (result.toLowerCase() === grammarsString) {
          if (typeof(processingCallback) === 'function') {
            processingCallback(result)
          }
          recognition.stop()
          locked = true
        }
        
        if (typeof(processingCallback) === 'function') {
          processingCallback(result)
        }
      }
      
      recognition.onspeechend = async function () {
        await AsyncUtils.sleep(300)
        recognition.stop()
        isStarted = false
        resolve(result)
      }
      
      try {
        recognition.start()
      }
      catch (e) {
        // do nothing
      }
    })
  },
  stopListen () {
    this.init()
    isStarted = false
    recognition.stop()
  },
  getShuffledArr (arr) {
      const newArr = arr.slice()
      for (let i = newArr.length - 1; i > 0; i--) {
          const rand = Math.floor(Math.random() * (i + 1));
          [newArr[i], newArr[rand]] = [newArr[rand], newArr[i]];
      }
      return newArr
  },
  mockupAuto (grammarsString) {
    
    // 前面兩字一樣，後面兩字不一樣
    let words = grammarsString.split(' ')
    
    let maskedCount = Math.ceil(words.length / 3)
    let indexList = []
    for (let i = 0; i < words.length; i++) {
      indexList.push(i)
    }
    indexList = this.getShuffledArr(indexList)
    
    for (let i = 0; i < maskedCount; i++) {
      words[indexList[i]] = '[MASKED]'
    }
    
    return words.join(' ')
  }
}