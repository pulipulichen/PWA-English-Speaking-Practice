let config = {
  appName: 'vue-app',
  debug: {
    enableRestore: true
  },
  viewportSize: {
  },
  
  // --------------------
  
  sentenceList: [],
  practiceList: [],
  diffList: [],
  
  playingIndex: 0,

  synth: null,
  voice: null,
  voices: null,
  //voiceName: null,
  voiceNameList: [],

  //pitch: 1,
  //rate: 1,
  speakingIndex: null,
  speakingWordIndex: null,
  speakingDiffWordIndex: null,

  practiceIndex: null,

  recognition: null,
  recognitionResult: null,
  recognitionResultEnd: false,
  recognitionAbort: false,
}

import styleConfig from './styles/style.config.js'
config.styleConfig = styleConfig

//import readingConfig from './../config/reading.js'
//config.readingConfig = readingConfig

import productionConfig from './config.production.js'
if (process.env.NODE_ENV === 'production') {
  for (let name in productionConfig) {
    config[name] = productionConfig[name]
  }
}

export default config