import PuliPostMessageAPI from './puli-post-message-api/puli-post-message-api.js'
let inited = false
let api
let url = 'http://localhost:8383/HTML-API-Transtration/index.html'
//let url = 'https://pulipulichen.github.io/HTML-API-Transtration/index.html'

export default {
  /**
   * 
   * @param {type} text
   * @param {type} lang zh-TW
   * @returns {result}
   */
  trans: async function (text, lang = 'en') {
    this.initTrans()
    
    //console.log(data)
    let data = {
      text,
      lang
    }
    let result = await api.send(url, data, {debug: false})
    //console.log(result)
    return result
  },
  initTrans () {
    if (inited === true) {
      return true
    }
    
    api = PuliPostMessageAPI()
    inited = true
  }
}