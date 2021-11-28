const Tokenizer = require('sentence-tokenizer');

export default function (ArticleModal) {
    
    ArticleModal.methods.downloadResource = async function () {
      console.log(this.rssSourceURL)
      let {output} = await this.utils.AxiosUtils.get(this.rssSourceURL)
      console.log(output)
      
      if (this.localConfig.articleResource === 'englis-taiwan-today') {
        output = output.splice(0, 2)
      }
      
      this.localConfig.fieldArticle = output.join(' ')
      this.localConfig.playingIndex = 0
      
      this.localConfig.setenceTokenizerStrategy = this.setenceTokenizerStrategy
    }
    
    ArticleModal.methods.loadRSS = async function () {
      
      let {output} = await this.utils.AxiosUtils.get(this.rssSourceURL)
      console.log(output)
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