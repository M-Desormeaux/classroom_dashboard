export const formatGrade = (num: number | undefined | null | string) => {
  if (num === 0 || num === null || num === undefined) return "0.0";
  if (typeof num === "number") return num.toFixed(1);
  return Number.parseInt(num).toFixed(1);
};
