export default {
  create: function (soundURL) {
    //console.log(soundURL)
    
    var audio = new Audio(soundURL);
    //audio.play()
    
    return {
      play () {
        audio.currentTime = 0
        audio.play()
      },
      stop () {
        audio.pause()
        audio.currentTime = 0
      }
    }
  },
}