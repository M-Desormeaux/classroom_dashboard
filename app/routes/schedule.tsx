import type { MetaFunction } from "@remix-run/node";
import { ScheduleCard } from "~/components/Cards";
import { DEFAULT_SCHEDULE } from "~/constants";

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
  return (
    <div className="flex flex-col gap-4">
      {DEFAULT_SCHEDULE.map((item, index) => (
        <ScheduleCard key={index} {...item} />
      ))}
    </div>
  );
}
