const { ipcMain } = require('electron');

const FecthCourseData = require('../services/FetchCourseData');

module.exports = ipcMain.on('load-course', (event, courseName) => {

  const course = FecthCourseData(courseName);

  event.sender.send('course-loaded', course);
});
