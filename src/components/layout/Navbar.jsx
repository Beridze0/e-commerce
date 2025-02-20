import { NavLink } from "react-router-dom";
import TextField from "../ui/TextField";
import { SunMoon, Triangle, UserRound } from "lucide-react";
import { useEffect, useState } from "react";

const Navbar = () => {
  const [darkMode, setDarkMode] = useState(() => {
    return JSON.parse(localStorage.getItem("dark-mode")) ?? false;
  });

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.remove("light");
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
      document.documentElement.classList.add("light");
    }
  }, [darkMode]);

  const switchTheme = () => {
    setDarkMode((prev) => {
      const isDarkMode = !prev;
      localStorage.setItem("dark-mode", JSON.stringify(isDarkMode));

      document.documentElement.classList.remove(isDarkMode ? "light" : "dark");
      document.documentElement.classList.add(isDarkMode ? "dark" : "light");

      return isDarkMode;
    });
  };


  return (
    <div className="w-full flex items-center justify-between px-14 py-8 bg-background border-b border-border h-14">
      <div className="flex gap-7 items-center justify-center">
        <div className="flex items-center justify-center gap-2">
          <Triangle fill="primary" size={25} className="text-primary" />
          <h1 className="text-2xl text-primary">E-COMMERCE</h1>
        </div>
        <div className="flex gap-4 text-[0.87rem]">
          <NavLink className="text-textMuted hover:text-textPrimary transition duration-200">
            Home
          </NavLink>
          <NavLink className="text-textMuted hover:text-textPrimary transition duration-200">
            Shop
          </NavLink>
          <NavLink className="text-textMuted hover:text-textPrimary transition duration-200">
            Product
          </NavLink>
          <NavLink className="text-textMuted hover:text-textPrimary transition duration-200">
            Contact Us
          </NavLink>
        </div>
      </div>
      <div className="flex items-center justify-center gap-4 text-sm">
        <TextField />
        <div  className="flex items-center justify-center gap-2 border border-border rounded px-4 py-[0.35rem] transition duration-200 text-primary hover:bg-hoverSecondary cursor-pointer">
          <UserRound size={18} />
          <p>
            Profile
          </p>
        </div>
        <p className="border dark:border-none rounded px-5 py-[0.35rem] bg-primary text-textInverted transition cursor-pointer duration-200 hover:bg-hoverPrimary">
          Cart
        </p>
        <SunMoon
          onClick={switchTheme}
          size={22}
          className="text-primary cursor-pointer transition duration-200 hover:scale-105"
        />
      </div>
    </div>
  );
};

export default Navbar;
