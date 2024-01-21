import { StudentsData } from "./_data";

export const getStudent = (studentID: string) => {
  const studentData = StudentsData.filter((d) => d.studentID === studentID)[0];

  return studentData;
};
