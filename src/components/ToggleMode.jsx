"use client";

const { Sun, Moon } = require("lucide-react");
import { useTheme } from "next-themes";

const ToggleMode = () => {
  const { theme, setTheme } = useTheme();
  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };
  return (
    <button
      onClick={toggleTheme}
      className="flex items-center justify-center h-8 w-8 rounded-full text-sm text-zinc-500  ring-zinc-900/10 transition hover:ring-zinc-900/20  dark:text-zinc-400 dark:ring-inset dark:ring-white/10 dark:hover:ring-white/20 cursor-pointer"
    >
      {theme === "dark" ? (
        <Sun className="h-5 w-5" />
      ) : (
        <Moon className="h-5 w-5" />
      )}
    </button>
  );
};

export default ToggleMode;
