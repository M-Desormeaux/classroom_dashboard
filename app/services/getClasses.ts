import { formatGrade } from "~/utils/formatGrade";
import { supabase } from "./supabaseClient";

export const getClasses = async () => {
  const { data, error } = await supabase
    .from("classes")
    .select(`*, grades (score, studentID, assignmentID)`);

  if (error) throw new Error();

  const temp = data.map((point) => {
    const grades = point.grades.map((grade) => grade.score);

    const filteredGrades = grades.filter((point) => point > 0);
    const gradesLength = grades.length;
    const sum = grades.reduce((acc, curr) => {
      return acc + curr;
    }, 0);
    const avg = formatGrade(sum / gradesLength || 0);

    const low = Math.min(...filteredGrades);
    const high = Math.max(...filteredGrades);

    return { ...point, avg, low, high };
  });

  return temp;
};
