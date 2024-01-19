import type { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
  return [
    { title: "Students" },
    { name: "description", content: "Take a look at all authorized records." },
  ];
};

export default function Students() {
  return <>Students</>;
}
