export default function (Index) {

  for (let key in Index.localConfig) {
    //console.log(key)
    Index.watch['localConfig.' + key] = function () {
      this.saveToLocalStorage()
    }
  }
}