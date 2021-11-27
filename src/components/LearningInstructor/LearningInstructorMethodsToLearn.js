
export default function (LearningInstructor) {
  
  LearningInstructor.methods.stem = function (word) {
    this.stemmer.setCurrent(word)
    this.stemmer.stem()
    return this.stemmer.getCurrent()
  }
  
  LearningInstructor.methods.generateKeyName = function (word) {
    word = this.utils.DictUtils.filterWord(word)
    return 'WordToLearn:' + this.stem(word)
  }
  
  LearningInstructor.methods.recordWordsToLearn = function (word) {
    let value = this.getWordToLearnScore(word)
    
    value++
    
    if (word.length > 10) {
      value++
    }
    
    let key = this.generateKeyName(word)
    localStorage.setItem(key, value)
  }
  
  LearningInstructor.methods.getWordToLearnScore = function (word) {
    let key = this.generateKeyName(word)
    
    let value = localStorage.getItem(key)
    if (!value) {
      value = 0
    }
    else {
      value = Number(value)
    }
    
    return value
  }
  
  LearningInstructor.methods.clearWordToLearn = function (word) {
    let key = this.generateKeyName(word)
    localStorage.removeItem(key)
  }
}