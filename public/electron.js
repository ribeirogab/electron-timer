const { app, BrowserWindow } = require('electron');

require("../app");

const path = require('path');
const isDev = require('electron-is-dev');

app.on('ready', () => {
  let mainWindow = new BrowserWindow({
    width: 900,
    height: 680,
    webPreferences: {
      nodeIntegration: true,
    }
  });

  mainWindow.loadURL(isDev ? 'http://localhost:3000' : `file://${path.join(__dirname, '../build/index.html')}`);
});

app.on('window-all-closed', () => {
  app.quit();
});

