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

const SidebarItem = ({
  node,
  expanded,
  toggleExpand,
  pathname,
  onLinkClick,
  level = 0,
}) => {
  const hasChildren = node.children && node.children.length > 0;
  const isExpanded = expanded[node.id];
  const isActive = pathname === `/docs/${node.id}`;

  // Child nodes appear less white in dark mode and less black in light mode
  const textColor =
    level === 0
      ? "text-zinc-900 dark:text-white"
      : "text-zinc-700 dark:text-zinc-300";

  return (
    <li key={node.id} className="relative">
      <div className="flex items-center justify-between pr-3">
        {node.isVirtual ? (
          <span
            className={`flex justify-between gap-2 py-1 pl-4 pr-3 text-sm font-semibold ${textColor}`}
          >
            <span className="truncate">{node.title}</span>
          </span>
        ) : (
          <Link
            aria-current={isActive ? "page" : undefined}
            className={`flex justify-between gap-2 py-1 pl-4 pr-3 text-sm transition w-full ${
              isActive
                ? "border-l border-emerald-500 text-emerald-500"
                : textColor
            }`}
            href={`/docs/${node.id}`}
            onClick={onLinkClick}
          >
            <span className="truncate">{node.title}</span>
          </Link>
        )}

        {hasChildren && (
          <button
            onClick={(e) => {
              e.preventDefault();
              toggleExpand(node.id);
            }}
            className="p-1 hover:bg-zinc-100 dark:hover:bg-zinc-800 rounded"
          >
            {isExpanded ? (
              <ChevronDown className="h-4 w-4 text-zinc-500" />
            ) : (
              <ChevronRight className="h-4 w-4 text-zinc-500" />
            )}
          </button>
        )}
      </div>

      {hasChildren && isExpanded && (
        <ul role="list" className="border-l border-transparent ml-3">
          {node.children.map((child) => (
            <SidebarItem
              key={child.id}
              node={child}
              expanded={expanded}
              toggleExpand={toggleExpand}
              pathname={pathname}
              onLinkClick={onLinkClick}
              level={level + 1}
            />
          ))}
        </ul>
      )}
    </li>
  );
};

const Sidebar = ({ docs, onLinkClick }) => {
  const [tree, setTree] = useState([]);
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

    // Build Tree
    const nodeMap = {};
    const roots = [];

    // 1. Initialize all doc nodes
    matchedDocs.forEach((doc) => {
      nodeMap[doc.id] = { ...doc, children: [] };
    });

    // 2. Build relationships
    matchedDocs.forEach((doc) => {
      if (doc.parent) {
        if (nodeMap[doc.parent]) {
          nodeMap[doc.parent].children.push(nodeMap[doc.id]);
        } else {
          // Handle missing parent (Virtual Parent)
          // If parent doesn't exist in map, create it
          if (!nodeMap[doc.parent]) {
            // Try to make a nice title from the ID
            const title = doc.parent
              .split("/")
              .pop()
              .replace(/-/g, " ")
              .replace(/\b\w/g, (c) => c.toUpperCase());

            nodeMap[doc.parent] = {
              id: doc.parent,
              title: title,
              children: [],
              isVirtual: true,
              order: 999,
            };
            // Assume virtual parent is a root (unless we want recursive virtual inference, which is complex)
            roots.push(nodeMap[doc.parent]);
          }
          nodeMap[doc.parent].children.push(nodeMap[doc.id]);
        }
      } else {
        // No parent -> Root
        roots.push(nodeMap[doc.id]);
      }
    });

    // 3. Sort nodes
    const sortNodes = (nodes) => {
      nodes.sort((a, b) => {
        // Put virtual nodes at the end usually, or sort by order
        // If both have order, use it.
        const orderA = a.order ?? 999;
        const orderB = b.order ?? 999;

        if (orderA < orderB) return -1;
        if (orderA > orderB) return 1;

        // Fallback to title
        return a.title.localeCompare(b.title);
      });

      nodes.forEach((node) => {
        if (node.children.length > 0) {
          sortNodes(node.children);
        }
      });
    };

    sortNodes(roots);
    setTree(roots);

    // Auto-expand based on active path
    // We need to find all parents of the current doc
    // Since IDs are paths, we can try to match segments?
    // Or better, traverse the tree to find the path to the active node.

    // Helper to find path to node
    const findPathToNode = (nodes, targetId, currentPath = []) => {
      for (const node of nodes) {
        if (node.id === targetId) {
          return [...currentPath, node.id];
        }
        if (node.children.length > 0) {
          const found = findPathToNode(node.children, targetId, [
            ...currentPath,
            node.id,
          ]);
          if (found) return found;
        }
      }
      return null;
    };

    // Extract target ID from pathname
    // pathname: /docs/foo/bar
    const match = pathname.match(/\/docs\/(.+)/);
    if (match) {
      const targetId = match[1];
      // We might need to handle potential URL decoding if IDs have special chars, but usually they are simple.

      // Wait, findPathToNode depends on 'tree' which is being built.
      // We can use 'roots' here directly.
      const pathIds = findPathToNode(roots, targetId);
      if (pathIds) {
        setExpanded((prev) => {
          const next = { ...prev };
          pathIds.forEach((id) => (next[id] = true));
          return next;
        });
      }
    }
  }, [pathname, docs]);

  const toggleExpand = (id) => {
    setExpanded((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <nav className="my-10">
      <ul>
        <div className="relative mt-3 pl-2">
          <div className="absolute inset-x-0 top-0 bg-zinc-800/2.5 will-change-transform dark:bg-white/2.5"></div>
          <div className="absolute inset-y-0 left-2 w-px bg-zinc-900/10 dark:bg-white/5"></div>
          <ul role="list" className="border-l border-transparent">
            {tree.map((node) => (
              <SidebarItem
                key={node.id}
                node={node}
                expanded={expanded}
                toggleExpand={toggleExpand}
                pathname={pathname}
                onLinkClick={onLinkClick}
                level={0}
              />
            ))}
          </ul>
        </div>
      </ul>
    </nav>
  );
};

export default Sidebar;
