export default function (Index) {
  Index.methods.restoreFromLocalStorage = function () {
    if (this.config.debug.enableRestore === false) {
      return false
    }

    let data = localStorage.getItem(this.config.appName)
    //console.log(data)
    if (data === null || data.startsWith('{') === false || data.endsWith('}') === false) {
      return false
    }

    try {
      data = JSON.parse(data)
    } catch (e) {
      console.error(e)
    }

    //console.log(data)
    for (let key in data) {
      this.localConfig[key] = data[key]
    }
  }
  
  Index.methods.saveToLocalStorage = function () {
    if (this.config.inited === false) {
      return false
    }

    let data = this.localConfig
    //console.log(data)
    data = JSON.stringify(data)
    //console.log(data)
    localStorage.setItem(this.config.appName, data)
  }
}