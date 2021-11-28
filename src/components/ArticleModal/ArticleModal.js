import $ from 'jquery'

let ArticleModal = {
  props: ['config', 'localConfig', 'utils'],
  data () {    
    this.$i18n.locale = this.localConfig.locale
    return {
      modal: null,
      isOpened: false,
      setenceTokenizerStrategy: 'english-default'
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
  //computed: {}, // ArticleModalComputed.js
  mounted() {
    //this.loadRSS()
    //console.log(this.localConfig.fieldArticle)
    if (!this.localConfig.fieldArticle
            || this.localConfig.fieldArticle === '') {
      //this.loadDemo()
      this.downloadResource()
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

import ArticleModalMethodsSentence from './ArticleModalMethodsSentence.js'
ArticleModalMethodsSentence(ArticleModal)

import ArticleModalMethodsRSS from './ArticleModalMethodsRSS.js'
ArticleModalMethodsRSS(ArticleModal)

import ArticleModalComputed from './ArticleModalComputed.js'
ArticleModalComputed(ArticleModal)

export default ArticleModal