import Link from "next/link";

const Sidebar = ({ docs }) => {
  const parents = docs.filter((doc) => !doc.parent);
  const groupedAllChildren = Object.groupBy(
    docs.filter((doc) => doc.parent),
    ({ parent }) => parent
  );

  return (
    <nav className="lg:block my-10">
      <ul>
        <div className="relative mt-3 pl-2">
          <div className="absolute inset-x-0 top-0 bg-zinc-800/2.5 will-change-transform dark:bg-white/2.5"></div>
          <div className="absolute inset-y-0 left-2 w-px bg-zinc-900/10 dark:bg-white/5"></div>
          <div className="absolute left-2 h-6 w-px bg-emerald-500"></div>
          <ul role="list" className="border-l border-transparent">
            {parents.map((parent) => (
              <li key={parent.id} className="relative">
                <Link
                  aria-current="page"
                  className="flex justify-between gap-2 py-1 pl-4 pr-3 text-sm text-zinc-900 transition dark:text-white"
                  href={`/docs/${parent.id}`}
                >
                  <span className="truncate">{parent.title}</span>
                </Link>
                {groupedAllChildren[parent.id] && (
                  <ul role="list" className="border-lR border-transparent">
                    {groupedAllChildren[parent.id].map((child) => (
                      <li key={child.id}>
                        <Link
                          className="flex justify-between gap-2 py-1 pl-7 pr-3 text-sm text-zinc-600 transition hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white"
                          href={`/docs/${parent.id}/${child.id}`}
                        >
                          <span className="truncate">{child.title}</span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </div>
      </ul>
    </nav>
  );
};

export default Sidebar;
