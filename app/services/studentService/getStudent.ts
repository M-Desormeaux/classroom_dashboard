import { StudentsData } from "../_data";

interface Student {
  studentID: string;
  name: string;
}

export const getStudent = (studentID: string) => {
  const students: Student[] = StudentsData;
  const matchingStudent = students.find((d) => d.studentID === studentID);

  if (!matchingStudent) throw new Error("No matching student found");

  return matchingStudent;
};
