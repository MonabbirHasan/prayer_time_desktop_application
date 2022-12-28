var HADICH_API_URLS_1 = `https://alquranbd.com/api/hadith/abuDaud/1`
var HADICH_API_URLS_2 = `https://alquranbd.com/api/hadith/abuDaud/2`
var HADICH_API_URLS_3 = `https://alquranbd.com/api/hadith/abuDaud/3`
var HADICH_API_URLS_4 = `https://alquranbd.com/api/hadith/abuDaud/4`
var HADICH_API_URLS_5 = `https://alquranbd.com/api/hadith/abuDaud/5`
var HADICH_API_URLS_6 = `https://alquranbd.com/api/hadith/abuDaud/6`
var HADICH_API_URLS_7 = `https://alquranbd.com/api/hadith/abuDaud/7`
var HADICH_API_URLS_8 = `https://alquranbd.com/api/hadith/abuDaud/8`
var HADICH_API_URLS_9 = `https://alquranbd.com/api/hadith/abuDaud/9`
var HADICH_API_URLS_10 = `https://alquranbd.com/api/hadith/abuDaud/10`
var HADICH_API_URLS_11 = `https://alquranbd.com/api/hadith/abuDaud/11`
var HADICH_API_URLS_12 = `https://alquranbd.com/api/hadith/abuDaud/12`
var HADICH_API_URLS_13 = `https://alquranbd.com/api/hadith/abuDaud/13`
var HADICH_API_URLS_14 = `https://alquranbd.com/api/hadith/abuDaud/14`
var HADICH_API_URLS_15 = `https://alquranbd.com/api/hadith/abuDaud/15`
var HADICH_API_URLS_16 = `https://alquranbd.com/api/hadith/abuDaud/16`
var HADICH_API_URLS_17 = `https://alquranbd.com/api/hadith/abuDaud/17`
var HADICH_API_URLS_18 = `https://alquranbd.com/api/hadith/abuDaud/18`
var HADICH_API_URLS_19 = `https://alquranbd.com/api/hadith/abuDaud/19`
var HADICH_API_URLS_20 = `https://alquranbd.com/api/hadith/abuDaud/20`
var HADICH_API_URLS_21 = `https://alquranbd.com/api/hadith/abuDaud/21`
var HADICH_API_URLS_22 = `https://alquranbd.com/api/hadith/abuDaud/22`
var HADICH_API_URLS_23 = `https://alquranbd.com/api/hadith/abuDaud/23`
var HADICH_API_URLS_24 = `https://alquranbd.com/api/hadith/abuDaud/24`
var HADICH_API_URLS_25 = `https://alquranbd.com/api/hadith/abuDaud/25`
var HADICH_API_URLS_26 = `https://alquranbd.com/api/hadith/abuDaud/26`
var HADICH_API_URLS_27 = `https://alquranbd.com/api/hadith/abuDaud/27`
var HADICH_API_URLS_28 = `https://alquranbd.com/api/hadith/abuDaud/28`
var HADICH_API_URLS_29 = `https://alquranbd.com/api/hadith/abuDaud/29`
var HADICH_API_URLS_30 = `https://alquranbd.com/api/hadith/abuDaud/30`
var HADICH_API_URLS_31 = `https://alquranbd.com/api/hadith/abuDaud/31`
var HADICH_API_URLS_32 = `https://alquranbd.com/api/hadith/abuDaud/32`
var HADICH_API_URLS_33 = `https://alquranbd.com/api/hadith/abuDaud/33`
var HADICH_API_URLS_34 = `https://alquranbd.com/api/hadith/abuDaud/34`
var HADICH_API_URLS_35 = `https://alquranbd.com/api/hadith/abuDaud/35`
var HADICH_API_URLS_36 = `https://alquranbd.com/api/hadith/abuDaud/36`
var HADICH_API_URLS_37 = `https://alquranbd.com/api/hadith/abuDaud/37`
var HADICH_API_URLS_38 = `https://alquranbd.com/api/hadith/abuDaud/38`

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
        hadithNo.textContent ='HadithNo: ' +  HadithNo
        thesequence.textContent =' Thesequence: ' +  Thesequence
        chapterId.textContent ='ChapterId: ' +  ChapterId
        bookId.textContent = 'BookId: ' + BookId
        sectionId.textContent ='SectionId: ' +  SectionId

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
            <h3 class="topic">Hadic_Topic: ${Hadic_Topic}</h3>
           <div class="details_hadich">
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
            <h3 class="topic">Hadic_Topic: ${Hadic_Topic}</h3>
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
            <h3 class="topic">Hadic_Topic: ${Hadic_Topic}</h3>
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
            <h3 class="topic">Hadic_Topic: ${Hadic_Topic}</h3>
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
            <h3 class="topic">Hadic_Topic: ${Hadic_Topic}</h3>
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
            <h3 class="topic">Hadic_Topic: ${Hadic_Topic}</h3>
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
            <h3 class="topic">Hadic_Topic: ${Hadic_Topic}</h3>
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
            <h3 class="topic">Hadic_Topic: ${Hadic_Topic}</h3>
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
            <h3 class="topic">Hadic_Topic: ${Hadic_Topic}</h3>
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
            <h3 class="topic">Hadic_Topic: ${Hadic_Topic}</h3>
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
            <h3 class="topic">Hadic_Topic: ${Hadic_Topic}</h3>
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
            <h3 class="topic">Hadic_Topic: ${Hadic_Topic}</h3>
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
            <h3 class="topic">Hadic_Topic: ${Hadic_Topic}</h3>
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
            <h3 class="topic">Hadic_Topic: ${Hadic_Topic}</h3>
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
            <h3 class="topic">Hadic_Topic: ${Hadic_Topic}</h3>
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
            <h3 class="topic">Hadic_Topic: ${Hadic_Topic}</h3>
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
            <h3 class="topic">Hadic_Topic: ${Hadic_Topic}</h3>
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
            <h3 class="topic">Hadic_Topic: ${Hadic_Topic}</h3>
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
            <h3 class="topic">Hadic_Topic: ${Hadic_Topic}</h3>
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
            <h3 class="topic">Hadic_Topic: ${Hadic_Topic}</h3>
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
            <h3 class="topic">Hadic_Topic: ${Hadic_Topic}</h3>
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
            <h3 class="topic">Hadic_Topic: ${Hadic_Topic}</h3>
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
            <h3 class="topic">Hadic_Topic: ${Hadic_Topic}</h3>
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
            <h3 class="topic">Hadic_Topic: ${Hadic_Topic}</h3>
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
            <h3 class="topic">Hadic_Topic: ${Hadic_Topic}</h3>
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
            <h3 class="topic">Hadic_Topic: ${Hadic_Topic}</h3>
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
            <h3 class="topic">Hadic_Topic: ${Hadic_Topic}</h3>
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
            <h3 class="topic">Hadic_Topic: ${Hadic_Topic}</h3>
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
            <h3 class="topic">Hadic_Topic: ${Hadic_Topic}</h3>
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
            <h3 class="topic">Hadic_Topic: ${Hadic_Topic}</h3>
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
            <h3 class="topic">Hadic_Topic: ${Hadic_Topic}</h3>
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
            <h3 class="topic">Hadic_Topic: ${Hadic_Topic}</h3>
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
            <h3 class="topic">Hadic_Topic: ${Hadic_Topic}</h3>
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
            <h3 class="topic">Hadic_Topic: ${Hadic_Topic}</h3>
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
            <h3 class="topic">Hadic_Topic: ${Hadic_Topic}</h3>
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
            <h3 class="topic">Hadic_Topic: ${Hadic_Topic}</h3>
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
            <h3 class="topic">Hadic_Topic: ${Hadic_Topic}</h3>
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