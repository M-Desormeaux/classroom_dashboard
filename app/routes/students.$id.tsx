import type { LoaderFunctionArgs, MetaFunction } from "@remix-run/node";
import { Link, useLoaderData } from "@remix-run/react";
import { GradeCard } from "~/components/Cards";
import { getGrades, getStudent } from "~/services";

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

  const student = getStudent(params?.id);
  const grades = getGrades((d) => d.studentID === params.id);

  return { student, grades };
}

export default function StudentDetails() {
  const { student, grades } = useLoaderData<typeof loader>();

  return (
    <div className="flex flex-col gap-4">
      <div className="flex gap-1 text-lg">
        &gt;
        <Link to="/" className="underline underline-offset-2">
          All Students
        </Link>
      </div>
      <div className="flex flex-col justify-between sm:flex-row">
        <h2 className="text-3xl font-semibold">{student.name}</h2>
        <div className="flex w-full items-center justify-between sm:w-fit sm:justify-end sm:gap-2">
          <span className="text-xl">Average</span>
          <div className="flex items-center">
            <span className="text-xl font-semibold">{grades.avg}</span>
            <span>%</span>
          </div>
        </div>
      </div>
      {grades?.populatedGrades &&
        grades.populatedGrades.map((assignment, index) => (
          <GradeCard key={index} {...assignment} />
        ))}
    </div>
  );
}
