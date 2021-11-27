export default {
  create: function (soundURL) {
    //console.log(soundURL)
    
    var audio = new Audio(soundURL);
    //audio.play()
    
    return {
      play: async function () {
        audio.currentTime = 0
        try {
          await audio.play()
        }
        catch (e) {}
      },
      stop () {
        audio.pause()
        audio.currentTime = 0
      }
    }
  },
}