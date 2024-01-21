export const formatGrade = (num: number) => {
  if (num === 0 || num === null || num === undefined) return 0;
  return Math.round(num);
};
