"use client";

import { Menu, X } from "lucide-react";
import { useState } from "react";
import Logo from "./Logo";
import Search from "./Search";
import Sidebar from "./Sidebar";
import ToggleMode from "./ToggleMode";

const Header = ({ docs }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <header className="fixed inset-y-0 left-0 z-40 contents w-72 overflow-y-auto border-r border-zinc-900/10 px-6 pb-8 pt-4 dark:border-white/10 lg:block xl:w-80">
      <div className="hidden lg:block">
        <Logo />
      </div>
      <div className="fixed inset-x-0 top-0 z-50 bg-white px-4 backdrop-blur-sm transition dark:bg-[#17181C] dark:backdrop-blur sm:px-6 lg:left-72 lg:z-30 lg:px-8 xl:left-80">
        <div className="container flex h-14 items-center justify-between gap-12">
          <div className="absolute inset-x-0 top-full h-px bg-zinc-900/7.5 transition dark:bg-white/7.5"></div>

          <button
            type="button"
            className="lg:hidden"
            onClick={() => setIsSidebarOpen(true)}
          >
            <Menu className="h-6 w-6 text-zinc-900 dark:text-white" />
          </button>

          <Search docs={docs} />
          <ToggleMode />
        </div>
      </div>
      <div className="hidden lg:block">
        <Sidebar docs={docs} />
      </div>

      {isSidebarOpen && (
        <div className="fixed inset-0 z-50 flex lg:hidden">
          <div
            className="fixed inset-0 bg-black/20 backdrop-blur-sm dark:bg-black/40"
            onClick={() => setIsSidebarOpen(false)}
          ></div>
          <div className="relative flex w-full max-w-xs flex-1 flex-col bg-white p-6 dark:bg-zinc-900 shadow-xl">
            <div className="flex items-center justify-between mb-6">
              <Logo />
              <button type="button" onClick={() => setIsSidebarOpen(false)}>
                <X className="h-6 w-6 text-zinc-900 dark:text-white" />
              </button>
            </div>
            <Sidebar docs={docs} onLinkClick={() => setIsSidebarOpen(false)} />
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
