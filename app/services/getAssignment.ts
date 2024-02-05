import { formatGrade } from "~/utils/formatGrade";
import { supabase } from "./supabaseClient";

export const getAssignment = async (assignmentID: string) => {
  const { data, error } = await supabase
    .from("assignments")
    .select()
    .eq("assignmentID", assignmentID)
    .select(`*, grades(score, studentName:students(name))`)
    .order("studentID", { referencedTable: "grades" });

  if (error) throw new Error();

  const assignment = data[0];

  const grades = assignment.grades.map(
    (grade: { score: number; studentName: { name: "string" } }) => ({
      ...grade,
      studentName: grade.studentName.name,
    }),
  );

  const sum = grades.reduce(
    (total: number, grade: { score: number }) => total + grade.score,
    0,
  );
  const avg = formatGrade(sum / assignment.grades.length);

  const assignmentData = { ...assignment, grades, avg };

  return assignmentData;
};
