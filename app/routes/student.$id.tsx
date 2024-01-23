import type { LoaderFunctionArgs, MetaFunction } from "@remix-run/node";
import { useLoaderData, useLocation } from "@remix-run/react";
import { GradeCard } from "~/components/Cards";
import { getStudent, getStudentGrades } from "~/services";

export const meta: MetaFunction = ({ location }) => {
  const studentID = location.pathname.split("/")[2];
  const studentName = getStudent(studentID);

  return [
    { title: `${studentName.name} Grades` },
    { name: "description", content: "Take a look at all authorized records." },
  ];
};

export async function loader({ params }: LoaderFunctionArgs) {
  if (!params.id) return;

  const studentData = getStudent(params?.id);
  const studentGrades = getStudentGrades(params?.id);

  return { studentData, studentGrades };
}

export default function StudentDetails() {
  const { studentData, studentGrades } = useLoaderData<typeof loader>();

  return (
    <div className="flex flex-col gap-4">
      <div className="flex gap-1 text-lg">
        &gt;
        <a href="/" className="underline underline-offset-2">
          All Students
        </a>
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
