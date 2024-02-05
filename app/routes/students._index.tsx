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

export async function loader() {
  const students = await getStudents();

  return { students };
}

export default function Students() {
  const { students } = useLoaderData<typeof loader>();

  return (
    <div className="flex flex-col gap-4">
      {students.map((student) => (
        <StudentCard key={student.studentID} {...student} />
      ))}
    </div>
  );
}
