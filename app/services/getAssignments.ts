import { getGrades } from ".";
import { AssignmentsData } from "./_data";

export const getAssignments = () => {
  const temp = AssignmentsData.map((dataPoint) => {
    const assignmentGrades = getGrades((d) => {
      return d.assignmentID === dataPoint.assignmentID;
    });

    return {
      ...dataPoint,
      ...assignmentGrades,
    };
  });

  return temp;
};
