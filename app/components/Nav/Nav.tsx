export const Nav = ({
  pathname = "/",
  paths,
}: {
  pathname?: string;
  paths?: { href: string; label: string }[];
}) => {
  return (
    <div className="bg-gray-200 sticky top-0 min-h-16 flex justify-center items-center gap-2 rounded-b-2xl w-full">
      {paths?.map((path, index) =>
        pathname === path.href ? (
          <a
            href={path.href}
            key={index}
            className="text-2xl font-bold px-6 py-4"
          >
            {path.label}
          </a>
        ) : (
          <a
            href={path.href}
            key={index}
            className="text-xl underline px-6 py-4 underline-offset-4"
          >
            {path.label}
          </a>
        )
      )}
    </div>
  );
};
