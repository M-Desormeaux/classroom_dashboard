import type { MetaFunction } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { ScheduleCard } from "~/components/Cards";
import { getClasses } from "~/services/getClasses";

export const meta: MetaFunction = () => {
  return [
    { title: "Schedule" },
    {
      name: "description",
      content: "Take a look at all the scheduled classes.",
    },
  ];
};

export async function loader() {
  const classes = getClasses();

  return { classes };
}

export default function Schedule() {
  const { classes } = useLoaderData<typeof loader>();

  return (
    <div className="flex flex-col gap-4">
      {classes.map((item, index) => (
        <ScheduleCard key={index} {...item} />
      ))}
    </div>
  );
}
