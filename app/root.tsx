import type { LinksFunction } from "@remix-run/node";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useLocation,
} from "@remix-run/react";

import stylesheet from "./tailwind.css";
import { Nav } from "./components/Nav/Nav";

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: stylesheet },
];

// const body_color = "*-emerald-900"
// const bg_color = "*-gray-200";
// const elevated = "*-gray-100"
// const text = "*-gray-950"

interface Path {
  href: string;
  label: string;
}

const paths: Path[] = [
  { href: "/schedule", label: "Schedule" },
  { href: "/", label: "Students" },
  { href: "/assignments", label: "Assignments" },
];

export default function App() {
  const { pathname } = useLocation();

  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body className="flex justify-center text-gray-950">
        <div className="flex flex-col w-full gap-10 max-w-5xl min-h-lvh items-center overflow-hidden">
          <Nav pathname={pathname} paths={paths} />
          <div className="max-w-4xl w-full sm:w-11/12 rounded-t-xl h-full bg-gray-200 p-5 min-h-[5000px]">
            <Outlet />
          </div>
        </div>
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
