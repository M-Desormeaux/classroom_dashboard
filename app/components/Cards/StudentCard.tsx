import { Student } from "~/types";
import { External } from "../Icon";

export const StudentCard = ({ studentId, name, avg }: Student) => {
  return (
    <div className="flex w-full flex-col gap-1 rounded-md bg-gray-100 px-4 py-3 sm:flex-row sm:justify-between">
      <div className="flex w-full items-center gap-2">
        <div className="aspect-square w-14 rounded-full bg-gray-400" />
        <div className="flex flex-col gap-1 p-2">
          <h2 className="text-xl font-semibold">{name}</h2>
          <span className="flex items-center justify-between gap-1 sm:w-24">
            Avg:
            <span>
              <span className="text-xl">{avg}</span>%
            </span>
          </span>
        </div>
      </div>
      <div className="flex items-center">
        <a
          href={`/student/${studentId}`}
          className="flex w-max items-baseline gap-2 px-4 py-2"
        >
          See Grades <External />
        </a>
      </div>
    </div>
  );
};
