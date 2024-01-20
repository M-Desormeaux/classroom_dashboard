import type { MetaFunction } from "@remix-run/node";
import { StudentCard } from "~/components/Cards";
import { DEFAULT_STUDENTS } from "~/constants";

export const meta: MetaFunction = () => {
  return [
    { title: "Students" },
    { name: "description", content: "Take a look at all authorized records." },
  ];
};

export default function Students() {
  return (
    <div className="flex flex-col gap-4">
      {DEFAULT_STUDENTS.map((student) => (
        <StudentCard key={student.studentId} {...student} />
      ))}
    </div>
  );
}
