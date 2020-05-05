const jsonfile = require('jsonfile-promised');
const path = require('path');
const fs = require('fs');

module.exports = async function PersistenceOfCourseData(courseName, time){
  try {
    const filePath = path.resolve(__dirname, '..', '..', 'src', 'data', `courses.json`);
    const jsonData = fs.readFileSync(filePath, 'utf-8');
    const parsedData = JSON.parse(jsonData);
    const courseIndex = parsedData.courses.findIndex(parsedCourse => parsedCourse.name === courseName);

    if (courseIndex !== -1) {
      parsedData.courses.splice(courseIndex, 1, {
        id: parsedData.amount,
        name: courseName,
        time,
        updated_at: new Date().toString()
      })
    } else {
      parsedData.courses.push({
        id: parsedData.amount + 1,
        name: courseName,
        time,
        updated_at: new Date().toString()
      })
      parsedData.amount += 1;
    }


    await jsonfile.writeFile(filePath, parsedData, { spaces: 2 });

    console.log(`[ data ] > Arquivo "${courseName}.json" criado com sucesso!`);
  } catch (error) {
    console.log(`[ data ] > Falha na criação do arquivo "${courseName}.json".`);
    console.error(error);
  }
}
