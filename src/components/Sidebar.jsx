"use client";

import {
  getDocumentsByAuthor,
  getDocumentsByCategory,
  getDocumentsByTag,
} from "@/utils/doc";
import { ChevronDown, ChevronRight } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const Sidebar = ({ docs, onLinkClick }) => {
  const [parents, setParents] = useState([]);
  const [groupedAllChildren, setGroupedAllChildren] = useState({});
  const [expanded, setExpanded] = useState({});
  const pathname = usePathname();

  useEffect(() => {
    let matchedDocs = docs;

    if (pathname.includes("/tags")) {
      const tag = pathname.split("/")[2];
      matchedDocs = getDocumentsByTag(docs, tag);
    } else if (pathname.includes("/authors")) {
      const author = pathname.split("/")[2];
      matchedDocs = getDocumentsByAuthor(docs, author);
    } else if (pathname.includes("/categories")) {
      const category = pathname.split("/")[2];
      matchedDocs = getDocumentsByCategory(docs, category);
    }

    const parentNodes = matchedDocs.filter((doc) => !doc.parent);
    const groupedChildrenNodes = Object.groupBy(
      matchedDocs.filter((doc) => doc.parent),
      ({ parent }) => parent
    );
    const childrenNodeKeys = Reflect.ownKeys(groupedChildrenNodes);
    childrenNodeKeys.forEach((key) => {
      const foundInRoots = parentNodes.find((root) => root.id === key);
      if (!foundInRoots) {
        const foundInDocs = docs.find((doc) => doc.id === key);
        if (foundInDocs) {
          parentNodes.push(foundInDocs);
        } else {
          // Handle missing parent doc (folder only)
          parentNodes.push({
            id: key,
            title: key.charAt(0).toUpperCase() + key.slice(1), // Capitalize
            order: 999, // Push to end
            isVirtual: true,
          });
        }
      }
    });

    parentNodes.sort((a, b) => {
      if (a.order < b.order) {
        return -1;
      }
      if (a.order > b.order) {
        return 1;
      }
      return 0;
    });

    setParents([...parentNodes]);
    setGroupedAllChildren({ ...groupedChildrenNodes });

    // Auto-expand based on active path
    const activeParent = parentNodes.find((p) =>
      pathname.includes(`/docs/${p.id}`)
    );
    if (activeParent) {
      setExpanded((prev) => ({ ...prev, [activeParent.id]: true }));
    }
  }, [pathname, docs]);

  const toggleExpand = (id) => {
    setExpanded((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const getLinkHref = (parent, child) => {
    if (child.id.startsWith(parent.id + "/")) {
      return `/docs/${child.id}`;
    }
    return `/docs/${parent.id}/${child.id}`;
  };

  return (
    <nav className="my-10">
      <ul>
        <div className="relative mt-3 pl-2">
          <div className="absolute inset-x-0 top-0 bg-zinc-800/2.5 will-change-transform dark:bg-white/2.5"></div>
          <div className="absolute inset-y-0 left-2 w-px bg-zinc-900/10 dark:bg-white/5"></div>
          <ul role="list" className="border-l border-transparent">
            {parents.map((parent) => (
              <li key={parent.id} className="relative">
                <div className="flex items-center justify-between pr-3">
                  {parent.isVirtual ? (
                    <span className="flex justify-between gap-2 py-1 pl-4 pr-3 text-sm text-zinc-900 dark:text-white font-semibold">
                      <span className="truncate">{parent.title}</span>
                    </span>
                  ) : (
                    <Link
                      aria-current="page"
                      className={`flex justify-between gap-2 py-1 pl-4 pr-3 text-sm transition w-full ${
                        pathname === `/docs/${parent.id}`
                          ? "border-l border-emerald-500 text-emerald-500"
                          : "text-zinc-900 dark:text-white"
                      }`}
                      href={`/docs/${parent.id}`}
                      onClick={onLinkClick}
                    >
                      <span className="truncate">{parent.title}</span>
                    </Link>
                  )}

                  {groupedAllChildren[parent.id] && (
                    <button
                      onClick={(e) => {
                        e.preventDefault();
                        toggleExpand(parent.id);
                      }}
                      className="p-1 hover:bg-zinc-100 dark:hover:bg-zinc-800 rounded"
                    >
                      {expanded[parent.id] ? (
                        <ChevronDown className="h-4 w-4 text-zinc-500" />
                      ) : (
                        <ChevronRight className="h-4 w-4 text-zinc-500" />
                      )}
                    </button>
                  )}
                </div>

                {groupedAllChildren[parent.id] && expanded[parent.id] && (
                  <ul role="list" className="border-lR border-transparent">
                    {groupedAllChildren[parent.id].map((child) => (
                      <li key={child.id}>
                        <Link
                          className={`flex justify-between gap-2 py-1 pl-7 pr-3 text-sm transition ${
                            pathname === getLinkHref(parent, child)
                              ? "border-l border-emerald-500 text-emerald-500"
                              : "text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white"
                          }`}
                          href={getLinkHref(parent, child)}
                          onClick={onLinkClick}
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
