export default function (Index) {
  Index.mounted = async function () {
//    this.restoreFromLocalStorage()
    
    
    //console.log(await this.utils.TransUtils.trans('待翻譯文字', 'en'))
    //console.log(await this.utils.TransUtils.trans(['喵醬愛汪醬', '汪醬愛喵醬'], 'en'))
    //console.log(await this.utils.TransUtils.trans('哈囉，你好嗎？', 'en'))

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