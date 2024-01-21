import { getGrades } from ".";
import { AssignmentsData } from "./_data";

export const getAssignments = (includeAssignments = false) => {
  const temp = AssignmentsData.map((dataPoint) => {
    const assignmentGrades = getGrades((d) => {
      return d.assignmentID === dataPoint.assignmentID;
    }, !includeAssignments);

    return {
      ...dataPoint,
      ...assignmentGrades,
    };
  });

  return temp;
};
