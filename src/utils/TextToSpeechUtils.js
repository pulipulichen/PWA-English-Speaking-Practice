let preferName = [
  'Google US English',
  'Google US English Male',
  'Google UK English Female',
  'Google UK English Male',
  'Chrome OS US English 1',
  '英文 英國',
  '英文 美國'
]

let synth = window.speechSynthesis
import AsyncUtils from './AsyncUtils.js'

let voices = []
let voiceNameList
let inited = false
let voiceNameMap = {}
let preferVoice
let isSpeaking = false

let pitch = 1
let rate = 1

const TextToSpeechUtils = {
  init: async function () {
    if (inited === true) {
      return true
    }
    while (voices.length === 0) {
      await AsyncUtils.sleep(500)
      voices = synth.getVoices()
    }

    voiceNameList = voices.map(v => v.name)
    voices.forEach(v => {
      voiceNameMap[v.name] = v
    })
    //console.log(this.voiceNameList)
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
          return preferVoice
        }
      }
    }
    else {
      if (voiceNameMap[voiceName]) {
        preferVoice = voiceNameMap[voiceName]
        return preferVoice
      }
    }
   
    preferVoice = voices[0]
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
      synth.cancel()
    }
    
    return new Promise((resolve) => {
      //console.log(resolve)
      let utterThis = new SpeechSynthesisUtterance(text);

      if (option.preferVoice) {
        utterThis.pitch = option.preferVoice
      }
      else {
        utterThis.voice = preferVoice
      }
      
      if (option.pitch) {
        utterThis.pitch = Number(option.pitch)
      }
      else {
        utterThis.pitch = Number(pitch)
      }
      
      if (option.rate) {
        utterThis.rate = Number(option.rate)
      }
      else {
        utterThis.rate = Number(rate)
      }
      

      utterThis.onend = () => {
        isSpeaking = false
        //console.log('ok')
        let endTime = (new Date()).getTime()
        resolve(endTime - startTime)
      }
      
//      utterThis.onerror = (event) => {
//        isSpeaking = false
//        console.log('onerror')
//        resolve(false)
//      }
      
      isSpeaking = true
      let startTime = (new Date()).getTime()
      synth.speak(utterThis)
    })
  },
  stopSpeak () {
    if (isSpeaking === true) {
      synth.cancel()
    }
    isSpeaking = false
  }
}

TextToSpeechUtils.init()

export default TextToSpeechUtils