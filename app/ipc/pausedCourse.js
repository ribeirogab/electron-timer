const { ipcMain } = require('electron');
const PersistenceOfCourseData = require('../services/PersistenceOfCourseData');

module.exports = ipcMain.on('paused-course', async (event, course, time) => {
  await PersistenceOfCourseData(course, time);
});
