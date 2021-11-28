const Tokenizer = require('sentence-tokenizer');

export default function (ArticleModal) {
    
    ArticleModal.methods.downloadResource = async function () {
      
    }
    
    ArticleModal.methods.loadRSS = async function () {
      let url = 'https://script.google.com/macros/s/AKfycby5WrzykN_CycYjN0x9sQlEnXO4MYrHMxK3npPA9x0ICT9KzJ_vjHhifvi7cCTaFQc_/exec'
      let {output} = await this.utils.AxiosUtils.get(url)
      //console.log(result)
      /*
      let result = await this.utils.AxiosUtils.get('./demo/rss1.xml')
      //console.log(result)
      
      let items = result.split('<item>').splice(1)
      items.forEach(item => {
        let title = item.slice(item.indexOf('<title>') + 7, item.indexOf('</title>'))
        title = this.cleanValue(title)
        if (!title.endsWith('.')) {
          title = title + '.'
        }
        
        let description = item.slice(item.indexOf('<description>') + 13, item.indexOf('</description>'))
        description = this.cleanValue(description)
        console.log(title)
        console.log(description)
      })
      */
      this.localConfig.fieldArticle = output.join(' ')
      this.localConfig.playingIndex = 0
      this.localConfig.setenceTokenizerStrategy = 'default'
    }
}