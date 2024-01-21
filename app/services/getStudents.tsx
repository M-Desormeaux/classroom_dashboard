import { StudentsData } from "./_data";

export const getStudents = () => {
  const temp = StudentsData.map((dataPoint) => ({
    ...dataPoint,
    avg: 0,
  }));

  return temp;
};
