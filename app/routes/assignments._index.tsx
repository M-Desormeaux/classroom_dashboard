import type { MetaFunction } from "@remix-run/node";
import { AssignmentCard } from "~/components/Cards";
import { getAssignments } from "~/services";

export const meta: MetaFunction = () => {
  return [
    { title: "Assignments" },
    {
      name: "description",
      content:
        "Take a look at all scheduled assignments and current completion records.",
    },
  ];
};

export default function Assignments() {
  const assignments = getAssignments();

  return (
    <div className="flex flex-col gap-4">
      {assignments.map((assignment, index) => (
        <AssignmentCard key={index} {...assignment} />
      ))}
    </div>
  );
}
