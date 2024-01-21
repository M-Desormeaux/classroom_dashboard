import { useLocation } from "@remix-run/react";
import { FullGrade, getAssignment } from "~/services";
import { GradeCard } from "~/components/Cards";
import { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = ({ location }) => {
  const assignmentID = location.pathname.split("/")[2];
  const assignmentName: {
    label?: string;
  } = getAssignment(assignmentID);

  return [
    { title: `${assignmentName?.label} Grades` },
    { name: "description", content: "Take a look at all authorized records." },
  ];
};

export default function AssignmentDetails() {
  const { pathname } = useLocation();
  const assignmentID = pathname.split("/")[2];

  const assignment: {
    label?: string;
    avg?: number;
    assignments?: FullGrade[];
  } = getAssignment(assignmentID, true);

  return (
    <div className="flex flex-col gap-4">
      <div className="flex gap-1 text-lg">
        &gt;
        <a href="/assignments" className="underline underline-offset-2">
          All Assignments
        </a>
      </div>
      <div className="flex flex-col justify-between sm:flex-row">
        <h2 className="text-3xl font-semibold">
          Assignment: {assignment.label}
        </h2>
        <div className="flex w-full items-center justify-between sm:w-fit sm:justify-end sm:gap-2">
          <span className="text-xl">Average</span>
          <div className="flex items-center">
            <span className="text-xl font-semibold">{assignment.avg}</span>
            <span>%</span>
          </div>
        </div>
      </div>
      {assignment?.assignments &&
        assignment.assignments.map((student, index) => (
          <GradeCard key={index} {...student} label={student.name} />
        ))}
    </div>
  );
}
