import type { MetaFunction } from "@remix-run/node";

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
  return <>Assignments</>;
}
