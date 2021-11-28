export default function (list) {
  
  let previousResult = null
  list = [].concat(list)
  
  return {
    shuffleList () {
      if (list.length < 2) {
        return false
      }
      
      let currentIndex = list.length,  randomIndex;

      // While there remain elements to shuffle...
      while (currentIndex != 0) {

        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;

        // And swap it with the current element.
        [list[currentIndex], list[randomIndex]] = [
          list[randomIndex], list[currentIndex]];
      }
    },
    sampleUnduplicated () {
      this.shuffleList()
      
      let item = list[0]
      if (item === previousResult && list.length > 1) {
        item = list[1]
      }
      
      previousResult = item
      return item
    }
  }
  
}