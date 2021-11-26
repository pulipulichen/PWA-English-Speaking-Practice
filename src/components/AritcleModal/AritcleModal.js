import $ from 'jquery'

const Tokenizer = require('sentence-tokenizer');

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
  },
//  computed: {
//  },
  mounted() {
    //console.log(this.localConfig.fieldArticle)
    if (!this.localConfig.fieldArticle
            || this.localConfig.fieldArticle === '') {
      this.loadDemo()
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
    buildSentenceList: function () {
      //console.log(this.fieldArticle)
      
      if (!this.localConfig.fieldArticle || this.localConfig.fieldArticle.trim() === '') {
        return false
      }
      
      var tokenizer = new Tokenizer('Chuck')
      tokenizer.setEntry(this.localConfig.fieldArticle.trim())
      
      let sentences = tokenizer.getSentences()
      let sentenceList = []
      
      let splitSentenceByNeedle = function (sentence, needle, needleAppend = true) {
        while (sentence.split(' ').length > 7 
                && sentence.indexOf(needle) > -1) {
          let pos = sentence.indexOf(needle)
          let part
          let otherPart
          if (needleAppend === true) {
            part = sentence.slice(0, pos + needle.length).trim()
            otherPart = sentence.slice(pos + needle.length).trim()
          }
          else {
            part = sentence.slice(0, pos).trim()
            otherPart = sentence.slice(pos).trim()
          }
          if (part.split(' ').length > 5 
                  && otherPart.split(' ').length > 3) {
            sentenceList.push(part)
            sentence = otherPart
          }
          else {
            break
          }
        }
        return sentence
      }
      //console.log(sentences)
      sentences.forEach(sentence => {
//        while (sentence.indexOf(', ') > -1) {
//          let pos = sentence.indexOf(', ')
//          let part = sentence.slice(0, pos + 2).trim()
//          sentenceList.push(part)
//          sentence = sentence.slice(pos + 2).trim()
//        }
        //console.log(sentence)
        sentence = splitSentenceByNeedle(sentence, ', ')
        sentence = splitSentenceByNeedle(sentence, '. ')
        sentence = splitSentenceByNeedle(sentence, '." ')
        sentence = splitSentenceByNeedle(sentence, '," ')
        
        sentence = splitSentenceByNeedle(sentence, ' from ', false)
        sentence = splitSentenceByNeedle(sentence, ' for ', false)
        sentence = splitSentenceByNeedle(sentence, ' following ', false)
        /*
        while (sentence.indexOf('. ') > -1) {
          let pos = sentence.indexOf('. ')
          let part = sentence.slice(0, pos + 2).trim()
          sentenceList.push(part)
          sentence = sentence.slice(pos + 2).trim()
        }
        */
        if (sentence.length > 0) {
          sentenceList.push(sentence.trim())
        }
      })
      //console.log(sentenceList)
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

export default AritcleModal