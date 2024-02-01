import { formatGrade } from "~/utils/formatGrade";
import { supabase } from "./supabaseClient";

interface GradeData {
  score: number;
  assignmentID: string;
  studentID: string;
  classLabel: { label: string };
  assignmentLabel: { label: string };
}

interface FormattedGrade {
  score: number;
  assignmentID: string;
  classLabel: string;
  assignmentLabel: string;
}
interface StudentData {
  name: string;
  studentID: string;
  avg: number;
  grades?: FormattedGrade[];
}

export const getStudent = async (studentID: string) => {
  // select students from 'students' and get associated grades from 'grades'
  const { data, error } = await supabase
    .from("students")
    .select()
    .eq("studentID", studentID)
    .select(
      `
    *,
    grades (
      assignmentID, score, assignmentLabel:assignments(label), classLabel:classes(label)
    )
  `,
    );

  // TODO: GET ASSIGNMENT NAME TOO

  if (error) throw new Error();

  const student = data[0];

  const grades = student.grades.map((grade: GradeData) => ({
    ...grade,
    classLabel: grade.classLabel.label,
    assignmentLabel: grade.assignmentLabel.label,
  }));

  const sum = grades.reduce(
    (total: number, grade: { score: number }) => total + grade.score,
    0,
  );
  const avg = formatGrade(sum / student.grades.length);

  const studentData: StudentData = { ...student, grades, avg };

  return studentData;
};
