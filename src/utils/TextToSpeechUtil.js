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

export default {
  init: async function () {
    if (inited === true) {
      return true
    }
    while (voices.length === 0) {
      await AsyncUtils.sleep(500)
      voices = synth.getVoices()
    }

    //voiceNameList = voices.map(v => v.name)
    voiceNameMap.forEach(v => {
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
          return true
        }
      }
    }
    else {
      if (voiceNameMap[voiceName]) {
        preferVoice = voiceNameMap[voiceName]
        return true
      }
    }
   
    preferVoice = voices[0]
  },
  startSpeak: async function (text, pitch = 1, rate = 1) {
    await this.init()
    
    text = text.trim()
    if (text === '') {
      return false
    }
    
    if (isSpeaking === true) {
      synth.cancel()
    }
    
    return new Promise(({resolve}) => {
      let utterThis = new SpeechSynthesisUtterance(text);

      utterThis.onend = () => {
        isSpeaking = false
        resolve(true)
      }
      utterThis.voice = preferVoice
      utterThis.pitch = Number(pitch)
      utterThis.rate = Number(rate)

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