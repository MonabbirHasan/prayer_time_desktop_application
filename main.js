const { app, BrowserWindow, Menu, Notification, ipcMain } = require('electron')
Menu.setApplicationMenu(null)
const createWindow = () => {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    title: 'PRAYER TIME',
    icon: './image/app_icon.ico',
    webPreferences: {
      nodeIntegration: true,
    },
    maxHeight: 600,
    maximizable: false,
    minimizable: true,
    maxWidth: 1050,
    movable: true,
    center: true,
    darkTheme: false,
  })

  win.loadFile('index.html')
  const template = [
    {
      label: 'QURANUL KARIM',
      submenu: [
        {
          label: 'Listen Quran',
          click: function () {
            child = new BrowserWindow({
              width: 1150,
              height: 600,
              title: 'PRAYER TIME',
              icon: './image/app_icon.ico',
              maxHeight: 600,
              maximizable: false,
              minimizable: true,
              maxWidth: 1150,
              movable: true,
              center: true,
              darkTheme: false,
            })
            child.loadFile('./window/listen_surah.html')
            child.show()
          },
        },
        {
          label: 'Nasheed',
          click: function () {
            child = new BrowserWindow({
              parent: win,
              title: 'PRAYER TIME',
              icon: './image/app_icon.ico',
              maxHeight: 600,
              maximizable: false,
              minimizable: true,
              maxWidth: 1050,
              movable: true,
              center: true,
              darkTheme: false,
            })
            child.loadFile('./window/Video.html')
            child.show()
          },
        },
        {
          label: 'Read Arabic Quran',
          click: function () {
            child = new BrowserWindow({
              parent: win,
              title: 'PRAYER TIME',
              icon: './image/app_icon.ico',
              maxHeight: 600,
              maximizable: false,
              minimizable: true,
              maxWidth: 1050,
              movable: true,
              center: true,
              darkTheme: false,
            })
            child.loadFile('./window/read_surah.html')
            child.show()
            // child.webContents.openDevTools()
          },
        },
        {
          label: 'Read Bangla Quran',
          click: function () {
            child = new BrowserWindow({
              parent: win,
              title: 'PRAYER TIME',
              icon: './image/app_icon.ico',
              maxHeight: 600,
              maximizable: false,
              minimizable: true,
              maxWidth: 1050,
              movable: true,
              center: true,
              darkTheme: false,
            })
            child.loadFile('./window/read_Bangla_quran.html')
            child.show()
          },
        },
        {
          label: 'Read Qur Anul Karim',
          click: function () {
            child = new BrowserWindow({
              parent: win,
              title: 'PRAYER TIME',
              icon: './image/app_icon.ico',
              maxHeight: 600,
              maximizable: false,
              minimizable: true,
              maxWidth: 1050,
              movable: true,
              center: true,
              darkTheme: false,
            })
            child.loadFile('./window/read_quran_karim_arabic.html')
            child.show()
          },
        },
      ],
    },
    {
      label: 'SAHIH HADITH',
      submenu: [
        {
          label: 'Tirmizi sharif',
          click: function () {
            child = new BrowserWindow({
              parent: win,
              title: 'PRAYER TIME',
              icon: './image/app_icon.ico',
              maxHeight: 600,
              maximizable: false,
              minimizable: true,
              maxWidth: 1050,
              movable: true,
              center: true,
              darkTheme: false,
            })
            child.loadFile('./window/tirmidi.html')
            child.show()
          },
        },
        {
          label: 'Bukhari Sharif',
          click: function () {
            child = new BrowserWindow({
              parent: win,
              title: 'PRAYER TIME',
              icon: './image/app_icon.ico',
              maxHeight: 600,
              maximizable: false,
              minimizable: true,
              maxWidth: 1050,
              movable: true,
              center: true,
              darkTheme: false,
            })
            child.loadFile('./window/bukhari.html')
            child.show()
          },
        },
        {
          label: 'Muslim Sharif',
          click: function () {
            child = new BrowserWindow({
              parent: win,
              title: 'PRAYER TIME',
              icon: './image/app_icon.ico',
              maxHeight: 600,
              maximizable: false,
              minimizable: true,
              maxWidth: 1050,
              movable: true,
              center: true,
              darkTheme: false,
            })
            child.loadFile('./window/muslim.html')
            child.show()
          },
        },
        {
          label: 'Abu Daud Sharif',
          click: function () {
            child = new BrowserWindow({
              parent: win,
              title: 'PRAYER TIME',
              icon: './image/app_icon.ico',
              maxHeight: 600,
              maximizable: false,
              minimizable: true,
              maxWidth: 1050,
              movable: true,
              center: true,
              darkTheme: false,
            })
            child.loadFile('./window/abuDaud.html')
            child.show()
          },
        },
        {
          label: 'Sunan Ibn Majah',
          click: function () {
            child = new BrowserWindow({
              parent: win,
              title: 'PRAYER TIME',
              icon: './image/app_icon.ico',
              maxHeight: 600,
              maximizable: false,
              minimizable: true,
              maxWidth: 1050,
              movable: true,
              center: true,
              darkTheme: false,
            })
            child.loadFile('./window/ibnMajah.html')
            child.show()
          },
        },
        {
          label: 'Sahih Muslim (Ha)',
          click: function () {
            child = new BrowserWindow({
              parent: win,
              title: 'PRAYER TIME',
              icon: './image/app_icon.ico',
              maxHeight: 600,
              maximizable: false,
              minimizable: true,
              maxWidth: 1050,
              movable: true,
              center: true,
              darkTheme: false,
            })
            child.loadFile('./window/muslimHA.html')
            child.show()
          },
        },
        {
          label: 'Sahih (Riyadus Solihin)',
          click: function () {
            child = new BrowserWindow({
              parent: win,
              title: 'PRAYER TIME',
              icon: './image/app_icon.ico',
              maxHeight: 600,
              maximizable: false,
              minimizable: true,
              maxWidth: 1050,
              movable: true,
              center: true,
              darkTheme: false,
            })
            child.loadFile('./window/riyadusSalihin.html')
            child.show()
          },
        },
      ],
    },
    {
      label: 'EXTRA',
      submenu: [
        {
          label: 'The History Of Islam',
          click: function () {
            child = new BrowserWindow({
              title: 'PRAYER TIME',
              icon: './image/app_icon.ico',
              parent: win,
              maxHeight: 600,
              maximizable: false,
              minimizable: true,
              maxWidth: 1050,
              movable: true,
              center: true,
              darkTheme: false,
            })
            child.loadFile('./window/history_in_islam.html')
            child.show()
          },
        },
        {
          label: 'Advise For Muslim',
          click: function () {
            child = new BrowserWindow({
              parent: win,
              title: 'PRAYER TIME',
              icon: './image/app_icon.ico',
              parent: win,
              maxHeight: 600,
              maximizable: false,
              minimizable: true,
              maxWidth: 1050,
              movable: true,
              center: true,
              darkTheme: false,
            })
            child.loadFile('./window/muslim_advise.html')
            child.show()
          },
        },
        {
          label: 'Iman And Islam',
          click: function () {
            child = new BrowserWindow({
              parent: win,
              title: 'PRAYER TIME',
              icon: './image/app_icon.ico',
              parent: win,
              maxHeight: 600,
              maximizable: false,
              minimizable: true,
              maxWidth: 1050,
              movable: true,
              center: true,
              darkTheme: false,
            })
            child.loadFile('./window/iman_islam.html')
            child.show()
          },
        },
        {
          label: 'The Jinn Story',
          click: function () {
            child = new BrowserWindow({
              parent: win,
              title: 'PRAYER TIME',
              icon: './image/app_icon.ico',
              parent: win,
              maxHeight: 600,
              maximizable: false,
              minimizable: true,
              maxWidth: 1050,
              movable: true,
              center: true,
              darkTheme: false,
            })
            child.loadFile('./window/Jin_Story.html')
            child.show()
          },
        },
        {
          label: 'Sahih Bukhari PDF',
          click: function () {
            child = new BrowserWindow({
              parent: win,
              title: 'PRAYER TIME',
              icon: './image/app_icon.ico',
              parent: win,
              maxHeight: 600,
              maximizable: false,
              minimizable: true,
              maxWidth: 1050,
              movable: true,
              center: true,
              darkTheme: false,
            })
            child.loadFile('./window/bukhari_full.html')
            child.show()
          },
        },
        {
          label: 'Weather Today',
          click: function () {
            child = new BrowserWindow({
              parent: win,
              title: 'PRAYER TIME',
              icon: './image/app_icon.ico',
              parent: win,
              maxHeight: 600,
              maximizable: false,
              minimizable: true,
              maxWidth: 1050,
              movable: true,
              center: true,
              darkTheme: false,
            })
            child.loadFile('./window/weather.html')
            child.show()
            // child.webContents.openDevTools()

          },
        },
        {
          label: 'Open WebCam',
          click: function () {
            child = new BrowserWindow({
              parent: win,
              title: 'PRAYER TIME',
              icon: './image/app_icon.ico',
              parent: win,
              maxHeight: 600,
              maximizable: false,
              minimizable: true,
              maxWidth: 1050,
              movable: true,
              center: true,
              darkTheme: false,
            })
            child.loadFile('./window/Webcam.html')
            child.show()
            // child.webContents.openDevTools()
          },
        },
        {
          label: 'Set Alarm',
          click: function () {
            child = new BrowserWindow({
              width: 1000,
              title: 'PRAYER TIME',
              icon: './image/app_icon.ico',
              maxHeight: 600,
              maximizable: false,
              minimizable: true,
              maxWidth: 1150,
              movable: true,
              center: true,
              darkTheme: false,
            })
            child.loadFile('./window/Alarm.html')
            child.show()
            // child.webContents.openDevTools()
          },
        },
        {
          label: 'SignUp',
          click: function () {
            child = new BrowserWindow({
              parent: win,
              title: 'PRAYER TIME',
              icon: './image/app_icon.ico',
              title: 'PRAYER TIME',
              icon: './image/app_icon.ico',
              parent: win,
              maxHeight: 600,
              maximizable: false,
              minimizable: true,
              maxWidth: 1050,
              movable: true,
              center: true,
              darkTheme: false,
            })
            child.loadFile('./window/SignUp.html')
            child.show()
            // child.webContents.openDevTools()
          },
        },
      ],
    },
    {
      label: 'ABOUT',
      submenu: [
        {
          label: 'Read Developer',
          click: function () {
            child = new BrowserWindow({
              parent: win,
              title: 'PRAYER TIME',
              icon: './image/app_icon.ico',
              parent: win,
              maxHeight: 600,
              maximizable: false,
              minimizable: true,
              maxWidth: 1050,
              movable: true,
              center: true,
              darkTheme: false,
            })
            child.loadFile('./window/developer.html')
            child.show()
            // child.webContents.openDevTools()
          },
        },
        {
          label: 'How To Use',
          click: function () {
            child = new BrowserWindow({
              width: 900,
              title: 'PRAYER TIME',
              icon: './image/app_icon.ico',
              parent: win,
              maxHeight: 600,
              maximizable: false,
              minimizable: true,
              maxWidth: 1050,
              movable: true,
              center: true,
              darkTheme: false,
            })
            child.loadFile('./window/use.html')
            child.show()
            // child.webContents.openDevTools()
          },
        },
        {
          role: 'quit',
        },
        {
          role: 'reload',
        },
      ],
    },
  ]
  // win.webContents.openDevTools()
  const menu = Menu.buildFromTemplate(template)
  Menu.setApplicationMenu(menu)
}
app.whenReady().then(() => {
  createWindow()
})
