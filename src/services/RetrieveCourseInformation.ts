const { ipcRenderer } = window.require('electron');

interface Course {
  id: number;
  name: string;
  time: string;
}

export default async function RetrieveCourseInformation(
  courseName: string,
): Promise<Course> {
  await ipcRenderer.send('load-course', courseName);

  const currentCourse = await new Promise(resolve => {
    ipcRenderer.on('course-loaded', (_: Function, course: Course): void => {
      resolve(course);
    });
  }).then(c => c);

  return currentCourse as Course;
}
