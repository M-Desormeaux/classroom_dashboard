import { AssignmentsData } from "./_data";

export const getAssignments = () => {
  const temp = AssignmentsData.map((dataPoint) => {
    return {
      ...dataPoint,
      high: 0,
      avg: 0,
      low: 0,
    };
  });

  return temp;
};
