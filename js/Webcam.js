var record_screen = document.getElementById('record_screen')
var captureImage = document.getElementById('captureImage')
var start = document.getElementById('start')
var img = document.getElementById('img')
var download_img = document.getElementById('download_img')
start.onclick = () => {
  navigator.mediaDevices
    .getUserMedia({ video: true, audio: true })
    .then((streem) => {
      record_screen.srcObject = streem
    })
}
captureImage.onclick = () => {
  img.style.width = 100
  img.style.height = 100
  img.getContext('2d').drawImage(record_screen, 0, 0, img.width, img.height)
  canvas_image = img.toDataURL()
  download_img.setAttribute('href', canvas_image)
  download_img.setAttribute('download', canvas_image)
}
