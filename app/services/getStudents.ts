import { getGrades } from ".";
import { StudentsData } from "./_data";

export const getStudents = () => {
  const temp = StudentsData.map((dataPoint) => {
    const studentGrades = getGrades((d) => {
      return d.studentID === dataPoint.studentID;
    }, true);

    return {
      ...dataPoint,
      ...studentGrades,
    };
  });

  return temp;
};
