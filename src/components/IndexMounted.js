export default function (Index) {
  Index.mounted = async function () {
//    this.restoreFromLocalStorage()
    
    let api = this.utils.PuliPostMessageAPI()
    let url = 'http://localhost:8383/HTML-API-Transtration/index.html'
    let data = {
      text: '待翻譯的文字',
      lang: 'en'
    }
    console.log(data)
    let result = await api.send(url, data)
    console.log(result)
    
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