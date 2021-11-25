
/* global Node, webkitSpeechRecognition, webkitSpeechGrammarList, webkitSpeechRecognitionEvent */
let Index = {
  props: ['config', 'localConfig', 'utils'],
  data () {    
    this.$i18n.locale = this.config.localConfig
    return {
      show: false,
      //fieldArticle: ``,
      
      //autoPractice: true,
//      sentenceList: [],
//      practiceList: [],
//      diffList: [],
//      
//      synth: null,
//      voice: null,
//      voices: null,
//      //voiceName: null,
//      voiceNameList: [],
//      
//      //pitch: 1,
//      //rate: 1,
//      speakingIndex: null,
//      speakingWordIndex: null,
//      speakingDiffWordIndex: null,
//      
//      practiceIndex: null,
//      
//      recognition: null,
//      recognitionResult: null,
//      recognitionResultEnd: false,
//      recognitionAbort: false,
      
      //lastPlayIndex: 5
    }
  },
  //  mounted () {},  // IndexMounted
  //  components: {}, // IndexComponents
//  computed: {
//  },
  // watch: {},  // IndexWatch
  methods: {} // IndexMethods
}

import IndexMounted from './IndexMounted.js'
IndexMounted(Index)

import IndexComponents from './IndexComponents.js'
IndexComponents(Index)

import IndexWatch from './IndexWatch.js'
IndexWatch(Index)

import IndexMethods from './IndexMethods.js'
IndexMethods(Index)

//import IndexWatchLocalConfig from './IndexWatchLocalConfig.js'
//IndexWatchLocalConfig(Index)

export default Index