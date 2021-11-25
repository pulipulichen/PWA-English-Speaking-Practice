import $ from 'jquery'

//import FieldArticle from './FieldArticle/FieldArticle.vue'

let ConfigurationModal = {
  props: ['config', 'localConfig', 'utils'],
  data () {    
    this.$i18n.locale = this.localConfig.locale
    return {
      modal: null,
      isOpened: false
    }
  },
  components: {
//    FieldArticle
  },
  watch: {
    'localConfig.locale'() {
      this.$i18n.locale = this.localConfig.locale;
    },
  },
//  computed: {
//    
//  },
//  mounted() {
//    this.init()
//  },
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
      console.log('aaa')
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