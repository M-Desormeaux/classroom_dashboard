import { useLocation } from "@remix-run/react";
import { StudentCard } from "~/components/Cards";
import { getAssignment } from "~/services";

export default function AssignmentDetails() {
  const { pathname } = useLocation();
  const assignmentID = pathname.split("/")[2];

  const assignment = getAssignment(assignmentID);

  return (
    <div className="flex flex-col gap-4">
      <div className="flex gap-1 text-lg">
        &gt;
        <a href="/assignments" className="underline underline-offset-2">
          /Assignments
        </a>
        &gt; /{assignmentID}
      </div>
      <div className="flex flex-col justify-between sm:flex-row">
        <h2 className="text-3xl font-semibold">
          Assignment: {assignment.assignmentLabel}
        </h2>
        <div className="flex w-full items-center justify-between sm:w-fit sm:justify-end sm:gap-2">
          <span className="text-xl">Average</span>
          <div className="flex items-center">
            <span className="text-xl font-semibold">
              {assignment.assignmentAvg}
            </span>
            <span>%</span>
          </div>
        </div>
      </div>
      {assignment.students.map((student, index) => (
        <StudentCard key={index} {...student} />
      ))}
    </div>
  );
}
