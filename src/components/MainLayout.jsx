"use client";

import { useSidebar } from "@/providers/sidebar-provider";

export default function MainLayout({ children }) {
  const { isSidebarOpen } = useSidebar();
  return (
    <div
      className={`h-full transition-all duration-300 ${
        isSidebarOpen ? "lg:ml-72 xl:ml-80" : "lg:ml-0"
      }`}
    >
      {children}
    </div>
  );
}
