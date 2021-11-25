let preferName = [
  'Google US English',
  'Google US English Male',
  'Google UK English Female',
  'Google UK English Male',
  'Chrome OS US English 1'
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

export default {
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
    
    if (!voiceName) {
      for (let i = 0; i < preferName.length; i++) {
        //console.log(preferName[i])
        if (voiceNameMap[preferName]) {
          preferVoice = voiceNameMap[preferName]
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
  startSpeak: async function (text) {
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

      utterThis.voice = preferVoice
      utterThis.pitch = Number(pitch)
      utterThis.rate = Number(rate)

      utterThis.onend = () => {
        isSpeaking = false
        //console.log('ok')
        resolve(true)
      }
      
      isSpeaking = true
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