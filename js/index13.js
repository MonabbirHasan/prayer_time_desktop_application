var btn = document.getElementById('btn')
var username = document.getElementById('first_name')
var email = document.getElementById('email')
var phone = document.getElementById('phone')
var city = document.getElementById('city')
var password = document.getElementById('password')
var upload = document.getElementById('file')
var user_img = document.getElementById('user_img')
var open_Camera = document.getElementById('open_Camera')
var video = document.getElementById('video')
var canvas = document.getElementById('canvas')
var edit_panel = document.querySelector('.edit_panel')
var take_image = document.getElementById('take_image')

var name_error = document.querySelector('.name_error')
var email_error = document.querySelector('.email_error')
var phone_error = document.querySelector('.phone_error')
var city_error = document.querySelector('.city_error')
var pass_error = document.querySelector('.pass_error')

var img_url
upload.onchange = (e) => {
  const picker = new FileReader()
  picker.readAsDataURL(e.target.files[0])
  document.getElementById('file_name').innerHTML =
    '<b>file_name</b> : ' + ' ' + e.target.files[0].name
  document.getElementById('file_size').innerHTML =
    '<b>file_size</b> : ' + ' ' + e.target.files[0].size
  document.getElementById('file_type').innerHTML =
    '<b>file_type</b> : ' + ' ' + e.target.files[0].type
  document.getElementById('file_path').innerHTML =
    '<b>file_path</b> : ' + ' ' + e.target.files[0].path
  picker.addEventListener('load', function (event) {
    console.log(event.target.result)
    user_img.setAttribute('src', event.target.result)
    img_url = event.target.result
  })
}
var canvas_image
open_Camera.onclick = () => {
  navigator.mediaDevices.getUserMedia({ video: true }).then((strim) => {
    video.srcObject = strim
    take_image.onclick = () => {
      canvas.style.width = 100
      canvas.style.height = 100
      canvas
        .getContext('2d')
        .drawImage(video, 0, 0, canvas.width, canvas.height)
      canvas_image = canvas.toDataURL()
      user_img.setAttribute('src', canvas_image)
    }
  })
}
btn.addEventListener('click', function () {
  if (username.value == '') {
    name_error.textContent = 'name is emty'
  } else if (email.value == '') {
    email_error.textContent = 'email is emty'
  } else if (phone.value == '') {
    phone_error.textContent = 'phone is emty'
  } else if (password.value == 'name is emty') {
    pass_error.textContent = 'password is emty'
  } else if (city.value == '') {
    email_error.textContent = 'city is emty'
  } else {
    document.querySelector('.success').textContent = 'welcome to our app'
    console.log(username.value)
    console.log(email.value)
    console.log(phone.value)
    console.log(password.value)
    console.log(canvas_image)
    console.log(city.value)
    username.style.textTransform = 'lowercase'
    email.style.textTransform = 'lowercase'
    phone.style.textTransform = 'lowercase'
    password.style.textTransform = 'lowercase'
    city.style.textTransform = 'lowercase'
    var data = {
      name: username.value,
      email: email.value,
      phone: phone.value,
      city: city.value,
      password: password.value,
      image: img_url,
    }
    localStorage.clear()
    localStorage.setItem('data', JSON.stringify(data))
    console.log(localStorage.getItem('data'))
    username.value = ''
    email.value = ''
    phone.value = ''
    password.value = ''
    city.value = ''
  }
})
