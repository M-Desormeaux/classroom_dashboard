const determineLinks = (href: string, pathname: string) => {
  const hrefTarget = href.split("/")[1];
  const pathTarget = pathname.split("/")[1];

  if (pathTarget === "student" && hrefTarget === "") return true;
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
  <nav className="flex min-h-16 items-center justify-center gap-2 overflow-hidden rounded-b-2xl bg-gray-200">
    {paths?.map((path, index) =>
      determineLinks(path.href, pathname) ? (
        <h1 key={index} className="h-16 px-6 py-4 text-2xl font-semibold">
          {path.label}
        </h1>
      ) : (
        <a
          href={path.href}
          key={index}
          className="h-16 px-6 py-4 text-xl underline underline-offset-4"
        >
          {path.label}
        </a>
      ),
    )}
  </nav>
);
