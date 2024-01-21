import { Schedule } from "~/types";
import { formatGrade } from "~/utils/formatGrade";

export const ScheduleCard = ({
  label,
  start,
  end,
  high,
  avg,
  low,
  name,
  teacherID,
}: Schedule) => {
  return (
    <div className="flex w-full flex-col gap-1 rounded-md bg-gray-100 px-4 py-2 sm:flex-row sm:items-center sm:justify-between sm:gap-3">
      <div className="flex w-full flex-col gap-1 sm:w-max">
        {teacherID && <span className="text-xs">{name}</span>}
        <div className="flex items-center justify-between sm:justify-start sm:gap-2">
          <h2 className="text-xl font-semibold">{label}</h2>
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
          <div className="flex min-w-12 items-center justify-end">
            <span>{formatGrade(high || 0)}</span>
            <span>%</span>
          </div>
        </div>
        <div className="flex w-full items-center justify-between sm:gap-2">
          <span className="text-lg">Average</span>
          <div className="flex min-w-12 items-center justify-end">
            <span className="text-xl font-semibold">{formatGrade(avg)}</span>
            <span>%</span>
          </div>
        </div>
        <div className="hidden items-center justify-between sm:flex sm:gap-2">
          <span>Low</span>
          <div className="flex min-w-12 items-center justify-end">
            <span>{formatGrade(low || 0)}</span>
            <span>%</span>
          </div>
        </div>
      </div>
    </div>
  );
};
