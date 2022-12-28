var play_audio = document.querySelectorAll('.play_audio')
var volume_range = document.querySelectorAll('.volume_range')
var mut_volume = document.querySelectorAll('.mut_volume')

for (let i = 0; i < play_audio.length; i++) {
  play_audio[i].addEventListener('click', function () {
    play_audio[i].classList.toggle('active')
    var audio_obj = new Audio()
    var AUDIO_SRC = play_audio[i].getAttribute('data-audio')
    var audio_obj = new Audio(AUDIO_SRC)
    audio_obj.volume = 0.2

    for (let j = 0; j < volume_range.length; j++) {
      volume_range[j].addEventListener('change', function () {
        audio_obj.volume = volume_range[j].value / 100
      })
    }
    for (let k = 0; k < mut_volume.length; k++) {
      mut_volume[k].addEventListener("click",function(){
         audio_obj.pause()
        play_audio[i].classList.remove('active')
      })
    }
    audio_obj.play()
    console.log(AUDIO_SRC)
  })
}
