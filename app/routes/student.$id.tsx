import { useLocation } from "@remix-run/react";
import { GradeCard } from "~/components/Cards";
import { getStudent, getStudentGrades } from "~/services";

export default function StudentDetails() {
  const { pathname } = useLocation();
  const studentID = pathname.split("/")[2];

  const studentData = getStudent(studentID);
  const studentGrades = getStudentGrades(studentID);

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
        <h2 className="text-3xl font-semibold">{studentData.name}</h2>
        <div className="flex w-full items-center justify-between sm:w-fit sm:justify-end sm:gap-2">
          <span className="text-xl">Average</span>
          <div className="flex items-center">
            <span className="text-xl font-semibold">{studentGrades?.avg}</span>
            <span>%</span>
          </div>
        </div>
      </div>
      {studentGrades?.assignments &&
        studentGrades.assignments.map((assignment, index) => (
          <GradeCard key={index} {...assignment} />
        ))}
    </div>
  );
}
