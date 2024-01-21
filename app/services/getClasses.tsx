import { ClassesData } from "./_data";

export const getClasses = () => {
  if (ClassesData.length <= 0) return [];

  const temp = ClassesData.map((dataPoint) => {
    const studentCount = dataPoint.students.length;

    return {
      ...dataPoint,
      size: studentCount,
      high: 0,
      avg: 0,
      low: 0,
    };
  });

  return temp;
};
