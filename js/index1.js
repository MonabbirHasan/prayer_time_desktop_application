var today_box = document.querySelector('.today_box')
var tomorrow_box = document.querySelector('.tomorrow_box')
var title = document.querySelector('.title')
var title2 = document.querySelector('.title2')
var main_h1 = document.querySelector('.main_h1')
var main_span1 = document.querySelector('.main_span1')
var main_span2 = document.querySelector('.main_span2')
var main_span3 = document.querySelector('.main_span3')
var main_p = document.querySelector('.main_p')
var main_title = document.querySelector('.main_title')
var city_name = document.getElementById('city_name')
var search_btn = document.getElementById('search_btn')
var read_btn = document.getElementById('read_btn')
var play = document.getElementById('play')
var stop = document.getElementById('stop')
var page_title = document.querySelector('.page_title')
var loude = document.getElementById('loude')
var mute = document.getElementById('mute')
var sessions = document.querySelector('.session')
var surah_Yasin = ''
const synth = window.speechSynthesis
var audio = new Audio('./audio/surah_mariyam.mp3')
const notify = () => {
  const NOTIFY_ICON = './image/ajan_person.png'
  const NOTIFY_DESC =
    'Now This Is a Prayer Time, Please Leave Your Work, Go On The Masjid'
  const NOTIFY_TOON = new Audio('./audio/Notification.mp3')
  const NOTIFY_TITLE = 'Prayer Time'
  const NOTIFY_TIME = 5000
  setTimeout(() => {
    new Notification(NOTIFY_TITLE, {
      body: NOTIFY_DESC,
      timestamp: NOTIFY_TIME,
      icon: NOTIFY_ICON,
    })
    NOTIFY_TOON.play()
  }, 5000)
}
var CurrentTimeZone
var CurrentMinates
var CurrentSecond
var CurrentMonth
var CurrentYear
var CurrentDay
var input_value
var Dhuhr
var Fajr
var Ishaa
var Maghrib
var Asr
var Sunrise
var Original_API_BD
var ajan_audio
var city_data
function AJAN() {
  var AJAN_SRC = './audio/Azan-1.mp3'
  var ajan_audio = new Audio(AJAN_SRC)
  ajan_audio.volume = 1
  ajan_audio.playbackRate = 0.8
  ajan_audio.play()
  mute.addEventListener('click', function () {
    ajan_audio.pause()
  })
}

// function TimeOut() {

// }
setInterval(() => {
  CurrentTimeZone = new Date()
  CurrentHours = CurrentTimeZone.getHours()
  CurrentMinates = CurrentTimeZone.getMinutes()
  CurrentSecond = CurrentTimeZone.getSeconds()
  CurrentMonth = CurrentTimeZone.getMonth()
  CurrentYear = CurrentTimeZone.getFullYear()
  CurrentDay = CurrentTimeZone.getDay()
  localStorage.removeItem('alarmTime')
  var setTime = [
    {
      hour: CurrentHours,
      minut: CurrentMinates,
      second: CurrentSecond,
    },
  ]
  localStorage.setItem('alarmTime', JSON.stringify(setTime))

  if (CurrentHours >= 12) {
    sessions.innerHTML = '.PM'
  } else {
    sessions.innerHTML = '.AM'
  }
  main_h1.innerHTML = CurrentHours + ':' + CurrentMinates + ':' + CurrentSecond
}, 1000)
function ALL_EVENT() {
  mute.style.display = 'block'
}
setTimeout(() => {
  mute.style.display = 'none'
}, 300000)
function bg_image(BG_URLS) {
  var bg = document.getElementById('bg')
  bg.style.background = `url('${BG_URLS}')`
  bg.style.backgroundAttachment = 'fixed'
  bg.style.transitionDuration = 0.5 + 's'
  bg.style.scrollBehavior = 'smooth'
  bg.style.backgroundRepeat = 'no-repeat'
  bg.style.backgroundSize = 'cover'
}
window.oncontextmenu = () => {
  alert('As-salamu alaykum🥰')
}
var hr
var min
var sec

