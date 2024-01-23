import { StudentsData } from "../_data";

export const getStudent = (studentID: string) => {
  const students = StudentsData;
  const matchingStudent = students.filter((d) => d.studentID === studentID)[0];

  if (!matchingStudent) throw new Error("No matching student found");

  return matchingStudent;
};
