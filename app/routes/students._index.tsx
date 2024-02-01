import type { MetaFunction } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { StudentCard } from "~/components/Cards";
import { getStudents } from "~/services";

export const meta: MetaFunction = () => {
  return [
    { title: "Students" },
    { name: "description", content: "Take a look at all authorized records." },
  ];
};

export const ErrorBoundary = () => {
  return (
    <div className="flex w-full flex-col items-center gap-3 rounded border border-red-500 bg-red-100 p-6">
      <h2 className="text-lg font-bold">Error: API failure.</h2>
      <p>
        It seems the API for this page failed, I apologize and hope the next
        time you visit it is working
      </p>
    </div>
  );
};

export async function loader() {
  const students = await getStudents();

  return { students };
}

export default function Students() {
  const { students } = useLoaderData<typeof loader>();

  return (
    <div className="flex flex-col gap-4">
      {/* <pre>{JSON.stringify(students, null, 2)}</pre> */}
      {students.map((student) => (
        <StudentCard key={student.studentID} {...student} />
      ))}
    </div>
  );
}
