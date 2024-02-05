import { AssignmentsData } from "./_data";

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

  if (!matchingAssignment) throw new Error("No matching Assignment");

  return matchingAssignment;
};
