/* global Node */
let Index = {
  props: ['config', 'localConfig', 'utils'],
  data () {    
    this.$i18n.locale = this.config.localConfig
    return {
      fieldArticle: `布丁布丁吃什麼？`,
    }
  },
//  components: {
//  },
  computed: {
    
  },
//  watch: {
//  },
  methods: {
    
  }
}

export default Index