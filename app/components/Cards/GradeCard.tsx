import { formatGrade } from "~/utils/formatGrade";

export const GradeCard = ({
  label = "Tim Tom",
  score = 80,
}: {
  label: string;
  score: number;
}) => {
  return (
    <div className="flex w-full flex-col gap-1 rounded-md bg-gray-100 px-4 py-2 sm:flex-row sm:items-center sm:justify-between sm:gap-3">
      <div className="flex w-full flex-col sm:w-max">
        <h2 className="text-xl font-semibold">{label}</h2>
      </div>
      <div className="flex w-full items-end sm:w-max sm:flex-col">
        <div className="flex w-full items-center justify-between sm:gap-2">
          <span className="text-lg">Score</span>
          <div className="flex min-w-12 items-center justify-end">
            <span className="text-xl font-semibold">{formatGrade(score)}</span>
            <span>%</span>
          </div>
        </div>
      </div>
    </div>
  );
};
