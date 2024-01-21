import type { MetaFunction } from "@remix-run/node";
import { ScheduleCard } from "~/components/Cards";
import { getClasses } from "~/services/getClasses";

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
  const classes = getClasses();

  return (
    <div className="flex flex-col gap-4">
      {classes.map((item, index) => (
        <ScheduleCard key={index} {...item} />
      ))}
    </div>
  );
}
