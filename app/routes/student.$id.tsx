import { useLocation } from "@remix-run/react";
import { AssignmentCard } from "~/components/Cards";
import { DEFAULT_STUDENT_GRADES } from "~/constants";

export default function StudentDetails() {
  const { pathname } = useLocation();
  const studentID = pathname.split("/")[2];

  const studentData = DEFAULT_STUDENT_GRADES.find(
    (student) => student.studentID === studentID,
  );

  return (
    <div className="flex flex-col gap-4">
      <div className="flex gap-1 text-lg">
        &gt;
        <a href="/" className="underline underline-offset-2">
          /Students
        </a>
        &gt; /{studentID}
      </div>
      <div className="flex flex-col justify-between sm:flex-row">
        <h2 className="text-3xl font-semibold">{studentData?.name}</h2>
        <div className="flex w-full items-center justify-between sm:w-fit sm:justify-end sm:gap-2">
          <span className="text-xl">Average</span>
          <div className="flex items-center">
            <span className="text-xl font-semibold">{studentData?.avg}</span>
            <span>%</span>
          </div>
        </div>
      </div>
      {studentData?.assignments.map((assignment, index) => (
        <AssignmentCard key={index} {...assignment} />
      ))}
    </div>
  );
}
