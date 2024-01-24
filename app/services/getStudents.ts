import { getGrades } from "./Grade";
import { StudentsData } from "./_data";

// ! improve dont trash
export const getStudents = () => {
  const temp = StudentsData.map((dataPoint) => {
    const studentGrades = getGrades((d) => {
      return d.studentID === dataPoint.studentID;
    });

    return {
      ...dataPoint,
      ...studentGrades,
    };
  });

  return temp;
};
