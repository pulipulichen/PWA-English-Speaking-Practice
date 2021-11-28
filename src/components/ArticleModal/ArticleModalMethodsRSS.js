const Tokenizer = require('sentence-tokenizer');

export default function (ArticleModal) {
    
    ArticleModal.methods.downloadResource = async function () {
      //console.log(this.rssSourceURL)
      let {output} = await this.utils.AxiosUtils.get(this.rssSourceURL)
      //console.log(output)
      
      if (this.localConfig.articleResource === 'english-taiwan-today') {
        output = output.splice(0, 4)
        output = output.join('\n')
        output = output.split('\n').filter(line => {
          return (line.trim() !== '' 
                  && (line !== 'Write to Taiwan Today at ttonline@mofa.gov.tw'))
        })
        //console.log(output)
        
        this.localConfig.fieldArticle = output.join('\n')
      }
      else {
        output = output.join('\n')
        output = output.split('\n').filter(line => {
          return (line.trim() !== '')
        })
        //console.log(output)
        
        this.localConfig.fieldArticle = output.join('\n')
      }
      
      this.localConfig.playingIndex = 0
      
      this.localConfig.setenceTokenizerStrategy = this.setenceTokenizerStrategy
    }
    
//    ArticleModal.methods.loadRSS = async function () {
//      
//      let {output} = await this.utils.AxiosUtils.get(this.rssSourceURL)
//      console.log(output)
//      //console.log(result)
//      /*
//      let result = await this.utils.AxiosUtils.get('./demo/rss1.xml')
//      //console.log(result)
//      
//      let items = result.split('<item>').splice(1)
//      items.forEach(item => {
//        let title = item.slice(item.indexOf('<title>') + 7, item.indexOf('</title>'))
//        title = this.cleanValue(title)
//        if (!title.endsWith('.')) {
//          title = title + '.'
//        }
//        
//        let description = item.slice(item.indexOf('<description>') + 13, item.indexOf('</description>'))
//        description = this.cleanValue(description)
//        console.log(title)
//        console.log(description)
//      })
//      */
//      this.localConfig.fieldArticle = output.join(' ')
//      this.localConfig.playingIndex = 0
//      this.localConfig.setenceTokenizerStrategy = 'default'
//    }
}