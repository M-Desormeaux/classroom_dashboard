import { formatGrade } from "~/utils/formatGrade";
import { supabase } from "./supabaseClient";

export const getAssignments = async () => {
  const { data, error } = await supabase
    .from("assignments")
    .select(`*, grades(score)`)
    .order("assignmentID");

  if (error) throw error;

  const temp = data.map((point) => {
    const grades = point.grades.map((grade: { score: number }) => grade.score);

    const gradeValues = grades.filter((point: number) => point > 0);
    const gradesLength = grades.length;
    const sum = grades.reduce((acc: number, curr: number) => {
      return acc + curr;
    }, 0);
    const avg = formatGrade(sum / gradesLength || 0);

    const low = Math.min(...gradeValues);
    const high = Math.max(...gradeValues);

    return { ...point, grades: null, avg, low, high };
  });

  return temp;
};
