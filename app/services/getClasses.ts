import { getGrades } from ".";
import { ClassesData } from "./_data";

export const getClasses = () => {
  if (ClassesData.length <= 0) return [];

  const temp = ClassesData.map((dataPoint) => {
    const studentCount = dataPoint.students.length;
    const classGrades = getGrades((d) => {
      return d.classID === dataPoint.classID;
    });

    return {
      ...dataPoint,
      ...classGrades,
      size: studentCount,
    };
  });

  return temp;
};
