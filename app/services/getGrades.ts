import { formatGrade } from "~/utils/formatGrade";
import { GradesData } from "./_data";
import { getAssignment, getStudent } from ".";

interface BaseGrade {
  gradeID: number;
  assignmentID: string;
  classID: string;
  studentID: string;
  avg: number;
}

export interface FullGrade extends BaseGrade {
  label: string;
  name: string;
}

const getMinMaxAvg = (data: BaseGrade[]) => {
  const gradesCount = data.length;
  const grades: number[] = data.map((point) => point.avg);
  const filteredGrades = grades.filter((point) => point > 0);

  const min = Math.min(...filteredGrades);
  const max = Math.max(...filteredGrades);

  const sum = grades.reduce((acc, curr) => {
    return acc + curr;
  }, 0);

  const avg = formatGrade(sum / gradesCount || 0);

  return { min, max, avg };
};

export const getGrades = (
  predicate: (d: BaseGrade) => boolean = () => true,
  noGrades: boolean = false,
) => {
  const data: BaseGrade[] = GradesData.filter(predicate);
  const { min, avg, max } = getMinMaxAvg(data);

  if (noGrades) return { low: min, avg, high: max };

  const assignments: FullGrade[] = data.map((dataPoint) => {
    const assignment = getAssignment(dataPoint.assignmentID);
    const student = getStudent(dataPoint.studentID);

    return {
      label: "",
      ...assignment,
      ...dataPoint,
      ...student,
    };
  });

  return { assignments, low: min, avg, high: max };
};
