import { Schedule } from "~/types";
import { formatGrade } from "~/utils/formatGrade";

export const ScheduleCard = ({
  label,
  size,
  start,
  end,
  high,
  avg,
  low,
  teacherID,
}: Schedule) => {
  return (
    <div className="flex w-full flex-col gap-1 rounded-md bg-gray-100 px-4 py-3 sm:flex-row sm:items-center sm:justify-between sm:gap-3">
      <div className="flex w-full flex-col gap-1 sm:w-max">
        {teacherID && <span className="text-xs">{teacherID}</span>}
        <div className="flex items-center justify-between sm:justify-start sm:gap-2">
          <h2 className="text-xl font-semibold">{label}</h2>
          <span className="block text-xl">({size})</span>
        </div>
        <div className="flex justify-between sm:justify-start sm:gap-2">
          <span>{start}</span>
          <span>-</span>
          <span>{end}</span>
        </div>
      </div>
      <div className="flex w-full items-end sm:w-max sm:flex-col">
        <div className="hidden items-center justify-between sm:flex sm:gap-2">
          <span>High</span>
          <div className="flex min-w-16 items-center justify-end">
            <span className="text-lg">{formatGrade(high)}</span>
            <span>%</span>
          </div>
        </div>
        <div className="flex w-full items-center justify-between sm:gap-2">
          <span className="text-xl">Average</span>
          <div className="flex min-w-16 items-center justify-end">
            <span className="text-xl font-semibold">{formatGrade(avg)}</span>
            <span>%</span>
          </div>
        </div>
        <div className="hidden items-center justify-between sm:flex sm:gap-2">
          <span>Low</span>
          <div className="flex min-w-16 items-center justify-end">
            <span className="text-lg">{formatGrade(low)}</span>
            <span>%</span>
          </div>
        </div>
      </div>
    </div>
  );
};
