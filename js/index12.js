var feels = document.querySelector('.feels')
var temp_min = document.querySelector('.temp_min')
var temp_max = document.querySelector('.temp_max')
var pressure = document.querySelector('.pressure')
var humidity = document.querySelector('.humidity')
var speed = document.querySelector('.speed')
var cuntry = document.querySelector('.cuntry')
var sunrise = document.querySelector('.sunrise')
var sunset = document.querySelector('.sunset')
var timezon = document.querySelector('.timezon')
var code = document.querySelector('.code')
var main_tmp = document.querySelector('.main_tmp')
var real_date = document.querySelector('.real-date')

var API_KEYS = '7e6041da377602e73a760e4e4a598732'
var API_URLS = `https://api.openweathermap.org/data/2.5/weather?q=mymensingh&appid=${API_KEYS}&units=metric`

async function GetWeather() {
  await fetch(API_URLS, {
    method: 'GET',
    headers: {
      'content-type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => {
      console.log(data)
      console.log(data['main'])
      feels.textContent =
        'feels_like' + ' : ' + ' ' + data['main']['feels_like']
      humidity.innerHTML =
        'humidity' + ' : ' + ' ' + Math.floor(data['main']['humidity'])
      pressure.innerHTML = 'pressure' + ' : ' + ' ' + data['main']['pressure']
      main_tmp.innerHTML =
        'temp' +
        ' : ' +
        ' ' +
        Math.floor(data['main']['temp']) +
        ' . ' +
        'celsius '
      temp_min.innerHTML = 'temp_min' + ' : ' + ' ' + data['main']['temp_min']
      temp_max.innerHTML = 'temp_max' + ' : ' + ' ' + data['main']['temp_max']
      cuntry.innerHTML = 'country' + ' : ' + ' ' + data['sys']['country']
      sunrise.innerHTML = 'sunrise' + ' : ' + ' ' + data['sys']['sunrise']
      sunset.innerHTML = 'sunset' + ' : ' + ' ' + data['sys']['sunset']
      speed.innerHTML = 'speed' + ' : ' + ' ' + data['wind']['speed']
      code.innerHTML = 'cod' + ' : ' + ' ' + data['cod']

      setInterval(() => {
        var date = new Date()
        var hr = date.getHours()
        var min = date.getMinutes()
        var sec = date.getSeconds()
        var year = date.getFullYear()
        var month = date.getMonth()
        var d = date.getDate()
        real_date.innerHTML = d + '-' + month + '-' + year
        var sassion = ''
        if (hr >= 12) {
          sassion = 'PM'
        } else {
          sassion = 'AM'
        }
        timezon.innerHTML =
          data['name'] + ' ' + hr + ':' + min + ':' + sec + '.' + sassion
      }, 1000)
    })
}
GetWeather()
