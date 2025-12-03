import Link from "next/link";

const Tag = ({ tag }) => {
  return (
    <Link
      key={tag}
      href={`/tags/${tag}`}
      className="bg-gray-200 dark:bg-emerald-400/10 px-2 py-1 rounded-md mr-2 text-xs"
    >
      {tag}
    </Link>
  );
};

export default Tag;
