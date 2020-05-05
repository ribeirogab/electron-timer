const { BrowserWindow } = require('electron');

module.exports = function createWindow(width, height, obj) {
  return new BrowserWindow({
    width,
    height,
    ...obj,
    webPreferences: {
      nodeIntegration: true,
    },
  });
}
