var HADICH_API_URLS_1 = `https://alquranbd.com/api/hadith/bukhari/1`
var HADICH_API_URLS_2 = `https://alquranbd.com/api/hadith/bukhari/2`
var HADICH_API_URLS_3 = `https://alquranbd.com/api/hadith/bukhari/3`
var HADICH_API_URLS_4 = `https://alquranbd.com/api/hadith/bukhari/4`
var HADICH_API_URLS_5 = `https://alquranbd.com/api/hadith/bukhari/5`
var HADICH_API_URLS_6 = `https://alquranbd.com/api/hadith/bukhari/6`
var HADICH_API_URLS_7 = `https://alquranbd.com/api/hadith/bukhari/7`
var HADICH_API_URLS_8 = `https://alquranbd.com/api/hadith/bukhari/8`
var HADICH_API_URLS_9 = `https://alquranbd.com/api/hadith/bukhari/9`
var HADICH_API_URLS_10 = `https://alquranbd.com/api/hadith/bukhari/10`
var HADICH_API_URLS_11 = `https://alquranbd.com/api/hadith/bukhari/11`
var HADICH_API_URLS_12 = `https://alquranbd.com/api/hadith/bukhari/12`
var HADICH_API_URLS_13 = `https://alquranbd.com/api/hadith/bukhari/13`
var HADICH_API_URLS_14 = `https://alquranbd.com/api/hadith/bukhari/14`
var HADICH_API_URLS_15 = `https://alquranbd.com/api/hadith/bukhari/15`
var HADICH_API_URLS_16 = `https://alquranbd.com/api/hadith/bukhari/16`
var HADICH_API_URLS_17 = `https://alquranbd.com/api/hadith/bukhari/17`
var HADICH_API_URLS_18 = `https://alquranbd.com/api/hadith/bukhari/18`
var HADICH_API_URLS_19 = `https://alquranbd.com/api/hadith/bukhari/19`
var HADICH_API_URLS_20 = `https://alquranbd.com/api/hadith/bukhari/20`
var HADICH_API_URLS_21 = `https://alquranbd.com/api/hadith/bukhari/21`
var HADICH_API_URLS_22 = `https://alquranbd.com/api/hadith/bukhari/22`
var HADICH_API_URLS_23 = `https://alquranbd.com/api/hadith/bukhari/23`
var HADICH_API_URLS_24 = `https://alquranbd.com/api/hadith/bukhari/24`
var HADICH_API_URLS_25 = `https://alquranbd.com/api/hadith/bukhari/25`
var HADICH_API_URLS_26 = `https://alquranbd.com/api/hadith/bukhari/26`
var HADICH_API_URLS_27 = `https://alquranbd.com/api/hadith/bukhari/27`
var HADICH_API_URLS_28 = `https://alquranbd.com/api/hadith/bukhari/28`
var HADICH_API_URLS_29 = `https://alquranbd.com/api/hadith/bukhari/29`
var HADICH_API_URLS_30 = `https://alquranbd.com/api/hadith/bukhari/30`
var HADICH_API_URLS_31 = `https://alquranbd.com/api/hadith/bukhari/31`
var HADICH_API_URLS_32 = `https://alquranbd.com/api/hadith/bukhari/32`
var HADICH_API_URLS_33 = `https://alquranbd.com/api/hadith/bukhari/33`
var HADICH_API_URLS_34 = `https://alquranbd.com/api/hadith/bukhari/34`
var HADICH_API_URLS_35 = `https://alquranbd.com/api/hadith/bukhari/35`
var HADICH_API_URLS_36 = `https://alquranbd.com/api/hadith/bukhari/36`
var HADICH_API_URLS_37 = `https://alquranbd.com/api/hadith/bukhari/37`
var HADICH_API_URLS_38 = `https://alquranbd.com/api/hadith/bukhari/38`
var HADICH_API_URLS_39 = `https://alquranbd.com/api/hadith/bukhari/39`
var HADICH_API_URLS_40 = `https://alquranbd.com/api/hadith/bukhari/40`
var HADICH_API_URLS_41 = `https://alquranbd.com/api/hadith/bukhari/41`
var HADICH_API_URLS_42 = `https://alquranbd.com/api/hadith/bukhari/42`
var HADICH_API_URLS_43 = `https://alquranbd.com/api/hadith/bukhari/43`
var HADICH_API_URLS_44 = `https://alquranbd.com/api/hadith/bukhari/44`
var HADICH_API_URLS_45 = `https://alquranbd.com/api/hadith/bukhari/45`
var HADICH_API_URLS_46 = `https://alquranbd.com/api/hadith/bukhari/46`
var HADICH_API_URLS_47 = `https://alquranbd.com/api/hadith/bukhari/47`
var HADICH_API_URLS_48 = `https://alquranbd.com/api/hadith/bukhari/48`
var HADICH_API_URLS_49 = `https://alquranbd.com/api/hadith/bukhari/49`
var HADICH_API_URLS_50 = `https://alquranbd.com/api/hadith/bukhari/50`
var HADICH_API_URLS_51 = `https://alquranbd.com/api/hadith/bukhari/51`
var HADICH_API_URLS_52 = `https://alquranbd.com/api/hadith/bukhari/52`

var topic = document.querySelector('.topic')
var hadithNo = document.querySelector('.hadithNo')
var thesequence = document.querySelector('.thesequence')
var chapterId = document.querySelector('.chapterId')
var bookId = document.querySelector('.bookId')
var sectionId = document.querySelector('.sectionId')

var arabic = document.querySelector('.arabic')
var bangla = document.querySelector('.bangla')
var english = document.querySelector('.english')
var content = document.querySelector('.content')

