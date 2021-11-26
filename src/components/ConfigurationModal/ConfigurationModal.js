import $ from 'jquery'

//import FieldArticle from './FieldArticle/FieldArticle.vue'

let ConfigurationModal = {
  props: ['config', 'localConfig', 'utils'],
  data () {    
    this.$i18n.locale = this.localConfig.locale
    return {
      modal: null,
      isOpened: false,
      voiceNames: [],
    }
  },
  components: {
//    FieldArticle
  },
  watch: {
    'localConfig.locale'() {
      this.$i18n.locale = this.localConfig.locale;
    },
    'localConfig.voiceName': async function () {
      await this.utils.TextToSpeechUtils.setPreferVoice(this.localConfig.voiceName)
    },
    'localConfig.pitch'() {
      this.utils.TextToSpeechUtils.setPitch(this.localConfig.pitch)
    },
  },
//  computed: {
//    
//  },
  mounted: async function () {
    //this.init()
    this.voiceNames = await this.utils.TextToSpeechUtils.getVoiceNameList()
    if (!this.localConfig.voiceName) {
      this.localConfig.voiceName = await this.utils.TextToSpeechUtils.setPreferVoice()
    }
    else {
      await this.utils.TextToSpeechUtils.setPreferVoice(this.localConfig.voiceName)
    }
    //console.log(this.voiceNames)
  },
  methods: {
    init: function () {
      this.modal = $(this.$refs.Modal)
      
      this.modal.modal({
        onShow: () => {
          //console.log('open')
          this.isOpened = true
        },
        onHidden: () => {
          this.isOpened = false
        }
      })
    },
    open: async function () {
      //console.log('aaa')
      if (!this.modal) {
        this.init()
      }
      
      this.modal.modal('show')
    },
    close () {
      this.modal.modal('hide')
    },
    
    pitchReduce () {
      this.localConfig.pitch = this.localConfig.pitch - 0.25
      if (this.localConfig.pitch < 0.5) {
        this.localConfig.pitch = 0.5
      }
    },
    pitchRise () {
      this.localConfig.pitch = this.localConfig.pitch + 0.25
      if (this.localConfig.pitch > 1.5) {
        this.localConfig.pitch = 1.5
      }
    }
  }
}

export default ConfigurationModal