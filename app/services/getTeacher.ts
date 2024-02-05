import { TeachersData } from "./_data";

export const getTeacher = (teacherID: string) => {
  const teacher = TeachersData.find((d) => d.teacherID === teacherID);

  return teacher;
};
