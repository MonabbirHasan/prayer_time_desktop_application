const currentTime = document.querySelector('h1'),
  content = document.querySelector('.content'),
  selectMenu = document.querySelectorAll('select'),
  setAlarmBtn = document.querySelector('button')

let alarmTime,
  isAlarmSet,
  ringtone = new Audio('../audio/alarm-toon/flowing_water.mp3')

for (let i = 12; i > 0; i--) {
  i = i < 10 ? `0${i}` : i
  let option = `<option value="${i}">${i}</option>`
  selectMenu[0].firstElementChild.insertAdjacentHTML('afterend', option)
}

for (let i = 59; i >= 0; i--) {
  i = i < 10 ? `0${i}` : i
  let option = `<option value="${i}">${i}</option>`
  selectMenu[1].firstElementChild.insertAdjacentHTML('afterend', option)
}

for (let i = 2; i > 0; i--) {
  let ampm = i == 1 ? 'AM' : 'PM'
  let option = `<option value="${ampm}">${ampm}</option>`
  selectMenu[2].firstElementChild.insertAdjacentHTML('afterend', option)
}

setInterval(() => {
  let date = new Date(),
    h = date.getHours(),
    m = date.getMinutes(),
    s = date.getSeconds(),
    ampm = 'AM'
  if (h >= 12) {
    h = h - 12
    ampm = 'PM'
  }
  h = h == 0 ? (h = 12) : h
  h = h < 10 ? '0' + h : h
  m = m < 10 ? '0' + m : m
  s = s < 10 ? '0' + s : s
  currentTime.innerText = `${h}:${m}:${s} ${ampm}`

  if (alarmTime === `${h}:${m} ${ampm}`) {
    ringtone.play()
    ringtone.loop = true
  }
})

function setAlarm() {
  if (isAlarmSet) {
    alarmTime = ''
    ringtone.pause()
    content.classList.remove('disable')
    setAlarmBtn.innerText = 'Set Alarm'
    document.querySelector('img').classList.remove('img_active')
    return (isAlarmSet = false)
  }

  let time = `${selectMenu[0].value}:${selectMenu[1].value} ${selectMenu[2].value}`
  if (
    time.includes('Hour') ||
    time.includes('Minute') ||
    time.includes('AM/PM')
  ) {
    return alert('Please, select a valid time to set Alarm!')
  }
  alarmTime = time
  isAlarmSet = true
  content.classList.add('disable')
  document.querySelector('img').classList.add('img_active')
  setAlarmBtn.innerText = 'Clear Alarm'
}

setAlarmBtn.addEventListener('click', setAlarm)
//   var start = document.getElementById('start')
//   var hour = document.getElementById('hour')
//   var minutes = document.getElementById('minutes')
//   var second = document.getElementById('second')
//   var sassion = document.getElementById('sassion')
//   var select_hour = document.getElementById('select_hour')
//   var select_minutes = document.getElementById('select_minutes')
//   var select_date = document.getElementById('select_date')
//   var select_year = document.getElementById('select_year')
//   var select_sassion = document.getElementById('select_sassion')
//   var select_rington = document.getElementById('select_rington')

//   var hr
//   var min
//   var sec
//   var year
//   var date
//   setInterval(() => {
//     var current_date = new Date()
//     hr = current_date.getHours()
//     min = current_date.getMinutes()
//     sec = current_date.getSeconds()
//     year = current_date.getFullYear()
//     date = current_date.getDate()
//     if (hr >= 12) {
//       sassion.innerText = '.PM'
//     } else {
//       sassion.innerText = '.AM'
//     }
//     hour.innerText = hr + ':'
//     minutes.innerText = min + ':'
//     second.innerText = sec
//   }, 1000)
//   // localStorage.removeItem("Set_Alarm")
//   var hr_val
//   var min_val
//   var date_val
//   var year_val
//   var sassion_val
//   var rington_val
//   function Storage() {
//     start.addEventListener('click', function () {
//         var store = [
//           {
//             hour: hr_val,
//             minute: min_val,
//             date: date_val,
//             year: year_val,
//             sassion: sassion_val,
//             rington: rington_val,
//           },
//         ]
//         localStorage.setItem('Set_Alarm', JSON.stringify(store))
//       console.log('alarm is set')
//       setInterval(() => {
//         if (hr_val === hr && min_val === min) {
//           console.log('welcome')
//         }
//       })
//     })
//   }
//   Storage()
//     if (JSON.parse(localStorage.getItem('Set_Alarm'))) {
//       var data = JSON.parse(localStorage.getItem('Set_Alarm'))
//       var get_hour = data[0]['hour']
//       var get_min = data[0]['minute']
//       var get_rington = data[0]['rington']
//       if (get_hour == hr && get_min >= min) {
//         var audio = new Audio(get_rington)
//         audio.play()
//         console.log(get_rington)
//         console.log(get_min, get_hour)
//       }
//       setTimeout(() => {
//         audio.pause()
//       }, 6000)
//     }else{
//       console.log("welcome")
//     }

//   for (let i = 0; i < 60; i++) {
//     var html = ` <option value=${i}>${i}</option>`
//     select_minutes.innerHTML += html
//   }
//   for (let i = 0; i < 31; i++) {
//     var html = ` <option value=${i}>${i}</option>`
//     select_date.innerHTML += html
//   }

//   select_hour.onchange = (e) => {
//     hr_val = e.target.value
//   }
//   select_minutes.onchange = (e) => {
//     min_val = e.target.value
//   }
//   select_date.onchange = (e) => {
//     date_val = e.target.value
//   }
//   select_year.onchange = (e) => {
//     year_val = e.target.value
//   }
//   select_sassion.onchange = (e) => {
//     sassion_val = e.target.value
//   }
//   select_rington.onchange = (e) => {
//     rington_val = e.target.value
//   }
