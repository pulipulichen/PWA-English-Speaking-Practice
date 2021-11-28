const Tokenizer = require('sentence-tokenizer');

export default function (ArticleModal) {
    
    ArticleModal.methods.chunkSentence = function (sentence) {
      let output = []
      
      //output.push(sentence)
      let checking = true
      while (checking) {
        if (sentence.length <= 7) {
          break
        }
        
        for (let i = 0; i < this.chunkSentenceOptions.length; i++) {
          let {needle, minBefore = 5, minAfter = 3, chunkAfter = false} = this.chunkSentenceOptions[i]
          
          if (!needle || sentence.indexOf(needle) === -1) {
            continue
          }
          
          let pos = sentence.indexOf(needle)
          
          let part
          let otherPart
          if (chunkAfter === true) {
            part = sentence.slice(0, pos + needle.length).trim()
            otherPart = sentence.slice(pos + needle.length).trim()
          }
          else {
            part = sentence.slice(0, pos).trim()
            otherPart = sentence.slice(pos).trim()
          }
          
          if (part.split(' ').length >= minBefore
                  && otherPart.split(' ').length >= minAfter) {
            
            output = output.concat(this.chunkSentence(part))
            sentence = otherPart
            i = 0
            continue
          }
          else {
            continue
          }
        }
        
        checking = false
      }
      
      if (sentence !== '') {
        output.push(sentence)
      }
      
      //console.log(sentence)
      
      return output
    }
    
    ArticleModal.methods.buildSentenceList = function () {
      //console.log(this.fieldArticle)
      
      if (!this.localConfig.fieldArticle || this.localConfig.fieldArticle.trim() === '') {
        return false
      }
      
      //console.log(this.localConfig.setenceTokenizerStrategy)
      if (this.localConfig.setenceTokenizerStrategy === 'lines') {
        let lines = this.localConfig.fieldArticle.trim().split('\n')
        let output = []
        lines.forEach(line => {
          line = line.trim()
          if (line === '') {
            return false
            
          }
          this.chunkSentence(line).forEach(s => {
            output.push(s)
          })
        })
        //console.log(output);
        this.config.sentenceList = output
        return output
      }
      
      var tokenizer = new Tokenizer('Chuck')
      tokenizer.setEntry(this.localConfig.fieldArticle.trim())
      
      let sentences = tokenizer.getSentences()
      let sentenceList = []
      
      // ----------------------------
      /*
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
      */
      //console.log(sentences)
      sentences.forEach(sentence => {
//        while (sentence.indexOf(', ') > -1) {
//          let pos = sentence.indexOf(', ')
//          let part = sentence.slice(0, pos + 2).trim()
//          sentenceList.push(part)
//          sentence = sentence.slice(pos + 2).trim()
//        }
        //console.log(sentence)
        /*
        sentence = splitSentenceByNeedle(sentence, ', ')
        sentence = splitSentenceByNeedle(sentence, '. ')
        sentence = splitSentenceByNeedle(sentence, '." ')
        sentence = splitSentenceByNeedle(sentence, '," ')
        
        sentence = splitSentenceByNeedle(sentence, ' from ', false)
        sentence = splitSentenceByNeedle(sentence, ' for ', false)
        sentence = splitSentenceByNeedle(sentence, ' following ', false)
        */
        /*
        while (sentence.indexOf('. ') > -1) {
          let pos = sentence.indexOf('. ')
          let part = sentence.slice(0, pos + 2).trim()
          sentenceList.push(part)
          sentence = sentence.slice(pos + 2).trim()
        }
        */
       /*
        if (sentence.length > 0) {
          sentenceList.push(sentence.trim())
        }
        */
        this.chunkSentence(sentence).forEach(s => {
          sentenceList.push(s)
        })
      })
      
      // ----------------------------
      
//      let debugSentenceList = sentenceList
//      debugSentenceList = debugSentenceList.filter(sentence => {
//        return sentence.split(' ').length > 10
//      })
//      console.log(debugSentenceList.join('\n'))
//      console.log(debugSentenceList.length)
      
      // ----------------------------
      
      this.config.sentenceList = sentenceList
    }
}