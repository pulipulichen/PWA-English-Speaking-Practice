export default function (Index) {
  Index.mounted = function () {
    this.restoreFromLocalStorage()

    this.loadDemo()
    this.initSynth()
    this.initRecognition()
    this.scrollToLastPlay()

    this.config.inited = true
  }
}