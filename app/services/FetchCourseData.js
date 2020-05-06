const path = require('path');
const fs = require('fs');

module.exports = function FetchCourseData(courseName) {
  const filePath = path.resolve(__dirname, '..', 'data', 'courses.json');
  const jsonData = fs.readFileSync(filePath, 'utf-8');
  const parsedData = JSON.parse(jsonData);
  const course = parsedData.courses.find(parsedCourse => parsedCourse.name === courseName);

  if (!course) {
    return { id: -1, name: 'none', time: '00:00:00' };
  }

  return course;
}
