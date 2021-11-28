export default function (ArticleModal) {
    let chunkSentenceOptionsBasic = [
      {
        needle: ', ',
        minBefore: 5,
        minAfter: 5,
        chunkAfter: true
      },
      {
        needle: '. ',
        minBefore: 5,
        minAfter: 5,
        chunkAfter: true
      },
      {
        needle: '." ',
        minBefore: 5,
        minAfter: 5,
        chunkAfter: true
      },
      {
        needle: '; ',
        minBefore: 5,
        minAfter: 5,
        chunkAfter: true
      },
      {
        needle: '," ',
        minBefore: 5,
        minAfter: 5,
        chunkAfter: true
      },
      {
        needle: '," ',
        minBefore: 5,
        minAfter: 5,
        chunkAfter: true
      },
    ]
    let chunkSentenceOptionsClause = [
      {
        needle: ' from ',
        minBefore: 5,
        minAfter: 3,
        chunkAfter: false
      },
      {
        needle: ' for ',
        minBefore: 7,
        minAfter: 5,
        chunkAfter: false
      },
      {
        needle: ' and ',
        minBefore: 7,
        minAfter: 5,
        chunkAfter: false
      },
      {
        needle: ' following ',
        minBefore: 5,
        minAfter: 3,
        chunkAfter: false
      },
      {
        needle: ' while ',
        minBefore: 5,
        minAfter: 3,
        chunkAfter: false
      },
      {
        needle: ' to ',
        minBefore: 5,
        minAfter: 5,
        chunkAfter: false
      },
      {
        needle: ' so ',
        minBefore: 5,
        minAfter: 3,
        chunkAfter: false
      },
    ]
    
    if (!ArticleModal.computed) {
      ArticleModal.computed = {}
    }
    
    ArticleModal.computed.chunkSentenceOptions = function () {
      if (this.localConfig.setenceTokenizerStrategy === 'english-default') {
        return []
      }
      if (this.localConfig.setenceTokenizerStrategy === 'english-basic'
              || this.localConfig.setenceTokenizerStrategy === 'lines') {
        return chunkSentenceOptionsBasic
      }
      if (this.localConfig.setenceTokenizerStrategy === 'english-clause') {
        return chunkSentenceOptionsBasic.concat(chunkSentenceOptionsClause)
      }
      return []
    }
    
    ArticleModal.computed.rssSourceURL = function () {
      let url = 'https://script.google.com/macros/s/AKfycbxR-XE9EXDekhvIWUAmAZkxgXkxR4Zmw45ZvsFYhtwAaLc8s97M-7dqE2UWHw9klz9F/exec'
      if (this.localConfig.articleResource === 'english-bbc-world-news') {
        // donothing
        //this.setenceTokenizerStrategy = 'english-default'
        this.setenceTokenizerStrategy = 'lines'
      }
      
      if (this.localConfig.articleResource === 'english-cnn-world-news') {
        url = url + '?feed=' + encodeURIComponent('http://rss.cnn.com/rss/edition_world.rss')
        //this.setenceTokenizerStrategy = 'english-default'
        this.setenceTokenizerStrategy = 'lines'
      }
      if (this.localConfig.articleResource === 'english-taiwan-today') {
        url = url + '?feed=' + encodeURIComponent('http://api.taiwantoday.tw/en/rss.php?unit=2,6,10,15,18')
        this.setenceTokenizerStrategy = 'lines'
      }
      
      if (this.localConfig.articleResource === 'chinese-pts-news') {
        url = url + '?feed=' + encodeURIComponent('https://news.pts.org.tw/xml/newsfeed.xml')
        this.setenceTokenizerStrategy = 'chinese-comma'
      }
      
      return url
    }
    
}