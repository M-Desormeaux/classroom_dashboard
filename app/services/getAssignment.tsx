import { getAssignments, getStudents } from ".";

export const getAssignment = (assignmentID: string) => {
  const assignment = getAssignments().find(
    (assignment) => assignment.assignmentID === assignmentID,
  );

  const students = getStudents().map((student) => {
    return {
      ...student,
      avg: 0,
    };
  });

  return {
    students,
    assignmentAvg: assignment?.avg,
    assignmentLabel: assignment?.label,
  };
};
