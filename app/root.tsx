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
        <div className="flex min-h-lvh w-full max-w-5xl flex-col items-center sm:gap-10">
          <header className="sticky top-0 h-fit w-full">
            <Nav pathname={pathname} paths={paths} />
          </header>
          <div className="h-full w-full max-w-4xl bg-gray-200 p-5 sm:w-11/12 sm:rounded-t-xl">
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
