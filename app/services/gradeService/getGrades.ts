import { GradesData } from "../_data";
import { formatGrade } from "~/utils/formatGrade";
import { getStudent } from "../studentService";
import { getAssignment } from "../assignmentService";

// ! change avg to score when possible
interface Grade {
  gradeID: number;
  assignmentID: string;
  classID: string;
  studentID: string;
  avg: number;
}

interface NoRangeOrGrades {
  avg: number;
}

interface NoGrades {
  min: number;
  max: number;
  avg: number;
}

interface AllDetails {}

type GetGradesReturn = NoRangeOrGrades | NoGrades | AllDetails;

// predicate, includeHighLow = true, includeAssignments = true
export const getGrades = (
  predicate: (d: Grade) => boolean = () => true,
  includeHighLow = true,
  includeAssignments = true,
): GetGradesReturn => {
  // Get grades data from source. (in this case json)
  const grades: Grade[] = GradesData || [];
  // filter by predicate/not at all
  const targetGrades = grades.filter(predicate);

  // pull grade values into array, sum, then average.
  const rawGrades = targetGrades.map((point) => point.avg);
  const gradeCount = rawGrades.length;
  const sum = rawGrades.reduce((acc, curr) => {
    return acc + curr;
  }, 0);
  const avg = formatGrade(sum / gradeCount || 0);

  // if you turn off both flags, it will just return the average
  if (!includeHighLow && !includeAssignments) return { avg };

  // for visual reasons I do not want 0 to be included
  // with the minimum value, filter this out then use Math to get min/max
  const gradesAboveZero = rawGrades.filter((num) => num > 0);
  const min = Math.min(...gradesAboveZero);
  const max = Math.max(...gradesAboveZero);

  // if flag is off, we only want to return the min/max/avg
  if (!includeAssignments) return { avg, min, max };

  // populate information of assignments.
  const assignments = targetGrades.map((dataPoint) => {
    const student = getStudent(dataPoint.studentID);
    const assignment = getAssignment(dataPoint.assignmentID);

    return {
      ...dataPoint,
      ...student,
      ...assignment,
    };
  });

  // by default return all information
  return { avg, min, max, assignments };
};
