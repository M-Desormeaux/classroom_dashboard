import type { MetaFunction } from "@remix-run/node";
import { AssignmentCard } from "~/components/Cards";
import { DEFAULT_ASSIGNMENT_GRADES } from "~/constants";

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
  return (
    <div className="flex flex-col gap-4">
      {DEFAULT_ASSIGNMENT_GRADES.map((assignment, index) => (
        <AssignmentCard key={index} {...assignment} />
      ))}
    </div>
  );
}
