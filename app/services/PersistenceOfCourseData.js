const jsonfile = require('jsonfile-promised');
const path = require('path');
const fs = require('fs');

module.exports = async function PersistenceOfCourseData(courseName, time) {
  try {
    const filePath = path.resolve(__dirname, '..', 'data', 'courses.json');

    if (!fs.existsSync(filePath)) {
      await jsonfile.writeFile(filePath, {
        amount: 0,
        courses: []
      }, { spaces: 2 });
    }

    const jsonData = fs.readFileSync(filePath, 'utf-8');
    const parsedData = JSON.parse(jsonData);
    const courseIndex = parsedData.courses.findIndex(
      parsedCourse => parsedCourse.name === courseName,
    );

    if (courseIndex !== -1) {
      parsedData.courses.splice(courseIndex, 1, {
        id: parsedData.courses[courseIndex].id,
        name: courseName,
        time,
        updated_at: new Date().toString(),
      });
    } else {
      parsedData.courses.push({
        id: parsedData.amount + 1,
        name: courseName,
        time,
        updated_at: new Date().toString(),
      });
      parsedData.amount += 1;
    }

    await jsonfile.writeFile(filePath, parsedData, { spaces: 2 });

    console.log(`[ data ] > Curso "${courseName}" atualizado com sucesso!`);
  } catch (error) {
    console.log(`[ data ] > Falha na atualização do curso "${courseName}".`);
    console.error(error);
  }
};
