import { formatGrade } from "~/utils/formatGrade";
import { GradesData } from "./_data";
import { getAssignment, getStudent } from ".";

interface Grade {
  gradeID: number;
  assignmentID: string;
  classID: string;
  studentID: string;
  avg: number;
}

export const getGrades = (predicate: (d: Grade) => boolean = () => true) => {
  const grades: Grade[] = GradesData;
  const matchingGrades = grades.filter(predicate);

  const gradesLength = matchingGrades.length;
  const rawGrades = matchingGrades.map((point) => point.avg);
  const filteredGrades = rawGrades.filter((point) => point > 0);

  const sum = rawGrades.reduce((acc, curr) => {
    return acc + curr;
  }, 0);
  const avg = formatGrade(sum / gradesLength || 0);

  const low = Math.min(...filteredGrades);
  const high = Math.max(...filteredGrades);

  const populatedGrades = matchingGrades.map((dataPoint) => {
    const assignmentDetails = getAssignment(dataPoint.assignmentID);
    const studentDetails = getStudent(dataPoint.studentID);

    return { ...dataPoint, ...assignmentDetails, ...studentDetails };
  });

  return { populatedGrades, low, high, avg };
};
