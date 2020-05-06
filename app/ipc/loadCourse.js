const { ipcMain } = require('electron');

const FecthCourseData = require('../services/FetchCourseData');

module.exports = ipcMain.on('load-course', async (event, courseName) => {

  const course = await FecthCourseData(courseName);

  event.sender.send('course-loaded', course);
});