function Storage() {
  var user = document.getElementById('user')
  var title_name = document.querySelector('.title_name')
  var data = localStorage.getItem('data')
  var getAlarmData = localStorage.getItem('alarmTime')
  hr = JSON.parse(getAlarmData)[0]['hour']
  min = JSON.parse(getAlarmData)[0]['minut']
  sec = JSON.parse(getAlarmData)[0]['second']
  console.log(hr)
  if (JSON.parse(data)['city'] == '') {
    city_data = 'dhaka'
  } else {
    city_data = JSON.parse(data)['city']
  }
  user.setAttribute('src', JSON.parse(data)['image'])
  title_name.append(JSON.parse(data)['name'])
}
Storage()
function API_Call() {
  var SURAH_API_URLS = `https://api.alquran.cloud/v1/surah/1`
  fetch(SURAH_API_URLS, {
    method: 'GET',
    headers: {
      'content-type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => {
      for (const key in data.data['ayahs']) {
        surah_Yasin = data.data['ayahs'][key]['text']
        main_p.innerHTML += surah_Yasin
        // read_btn.onclick = () => {
        //   main_p.classList.toggle('full_width')
        // }
        play.onclick = () => {
          audio.volume = 0.4
          audio.playbackRate = 0.9
          audio.play()
        }
        stop.onclick = () => {
          audio.pause()
        }
      }
    })
}
API_Call()

async function NAMAJ() {
  // AJAN()
  Original_API_BD = `https://dailyprayer.abdulrcs.repl.co/api/${city_data}`

  await fetch(Original_API_BD, {
    method: 'GET',
    headers: {
      'content-type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => {
      Fajr = data.today['Fajr']
      Dhuhr = data.today['Dhuhr']
      Asr = data.today['Asr']
      Ishaa = data.today["Isha'a"]
      Maghrib = data.today['Maghrib']
      Sunrise = data.today['Sunrise']
      Sunset = data.today['sunset']

      var tmt1 = Dhuhr.split(':')
      var tmt2 = Asr.split(':')
      var tmt3 = Maghrib.split(':')
      var tmt4 = Ishaa.split(':')
      var tmt5 = Fajr.split(':')

      // if (tmt5[0] == 5 && tmt5[1] >= 15) {
      //   console.log(navigator.onLine)
      // }
      main_span1.textContent = 'Date: ' + data.date
      main_span2.textContent = 'Sunrise Today: ' + Sunrise

      if (tmt1[0] == hr && tmt1[1] >= 40) {
        setTimeout(() => {
          main_title.innerHTML = 'Dhuhr namaj time'
          main_h1.innerHTML = Dhuhr + '.' + 'AM'
          notify()
          AJAN()
          ALL_EVENT()
        })
      } else if (tmt2[0] == hr && tmt2[1] >= 40) {
        setTimeout(() => {
          main_title.innerHTML = 'Asor namaj time'
          main_h1.innerHTML = Asr + '.' + 'PM'
          page_title.textContent = 'good Afternoon'
          notify()
          AJAN()
          ALL_EVENT()
        })
      } else if (tmt3[0] == hr && tmt3[1] >= 15) {
        setTimeout(() => {
          main_title.innerHTML = 'Magrib namaj time'
          main_h1.innerHTML = Maghrib + '.' + 'PM'
          page_title.textContent = 'good evening'
          notify()
          AJAN()
          ALL_EVENT()
        })
      } else if (tmt4[0] == hr && tmt4[1] >= 35) {
        setTimeout(() => {
          main_title.innerHTML = 'Ishaa namaj time'
          main_h1.innerHTML = Ishaa + '.' + 'PM'
          page_title.textContent = 'good night'
          notify()
          AJAN()
          ALL_EVENT()
        })
      } else if (tmt5[0] == hr && tmt5[1] >= 15) {
        setTimeout(() => {
          main_title.innerHTML = 'Fajr namaj time'
          main_h1.innerHTML = Fajr + '.' + 'AM'
          page_title.textContent = 'good morning'
          notify()
          AJAN()
          ALL_EVENT()
        })
      } else {
        page_title.append('As-salamu alaykum🥰')
      }

      var real_date = data.date
      var real_city = data.city
      title.append(` (${real_city})`)
      title2.append(`  (${real_city})`)
      for (const key in data.today) {
        var today = `
                <div class="item shadow">
                    <h1>${key}</h1>
                    <h2>${data.today[key]}</h2>
                    <span>${real_date}</span><br>
                    <span>sunrise: ${data.today['Sunrise']}.am</span>
                </div>
                `
        today_box.innerHTML += today
      }
      for (const key in data.tomorrow) {
        var tomorrow = `
        <div class="item shadow">
            <h1>${key}</h1>
            <h2>${data.tomorrow[key]}</h2>
            <span>${real_date}</span><br>
            <span>sunrise: ${data.tomorrow['Sunrise']}.am</span>
        </div>
        `
        tomorrow_box.innerHTML += tomorrow
      }
    })
}
NAMAJ()
