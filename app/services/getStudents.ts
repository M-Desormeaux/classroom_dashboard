import { formatGrade } from "~/utils/formatGrade";
import { supabase } from "./supabaseClient";

interface StudentData {
  name: string;
  studentID: string;
  avg: number;
}

export const getStudents = async () => {
  // select students from 'students' and get associated grades from 'grades'
  const { data: students, error } = await supabase.from("students").select(`
    *,
    grades (
      studentID, score
    )
  `);

  if (error) throw new Error();

  // I don't actually want the grades passed to the page, I just want the average
  const data: StudentData[] = students.map((student) => {
    const grades = student.grades;

    const sum = grades.reduce(
      (total: number, grade: { score: number }) => total + grade.score,
      0,
    );
    const avg = formatGrade(sum / student.grades.length);

    return {
      name: student.name,
      studentID: student.studentID,
      avg,
    };
  });

  return data;
};
