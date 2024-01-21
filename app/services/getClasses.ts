import { getGrades, getTeacher } from ".";
import { ClassesData } from "./_data";

export const getClasses = () => {
  if (ClassesData.length <= 0) return [];

  const temp = ClassesData.map((dataPoint) => {
    const classGrades = getGrades((d) => {
      return d.classID === dataPoint.classID;
    });
    const teacher = getTeacher(dataPoint.teacherID);

    return {
      ...dataPoint,
      ...classGrades,
      ...teacher,
    };
  });

  return temp;
};
