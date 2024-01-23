import { AssignmentsData } from "../_data";
import { getGrades } from "../gradeService";

interface Assignment {
  assignmentID: string;
  classID: string;
  label: string;
}

export const getAssignment = (assignmentID: string) => {
  const assignments: Assignment[] = AssignmentsData;
  const matchingAssignment = assignments.find(
    (assignment) => assignment.assignmentID === assignmentID,
  );

  if (!matchingAssignment) throw new Error("No matching assignments found");

  const assignmentGrades = getGrades(
    (d) => {
      return d.assignmentID === assignmentID;
    },
    true,
    true,
  ) || { avg: 0 };

  return { ...matchingAssignment, ...assignmentGrades };
};
