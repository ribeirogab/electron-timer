const { BrowserWindow } = require("electron");

function createWindow(width, height, obj) {
  return new BrowserWindow({
    width,
    height,
    ...obj,
    webPreferences: {
      nodeIntegration: true
    }
  })
}

module.exports = createWindow;