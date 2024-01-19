export const Nav = ({
  pathname = "/",
  paths,
}: {
  pathname?: string;
  paths?: { href: string; label: string }[];
}) => {
  return (
    <nav className="bg-gray-200 min-h-16 flex justify-center items-center gap-2 rounded-b-2xl">
      {paths?.map((path, index) =>
        pathname === path.href ? (
          <a
            href={path.href}
            key={index}
            className="text-2xl font-bold px-6 py-4 h-16"
          >
            {path.label}
          </a>
        ) : (
          <a
            href={path.href}
            key={index}
            className="text-xl underline px-6 py-4 underline-offset-4 h-16"
          >
            {path.label}
          </a>
        )
      )}
    </nav>
  );
};
