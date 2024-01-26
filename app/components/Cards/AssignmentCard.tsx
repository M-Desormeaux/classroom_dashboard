import { Assignment } from "~/types";
import { External } from "../Icon";
import { formatGrade } from "~/utils/formatGrade";
import { Link } from "@remix-run/react";

export const AssignmentCard = ({
  label = "",
  desc,
  avg,
  high,
  low,
  classID,
  assignmentID,
}: Assignment) => {
  return (
    <Link
      to={`/assignments/${assignmentID}`}
      className="rounded-md bg-gray-100 px-4 py-2 shadow hover:bg-white hover:shadow-md"
    >
      <div className="flex w-full flex-col gap-1 sm:flex-row sm:items-start sm:justify-between sm:gap-3">
        <div className="flex w-full flex-col gap-1 sm:w-max">
          {classID && <span className="text-xs text-gray-600">{classID}</span>}
          <div className="flex items-baseline gap-2 sm:w-max ">
            <h2 className="text-wrap text-xl font-semibold">
              Assignment: {label}
            </h2>
            <div>
              <External />
            </div>
          </div>
          {desc && <span className="line-clamp-2">{desc}</span>}
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
    </Link>
  );
};
