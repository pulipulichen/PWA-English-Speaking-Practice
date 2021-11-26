export default function (Index) {
  Index.mounted = async function () {
//    this.restoreFromLocalStorage()
    
    //console.log('aaa')

    //this.loadDemo()
    //this.initSynth()
//    this.initRecognition()
    //this.scrollToLastPlay()
    while (!this.$refs.LearningInstructor) {
      await this.utils.AsyncUtils.sleep(100)
    }
    this.utils.LearningInstructor = this.$refs.LearningInstructor
    this.config.inited = true
  }
}