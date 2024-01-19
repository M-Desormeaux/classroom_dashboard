import type { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
  return [
    { title: "Schedule" },
    {
      name: "description",
      content: "Take a look at all the schedule.",
    },
  ];
};

export default function Schedule() {
  return <>Schedule</>;
}
