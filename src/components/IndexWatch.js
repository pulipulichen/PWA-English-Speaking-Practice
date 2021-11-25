export default function (Index) {
  Index.watch = {
    "localConfig.fieldArticle": async function () {
      await this.utils.AsyncUtils.sleep()
      this.buildSentenceList()
    },
    recognitionAbort() {
      if (this.recognitionAbort === true) {
        this.recognition.abort()
      }
    },
    'localConfig.voiceName' () {
      let pos = this.voiceNameList.indexOf(this.localConfig.voiceName)
      if (pos === -1) {
        pos = 0
      }
      this.voice = this.voices[pos]
    }
  }
}