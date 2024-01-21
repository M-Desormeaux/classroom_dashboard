import { getAssignments } from ".";

export const getAssignment = (
  assignmentID: string,
  includeAssignments = false,
) => {
  const assignment = getAssignments(includeAssignments).find(
    (assignment) => assignment.assignmentID === assignmentID,
  );

  return {
    ...assignment,
  };
};
