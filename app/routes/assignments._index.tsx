import type { MetaFunction } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { AssignmentCard } from "~/components/Cards";
import { getAssignments } from "~/services";

export const meta: MetaFunction = () => {
  return [
    { title: "Assignments" },
    {
      name: "description",
      content:
        "Take a look at all authorized scheduled assignments and current completion records.",
    },
  ];
};

export async function loader() {
  const assignments = await getAssignments();

  return { assignments };
}

export default function Assignments() {
  const { assignments } = useLoaderData<typeof loader>();

  return (
    <div className="flex flex-col gap-4">
      {assignments?.map((assignment, index) => (
        <AssignmentCard key={index} {...assignment} />
      ))}
    </div>
  );
}
