"use client";

import { useSidebar } from "@/providers/sidebar-provider";
import { Menu, PanelLeft, X } from "lucide-react";
import { useState } from "react";
import Logo from "./Logo";
import Search from "./Search";
import Sidebar from "./Sidebar";
import ToggleMode from "./ToggleMode";

const Header = ({ docs }) => {
  const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState(false);
  const { isSidebarOpen: isDesktopSidebarOpen, toggleSidebar } = useSidebar();

  return (
    <>
      <header
        className={`fixed inset-y-0 left-0 z-40 contents w-72 overflow-y-auto border-r border-zinc-900/10 px-6 pb-8 pt-4 dark:border-white/10 xl:w-80 ${
          isDesktopSidebarOpen ? "lg:block" : "lg:hidden"
        }`}
      >
        <div className="hidden lg:block sticky top-0 bg-white dark:bg-transparent">
          <Logo />
        </div>
        <div className="hidden lg:block">
          <Sidebar docs={docs} />
        </div>
        <div className="fixed bottom-0 text-center lg:left-6 bg-white dark:bg-transparent  z-20 py-2 w-full md:w-auto">
          <p className="text-xs md:text-sm text-zinc-500 dark:text-zinc-400">
            &copy; {new Date().getFullYear()} DocsDB. All rights reserved.
          </p>
        </div>
      </header>

      <div
        className={`fixed inset-x-0 top-0 z-50 bg-white px-4 backdrop-blur-sm transition-all duration-300 dark:bg-[#17181C] dark:backdrop-blur sm:px-6 lg:z-30 lg:px-8 ${
          isDesktopSidebarOpen ? "lg:left-72 xl:left-80" : "lg:left-0"
        }`}
      >
        <div className=" flex h-14 items-center justify-between gap-12">
          <div className="absolute inset-x-0 top-full h-px bg-zinc-900/7.5 transition dark:bg-white/7.5"></div>

          <div className="flex items-center gap-4">
            <button
              type="button"
              className="hidden lg:block text-zinc-500 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white cursor-pointer"
              onClick={toggleSidebar}
            >
              <PanelLeft className="h-5 w-5" />
            </button>

            <button
              type="button"
              className="lg:hidden"
              onClick={() => setIsMobileSidebarOpen(true)}
            >
              <Menu className="h-5 w-5 text-zinc-900 dark:text-white" />
            </button>
            <div className="lg:hidden">
              <Logo />
            </div>

            {!isDesktopSidebarOpen && (
              <div className="hidden lg:block">
                <Logo />
              </div>
            )}
          </div>

          <Search docs={docs} />
          <ToggleMode />
        </div>
      </div>

      {isMobileSidebarOpen && (
        <div className="fixed inset-0 z-50 flex lg:hidden">
          <div
            className="fixed inset-0 bg-black/20 backdrop-blur-sm dark:bg-black/40"
            onClick={() => setIsMobileSidebarOpen(false)}
          ></div>
          <div className="relative flex w-full max-w-xs flex-1 flex-col bg-white p-6 dark:bg-zinc-900 shadow-xl">
            <div className="flex items-center justify-between mb-6">
              <Logo />
              <button
                type="button"
                onClick={() => setIsMobileSidebarOpen(false)}
              >
                <X className="h-6 w-6 text-zinc-900 dark:text-white" />
              </button>
            </div>
            <Sidebar
              docs={docs}
              onLinkClick={() => setIsMobileSidebarOpen(false)}
            />
          </div>
        </div>
      )}
    </>
  );
};

export default Header;