async function Get1() {
  await fetch(HADICH_API_URLS_1, {
    method: 'GET',
    headers: {
      'content-type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => {
      for (let i = 0; i < JSON.parse(JSON.stringify(data)).length; i++) {
        // console.log(JSON.parse(JSON.stringify(data))[i]['hadithArabic'])
        // console.log(JSON.parse(JSON.stringify(data))[i]['hadithEnglish'])
        // console.log(JSON.parse(JSON.stringify(data))[i]['hadithBengali'])
        // console.log(JSON.parse(JSON.stringify(data))[i]['hadithNo'])
        // console.log(JSON.parse(JSON.stringify(data))[i]['thesequence'])
        // console.log(JSON.parse(JSON.stringify(data))[i]['chapterId'])
        // console.log(JSON.parse(JSON.stringify(data))[i]['bookId'])
        // console.log(JSON.parse(JSON.stringify(data))[i]['sectionId'])
        // console.log(JSON.parse(JSON.stringify(data))[i]['topicName'])

        var HadithArabic = JSON.parse(JSON.stringify(data))[i]['hadithArabic']
        var HadithEnglish = JSON.parse(JSON.stringify(data))[i]['hadithEnglish']
        var HadithBengali = JSON.parse(JSON.stringify(data))[i]['hadithBengali']

        var Hadic_Topic = JSON.parse(JSON.stringify(data))[i]['topicName']
        var HadithNo = JSON.parse(JSON.stringify(data))[i]['hadithNo']
        var Thesequence = JSON.parse(JSON.stringify(data))[i]['thesequence']
        var ChapterId = JSON.parse(JSON.stringify(data))[i]['chapterId']
        var BookId = JSON.parse(JSON.stringify(data))[i]['bookId']
        var SectionId = JSON.parse(JSON.stringify(data))[i]['sectionId']

        topic.textContent = 'HADICH TOPIC: ' + Hadic_Topic
        hadithNo.textContent = 'HadithNo' + ' : ' + HadithNo
        thesequence.textContent = 'Thesequence' + ' : ' + Thesequence
        chapterId.textContent = 'ChapterId' + ' : ' + ChapterId
        bookId.textContent = 'BookId' + ' : ' + BookId
        sectionId.textContent = 'SectionId' + ' : ' + SectionId

        arabic.textContent = HadithArabic
        bangla.textContent = HadithBengali
        english.textContent = HadithEnglish
      }
    })
  await fetch(HADICH_API_URLS_2, {
    method: 'GET',
    headers: {
      'content-type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => {
      for (let i = 0; i < JSON.parse(JSON.stringify(data)).length; i++) {
        var HadithArabic = JSON.parse(JSON.stringify(data))[i]['hadithArabic']
        var HadithEnglish = JSON.parse(JSON.stringify(data))[i]['hadithEnglish']
        var HadithBengali = JSON.parse(JSON.stringify(data))[i]['hadithBengali']

        var Hadic_Topic = JSON.parse(JSON.stringify(data))[i]['topicName']
        var HadithNo = JSON.parse(JSON.stringify(data))[i]['hadithNo']
        var Thesequence = JSON.parse(JSON.stringify(data))[i]['thesequence']
        var ChapterId = JSON.parse(JSON.stringify(data))[i]['chapterId']
        var BookId = JSON.parse(JSON.stringify(data))[i]['bookId']
        var SectionId = JSON.parse(JSON.stringify(data))[i]['sectionId']

        var html = `
        <div class="item">
            <h3 class="topic">HADICH TOPIC: ${Hadic_Topic}</h3>
           <div class="d-flex details_hadich">
           <p class="text-capitalize py-2 my-2 details hadithNo">HadithNo: ${HadithNo}</p>
           <p class="text-capitalize py-2 my-2 details thesequence">Thesequence: 
             ${Thesequence}
           </p>
           <p class="text-capitalize py-2 my-2 details chapterId">ChapterId: ${ChapterId}</p>
           <p class="text-capitalize py-2 my-2 details bookId">BookId: ${BookId}</p>
           <p class="text-capitalize py-2 my-2 details sectionId">SectionId: ${SectionId}</p>
           </div>
            <p class="desch arabic">${HadithArabic}</p>
            <p class="desch bangla">${HadithBengali}</p>
            <p class="desch english">${HadithEnglish}</p>
          </div>
        `
        content.innerHTML += html
      }
    })
  await fetch(HADICH_API_URLS_3, {
    method: 'GET',
    headers: {
      'content-type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => {
      for (let i = 0; i < JSON.parse(JSON.stringify(data)).length; i++) {
        var HadithArabic = JSON.parse(JSON.stringify(data))[i]['hadithArabic']
        var HadithEnglish = JSON.parse(JSON.stringify(data))[i]['hadithEnglish']
        var HadithBengali = JSON.parse(JSON.stringify(data))[i]['hadithBengali']

        var Hadic_Topic = JSON.parse(JSON.stringify(data))[i]['topicName']
        var HadithNo = JSON.parse(JSON.stringify(data))[i]['hadithNo']
        var Thesequence = JSON.parse(JSON.stringify(data))[i]['thesequence']
        var ChapterId = JSON.parse(JSON.stringify(data))[i]['chapterId']
        var BookId = JSON.parse(JSON.stringify(data))[i]['bookId']
        var SectionId = JSON.parse(JSON.stringify(data))[i]['sectionId']

        var html = `
        <div class="item">
            <h3 class="topic">HADICH TOPIC: ${Hadic_Topic}</h3>
            <p class="text-capitalize py-2 my-2 details hadithNo">HadithNo: ${HadithNo}</p>
            <p class="text-capitalize py-2 my-2 details thesequence">Thesequence: 
              ${Thesequence}
            </p>
            <p class="text-capitalize py-2 my-2 details chapterId">ChapterId: ${ChapterId}</p>
            <p class="text-capitalize py-2 my-2 details bookId">BookId: ${BookId}</p>
            <p class="text-capitalize py-2 my-2 details sectionId">SectionId: ${SectionId}</p>
            <p class="desch arabic">${HadithArabic}</p>
            <p class="desch bangla">${HadithBengali}</p>
            <p class="desch english">${HadithEnglish}</p>
          </div>
        `
        content.innerHTML += html
      }
    })
  await fetch(HADICH_API_URLS_4, {
    method: 'GET',
    headers: {
      'content-type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => {
      for (let i = 0; i < JSON.parse(JSON.stringify(data)).length; i++) {
        var HadithArabic = JSON.parse(JSON.stringify(data))[i]['hadithArabic']
        var HadithEnglish = JSON.parse(JSON.stringify(data))[i]['hadithEnglish']
        var HadithBengali = JSON.parse(JSON.stringify(data))[i]['hadithBengali']

        var Hadic_Topic = JSON.parse(JSON.stringify(data))[i]['topicName']
        var HadithNo = JSON.parse(JSON.stringify(data))[i]['hadithNo']
        var Thesequence = JSON.parse(JSON.stringify(data))[i]['thesequence']
        var ChapterId = JSON.parse(JSON.stringify(data))[i]['chapterId']
        var BookId = JSON.parse(JSON.stringify(data))[i]['bookId']
        var SectionId = JSON.parse(JSON.stringify(data))[i]['sectionId']

        var html = `
        <div class="item">
            <h3 class="topic">HADICH TOPIC: ${Hadic_Topic}</h3>
            <p class="text-capitalize py-2 my-2 details hadithNo">HadithNo: ${HadithNo}</p>
            <p class="text-capitalize py-2 my-2 details thesequence">Thesequence: 
              ${Thesequence}
            </p>
            <p class="text-capitalize py-2 my-2 details chapterId">ChapterId: ${ChapterId}</p>
            <p class="text-capitalize py-2 my-2 details bookId">BookId: ${BookId}</p>
            <p class="text-capitalize py-2 my-2 details sectionId">SectionId: ${SectionId}</p>
            <p class="desch arabic">${HadithArabic}</p>
            <p class="desch bangla">${HadithBengali}</p>
            <p class="desch english">${HadithEnglish}</p>
          </div>
        `
        content.innerHTML += html
      }
    })
  await fetch(HADICH_API_URLS_5, {
    method: 'GET',
    headers: {
      'content-type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => {
      for (let i = 0; i < JSON.parse(JSON.stringify(data)).length; i++) {
        var HadithArabic = JSON.parse(JSON.stringify(data))[i]['hadithArabic']
        var HadithEnglish = JSON.parse(JSON.stringify(data))[i]['hadithEnglish']
        var HadithBengali = JSON.parse(JSON.stringify(data))[i]['hadithBengali']

        var Hadic_Topic = JSON.parse(JSON.stringify(data))[i]['topicName']
        var HadithNo = JSON.parse(JSON.stringify(data))[i]['hadithNo']
        var Thesequence = JSON.parse(JSON.stringify(data))[i]['thesequence']
        var ChapterId = JSON.parse(JSON.stringify(data))[i]['chapterId']
        var BookId = JSON.parse(JSON.stringify(data))[i]['bookId']
        var SectionId = JSON.parse(JSON.stringify(data))[i]['sectionId']

        var html = `
        <div class="item">
            <h3 class="topic">HADICH TOPIC: ${Hadic_Topic}</h3>
            <p class="text-capitalize py-2 my-2 details hadithNo">HadithNo: ${HadithNo}</p>
            <p class="text-capitalize py-2 my-2 details thesequence">Thesequence: 
              ${Thesequence}
            </p>
            <p class="text-capitalize py-2 my-2 details chapterId">ChapterId: ${ChapterId}</p>
            <p class="text-capitalize py-2 my-2 details bookId">BookId: ${BookId}</p>
            <p class="text-capitalize py-2 my-2 details sectionId">SectionId: ${SectionId}</p>
            <p class="desch arabic">${HadithArabic}</p>
            <p class="desch bangla">${HadithBengali}</p>
            <p class="desch english">${HadithEnglish}</p>
          </div>
        `
        content.innerHTML += html
      }
    })
  await fetch(HADICH_API_URLS_6, {
    method: 'GET',
    headers: {
      'content-type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => {
      for (let i = 0; i < JSON.parse(JSON.stringify(data)).length; i++) {
        var HadithArabic = JSON.parse(JSON.stringify(data))[i]['hadithArabic']
        var HadithEnglish = JSON.parse(JSON.stringify(data))[i]['hadithEnglish']
        var HadithBengali = JSON.parse(JSON.stringify(data))[i]['hadithBengali']

        var Hadic_Topic = JSON.parse(JSON.stringify(data))[i]['topicName']
        var HadithNo = JSON.parse(JSON.stringify(data))[i]['hadithNo']
        var Thesequence = JSON.parse(JSON.stringify(data))[i]['thesequence']
        var ChapterId = JSON.parse(JSON.stringify(data))[i]['chapterId']
        var BookId = JSON.parse(JSON.stringify(data))[i]['bookId']
        var SectionId = JSON.parse(JSON.stringify(data))[i]['sectionId']

        var html = `
        <div class="item">
            <h3 class="topic">HADICH TOPIC: ${Hadic_Topic}</h3>
            <p class="text-capitalize py-2 my-2 details hadithNo">HadithNo: ${HadithNo}</p>
            <p class="text-capitalize py-2 my-2 details thesequence">Thesequence: 
              ${Thesequence}
            </p>
            <p class="text-capitalize py-2 my-2 details chapterId">ChapterId: ${ChapterId}</p>
            <p class="text-capitalize py-2 my-2 details bookId">BookId: ${BookId}</p>
            <p class="text-capitalize py-2 my-2 details sectionId">SectionId: ${SectionId}</p>
            <p class="desch arabic">${HadithArabic}</p>
            <p class="desch bangla">${HadithBengali}</p>
            <p class="desch english">${HadithEnglish}</p>
          </div>
        `
        content.innerHTML += html
      }
    })
  await fetch(HADICH_API_URLS_7, {
    method: 'GET',
    headers: {
      'content-type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => {
      for (let i = 0; i < JSON.parse(JSON.stringify(data)).length; i++) {
        var HadithArabic = JSON.parse(JSON.stringify(data))[i]['hadithArabic']
        var HadithEnglish = JSON.parse(JSON.stringify(data))[i]['hadithEnglish']
        var HadithBengali = JSON.parse(JSON.stringify(data))[i]['hadithBengali']

        var Hadic_Topic = JSON.parse(JSON.stringify(data))[i]['topicName']
        var HadithNo = JSON.parse(JSON.stringify(data))[i]['hadithNo']
        var Thesequence = JSON.parse(JSON.stringify(data))[i]['thesequence']
        var ChapterId = JSON.parse(JSON.stringify(data))[i]['chapterId']
        var BookId = JSON.parse(JSON.stringify(data))[i]['bookId']
        var SectionId = JSON.parse(JSON.stringify(data))[i]['sectionId']

        var html = `
        <div class="item">
            <h3 class="topic">HADICH TOPIC: ${Hadic_Topic}</h3>
            <p class="text-capitalize py-2 my-2 details hadithNo">HadithNo: ${HadithNo}</p>
            <p class="text-capitalize py-2 my-2 details thesequence">Thesequence: 
              ${Thesequence}
            </p>
            <p class="text-capitalize py-2 my-2 details chapterId">ChapterId: ${ChapterId}</p>
            <p class="text-capitalize py-2 my-2 details bookId">BookId: ${BookId}</p>
            <p class="text-capitalize py-2 my-2 details sectionId">SectionId: ${SectionId}</p>
            <p class="desch arabic">${HadithArabic}</p>
            <p class="desch bangla">${HadithBengali}</p>
            <p class="desch english">${HadithEnglish}</p>
          </div>
        `
        content.innerHTML += html
      }
    })
  await fetch(HADICH_API_URLS_8, {
    method: 'GET',
    headers: {
      'content-type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => {
      for (let i = 0; i < JSON.parse(JSON.stringify(data)).length; i++) {
        var HadithArabic = JSON.parse(JSON.stringify(data))[i]['hadithArabic']
        var HadithEnglish = JSON.parse(JSON.stringify(data))[i]['hadithEnglish']
        var HadithBengali = JSON.parse(JSON.stringify(data))[i]['hadithBengali']

        var Hadic_Topic = JSON.parse(JSON.stringify(data))[i]['topicName']
        var HadithNo = JSON.parse(JSON.stringify(data))[i]['hadithNo']
        var Thesequence = JSON.parse(JSON.stringify(data))[i]['thesequence']
        var ChapterId = JSON.parse(JSON.stringify(data))[i]['chapterId']
        var BookId = JSON.parse(JSON.stringify(data))[i]['bookId']
        var SectionId = JSON.parse(JSON.stringify(data))[i]['sectionId']

        var html = `
        <div class="item">
            <h3 class="topic">HADICH TOPIC: ${Hadic_Topic}</h3>
            <p class="text-capitalize py-2 my-2 details hadithNo">HadithNo: ${HadithNo}</p>
            <p class="text-capitalize py-2 my-2 details thesequence">Thesequence: 
              ${Thesequence}
            </p>
            <p class="text-capitalize py-2 my-2 details chapterId">ChapterId: ${ChapterId}</p>
            <p class="text-capitalize py-2 my-2 details bookId">BookId: ${BookId}</p>
            <p class="text-capitalize py-2 my-2 details sectionId">SectionId: ${SectionId}</p>
            <p class="desch arabic">${HadithArabic}</p>
            <p class="desch bangla">${HadithBengali}</p>
            <p class="desch english">${HadithEnglish}</p>
          </div>
        `
        content.innerHTML += html
      }
    })
  await fetch(HADICH_API_URLS_9, {
    method: 'GET',
    headers: {
      'content-type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => {
      for (let i = 0; i < JSON.parse(JSON.stringify(data)).length; i++) {
        var HadithArabic = JSON.parse(JSON.stringify(data))[i]['hadithArabic']
        var HadithEnglish = JSON.parse(JSON.stringify(data))[i]['hadithEnglish']
        var HadithBengali = JSON.parse(JSON.stringify(data))[i]['hadithBengali']

        var Hadic_Topic = JSON.parse(JSON.stringify(data))[i]['topicName']
        var HadithNo = JSON.parse(JSON.stringify(data))[i]['hadithNo']
        var Thesequence = JSON.parse(JSON.stringify(data))[i]['thesequence']
        var ChapterId = JSON.parse(JSON.stringify(data))[i]['chapterId']
        var BookId = JSON.parse(JSON.stringify(data))[i]['bookId']
        var SectionId = JSON.parse(JSON.stringify(data))[i]['sectionId']

        var html = `
        <div class="item">
            <h3 class="topic">HADICH TOPIC: ${Hadic_Topic}</h3>
            <p class="text-capitalize py-2 my-2 details hadithNo">HadithNo: ${HadithNo}</p>
            <p class="text-capitalize py-2 my-2 details thesequence">Thesequence: 
              ${Thesequence}
            </p>
            <p class="text-capitalize py-2 my-2 details chapterId">ChapterId: ${ChapterId}</p>
            <p class="text-capitalize py-2 my-2 details bookId">BookId: ${BookId}</p>
            <p class="text-capitalize py-2 my-2 details sectionId">SectionId: ${SectionId}</p>
            <p class="desch arabic">${HadithArabic}</p>
            <p class="desch bangla">${HadithBengali}</p>
            <p class="desch english">${HadithEnglish}</p>
          </div>
        `
        content.innerHTML += html
      }
    })
  await fetch(HADICH_API_URLS_10, {
    method: 'GET',
    headers: {
      'content-type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => {
      for (let i = 0; i < JSON.parse(JSON.stringify(data)).length; i++) {
        var HadithArabic = JSON.parse(JSON.stringify(data))[i]['hadithArabic']
        var HadithEnglish = JSON.parse(JSON.stringify(data))[i]['hadithEnglish']
        var HadithBengali = JSON.parse(JSON.stringify(data))[i]['hadithBengali']

        var Hadic_Topic = JSON.parse(JSON.stringify(data))[i]['topicName']
        var HadithNo = JSON.parse(JSON.stringify(data))[i]['hadithNo']
        var Thesequence = JSON.parse(JSON.stringify(data))[i]['thesequence']
        var ChapterId = JSON.parse(JSON.stringify(data))[i]['chapterId']
        var BookId = JSON.parse(JSON.stringify(data))[i]['bookId']
        var SectionId = JSON.parse(JSON.stringify(data))[i]['sectionId']

        var html = `
        <div class="item">
            <h3 class="topic">HADICH TOPIC: ${Hadic_Topic}</h3>
            <p class="text-capitalize py-2 my-2 details hadithNo">HadithNo: ${HadithNo}</p>
            <p class="text-capitalize py-2 my-2 details thesequence">Thesequence: 
              ${Thesequence}
            </p>
            <p class="text-capitalize py-2 my-2 details chapterId">ChapterId: ${ChapterId}</p>
            <p class="text-capitalize py-2 my-2 details bookId">BookId: ${BookId}</p>
            <p class="text-capitalize py-2 my-2 details sectionId">SectionId: ${SectionId}</p>
            <p class="desch arabic">${HadithArabic}</p>
            <p class="desch bangla">${HadithBengali}</p>
            <p class="desch english">${HadithEnglish}</p>
          </div>
        `
        content.innerHTML += html
      }
    })
  await fetch(HADICH_API_URLS_11, {
    method: 'GET',
    headers: {
      'content-type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => {
      for (let i = 0; i < JSON.parse(JSON.stringify(data)).length; i++) {
        var HadithArabic = JSON.parse(JSON.stringify(data))[i]['hadithArabic']
        var HadithEnglish = JSON.parse(JSON.stringify(data))[i]['hadithEnglish']
        var HadithBengali = JSON.parse(JSON.stringify(data))[i]['hadithBengali']

        var Hadic_Topic = JSON.parse(JSON.stringify(data))[i]['topicName']
        var HadithNo = JSON.parse(JSON.stringify(data))[i]['hadithNo']
        var Thesequence = JSON.parse(JSON.stringify(data))[i]['thesequence']
        var ChapterId = JSON.parse(JSON.stringify(data))[i]['chapterId']
        var BookId = JSON.parse(JSON.stringify(data))[i]['bookId']
        var SectionId = JSON.parse(JSON.stringify(data))[i]['sectionId']

        var html = `
        <div class="item">
            <h3 class="topic">HADICH TOPIC: ${Hadic_Topic}</h3>
            <p class="text-capitalize py-2 my-2 details hadithNo">HadithNo: ${HadithNo}</p>
            <p class="text-capitalize py-2 my-2 details thesequence">Thesequence: 
              ${Thesequence}
            </p>
            <p class="text-capitalize py-2 my-2 details chapterId">ChapterId: ${ChapterId}</p>
            <p class="text-capitalize py-2 my-2 details bookId">BookId: ${BookId}</p>
            <p class="text-capitalize py-2 my-2 details sectionId">SectionId: ${SectionId}</p>
            <p class="desch arabic">${HadithArabic}</p>
            <p class="desch bangla">${HadithBengali}</p>
            <p class="desch english">${HadithEnglish}</p>
          </div>
        `
        content.innerHTML += html
      }
    })
  await fetch(HADICH_API_URLS_12, {
    method: 'GET',
    headers: {
      'content-type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => {
      for (let i = 0; i < JSON.parse(JSON.stringify(data)).length; i++) {
        var HadithArabic = JSON.parse(JSON.stringify(data))[i]['hadithArabic']
        var HadithEnglish = JSON.parse(JSON.stringify(data))[i]['hadithEnglish']
        var HadithBengali = JSON.parse(JSON.stringify(data))[i]['hadithBengali']

        var Hadic_Topic = JSON.parse(JSON.stringify(data))[i]['topicName']
        var HadithNo = JSON.parse(JSON.stringify(data))[i]['hadithNo']
        var Thesequence = JSON.parse(JSON.stringify(data))[i]['thesequence']
        var ChapterId = JSON.parse(JSON.stringify(data))[i]['chapterId']
        var BookId = JSON.parse(JSON.stringify(data))[i]['bookId']
        var SectionId = JSON.parse(JSON.stringify(data))[i]['sectionId']

        var html = `
        <div class="item">
            <h3 class="topic">HADICH TOPIC: ${Hadic_Topic}</h3>
            <p class="text-capitalize py-2 my-2 details hadithNo">HadithNo: ${HadithNo}</p>
            <p class="text-capitalize py-2 my-2 details thesequence">Thesequence: 
              ${Thesequence}
            </p>
            <p class="text-capitalize py-2 my-2 details chapterId">ChapterId: ${ChapterId}</p>
            <p class="text-capitalize py-2 my-2 details bookId">BookId: ${BookId}</p>
            <p class="text-capitalize py-2 my-2 details sectionId">SectionId: ${SectionId}</p>
            <p class="desch arabic">${HadithArabic}</p>
            <p class="desch bangla">${HadithBengali}</p>
            <p class="desch english">${HadithEnglish}</p>
          </div>
        `
        content.innerHTML += html
      }
    })
  await fetch(HADICH_API_URLS_13, {
    method: 'GET',
    headers: {
      'content-type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => {
      for (let i = 0; i < JSON.parse(JSON.stringify(data)).length; i++) {
        var HadithArabic = JSON.parse(JSON.stringify(data))[i]['hadithArabic']
        var HadithEnglish = JSON.parse(JSON.stringify(data))[i]['hadithEnglish']
        var HadithBengali = JSON.parse(JSON.stringify(data))[i]['hadithBengali']

        var Hadic_Topic = JSON.parse(JSON.stringify(data))[i]['topicName']
        var HadithNo = JSON.parse(JSON.stringify(data))[i]['hadithNo']
        var Thesequence = JSON.parse(JSON.stringify(data))[i]['thesequence']
        var ChapterId = JSON.parse(JSON.stringify(data))[i]['chapterId']
        var BookId = JSON.parse(JSON.stringify(data))[i]['bookId']
        var SectionId = JSON.parse(JSON.stringify(data))[i]['sectionId']

        var html = `
        <div class="item">
            <h3 class="topic">HADICH TOPIC: ${Hadic_Topic}</h3>
            <p class="text-capitalize py-2 my-2 details hadithNo">HadithNo: ${HadithNo}</p>
            <p class="text-capitalize py-2 my-2 details thesequence">Thesequence: 
              ${Thesequence}
            </p>
            <p class="text-capitalize py-2 my-2 details chapterId">ChapterId: ${ChapterId}</p>
            <p class="text-capitalize py-2 my-2 details bookId">BookId: ${BookId}</p>
            <p class="text-capitalize py-2 my-2 details sectionId">SectionId: ${SectionId}</p>
            <p class="desch arabic">${HadithArabic}</p>
            <p class="desch bangla">${HadithBengali}</p>
            <p class="desch english">${HadithEnglish}</p>
          </div>
        `
        content.innerHTML += html
      }
    })
  await fetch(HADICH_API_URLS_14, {
    method: 'GET',
    headers: {
      'content-type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => {
      for (let i = 0; i < JSON.parse(JSON.stringify(data)).length; i++) {
        var HadithArabic = JSON.parse(JSON.stringify(data))[i]['hadithArabic']
        var HadithEnglish = JSON.parse(JSON.stringify(data))[i]['hadithEnglish']
        var HadithBengali = JSON.parse(JSON.stringify(data))[i]['hadithBengali']

        var Hadic_Topic = JSON.parse(JSON.stringify(data))[i]['topicName']
        var HadithNo = JSON.parse(JSON.stringify(data))[i]['hadithNo']
        var Thesequence = JSON.parse(JSON.stringify(data))[i]['thesequence']
        var ChapterId = JSON.parse(JSON.stringify(data))[i]['chapterId']
        var BookId = JSON.parse(JSON.stringify(data))[i]['bookId']
        var SectionId = JSON.parse(JSON.stringify(data))[i]['sectionId']

        var html = `
        <div class="item">
            <h3 class="topic">HADICH TOPIC: ${Hadic_Topic}</h3>
            <p class="text-capitalize py-2 my-2 details hadithNo">HadithNo: ${HadithNo}</p>
            <p class="text-capitalize py-2 my-2 details thesequence">Thesequence: 
              ${Thesequence}
            </p>
            <p class="text-capitalize py-2 my-2 details chapterId">ChapterId: ${ChapterId}</p>
            <p class="text-capitalize py-2 my-2 details bookId">BookId: ${BookId}</p>
            <p class="text-capitalize py-2 my-2 details sectionId">SectionId: ${SectionId}</p>
            <p class="desch arabic">${HadithArabic}</p>
            <p class="desch bangla">${HadithBengali}</p>
            <p class="desch english">${HadithEnglish}</p>
          </div>
        `
        content.innerHTML += html
      }
    })
  await fetch(HADICH_API_URLS_15, {
    method: 'GET',
    headers: {
      'content-type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => {
      for (let i = 0; i < JSON.parse(JSON.stringify(data)).length; i++) {
        var HadithArabic = JSON.parse(JSON.stringify(data))[i]['hadithArabic']
        var HadithEnglish = JSON.parse(JSON.stringify(data))[i]['hadithEnglish']
        var HadithBengali = JSON.parse(JSON.stringify(data))[i]['hadithBengali']

        var Hadic_Topic = JSON.parse(JSON.stringify(data))[i]['topicName']
        var HadithNo = JSON.parse(JSON.stringify(data))[i]['hadithNo']
        var Thesequence = JSON.parse(JSON.stringify(data))[i]['thesequence']
        var ChapterId = JSON.parse(JSON.stringify(data))[i]['chapterId']
        var BookId = JSON.parse(JSON.stringify(data))[i]['bookId']
        var SectionId = JSON.parse(JSON.stringify(data))[i]['sectionId']

        var html = `
        <div class="item">
            <h3 class="topic">HADICH TOPIC: ${Hadic_Topic}</h3>
            <p class="text-capitalize py-2 my-2 details hadithNo">HadithNo: ${HadithNo}</p>
            <p class="text-capitalize py-2 my-2 details thesequence">Thesequence: 
              ${Thesequence}
            </p>
            <p class="text-capitalize py-2 my-2 details chapterId">ChapterId: ${ChapterId}</p>
            <p class="text-capitalize py-2 my-2 details bookId">BookId: ${BookId}</p>
            <p class="text-capitalize py-2 my-2 details sectionId">SectionId: ${SectionId}</p>
            <p class="desch arabic">${HadithArabic}</p>
            <p class="desch bangla">${HadithBengali}</p>
            <p class="desch english">${HadithEnglish}</p>
          </div>
        `
        content.innerHTML += html
      }
    })
  await fetch(HADICH_API_URLS_16, {
    method: 'GET',
    headers: {
      'content-type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => {
      for (let i = 0; i < JSON.parse(JSON.stringify(data)).length; i++) {
        var HadithArabic = JSON.parse(JSON.stringify(data))[i]['hadithArabic']
        var HadithEnglish = JSON.parse(JSON.stringify(data))[i]['hadithEnglish']
        var HadithBengali = JSON.parse(JSON.stringify(data))[i]['hadithBengali']

        var Hadic_Topic = JSON.parse(JSON.stringify(data))[i]['topicName']
        var HadithNo = JSON.parse(JSON.stringify(data))[i]['hadithNo']
        var Thesequence = JSON.parse(JSON.stringify(data))[i]['thesequence']
        var ChapterId = JSON.parse(JSON.stringify(data))[i]['chapterId']
        var BookId = JSON.parse(JSON.stringify(data))[i]['bookId']
        var SectionId = JSON.parse(JSON.stringify(data))[i]['sectionId']

        var html = `
        <div class="item">
            <h3 class="topic">HADICH TOPIC: ${Hadic_Topic}</h3>
            <p class="text-capitalize py-2 my-2 details hadithNo">HadithNo: ${HadithNo}</p>
            <p class="text-capitalize py-2 my-2 details thesequence">Thesequence: 
              ${Thesequence}
            </p>
            <p class="text-capitalize py-2 my-2 details chapterId">ChapterId: ${ChapterId}</p>
            <p class="text-capitalize py-2 my-2 details bookId">BookId: ${BookId}</p>
            <p class="text-capitalize py-2 my-2 details sectionId">SectionId: ${SectionId}</p>
            <p class="desch arabic">${HadithArabic}</p>
            <p class="desch bangla">${HadithBengali}</p>
            <p class="desch english">${HadithEnglish}</p>
          </div>
        `
        content.innerHTML += html
      }
    })
  await fetch(HADICH_API_URLS_17, {
    method: 'GET',
    headers: {
      'content-type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => {
      for (let i = 0; i < JSON.parse(JSON.stringify(data)).length; i++) {
        var HadithArabic = JSON.parse(JSON.stringify(data))[i]['hadithArabic']
        var HadithEnglish = JSON.parse(JSON.stringify(data))[i]['hadithEnglish']
        var HadithBengali = JSON.parse(JSON.stringify(data))[i]['hadithBengali']

        var Hadic_Topic = JSON.parse(JSON.stringify(data))[i]['topicName']
        var HadithNo = JSON.parse(JSON.stringify(data))[i]['hadithNo']
        var Thesequence = JSON.parse(JSON.stringify(data))[i]['thesequence']
        var ChapterId = JSON.parse(JSON.stringify(data))[i]['chapterId']
        var BookId = JSON.parse(JSON.stringify(data))[i]['bookId']
        var SectionId = JSON.parse(JSON.stringify(data))[i]['sectionId']

        var html = `
        <div class="item">
            <h3 class="topic">HADICH TOPIC: ${Hadic_Topic}</h3>
            <p class="text-capitalize py-2 my-2 details hadithNo">HadithNo: ${HadithNo}</p>
            <p class="text-capitalize py-2 my-2 details thesequence">Thesequence: 
              ${Thesequence}
            </p>
            <p class="text-capitalize py-2 my-2 details chapterId">ChapterId: ${ChapterId}</p>
            <p class="text-capitalize py-2 my-2 details bookId">BookId: ${BookId}</p>
            <p class="text-capitalize py-2 my-2 details sectionId">SectionId: ${SectionId}</p>
            <p class="desch arabic">${HadithArabic}</p>
            <p class="desch bangla">${HadithBengali}</p>
            <p class="desch english">${HadithEnglish}</p>
          </div>
        `
        content.innerHTML += html
      }
    })
  await fetch(HADICH_API_URLS_18, {
    method: 'GET',
    headers: {
      'content-type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => {
      for (let i = 0; i < JSON.parse(JSON.stringify(data)).length; i++) {
        var HadithArabic = JSON.parse(JSON.stringify(data))[i]['hadithArabic']
        var HadithEnglish = JSON.parse(JSON.stringify(data))[i]['hadithEnglish']
        var HadithBengali = JSON.parse(JSON.stringify(data))[i]['hadithBengali']

        var Hadic_Topic = JSON.parse(JSON.stringify(data))[i]['topicName']
        var HadithNo = JSON.parse(JSON.stringify(data))[i]['hadithNo']
        var Thesequence = JSON.parse(JSON.stringify(data))[i]['thesequence']
        var ChapterId = JSON.parse(JSON.stringify(data))[i]['chapterId']
        var BookId = JSON.parse(JSON.stringify(data))[i]['bookId']
        var SectionId = JSON.parse(JSON.stringify(data))[i]['sectionId']

        var html = `
        <div class="item">
            <h3 class="topic">HADICH TOPIC: ${Hadic_Topic}</h3>
            <p class="text-capitalize py-2 my-2 details hadithNo">HadithNo: ${HadithNo}</p>
            <p class="text-capitalize py-2 my-2 details thesequence">Thesequence: 
              ${Thesequence}
            </p>
            <p class="text-capitalize py-2 my-2 details chapterId">ChapterId: ${ChapterId}</p>
            <p class="text-capitalize py-2 my-2 details bookId">BookId: ${BookId}</p>
            <p class="text-capitalize py-2 my-2 details sectionId">SectionId: ${SectionId}</p>
            <p class="desch arabic">${HadithArabic}</p>
            <p class="desch bangla">${HadithBengali}</p>
            <p class="desch english">${HadithEnglish}</p>
          </div>
        `
        content.innerHTML += html
      }
    })
  await fetch(HADICH_API_URLS_19, {
    method: 'GET',
    headers: {
      'content-type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => {
      for (let i = 0; i < JSON.parse(JSON.stringify(data)).length; i++) {
        var HadithArabic = JSON.parse(JSON.stringify(data))[i]['hadithArabic']
        var HadithEnglish = JSON.parse(JSON.stringify(data))[i]['hadithEnglish']
        var HadithBengali = JSON.parse(JSON.stringify(data))[i]['hadithBengali']

        var Hadic_Topic = JSON.parse(JSON.stringify(data))[i]['topicName']
        var HadithNo = JSON.parse(JSON.stringify(data))[i]['hadithNo']
        var Thesequence = JSON.parse(JSON.stringify(data))[i]['thesequence']
        var ChapterId = JSON.parse(JSON.stringify(data))[i]['chapterId']
        var BookId = JSON.parse(JSON.stringify(data))[i]['bookId']
        var SectionId = JSON.parse(JSON.stringify(data))[i]['sectionId']

        var html = `
        <div class="item">
            <h3 class="topic">HADICH TOPIC: ${Hadic_Topic}</h3>
            <p class="text-capitalize py-2 my-2 details hadithNo">HadithNo: ${HadithNo}</p>
            <p class="text-capitalize py-2 my-2 details thesequence">Thesequence: 
              ${Thesequence}
            </p>
            <p class="text-capitalize py-2 my-2 details chapterId">ChapterId: ${ChapterId}</p>
            <p class="text-capitalize py-2 my-2 details bookId">BookId: ${BookId}</p>
            <p class="text-capitalize py-2 my-2 details sectionId">SectionId: ${SectionId}</p>
            <p class="desch arabic">${HadithArabic}</p>
            <p class="desch bangla">${HadithBengali}</p>
            <p class="desch english">${HadithEnglish}</p>
          </div>
        `
        content.innerHTML += html
      }
    })
  await fetch(HADICH_API_URLS_20, {
    method: 'GET',
    headers: {
      'content-type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => {
      for (let i = 0; i < JSON.parse(JSON.stringify(data)).length; i++) {
        var HadithArabic = JSON.parse(JSON.stringify(data))[i]['hadithArabic']
        var HadithEnglish = JSON.parse(JSON.stringify(data))[i]['hadithEnglish']
        var HadithBengali = JSON.parse(JSON.stringify(data))[i]['hadithBengali']

        var Hadic_Topic = JSON.parse(JSON.stringify(data))[i]['topicName']
        var HadithNo = JSON.parse(JSON.stringify(data))[i]['hadithNo']
        var Thesequence = JSON.parse(JSON.stringify(data))[i]['thesequence']
        var ChapterId = JSON.parse(JSON.stringify(data))[i]['chapterId']
        var BookId = JSON.parse(JSON.stringify(data))[i]['bookId']
        var SectionId = JSON.parse(JSON.stringify(data))[i]['sectionId']

        var html = `
        <div class="item">
            <h3 class="topic">HADICH TOPIC: ${Hadic_Topic}</h3>
            <p class="text-capitalize py-2 my-2 details hadithNo">HadithNo: ${HadithNo}</p>
            <p class="text-capitalize py-2 my-2 details thesequence">Thesequence: 
              ${Thesequence}
            </p>
            <p class="text-capitalize py-2 my-2 details chapterId">ChapterId: ${ChapterId}</p>
            <p class="text-capitalize py-2 my-2 details bookId">BookId: ${BookId}</p>
            <p class="text-capitalize py-2 my-2 details sectionId">SectionId: ${SectionId}</p>
            <p class="desch arabic">${HadithArabic}</p>
            <p class="desch bangla">${HadithBengali}</p>
            <p class="desch english">${HadithEnglish}</p>
          </div>
        `
        content.innerHTML += html
      }
    })
  await fetch(HADICH_API_URLS_21, {
    method: 'GET',
    headers: {
      'content-type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => {
      for (let i = 0; i < JSON.parse(JSON.stringify(data)).length; i++) {
        var HadithArabic = JSON.parse(JSON.stringify(data))[i]['hadithArabic']
        var HadithEnglish = JSON.parse(JSON.stringify(data))[i]['hadithEnglish']
        var HadithBengali = JSON.parse(JSON.stringify(data))[i]['hadithBengali']

        var Hadic_Topic = JSON.parse(JSON.stringify(data))[i]['topicName']
        var HadithNo = JSON.parse(JSON.stringify(data))[i]['hadithNo']
        var Thesequence = JSON.parse(JSON.stringify(data))[i]['thesequence']
        var ChapterId = JSON.parse(JSON.stringify(data))[i]['chapterId']
        var BookId = JSON.parse(JSON.stringify(data))[i]['bookId']
        var SectionId = JSON.parse(JSON.stringify(data))[i]['sectionId']

        var html = `
        <div class="item">
            <h3 class="topic">HADICH TOPIC: ${Hadic_Topic}</h3>
            <p class="text-capitalize py-2 my-2 details hadithNo">HadithNo: ${HadithNo}</p>
            <p class="text-capitalize py-2 my-2 details thesequence">Thesequence: 
              ${Thesequence}
            </p>
            <p class="text-capitalize py-2 my-2 details chapterId">ChapterId: ${ChapterId}</p>
            <p class="text-capitalize py-2 my-2 details bookId">BookId: ${BookId}</p>
            <p class="text-capitalize py-2 my-2 details sectionId">SectionId: ${SectionId}</p>
            <p class="desch arabic">${HadithArabic}</p>
            <p class="desch bangla">${HadithBengali}</p>
            <p class="desch english">${HadithEnglish}</p>
          </div>
        `
        content.innerHTML += html
      }
    })
  await fetch(HADICH_API_URLS_22, {
    method: 'GET',
    headers: {
      'content-type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => {
      for (let i = 0; i < JSON.parse(JSON.stringify(data)).length; i++) {
        var HadithArabic = JSON.parse(JSON.stringify(data))[i]['hadithArabic']
        var HadithEnglish = JSON.parse(JSON.stringify(data))[i]['hadithEnglish']
        var HadithBengali = JSON.parse(JSON.stringify(data))[i]['hadithBengali']

        var Hadic_Topic = JSON.parse(JSON.stringify(data))[i]['topicName']
        var HadithNo = JSON.parse(JSON.stringify(data))[i]['hadithNo']
        var Thesequence = JSON.parse(JSON.stringify(data))[i]['thesequence']
        var ChapterId = JSON.parse(JSON.stringify(data))[i]['chapterId']
        var BookId = JSON.parse(JSON.stringify(data))[i]['bookId']
        var SectionId = JSON.parse(JSON.stringify(data))[i]['sectionId']

        var html = `
        <div class="item">
            <h3 class="topic">HADICH TOPIC: ${Hadic_Topic}</h3>
            <p class="text-capitalize py-2 my-2 details hadithNo">HadithNo: ${HadithNo}</p>
            <p class="text-capitalize py-2 my-2 details thesequence">Thesequence: 
              ${Thesequence}
            </p>
            <p class="text-capitalize py-2 my-2 details chapterId">ChapterId: ${ChapterId}</p>
            <p class="text-capitalize py-2 my-2 details bookId">BookId: ${BookId}</p>
            <p class="text-capitalize py-2 my-2 details sectionId">SectionId: ${SectionId}</p>
            <p class="desch arabic">${HadithArabic}</p>
            <p class="desch bangla">${HadithBengali}</p>
            <p class="desch english">${HadithEnglish}</p>
          </div>
        `
        content.innerHTML += html
      }
    })
  await fetch(HADICH_API_URLS_23, {
    method: 'GET',
    headers: {
      'content-type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => {
      for (let i = 0; i < JSON.parse(JSON.stringify(data)).length; i++) {
        var HadithArabic = JSON.parse(JSON.stringify(data))[i]['hadithArabic']
        var HadithEnglish = JSON.parse(JSON.stringify(data))[i]['hadithEnglish']
        var HadithBengali = JSON.parse(JSON.stringify(data))[i]['hadithBengali']

        var Hadic_Topic = JSON.parse(JSON.stringify(data))[i]['topicName']
        var HadithNo = JSON.parse(JSON.stringify(data))[i]['hadithNo']
        var Thesequence = JSON.parse(JSON.stringify(data))[i]['thesequence']
        var ChapterId = JSON.parse(JSON.stringify(data))[i]['chapterId']
        var BookId = JSON.parse(JSON.stringify(data))[i]['bookId']
        var SectionId = JSON.parse(JSON.stringify(data))[i]['sectionId']

        var html = `
        <div class="item">
            <h3 class="topic">HADICH TOPIC: ${Hadic_Topic}</h3>
            <p class="text-capitalize py-2 my-2 details hadithNo">HadithNo: ${HadithNo}</p>
            <p class="text-capitalize py-2 my-2 details thesequence">Thesequence: 
              ${Thesequence}
            </p>
            <p class="text-capitalize py-2 my-2 details chapterId">ChapterId: ${ChapterId}</p>
            <p class="text-capitalize py-2 my-2 details bookId">BookId: ${BookId}</p>
            <p class="text-capitalize py-2 my-2 details sectionId">SectionId: ${SectionId}</p>
            <p class="desch arabic">${HadithArabic}</p>
            <p class="desch bangla">${HadithBengali}</p>
            <p class="desch english">${HadithEnglish}</p>
          </div>
        `
        content.innerHTML += html
      }
    })
  await fetch(HADICH_API_URLS_24, {
    method: 'GET',
    headers: {
      'content-type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => {
      for (let i = 0; i < JSON.parse(JSON.stringify(data)).length; i++) {
        var HadithArabic = JSON.parse(JSON.stringify(data))[i]['hadithArabic']
        var HadithEnglish = JSON.parse(JSON.stringify(data))[i]['hadithEnglish']
        var HadithBengali = JSON.parse(JSON.stringify(data))[i]['hadithBengali']

        var Hadic_Topic = JSON.parse(JSON.stringify(data))[i]['topicName']
        var HadithNo = JSON.parse(JSON.stringify(data))[i]['hadithNo']
        var Thesequence = JSON.parse(JSON.stringify(data))[i]['thesequence']
        var ChapterId = JSON.parse(JSON.stringify(data))[i]['chapterId']
        var BookId = JSON.parse(JSON.stringify(data))[i]['bookId']
        var SectionId = JSON.parse(JSON.stringify(data))[i]['sectionId']

        var html = `
        <div class="item">
            <h3 class="topic">HADICH TOPIC: ${Hadic_Topic}</h3>
            <p class="text-capitalize py-2 my-2 details hadithNo">HadithNo: ${HadithNo}</p>
            <p class="text-capitalize py-2 my-2 details thesequence">Thesequence: 
              ${Thesequence}
            </p>
            <p class="text-capitalize py-2 my-2 details chapterId">ChapterId: ${ChapterId}</p>
            <p class="text-capitalize py-2 my-2 details bookId">BookId: ${BookId}</p>
            <p class="text-capitalize py-2 my-2 details sectionId">SectionId: ${SectionId}</p>
            <p class="desch arabic">${HadithArabic}</p>
            <p class="desch bangla">${HadithBengali}</p>
            <p class="desch english">${HadithEnglish}</p>
          </div>
        `
        content.innerHTML += html
      }
    })
  await fetch(HADICH_API_URLS_25, {
    method: 'GET',
    headers: {
      'content-type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => {
      for (let i = 0; i < JSON.parse(JSON.stringify(data)).length; i++) {
        var HadithArabic = JSON.parse(JSON.stringify(data))[i]['hadithArabic']
        var HadithEnglish = JSON.parse(JSON.stringify(data))[i]['hadithEnglish']
        var HadithBengali = JSON.parse(JSON.stringify(data))[i]['hadithBengali']

        var Hadic_Topic = JSON.parse(JSON.stringify(data))[i]['topicName']
        var HadithNo = JSON.parse(JSON.stringify(data))[i]['hadithNo']
        var Thesequence = JSON.parse(JSON.stringify(data))[i]['thesequence']
        var ChapterId = JSON.parse(JSON.stringify(data))[i]['chapterId']
        var BookId = JSON.parse(JSON.stringify(data))[i]['bookId']
        var SectionId = JSON.parse(JSON.stringify(data))[i]['sectionId']

        var html = `
        <div class="item">
            <h3 class="topic">HADICH TOPIC: ${Hadic_Topic}</h3>
            <p class="text-capitalize py-2 my-2 details hadithNo">HadithNo: ${HadithNo}</p>
            <p class="text-capitalize py-2 my-2 details thesequence">Thesequence: 
              ${Thesequence}
            </p>
            <p class="text-capitalize py-2 my-2 details chapterId">ChapterId: ${ChapterId}</p>
            <p class="text-capitalize py-2 my-2 details bookId">BookId: ${BookId}</p>
            <p class="text-capitalize py-2 my-2 details sectionId">SectionId: ${SectionId}</p>
            <p class="desch arabic">${HadithArabic}</p>
            <p class="desch bangla">${HadithBengali}</p>
            <p class="desch english">${HadithEnglish}</p>
          </div>
        `
        content.innerHTML += html
      }
    })
  await fetch(HADICH_API_URLS_26, {
    method: 'GET',
    headers: {
      'content-type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => {
      for (let i = 0; i < JSON.parse(JSON.stringify(data)).length; i++) {
        var HadithArabic = JSON.parse(JSON.stringify(data))[i]['hadithArabic']
        var HadithEnglish = JSON.parse(JSON.stringify(data))[i]['hadithEnglish']
        var HadithBengali = JSON.parse(JSON.stringify(data))[i]['hadithBengali']

        var Hadic_Topic = JSON.parse(JSON.stringify(data))[i]['topicName']
        var HadithNo = JSON.parse(JSON.stringify(data))[i]['hadithNo']
        var Thesequence = JSON.parse(JSON.stringify(data))[i]['thesequence']
        var ChapterId = JSON.parse(JSON.stringify(data))[i]['chapterId']
        var BookId = JSON.parse(JSON.stringify(data))[i]['bookId']
        var SectionId = JSON.parse(JSON.stringify(data))[i]['sectionId']

        var html = `
        <div class="item">
            <h3 class="topic">HADICH TOPIC: ${Hadic_Topic}</h3>
            <p class="text-capitalize py-2 my-2 details hadithNo">HadithNo: ${HadithNo}</p>
            <p class="text-capitalize py-2 my-2 details thesequence">Thesequence: 
              ${Thesequence}
            </p>
            <p class="text-capitalize py-2 my-2 details chapterId">ChapterId: ${ChapterId}</p>
            <p class="text-capitalize py-2 my-2 details bookId">BookId: ${BookId}</p>
            <p class="text-capitalize py-2 my-2 details sectionId">SectionId: ${SectionId}</p>
            <p class="desch arabic">${HadithArabic}</p>
            <p class="desch bangla">${HadithBengali}</p>
            <p class="desch english">${HadithEnglish}</p>
          </div>
        `
        content.innerHTML += html
      }
    })
  await fetch(HADICH_API_URLS_27, {
    method: 'GET',
    headers: {
      'content-type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => {
      for (let i = 0; i < JSON.parse(JSON.stringify(data)).length; i++) {
        var HadithArabic = JSON.parse(JSON.stringify(data))[i]['hadithArabic']
        var HadithEnglish = JSON.parse(JSON.stringify(data))[i]['hadithEnglish']
        var HadithBengali = JSON.parse(JSON.stringify(data))[i]['hadithBengali']

        var Hadic_Topic = JSON.parse(JSON.stringify(data))[i]['topicName']
        var HadithNo = JSON.parse(JSON.stringify(data))[i]['hadithNo']
        var Thesequence = JSON.parse(JSON.stringify(data))[i]['thesequence']
        var ChapterId = JSON.parse(JSON.stringify(data))[i]['chapterId']
        var BookId = JSON.parse(JSON.stringify(data))[i]['bookId']
        var SectionId = JSON.parse(JSON.stringify(data))[i]['sectionId']

        var html = `
        <div class="item">
            <h3 class="topic">HADICH TOPIC: ${Hadic_Topic}</h3>
            <p class="text-capitalize py-2 my-2 details hadithNo">HadithNo: ${HadithNo}</p>
            <p class="text-capitalize py-2 my-2 details thesequence">Thesequence: 
              ${Thesequence}
            </p>
            <p class="text-capitalize py-2 my-2 details chapterId">ChapterId: ${ChapterId}</p>
            <p class="text-capitalize py-2 my-2 details bookId">BookId: ${BookId}</p>
            <p class="text-capitalize py-2 my-2 details sectionId">SectionId: ${SectionId}</p>
            <p class="desch arabic">${HadithArabic}</p>
            <p class="desch bangla">${HadithBengali}</p>
            <p class="desch english">${HadithEnglish}</p>
          </div>
        `
        content.innerHTML += html
      }
    })
  await fetch(HADICH_API_URLS_28, {
    method: 'GET',
    headers: {
      'content-type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => {
      for (let i = 0; i < JSON.parse(JSON.stringify(data)).length; i++) {
        var HadithArabic = JSON.parse(JSON.stringify(data))[i]['hadithArabic']
        var HadithEnglish = JSON.parse(JSON.stringify(data))[i]['hadithEnglish']
        var HadithBengali = JSON.parse(JSON.stringify(data))[i]['hadithBengali']

        var Hadic_Topic = JSON.parse(JSON.stringify(data))[i]['topicName']
        var HadithNo = JSON.parse(JSON.stringify(data))[i]['hadithNo']
        var Thesequence = JSON.parse(JSON.stringify(data))[i]['thesequence']
        var ChapterId = JSON.parse(JSON.stringify(data))[i]['chapterId']
        var BookId = JSON.parse(JSON.stringify(data))[i]['bookId']
        var SectionId = JSON.parse(JSON.stringify(data))[i]['sectionId']

        var html = `
        <div class="item">
            <h3 class="topic">HADICH TOPIC: ${Hadic_Topic}</h3>
            <p class="text-capitalize py-2 my-2 details hadithNo">HadithNo: ${HadithNo}</p>
            <p class="text-capitalize py-2 my-2 details thesequence">Thesequence: 
              ${Thesequence}
            </p>
            <p class="text-capitalize py-2 my-2 details chapterId">ChapterId: ${ChapterId}</p>
            <p class="text-capitalize py-2 my-2 details bookId">BookId: ${BookId}</p>
            <p class="text-capitalize py-2 my-2 details sectionId">SectionId: ${SectionId}</p>
            <p class="desch arabic">${HadithArabic}</p>
            <p class="desch bangla">${HadithBengali}</p>
            <p class="desch english">${HadithEnglish}</p>
          </div>
        `
        content.innerHTML += html
      }
    })
  await fetch(HADICH_API_URLS_29, {
    method: 'GET',
    headers: {
      'content-type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => {
      for (let i = 0; i < JSON.parse(JSON.stringify(data)).length; i++) {
        var HadithArabic = JSON.parse(JSON.stringify(data))[i]['hadithArabic']
        var HadithEnglish = JSON.parse(JSON.stringify(data))[i]['hadithEnglish']
        var HadithBengali = JSON.parse(JSON.stringify(data))[i]['hadithBengali']

        var Hadic_Topic = JSON.parse(JSON.stringify(data))[i]['topicName']
        var HadithNo = JSON.parse(JSON.stringify(data))[i]['hadithNo']
        var Thesequence = JSON.parse(JSON.stringify(data))[i]['thesequence']
        var ChapterId = JSON.parse(JSON.stringify(data))[i]['chapterId']
        var BookId = JSON.parse(JSON.stringify(data))[i]['bookId']
        var SectionId = JSON.parse(JSON.stringify(data))[i]['sectionId']

        var html = `
        <div class="item">
            <h3 class="topic">HADICH TOPIC: ${Hadic_Topic}</h3>
            <p class="text-capitalize py-2 my-2 details hadithNo">HadithNo: ${HadithNo}</p>
            <p class="text-capitalize py-2 my-2 details thesequence">Thesequence: 
              ${Thesequence}
            </p>
            <p class="text-capitalize py-2 my-2 details chapterId">ChapterId: ${ChapterId}</p>
            <p class="text-capitalize py-2 my-2 details bookId">BookId: ${BookId}</p>
            <p class="text-capitalize py-2 my-2 details sectionId">SectionId: ${SectionId}</p>
            <p class="desch arabic">${HadithArabic}</p>
            <p class="desch bangla">${HadithBengali}</p>
            <p class="desch english">${HadithEnglish}</p>
          </div>
        `
        content.innerHTML += html
      }
    })
  await fetch(HADICH_API_URLS_30, {
    method: 'GET',
    headers: {
      'content-type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => {
      for (let i = 0; i < JSON.parse(JSON.stringify(data)).length; i++) {
        var HadithArabic = JSON.parse(JSON.stringify(data))[i]['hadithArabic']
        var HadithEnglish = JSON.parse(JSON.stringify(data))[i]['hadithEnglish']
        var HadithBengali = JSON.parse(JSON.stringify(data))[i]['hadithBengali']

        var Hadic_Topic = JSON.parse(JSON.stringify(data))[i]['topicName']
        var HadithNo = JSON.parse(JSON.stringify(data))[i]['hadithNo']
        var Thesequence = JSON.parse(JSON.stringify(data))[i]['thesequence']
        var ChapterId = JSON.parse(JSON.stringify(data))[i]['chapterId']
        var BookId = JSON.parse(JSON.stringify(data))[i]['bookId']
        var SectionId = JSON.parse(JSON.stringify(data))[i]['sectionId']

        var html = `
        <div class="item">
            <h3 class="topic">HADICH TOPIC: ${Hadic_Topic}</h3>
            <p class="text-capitalize py-2 my-2 details hadithNo">HadithNo: ${HadithNo}</p>
            <p class="text-capitalize py-2 my-2 details thesequence">Thesequence: 
              ${Thesequence}
            </p>
            <p class="text-capitalize py-2 my-2 details chapterId">ChapterId: ${ChapterId}</p>
            <p class="text-capitalize py-2 my-2 details bookId">BookId: ${BookId}</p>
            <p class="text-capitalize py-2 my-2 details sectionId">SectionId: ${SectionId}</p>
            <p class="desch arabic">${HadithArabic}</p>
            <p class="desch bangla">${HadithBengali}</p>
            <p class="desch english">${HadithEnglish}</p>
          </div>
        `
        content.innerHTML += html
      }
    })
  await fetch(HADICH_API_URLS_31, {
    method: 'GET',
    headers: {
      'content-type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => {
      for (let i = 0; i < JSON.parse(JSON.stringify(data)).length; i++) {
        var HadithArabic = JSON.parse(JSON.stringify(data))[i]['hadithArabic']
        var HadithEnglish = JSON.parse(JSON.stringify(data))[i]['hadithEnglish']
        var HadithBengali = JSON.parse(JSON.stringify(data))[i]['hadithBengali']

        var Hadic_Topic = JSON.parse(JSON.stringify(data))[i]['topicName']
        var HadithNo = JSON.parse(JSON.stringify(data))[i]['hadithNo']
        var Thesequence = JSON.parse(JSON.stringify(data))[i]['thesequence']
        var ChapterId = JSON.parse(JSON.stringify(data))[i]['chapterId']
        var BookId = JSON.parse(JSON.stringify(data))[i]['bookId']
        var SectionId = JSON.parse(JSON.stringify(data))[i]['sectionId']

        var html = `
        <div class="item">
            <h3 class="topic">HADICH TOPIC: ${Hadic_Topic}</h3>
            <p class="text-capitalize py-2 my-2 details hadithNo">HadithNo: ${HadithNo}</p>
            <p class="text-capitalize py-2 my-2 details thesequence">Thesequence: 
              ${Thesequence}
            </p>
            <p class="text-capitalize py-2 my-2 details chapterId">ChapterId: ${ChapterId}</p>
            <p class="text-capitalize py-2 my-2 details bookId">BookId: ${BookId}</p>
            <p class="text-capitalize py-2 my-2 details sectionId">SectionId: ${SectionId}</p>
            <p class="desch arabic">${HadithArabic}</p>
            <p class="desch bangla">${HadithBengali}</p>
            <p class="desch english">${HadithEnglish}</p>
          </div>
        `
        content.innerHTML += html
      }
    })
  await fetch(HADICH_API_URLS_32, {
    method: 'GET',
    headers: {
      'content-type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => {
      for (let i = 0; i < JSON.parse(JSON.stringify(data)).length; i++) {
        var HadithArabic = JSON.parse(JSON.stringify(data))[i]['hadithArabic']
        var HadithEnglish = JSON.parse(JSON.stringify(data))[i]['hadithEnglish']
        var HadithBengali = JSON.parse(JSON.stringify(data))[i]['hadithBengali']

        var Hadic_Topic = JSON.parse(JSON.stringify(data))[i]['topicName']
        var HadithNo = JSON.parse(JSON.stringify(data))[i]['hadithNo']
        var Thesequence = JSON.parse(JSON.stringify(data))[i]['thesequence']
        var ChapterId = JSON.parse(JSON.stringify(data))[i]['chapterId']
        var BookId = JSON.parse(JSON.stringify(data))[i]['bookId']
        var SectionId = JSON.parse(JSON.stringify(data))[i]['sectionId']

        var html = `
        <div class="item">
            <h3 class="topic">HADICH TOPIC: ${Hadic_Topic}</h3>
            <p class="text-capitalize py-2 my-2 details hadithNo">HadithNo: ${HadithNo}</p>
            <p class="text-capitalize py-2 my-2 details thesequence">Thesequence: 
              ${Thesequence}
            </p>
            <p class="text-capitalize py-2 my-2 details chapterId">ChapterId: ${ChapterId}</p>
            <p class="text-capitalize py-2 my-2 details bookId">BookId: ${BookId}</p>
            <p class="text-capitalize py-2 my-2 details sectionId">SectionId: ${SectionId}</p>
            <p class="desch arabic">${HadithArabic}</p>
            <p class="desch bangla">${HadithBengali}</p>
            <p class="desch english">${HadithEnglish}</p>
          </div>
        `
        content.innerHTML += html
      }
    })
  await fetch(HADICH_API_URLS_33, {
    method: 'GET',
    headers: {
      'content-type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => {
      for (let i = 0; i < JSON.parse(JSON.stringify(data)).length; i++) {
        var HadithArabic = JSON.parse(JSON.stringify(data))[i]['hadithArabic']
        var HadithEnglish = JSON.parse(JSON.stringify(data))[i]['hadithEnglish']
        var HadithBengali = JSON.parse(JSON.stringify(data))[i]['hadithBengali']

        var Hadic_Topic = JSON.parse(JSON.stringify(data))[i]['topicName']
        var HadithNo = JSON.parse(JSON.stringify(data))[i]['hadithNo']
        var Thesequence = JSON.parse(JSON.stringify(data))[i]['thesequence']
        var ChapterId = JSON.parse(JSON.stringify(data))[i]['chapterId']
        var BookId = JSON.parse(JSON.stringify(data))[i]['bookId']
        var SectionId = JSON.parse(JSON.stringify(data))[i]['sectionId']

        var html = `
        <div class="item">
            <h3 class="topic">HADICH TOPIC: ${Hadic_Topic}</h3>
            <p class="text-capitalize py-2 my-2 details hadithNo">HadithNo: ${HadithNo}</p>
            <p class="text-capitalize py-2 my-2 details thesequence">Thesequence: 
              ${Thesequence}
            </p>
            <p class="text-capitalize py-2 my-2 details chapterId">ChapterId: ${ChapterId}</p>
            <p class="text-capitalize py-2 my-2 details bookId">BookId: ${BookId}</p>
            <p class="text-capitalize py-2 my-2 details sectionId">SectionId: ${SectionId}</p>
            <p class="desch arabic">${HadithArabic}</p>
            <p class="desch bangla">${HadithBengali}</p>
            <p class="desch english">${HadithEnglish}</p>
          </div>
        `
        content.innerHTML += html
      }
    })
  await fetch(HADICH_API_URLS_34, {
    method: 'GET',
    headers: {
      'content-type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => {
      for (let i = 0; i < JSON.parse(JSON.stringify(data)).length; i++) {
        var HadithArabic = JSON.parse(JSON.stringify(data))[i]['hadithArabic']
        var HadithEnglish = JSON.parse(JSON.stringify(data))[i]['hadithEnglish']
        var HadithBengali = JSON.parse(JSON.stringify(data))[i]['hadithBengali']

        var Hadic_Topic = JSON.parse(JSON.stringify(data))[i]['topicName']
        var HadithNo = JSON.parse(JSON.stringify(data))[i]['hadithNo']
        var Thesequence = JSON.parse(JSON.stringify(data))[i]['thesequence']
        var ChapterId = JSON.parse(JSON.stringify(data))[i]['chapterId']
        var BookId = JSON.parse(JSON.stringify(data))[i]['bookId']
        var SectionId = JSON.parse(JSON.stringify(data))[i]['sectionId']

        var html = `
        <div class="item">
            <h3 class="topic">HADICH TOPIC: ${Hadic_Topic}</h3>
            <p class="text-capitalize py-2 my-2 details hadithNo">HadithNo: ${HadithNo}</p>
            <p class="text-capitalize py-2 my-2 details thesequence">Thesequence: 
              ${Thesequence}
            </p>
            <p class="text-capitalize py-2 my-2 details chapterId">ChapterId: ${ChapterId}</p>
            <p class="text-capitalize py-2 my-2 details bookId">BookId: ${BookId}</p>
            <p class="text-capitalize py-2 my-2 details sectionId">SectionId: ${SectionId}</p>
            <p class="desch arabic">${HadithArabic}</p>
            <p class="desch bangla">${HadithBengali}</p>
            <p class="desch english">${HadithEnglish}</p>
          </div>
        `
        content.innerHTML += html
      }
    })
  await fetch(HADICH_API_URLS_35, {
    method: 'GET',
    headers: {
      'content-type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => {
      for (let i = 0; i < JSON.parse(JSON.stringify(data)).length; i++) {
        var HadithArabic = JSON.parse(JSON.stringify(data))[i]['hadithArabic']
        var HadithEnglish = JSON.parse(JSON.stringify(data))[i]['hadithEnglish']
        var HadithBengali = JSON.parse(JSON.stringify(data))[i]['hadithBengali']

        var Hadic_Topic = JSON.parse(JSON.stringify(data))[i]['topicName']
        var HadithNo = JSON.parse(JSON.stringify(data))[i]['hadithNo']
        var Thesequence = JSON.parse(JSON.stringify(data))[i]['thesequence']
        var ChapterId = JSON.parse(JSON.stringify(data))[i]['chapterId']
        var BookId = JSON.parse(JSON.stringify(data))[i]['bookId']
        var SectionId = JSON.parse(JSON.stringify(data))[i]['sectionId']

        var html = `
        <div class="item">
            <h3 class="topic">HADICH TOPIC: ${Hadic_Topic}</h3>
            <p class="text-capitalize py-2 my-2 details hadithNo">HadithNo: ${HadithNo}</p>
            <p class="text-capitalize py-2 my-2 details thesequence">Thesequence: 
              ${Thesequence}
            </p>
            <p class="text-capitalize py-2 my-2 details chapterId">ChapterId: ${ChapterId}</p>
            <p class="text-capitalize py-2 my-2 details bookId">BookId: ${BookId}</p>
            <p class="text-capitalize py-2 my-2 details sectionId">SectionId: ${SectionId}</p>
            <p class="desch arabic">${HadithArabic}</p>
            <p class="desch bangla">${HadithBengali}</p>
            <p class="desch english">${HadithEnglish}</p>
          </div>
        `
        content.innerHTML += html
      }
    })
  await fetch(HADICH_API_URLS_36, {
    method: 'GET',
    headers: {
      'content-type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => {
      for (let i = 0; i < JSON.parse(JSON.stringify(data)).length; i++) {
        var HadithArabic = JSON.parse(JSON.stringify(data))[i]['hadithArabic']
        var HadithEnglish = JSON.parse(JSON.stringify(data))[i]['hadithEnglish']
        var HadithBengali = JSON.parse(JSON.stringify(data))[i]['hadithBengali']

        var Hadic_Topic = JSON.parse(JSON.stringify(data))[i]['topicName']
        var HadithNo = JSON.parse(JSON.stringify(data))[i]['hadithNo']
        var Thesequence = JSON.parse(JSON.stringify(data))[i]['thesequence']
        var ChapterId = JSON.parse(JSON.stringify(data))[i]['chapterId']
        var BookId = JSON.parse(JSON.stringify(data))[i]['bookId']
        var SectionId = JSON.parse(JSON.stringify(data))[i]['sectionId']

        var html = `
        <div class="item">
            <h3 class="topic">HADICH TOPIC: ${Hadic_Topic}</h3>
            <p class="text-capitalize py-2 my-2 details hadithNo">HadithNo: ${HadithNo}</p>
            <p class="text-capitalize py-2 my-2 details thesequence">Thesequence: 
              ${Thesequence}
            </p>
            <p class="text-capitalize py-2 my-2 details chapterId">ChapterId: ${ChapterId}</p>
            <p class="text-capitalize py-2 my-2 details bookId">BookId: ${BookId}</p>
            <p class="text-capitalize py-2 my-2 details sectionId">SectionId: ${SectionId}</p>
            <p class="desch arabic">${HadithArabic}</p>
            <p class="desch bangla">${HadithBengali}</p>
            <p class="desch english">${HadithEnglish}</p>
          </div>
        `
        content.innerHTML += html
      }
    })
  await fetch(HADICH_API_URLS_37, {
    method: 'GET',
    headers: {
      'content-type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => {
      for (let i = 0; i < JSON.parse(JSON.stringify(data)).length; i++) {
        var HadithArabic = JSON.parse(JSON.stringify(data))[i]['hadithArabic']
        var HadithEnglish = JSON.parse(JSON.stringify(data))[i]['hadithEnglish']
        var HadithBengali = JSON.parse(JSON.stringify(data))[i]['hadithBengali']

        var Hadic_Topic = JSON.parse(JSON.stringify(data))[i]['topicName']
        var HadithNo = JSON.parse(JSON.stringify(data))[i]['hadithNo']
        var Thesequence = JSON.parse(JSON.stringify(data))[i]['thesequence']
        var ChapterId = JSON.parse(JSON.stringify(data))[i]['chapterId']
        var BookId = JSON.parse(JSON.stringify(data))[i]['bookId']
        var SectionId = JSON.parse(JSON.stringify(data))[i]['sectionId']

        var html = `
        <div class="item">
            <h3 class="topic">HADICH TOPIC: ${Hadic_Topic}</h3>
            <p class="text-capitalize py-2 my-2 details hadithNo">HadithNo: ${HadithNo}</p>
            <p class="text-capitalize py-2 my-2 details thesequence">Thesequence: 
              ${Thesequence}
            </p>
            <p class="text-capitalize py-2 my-2 details chapterId">ChapterId: ${ChapterId}</p>
            <p class="text-capitalize py-2 my-2 details bookId">BookId: ${BookId}</p>
            <p class="text-capitalize py-2 my-2 details sectionId">SectionId: ${SectionId}</p>
            <p class="desch arabic">${HadithArabic}</p>
            <p class="desch bangla">${HadithBengali}</p>
            <p class="desch english">${HadithEnglish}</p>
          </div>
        `
        content.innerHTML += html
      }
    })
  await fetch(HADICH_API_URLS_38, {
    method: 'GET',
    headers: {
      'content-type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => {
      for (let i = 0; i < JSON.parse(JSON.stringify(data)).length; i++) {
        var HadithArabic = JSON.parse(JSON.stringify(data))[i]['hadithArabic']
        var HadithEnglish = JSON.parse(JSON.stringify(data))[i]['hadithEnglish']
        var HadithBengali = JSON.parse(JSON.stringify(data))[i]['hadithBengali']

        var Hadic_Topic = JSON.parse(JSON.stringify(data))[i]['topicName']
        var HadithNo = JSON.parse(JSON.stringify(data))[i]['hadithNo']
        var Thesequence = JSON.parse(JSON.stringify(data))[i]['thesequence']
        var ChapterId = JSON.parse(JSON.stringify(data))[i]['chapterId']
        var BookId = JSON.parse(JSON.stringify(data))[i]['bookId']
        var SectionId = JSON.parse(JSON.stringify(data))[i]['sectionId']

        var html = `
        <div class="item">
            <h3 class="topic">HADICH TOPIC: ${Hadic_Topic}</h3>
            <p class="text-capitalize py-2 my-2 details hadithNo">HadithNo: ${HadithNo}</p>
            <p class="text-capitalize py-2 my-2 details thesequence">Thesequence: 
              ${Thesequence}
            </p>
            <p class="text-capitalize py-2 my-2 details chapterId">ChapterId: ${ChapterId}</p>
            <p class="text-capitalize py-2 my-2 details bookId">BookId: ${BookId}</p>
            <p class="text-capitalize py-2 my-2 details sectionId">SectionId: ${SectionId}</p>
            <p class="desch arabic">${HadithArabic}</p>
            <p class="desch bangla">${HadithBengali}</p>
            <p class="desch english">${HadithEnglish}</p>
          </div>
        `
        content.innerHTML += html
      }
    })
  await fetch(HADICH_API_URLS_39, {
    method: 'GET',
    headers: {
      'content-type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => {
      for (let i = 0; i < JSON.parse(JSON.stringify(data)).length; i++) {
        var HadithArabic = JSON.parse(JSON.stringify(data))[i]['hadithArabic']
        var HadithEnglish = JSON.parse(JSON.stringify(data))[i]['hadithEnglish']
        var HadithBengali = JSON.parse(JSON.stringify(data))[i]['hadithBengali']

        var Hadic_Topic = JSON.parse(JSON.stringify(data))[i]['topicName']
        var HadithNo = JSON.parse(JSON.stringify(data))[i]['hadithNo']
        var Thesequence = JSON.parse(JSON.stringify(data))[i]['thesequence']
        var ChapterId = JSON.parse(JSON.stringify(data))[i]['chapterId']
        var BookId = JSON.parse(JSON.stringify(data))[i]['bookId']
        var SectionId = JSON.parse(JSON.stringify(data))[i]['sectionId']

        var html = `
        <div class="item">
            <h3 class="topic">HADICH TOPIC: ${Hadic_Topic}</h3>
            <p class="text-capitalize py-2 my-2 details hadithNo">HadithNo: ${HadithNo}</p>
            <p class="text-capitalize py-2 my-2 details thesequence">Thesequence: 
              ${Thesequence}
            </p>
            <p class="text-capitalize py-2 my-2 details chapterId">ChapterId: ${ChapterId}</p>
            <p class="text-capitalize py-2 my-2 details bookId">BookId: ${BookId}</p>
            <p class="text-capitalize py-2 my-2 details sectionId">SectionId: ${SectionId}</p>
            <p class="desch arabic">${HadithArabic}</p>
            <p class="desch bangla">${HadithBengali}</p>
            <p class="desch english">${HadithEnglish}</p>
          </div>
        `
        content.innerHTML += html
      }
    })
  await fetch(HADICH_API_URLS_40, {
    method: 'GET',
    headers: {
      'content-type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => {
      for (let i = 0; i < JSON.parse(JSON.stringify(data)).length; i++) {
        var HadithArabic = JSON.parse(JSON.stringify(data))[i]['hadithArabic']
        var HadithEnglish = JSON.parse(JSON.stringify(data))[i]['hadithEnglish']
        var HadithBengali = JSON.parse(JSON.stringify(data))[i]['hadithBengali']

        var Hadic_Topic = JSON.parse(JSON.stringify(data))[i]['topicName']
        var HadithNo = JSON.parse(JSON.stringify(data))[i]['hadithNo']
        var Thesequence = JSON.parse(JSON.stringify(data))[i]['thesequence']
        var ChapterId = JSON.parse(JSON.stringify(data))[i]['chapterId']
        var BookId = JSON.parse(JSON.stringify(data))[i]['bookId']
        var SectionId = JSON.parse(JSON.stringify(data))[i]['sectionId']

        var html = `
        <div class="item">
            <h3 class="topic">HADICH TOPIC: ${Hadic_Topic}</h3>
            <p class="text-capitalize py-2 my-2 details hadithNo">HadithNo: ${HadithNo}</p>
            <p class="text-capitalize py-2 my-2 details thesequence">Thesequence: 
              ${Thesequence}
            </p>
            <p class="text-capitalize py-2 my-2 details chapterId">ChapterId: ${ChapterId}</p>
            <p class="text-capitalize py-2 my-2 details bookId">BookId: ${BookId}</p>
            <p class="text-capitalize py-2 my-2 details sectionId">SectionId: ${SectionId}</p>
            <p class="desch arabic">${HadithArabic}</p>
            <p class="desch bangla">${HadithBengali}</p>
            <p class="desch english">${HadithEnglish}</p>
          </div>
        `
        content.innerHTML += html
      }
    })
  await fetch(HADICH_API_URLS_41, {
    method: 'GET',
    headers: {
      'content-type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => {
      for (let i = 0; i < JSON.parse(JSON.stringify(data)).length; i++) {
        var HadithArabic = JSON.parse(JSON.stringify(data))[i]['hadithArabic']
        var HadithEnglish = JSON.parse(JSON.stringify(data))[i]['hadithEnglish']
        var HadithBengali = JSON.parse(JSON.stringify(data))[i]['hadithBengali']

        var Hadic_Topic = JSON.parse(JSON.stringify(data))[i]['topicName']
        var HadithNo = JSON.parse(JSON.stringify(data))[i]['hadithNo']
        var Thesequence = JSON.parse(JSON.stringify(data))[i]['thesequence']
        var ChapterId = JSON.parse(JSON.stringify(data))[i]['chapterId']
        var BookId = JSON.parse(JSON.stringify(data))[i]['bookId']
        var SectionId = JSON.parse(JSON.stringify(data))[i]['sectionId']

        var html = `
        <div class="item">
            <h3 class="topic">HADICH TOPIC: ${Hadic_Topic}</h3>
            <p class="text-capitalize py-2 my-2 details hadithNo">HadithNo: ${HadithNo}</p>
            <p class="text-capitalize py-2 my-2 details thesequence">Thesequence: 
              ${Thesequence}
            </p>
            <p class="text-capitalize py-2 my-2 details chapterId">ChapterId: ${ChapterId}</p>
            <p class="text-capitalize py-2 my-2 details bookId">BookId: ${BookId}</p>
            <p class="text-capitalize py-2 my-2 details sectionId">SectionId: ${SectionId}</p>
            <p class="desch arabic">${HadithArabic}</p>
            <p class="desch bangla">${HadithBengali}</p>
            <p class="desch english">${HadithEnglish}</p>
          </div>
        `
        content.innerHTML += html
      }
    })
  await fetch(HADICH_API_URLS_42, {
    method: 'GET',
    headers: {
      'content-type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => {
      for (let i = 0; i < JSON.parse(JSON.stringify(data)).length; i++) {
        var HadithArabic = JSON.parse(JSON.stringify(data))[i]['hadithArabic']
        var HadithEnglish = JSON.parse(JSON.stringify(data))[i]['hadithEnglish']
        var HadithBengali = JSON.parse(JSON.stringify(data))[i]['hadithBengali']

        var Hadic_Topic = JSON.parse(JSON.stringify(data))[i]['topicName']
        var HadithNo = JSON.parse(JSON.stringify(data))[i]['hadithNo']
        var Thesequence = JSON.parse(JSON.stringify(data))[i]['thesequence']
        var ChapterId = JSON.parse(JSON.stringify(data))[i]['chapterId']
        var BookId = JSON.parse(JSON.stringify(data))[i]['bookId']
        var SectionId = JSON.parse(JSON.stringify(data))[i]['sectionId']

        var html = `
        <div class="item">
            <h3 class="topic">HADICH TOPIC: ${Hadic_Topic}</h3>
            <p class="text-capitalize py-2 my-2 details hadithNo">HadithNo: ${HadithNo}</p>
            <p class="text-capitalize py-2 my-2 details thesequence">Thesequence: 
              ${Thesequence}
            </p>
            <p class="text-capitalize py-2 my-2 details chapterId">ChapterId: ${ChapterId}</p>
            <p class="text-capitalize py-2 my-2 details bookId">BookId: ${BookId}</p>
            <p class="text-capitalize py-2 my-2 details sectionId">SectionId: ${SectionId}</p>
            <p class="desch arabic">${HadithArabic}</p>
            <p class="desch bangla">${HadithBengali}</p>
            <p class="desch english">${HadithEnglish}</p>
          </div>
        `
        content.innerHTML += html
      }
    })
  await fetch(HADICH_API_URLS_43, {
    method: 'GET',
    headers: {
      'content-type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => {
      for (let i = 0; i < JSON.parse(JSON.stringify(data)).length; i++) {
        var HadithArabic = JSON.parse(JSON.stringify(data))[i]['hadithArabic']
        var HadithEnglish = JSON.parse(JSON.stringify(data))[i]['hadithEnglish']
        var HadithBengali = JSON.parse(JSON.stringify(data))[i]['hadithBengali']

        var Hadic_Topic = JSON.parse(JSON.stringify(data))[i]['topicName']
        var HadithNo = JSON.parse(JSON.stringify(data))[i]['hadithNo']
        var Thesequence = JSON.parse(JSON.stringify(data))[i]['thesequence']
        var ChapterId = JSON.parse(JSON.stringify(data))[i]['chapterId']
        var BookId = JSON.parse(JSON.stringify(data))[i]['bookId']
        var SectionId = JSON.parse(JSON.stringify(data))[i]['sectionId']

        var html = `
        <div class="item">
            <h3 class="topic">HADICH TOPIC: ${Hadic_Topic}</h3>
            <p class="text-capitalize py-2 my-2 details hadithNo">HadithNo: ${HadithNo}</p>
            <p class="text-capitalize py-2 my-2 details thesequence">Thesequence: 
              ${Thesequence}
            </p>
            <p class="text-capitalize py-2 my-2 details chapterId">ChapterId: ${ChapterId}</p>
            <p class="text-capitalize py-2 my-2 details bookId">BookId: ${BookId}</p>
            <p class="text-capitalize py-2 my-2 details sectionId">SectionId: ${SectionId}</p>
            <p class="desch arabic">${HadithArabic}</p>
            <p class="desch bangla">${HadithBengali}</p>
            <p class="desch english">${HadithEnglish}</p>
          </div>
        `
        content.innerHTML += html
      }
    })
  await fetch(HADICH_API_URLS_44, {
    method: 'GET',
    headers: {
      'content-type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => {
      for (let i = 0; i < JSON.parse(JSON.stringify(data)).length; i++) {
        var HadithArabic = JSON.parse(JSON.stringify(data))[i]['hadithArabic']
        var HadithEnglish = JSON.parse(JSON.stringify(data))[i]['hadithEnglish']
        var HadithBengali = JSON.parse(JSON.stringify(data))[i]['hadithBengali']

        var Hadic_Topic = JSON.parse(JSON.stringify(data))[i]['topicName']
        var HadithNo = JSON.parse(JSON.stringify(data))[i]['hadithNo']
        var Thesequence = JSON.parse(JSON.stringify(data))[i]['thesequence']
        var ChapterId = JSON.parse(JSON.stringify(data))[i]['chapterId']
        var BookId = JSON.parse(JSON.stringify(data))[i]['bookId']
        var SectionId = JSON.parse(JSON.stringify(data))[i]['sectionId']

        var html = `
        <div class="item">
            <h3 class="topic">HADICH TOPIC: ${Hadic_Topic}</h3>
            <p class="text-capitalize py-2 my-2 details hadithNo">HadithNo: ${HadithNo}</p>
            <p class="text-capitalize py-2 my-2 details thesequence">Thesequence: 
              ${Thesequence}
            </p>
            <p class="text-capitalize py-2 my-2 details chapterId">ChapterId: ${ChapterId}</p>
            <p class="text-capitalize py-2 my-2 details bookId">BookId: ${BookId}</p>
            <p class="text-capitalize py-2 my-2 details sectionId">SectionId: ${SectionId}</p>
            <p class="desch arabic">${HadithArabic}</p>
            <p class="desch bangla">${HadithBengali}</p>
            <p class="desch english">${HadithEnglish}</p>
          </div>
        `
        content.innerHTML += html
      }
    })
  await fetch(HADICH_API_URLS_45, {
    method: 'GET',
    headers: {
      'content-type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => {
      for (let i = 0; i < JSON.parse(JSON.stringify(data)).length; i++) {
        var HadithArabic = JSON.parse(JSON.stringify(data))[i]['hadithArabic']
        var HadithEnglish = JSON.parse(JSON.stringify(data))[i]['hadithEnglish']
        var HadithBengali = JSON.parse(JSON.stringify(data))[i]['hadithBengali']

        var Hadic_Topic = JSON.parse(JSON.stringify(data))[i]['topicName']
        var HadithNo = JSON.parse(JSON.stringify(data))[i]['hadithNo']
        var Thesequence = JSON.parse(JSON.stringify(data))[i]['thesequence']
        var ChapterId = JSON.parse(JSON.stringify(data))[i]['chapterId']
        var BookId = JSON.parse(JSON.stringify(data))[i]['bookId']
        var SectionId = JSON.parse(JSON.stringify(data))[i]['sectionId']

        var html = `
        <div class="item">
            <h3 class="topic">HADICH TOPIC: ${Hadic_Topic}</h3>
            <p class="text-capitalize py-2 my-2 details hadithNo">HadithNo: ${HadithNo}</p>
            <p class="text-capitalize py-2 my-2 details thesequence">Thesequence: 
              ${Thesequence}
            </p>
            <p class="text-capitalize py-2 my-2 details chapterId">ChapterId: ${ChapterId}</p>
            <p class="text-capitalize py-2 my-2 details bookId">BookId: ${BookId}</p>
            <p class="text-capitalize py-2 my-2 details sectionId">SectionId: ${SectionId}</p>
            <p class="desch arabic">${HadithArabic}</p>
            <p class="desch bangla">${HadithBengali}</p>
            <p class="desch english">${HadithEnglish}</p>
          </div>
        `
        content.innerHTML += html
      }
    })
  await fetch(HADICH_API_URLS_46, {
    method: 'GET',
    headers: {
      'content-type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => {
      for (let i = 0; i < JSON.parse(JSON.stringify(data)).length; i++) {
        var HadithArabic = JSON.parse(JSON.stringify(data))[i]['hadithArabic']
        var HadithEnglish = JSON.parse(JSON.stringify(data))[i]['hadithEnglish']
        var HadithBengali = JSON.parse(JSON.stringify(data))[i]['hadithBengali']

        var Hadic_Topic = JSON.parse(JSON.stringify(data))[i]['topicName']
        var HadithNo = JSON.parse(JSON.stringify(data))[i]['hadithNo']
        var Thesequence = JSON.parse(JSON.stringify(data))[i]['thesequence']
        var ChapterId = JSON.parse(JSON.stringify(data))[i]['chapterId']
        var BookId = JSON.parse(JSON.stringify(data))[i]['bookId']
        var SectionId = JSON.parse(JSON.stringify(data))[i]['sectionId']

        var html = `
        <div class="item">
            <h3 class="topic">HADICH TOPIC: ${Hadic_Topic}</h3>
            <p class="text-capitalize py-2 my-2 details hadithNo">HadithNo: ${HadithNo}</p>
            <p class="text-capitalize py-2 my-2 details thesequence">Thesequence: 
              ${Thesequence}
            </p>
            <p class="text-capitalize py-2 my-2 details chapterId">ChapterId: ${ChapterId}</p>
            <p class="text-capitalize py-2 my-2 details bookId">BookId: ${BookId}</p>
            <p class="text-capitalize py-2 my-2 details sectionId">SectionId: ${SectionId}</p>
            <p class="desch arabic">${HadithArabic}</p>
            <p class="desch bangla">${HadithBengali}</p>
            <p class="desch english">${HadithEnglish}</p>
          </div>
        `
        content.innerHTML += html
      }
    })
  await fetch(HADICH_API_URLS_47, {
    method: 'GET',
    headers: {
      'content-type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => {
      for (let i = 0; i < JSON.parse(JSON.stringify(data)).length; i++) {
        var HadithArabic = JSON.parse(JSON.stringify(data))[i]['hadithArabic']
        var HadithEnglish = JSON.parse(JSON.stringify(data))[i]['hadithEnglish']
        var HadithBengali = JSON.parse(JSON.stringify(data))[i]['hadithBengali']

        var Hadic_Topic = JSON.parse(JSON.stringify(data))[i]['topicName']
        var HadithNo = JSON.parse(JSON.stringify(data))[i]['hadithNo']
        var Thesequence = JSON.parse(JSON.stringify(data))[i]['thesequence']
        var ChapterId = JSON.parse(JSON.stringify(data))[i]['chapterId']
        var BookId = JSON.parse(JSON.stringify(data))[i]['bookId']
        var SectionId = JSON.parse(JSON.stringify(data))[i]['sectionId']

        var html = `
        <div class="item">
            <h3 class="topic">HADICH TOPIC: ${Hadic_Topic}</h3>
            <p class="text-capitalize py-2 my-2 details hadithNo">HadithNo: ${HadithNo}</p>
            <p class="text-capitalize py-2 my-2 details thesequence">Thesequence: 
              ${Thesequence}
            </p>
            <p class="text-capitalize py-2 my-2 details chapterId">ChapterId: ${ChapterId}</p>
            <p class="text-capitalize py-2 my-2 details bookId">BookId: ${BookId}</p>
            <p class="text-capitalize py-2 my-2 details sectionId">SectionId: ${SectionId}</p>
            <p class="desch arabic">${HadithArabic}</p>
            <p class="desch bangla">${HadithBengali}</p>
            <p class="desch english">${HadithEnglish}</p>
          </div>
        `
        content.innerHTML += html
      }
    })
  await fetch(HADICH_API_URLS_48, {
    method: 'GET',
    headers: {
      'content-type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => {
      for (let i = 0; i < JSON.parse(JSON.stringify(data)).length; i++) {
        var HadithArabic = JSON.parse(JSON.stringify(data))[i]['hadithArabic']
        var HadithEnglish = JSON.parse(JSON.stringify(data))[i]['hadithEnglish']
        var HadithBengali = JSON.parse(JSON.stringify(data))[i]['hadithBengali']

        var Hadic_Topic = JSON.parse(JSON.stringify(data))[i]['topicName']
        var HadithNo = JSON.parse(JSON.stringify(data))[i]['hadithNo']
        var Thesequence = JSON.parse(JSON.stringify(data))[i]['thesequence']
        var ChapterId = JSON.parse(JSON.stringify(data))[i]['chapterId']
        var BookId = JSON.parse(JSON.stringify(data))[i]['bookId']
        var SectionId = JSON.parse(JSON.stringify(data))[i]['sectionId']

        var html = `
        <div class="item">
            <h3 class="topic">HADICH TOPIC: ${Hadic_Topic}</h3>
            <p class="text-capitalize py-2 my-2 details hadithNo">HadithNo: ${HadithNo}</p>
            <p class="text-capitalize py-2 my-2 details thesequence">Thesequence: 
              ${Thesequence}
            </p>
            <p class="text-capitalize py-2 my-2 details chapterId">ChapterId: ${ChapterId}</p>
            <p class="text-capitalize py-2 my-2 details bookId">BookId: ${BookId}</p>
            <p class="text-capitalize py-2 my-2 details sectionId">SectionId: ${SectionId}</p>
            <p class="desch arabic">${HadithArabic}</p>
            <p class="desch bangla">${HadithBengali}</p>
            <p class="desch english">${HadithEnglish}</p>
          </div>
        `
        content.innerHTML += html
      }
    })
  await fetch(HADICH_API_URLS_49, {
    method: 'GET',
    headers: {
      'content-type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => {
      for (let i = 0; i < JSON.parse(JSON.stringify(data)).length; i++) {
        var HadithArabic = JSON.parse(JSON.stringify(data))[i]['hadithArabic']
        var HadithEnglish = JSON.parse(JSON.stringify(data))[i]['hadithEnglish']
        var HadithBengali = JSON.parse(JSON.stringify(data))[i]['hadithBengali']

        var Hadic_Topic = JSON.parse(JSON.stringify(data))[i]['topicName']
        var HadithNo = JSON.parse(JSON.stringify(data))[i]['hadithNo']
        var Thesequence = JSON.parse(JSON.stringify(data))[i]['thesequence']
        var ChapterId = JSON.parse(JSON.stringify(data))[i]['chapterId']
        var BookId = JSON.parse(JSON.stringify(data))[i]['bookId']
        var SectionId = JSON.parse(JSON.stringify(data))[i]['sectionId']

        var html = `
        <div class="item">
            <h3 class="topic">HADICH TOPIC: ${Hadic_Topic}</h3>
            <p class="text-capitalize py-2 my-2 details hadithNo">HadithNo: ${HadithNo}</p>
            <p class="text-capitalize py-2 my-2 details thesequence">Thesequence: 
              ${Thesequence}
            </p>
            <p class="text-capitalize py-2 my-2 details chapterId">ChapterId: ${ChapterId}</p>
            <p class="text-capitalize py-2 my-2 details bookId">BookId: ${BookId}</p>
            <p class="text-capitalize py-2 my-2 details sectionId">SectionId: ${SectionId}</p>
            <p class="desch arabic">${HadithArabic}</p>
            <p class="desch bangla">${HadithBengali}</p>
            <p class="desch english">${HadithEnglish}</p>
          </div>
        `
        content.innerHTML += html
      }
    })
  await fetch(HADICH_API_URLS_50, {
    method: 'GET',
    headers: {
      'content-type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => {
      for (let i = 0; i < JSON.parse(JSON.stringify(data)).length; i++) {
        var HadithArabic = JSON.parse(JSON.stringify(data))[i]['hadithArabic']
        var HadithEnglish = JSON.parse(JSON.stringify(data))[i]['hadithEnglish']
        var HadithBengali = JSON.parse(JSON.stringify(data))[i]['hadithBengali']

        var Hadic_Topic = JSON.parse(JSON.stringify(data))[i]['topicName']
        var HadithNo = JSON.parse(JSON.stringify(data))[i]['hadithNo']
        var Thesequence = JSON.parse(JSON.stringify(data))[i]['thesequence']
        var ChapterId = JSON.parse(JSON.stringify(data))[i]['chapterId']
        var BookId = JSON.parse(JSON.stringify(data))[i]['bookId']
        var SectionId = JSON.parse(JSON.stringify(data))[i]['sectionId']

        var html = `
        <div class="item">
            <h3 class="topic">HADICH TOPIC: ${Hadic_Topic}</h3>
            <p class="text-capitalize py-2 my-2 details hadithNo">HadithNo: ${HadithNo}</p>
            <p class="text-capitalize py-2 my-2 details thesequence">Thesequence: 
              ${Thesequence}
            </p>
            <p class="text-capitalize py-2 my-2 details chapterId">ChapterId: ${ChapterId}</p>
            <p class="text-capitalize py-2 my-2 details bookId">BookId: ${BookId}</p>
            <p class="text-capitalize py-2 my-2 details sectionId">SectionId: ${SectionId}</p>
            <p class="desch arabic">${HadithArabic}</p>
            <p class="desch bangla">${HadithBengali}</p>
            <p class="desch english">${HadithEnglish}</p>
          </div>
        `
        content.innerHTML += html
      }
    })
  await fetch(HADICH_API_URLS_51, {
    method: 'GET',
    headers: {
      'content-type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => {
      for (let i = 0; i < JSON.parse(JSON.stringify(data)).length; i++) {
        var HadithArabic = JSON.parse(JSON.stringify(data))[i]['hadithArabic']
        var HadithEnglish = JSON.parse(JSON.stringify(data))[i]['hadithEnglish']
        var HadithBengali = JSON.parse(JSON.stringify(data))[i]['hadithBengali']

        var Hadic_Topic = JSON.parse(JSON.stringify(data))[i]['topicName']
        var HadithNo = JSON.parse(JSON.stringify(data))[i]['hadithNo']
        var Thesequence = JSON.parse(JSON.stringify(data))[i]['thesequence']
        var ChapterId = JSON.parse(JSON.stringify(data))[i]['chapterId']
        var BookId = JSON.parse(JSON.stringify(data))[i]['bookId']
        var SectionId = JSON.parse(JSON.stringify(data))[i]['sectionId']

        var html = `
        <div class="item">
            <h3 class="topic">HADICH TOPIC: ${Hadic_Topic}</h3>
            <p class="text-capitalize py-2 my-2 details hadithNo">HadithNo: ${HadithNo}</p>
            <p class="text-capitalize py-2 my-2 details thesequence">Thesequence: 
              ${Thesequence}
            </p>
            <p class="text-capitalize py-2 my-2 details chapterId">ChapterId: ${ChapterId}</p>
            <p class="text-capitalize py-2 my-2 details bookId">BookId: ${BookId}</p>
            <p class="text-capitalize py-2 my-2 details sectionId">SectionId: ${SectionId}</p>
            <p class="desch arabic">${HadithArabic}</p>
            <p class="desch bangla">${HadithBengali}</p>
            <p class="desch english">${HadithEnglish}</p>
          </div>
        `
        content.innerHTML += html
      }
    })
  await fetch(HADICH_API_URLS_52, {
    method: 'GET',
    headers: {
      'content-type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => {
      for (let i = 0; i < JSON.parse(JSON.stringify(data)).length; i++) {
        var HadithArabic = JSON.parse(JSON.stringify(data))[i]['hadithArabic']
        var HadithEnglish = JSON.parse(JSON.stringify(data))[i]['hadithEnglish']
        var HadithBengali = JSON.parse(JSON.stringify(data))[i]['hadithBengali']

        var Hadic_Topic = JSON.parse(JSON.stringify(data))[i]['topicName']
        var HadithNo = JSON.parse(JSON.stringify(data))[i]['hadithNo']
        var Thesequence = JSON.parse(JSON.stringify(data))[i]['thesequence']
        var ChapterId = JSON.parse(JSON.stringify(data))[i]['chapterId']
        var BookId = JSON.parse(JSON.stringify(data))[i]['bookId']
        var SectionId = JSON.parse(JSON.stringify(data))[i]['sectionId']

        var html = `
        <div class="item">
            <h3 class="topic">HADICH TOPIC: ${Hadic_Topic}</h3>
            <p class="text-capitalize py-2 my-2 details hadithNo">HadithNo: ${HadithNo}</p>
            <p class="text-capitalize py-2 my-2 details thesequence">Thesequence: 
              ${Thesequence}
            </p>
            <p class="text-capitalize py-2 my-2 details chapterId">ChapterId: ${ChapterId}</p>
            <p class="text-capitalize py-2 my-2 details bookId">BookId: ${BookId}</p>
            <p class="text-capitalize py-2 my-2 details sectionId">SectionId: ${SectionId}</p>
            <p class="desch arabic">${HadithArabic}</p>
            <p class="desch bangla">${HadithBengali}</p>
            <p class="desch english">${HadithEnglish}</p>
          </div>
        `
        content.innerHTML += html
      }
    })
}
Get1()
