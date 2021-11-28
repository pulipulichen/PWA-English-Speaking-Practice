/* global responsiveVoice */

let preferName = [
  'UK English Male',
  'UK English Female',
  'US English Male',
  'US English Female',
]

import AsyncUtils from './AsyncUtils.js'

let voices = []
let voiceNameList
let inited = false
let voiceNameMap = {}
let preferVoice
let isSpeaking = false

let pitch = 1
let rate = 1

//setTimeout(async () => {
//  responsiveVoice.setDefaultVoice('UK English Male')
//  await responsiveVoice.speak("hello world");
//  console.log('OK')
//}, 3000)

const ResponsiveVoiceTextToSpeechUtils = {
  init: async function () {
    if (inited === true) {
      return true
    }
    while (voices.length === 0) {
      await AsyncUtils.sleep(500)
      voices = responsiveVoice.getVoices()
//      console.log(voices)
    }

    voiceNameList = voices.map(v => v.name)
    voices.forEach(v => {
      voiceNameMap[v.name] = v
    })
//    console.log(voiceNameList)
    
    if (!preferVoice) {
      
      for (let i = 0; i < preferName.length; i++) {
        //console.log(preferName[i], )
        if (voiceNameMap[preferName[i]]) {
          preferVoice = voiceNameMap[preferName[i]]
//          console.log(preferVoice.name)
//          responsiveVoice.setDefaultVoice('UK English Male')
//          //return preferVoice
          break
        }
      }
    }
    
//    responsiveVoice.setDefaultVoice('UK English Male')
//    console.log(responsiveVoice)
    inited = true
  },
  getVoiceNameList: async function () {
    await this.init()
    return voiceNameList
  },
  setPreferVoice: async function (voiceName) {
    
    await this.init()
    
    //console.log(voiceName, voiceNameMap)
    if (!voiceName) {
      
      for (let i = 0; i < preferName.length; i++) {
        //console.log(preferName[i], )
        if (voiceNameMap[preferName[i]]) {
          preferVoice = voiceNameMap[preferName[i]]
          //responsiveVoice.setDefaultVoice(preferVoice.name)
          return preferVoice
        }
      }
    }
    else {
      if (voiceNameMap[voiceName]) {
        preferVoice = voiceNameMap[voiceName]
        //responsiveVoice.setDefaultVoice(preferVoice.name)
        return preferVoice
      }
    }
   
    preferVoice = voices[0]
    //console.log(preferVoice.name)
    //responsiveVoice.setDefaultVoice(preferVoice.name)
    return preferVoice
  },
  setPitch (value) {
    pitch = value
  },
  setRate (value) {
    rate = value
  },
  startSpeak: async function (text, option = {}) {
    await this.init()
    
    text = text.trim()
    if (text === '') {
      return false
    }
    
    if (isSpeaking === true) {
      responsiveVoice.cancel()
    }
    
    return new Promise(async (resolve) => {
      //console.log(resolve)
      
//      utterThis.onerror = (event) => {
//        isSpeaking = false
//        console.log('onerror')
//        resolve(false)
//      }

      if (!option.pitch) {
        option.pitch = pitch
      }
      
      if (!option.rate) {
        option.rate = rate
      }
      
      let voice = preferVoice.name
      if (option.voice) {
        voice = option.voice
      }
//      if (!option.voice) {
//        responsiveVoice.setDefaultVoice(preferVoice.name)
//      }
//      else {
//        responsiveVoice.setDefaultVoice(option.voice)
//      }
      
      isSpeaking = true
      let startTime = (new Date()).getTime()
      
      option.onend = () => {
        isSpeaking = false
        let endTime = (new Date()).getTime()
        resolve(endTime - startTime)
      }
      
      //console.log(option)
      responsiveVoice.speak(text, voice, option)
    })
  },
  stopSpeak () {
    if (isSpeaking === true) {
      responsiveVoice.cancel()
    }
    isSpeaking = false
  }
}

ResponsiveVoiceTextToSpeechUtils.init()

export default ResponsiveVoiceTextToSpeechUtils