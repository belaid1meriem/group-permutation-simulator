import { Button } from "../components/ui/button";
import { Moon, Sun } from "lucide-react";
import { stringify } from "querystring";
import { useState } from "react";

export default function Header() {
  const [darkMode, setDarkMode] = useState(()=>{
    const dark = localStorage.getItem("dark");
    const enableDarkMode = dark ? dark=== "true" : false; 
    document.documentElement.classList.toggle("dark", enableDarkMode);
    return enableDarkMode;
  });

  const toggleTheme = () => {
    document.documentElement.classList.toggle("dark");
    setDarkMode(!darkMode);
    localStorage.setItem("dark", JSON.stringify(!darkMode));
  };

  return (
    <header className="w-full border-b bg-background">
      <div className="container mx-auto flex items-center justify-between py-4 px-6">
        {/* Logo */}
        <a href="/" className="text-xl font-semibold">Group Permutation Simulator</a>
        {/* Actions */}
        <div className="flex items-center space-x-4">
          {/* Theme Toggle */}
          <Button variant="ghost" onClick={toggleTheme} size="icon">
            {darkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
          </Button>
        </div>
      </div>
    </header>
  );
}
