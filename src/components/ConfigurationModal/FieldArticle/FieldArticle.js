const Tokenizer = require('sentence-tokenizer');

let FieldArticle = {
  props: ['config', 'localConfig', 'utils'],
  data() {
    this.$i18n.locale = this.localConfig.locale
    return {
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
  },
//  computed: {
//
//  },
//  mounted() {
//
//  },
  methods: {
    buildSentenceList: function () {
      //console.log(this.fieldArticle)

      var tokenizer = new Tokenizer('Chuck')
      tokenizer.setEntry(this.localConfig.fieldArticle)

      let sentences = tokenizer.getSentences()
      let sentenceList = []
      sentences.forEach(sentence => {
//        while (sentence.indexOf(', ') > -1) {
//          let pos = sentence.indexOf(', ')
//          let part = sentence.slice(0, pos + 2).trim()
//          sentenceList.push(part)
//          sentence = sentence.slice(pos + 2).trim()
//        }
        while (sentence.indexOf('. ') > -1) {
          let pos = sentence.indexOf('. ')
          let part = sentence.slice(0, pos + 2).trim()
          sentenceList.push(part)
          sentence = sentence.slice(pos + 2).trim()
        }

        if (sentence.length > 0) {
          sentenceList.push(sentence.trim())
        }
      })

      this.config.sentenceList = sentenceList
    },

    loadDemo: async function () {
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
    }
  }
}

export default FieldArticle