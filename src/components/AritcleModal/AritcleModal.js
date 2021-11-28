import $ from 'jquery'

let AritcleModal = {
  props: ['config', 'localConfig', 'utils'],
  data () {    
    this.$i18n.locale = this.localConfig.locale
    return {
      modal: null,
      isOpened: false
    }
  },
  watch: {
    'localConfig.locale'() {
      this.$i18n.locale = this.localConfig.locale;
    },
    "localConfig.fieldArticle": async function () {
      await this.utils.AsyncUtils.sleep()
      this.buildSentenceList()
    },
    "localConfig.setenceTokenizerStrategy": async function () {
      await this.utils.AsyncUtils.sleep()
      this.buildSentenceList()
    },
  },
  //computed: {}, // AritcleModalComputed.js
  mounted() {
    //this.loadRSS()
    //console.log(this.localConfig.fieldArticle)
    if (!this.localConfig.fieldArticle
            || this.localConfig.fieldArticle === '') {
      //this.loadDemo()
      this.loadRSS()
    }
    else {
      this.buildSentenceList()
    }
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
      if (!this.modal) {
        this.init()
      }
      
      this.modal.modal('show')
    },
    close () {
      this.modal.modal('hide')
    },

    cleanValue (text) {
      while (text.startsWith('<![CDATA[')
        && text.endsWith(']]>')) {
          text = text.slice(9, -3)
      }

      text = text.replace(/<[^>]*>?/gm, '');

      return text.trim()
    },
    

    loadDemo: async function () {
      //let rss = await this.utils.AxiosUtils.get('http://rss.cnn.com/rss/edition.rss')
      //console.log(rss)
      let article = await this.utils.AxiosUtils.get('./demo/article1.txt')

      //console.log(article)

      article = article.split(`“`).join('"')
      article = article.split(`”`).join('"')
      article = article.split(`\n`).join(' ')
      article = article.split(`\t`).join(' ')
      while (article.indexOf('  ') > -1) {
        article = article.split(`  `).join(' ')
      }

      this.localConfig.fieldArticle = article
      
      this.localConfig.playingIndex = 0
      this.localConfig.setenceTokenizerStrategy = 'clause'
    }
  }
}

import AritcleModalMethodsSentence from './AritcleModalMethodsSentence.js'
AritcleModalMethodsSentence(AritcleModal)

import AritcleModalMethodsRSS from './AritcleModalMethodsRSS.js'
AritcleModalMethodsRSS(AritcleModal)

import AritcleModalComputed from './AritcleModalComputed.js'
AritcleModalComputed(AritcleModal)

export default AritcleModal