import { Link } from "@remix-run/react";

const determineLinks = (href: string, pathname: string) => {
  const hrefTarget = href.split("/")[1];
  const pathTarget = pathname.split("/")[1];

  if (hrefTarget === pathTarget) return true;

  return false;
};

export const Nav = ({
  pathname = "/",
  paths,
}: {
  pathname?: string;
  paths?: { href: string; label: string }[];
}) => (
  <>
    <nav className="flex min-h-16 items-center justify-center bg-gray-200 sm:hidden">
      <details className="flex w-max items-center">
        {paths?.map((path, index) =>
          determineLinks(path.href, pathname) ? (
            <summary key={index}>
              <h1 className="inline-block h-16 px-6 py-4 text-2xl font-semibold">
                {path.label}
              </h1>
            </summary>
          ) : (
            <Link
              to={path.href}
              key={index}
              className="h-16 px-6 py-4 text-center text-xl underline underline-offset-4"
            >
              {path.label}
            </Link>
          ),
        )}
      </details>
    </nav>
    <nav className="hidden min-h-16 items-center justify-center gap-2 overflow-hidden rounded-b-2xl bg-gray-200 sm:flex">
      {paths?.map((path, index) =>
        determineLinks(path.href, pathname) ? (
          <h1 key={index} className="h-16 px-6 py-4 text-2xl font-semibold">
            {path.label}
          </h1>
        ) : (
          <Link
            to={path.href}
            key={index}
            className="h-16 px-6 py-4 text-xl underline underline-offset-4"
          >
            {path.label}
          </Link>
        ),
      )}
    </nav>
  </>
);
