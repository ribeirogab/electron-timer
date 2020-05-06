const jsonfile = require('jsonfile-promised');
const path = require('path');
const fs = require('fs');

module.exports = async function FetchCourseData(courseName) {
  const filePath = path.resolve(__dirname, '..', 'data', 'courses.json');

  if (!fs.existsSync(filePath)) {
    await jsonfile.writeFile(filePath, {
      amount: 0,
      courses: []
    }, { spaces: 2 });
  }

  const jsonData = fs.readFileSync(filePath, 'utf-8');
  const parsedData = JSON.parse(jsonData);
  const course = parsedData.courses.find(parsedCourse => parsedCourse.name === courseName);

  if (!course) {
    return { id: -1, name: 'none', time: '00:00:00' };
  }

  return course;
}
