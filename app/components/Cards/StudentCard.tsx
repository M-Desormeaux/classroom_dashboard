import { Student } from "~/types";
import { External } from "../Icon";
import { Link } from "@remix-run/react";

export const StudentCard = ({ studentID, name, avg }: Student) => {
  return (
    <Link
      to={`/students/${studentID}`}
      className="rounded-md bg-gray-100 px-4 py-2 shadow hover:bg-white hover:shadow-md"
    >
      <div className="flex w-full flex-col justify-end gap-1 sm:flex-row sm:justify-between">
        <div className="flex w-full flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-2">
            <div className="h-14 w-14 rounded-full bg-gray-400" />
            <div className="flex flex-col gap-1">
              <h2 className="text-xl font-semibold">{name}</h2>
              <span className="flex w-16 items-center justify-between gap-1">
                Avg:
                <span>
                  <span className="text-xl font-semibold">{avg}</span>%
                </span>
              </span>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-end">
          <div className="flex w-max items-baseline gap-2 px-4 py-2">
            See Grades <External />
          </div>
        </div>
      </div>
    </Link>
  );
};
