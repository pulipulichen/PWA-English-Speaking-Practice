export default function (AritcleModal) {
    AritcleModal.methods.buildSentenceList = function () {
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
    }
}