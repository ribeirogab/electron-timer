const { ipcMain } = require('electron');
const CreateWindowService = require('../services/CreateWindow');

let aboutWindow = null;

module.exports = ipcMain.on('open-about-window', () => {
  if (aboutWindow === null) {
    aboutWindow = CreateWindowService(300, 250,
      {
        alwaysOnTop: true,
        minimizable: false,
        maximizable: false,
        minWidth: 300,
        minHeight: 250,
      });

    aboutWindow.on('closed', () => {
      aboutWindow = null;
    });
  }
  aboutWindow.loadURL('http://localhost:3000#/about');
});
