export default function (AritcleModal) {
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
    
    if (!AritcleModal.computed) {
      AritcleModal.computed = {}
    }
    
    AritcleModal.computed.chunkSentenceOptions = function () {
      if (this.localConfig.setenceTokenizerStrategy === 'default') {
        return []
      }
      if (this.localConfig.setenceTokenizerStrategy === 'basic') {
        return chunkSentenceOptionsBasic
      }
      if (this.localConfig.setenceTokenizerStrategy === 'clause') {
        return chunkSentenceOptionsBasic.concat(chunkSentenceOptionsClause)
      }
    }
}