import { MetaFunction, redirect } from "@remix-run/node";

export const meta: MetaFunction = () => {
  return [
    { title: "Classroom Manager" },
    {
      name: "description",
      content: "Simple application for managing scores within a group.",
    },
  ];
};

export async function loader() {
  throw redirect("/students");
}
