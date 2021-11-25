export default function (Index) {
  Index.mounted = function () {
    this.restoreFromLocalStorage()
    
    //console.log('aaa')

    //this.loadDemo()
    //this.initSynth()
//    this.initRecognition()
    //this.scrollToLastPlay()

    this.config.inited = true
  }
}