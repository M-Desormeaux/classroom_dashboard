import { formatGrade } from "~/utils/formatGrade";
import { getGrades } from ".";

export const getStudentGrades = (studentID: string) => {
  const studentGrades = getGrades((d) => {
    return d.studentID === studentID;
  });
  const gradesCount = studentGrades?.assignments?.length || 0;
  const grades: undefined | number[] = studentGrades?.assignments?.map(
    (point) => point.avg,
  );

  const sum =
    grades?.reduce((acc, curr) => {
      return acc + curr;
    }, 0) || 0;

  const avg = formatGrade(sum / gradesCount || 0);

  return {
    ...studentGrades,
    avg,
  };
};
