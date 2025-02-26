import { Link, NavLink } from "react-router-dom";
import TextField from "../ui/TextField";
import { Atom } from "lucide-react";
import Login from "../ui/Login";
import Cart from "../ui/Cart";
import { useEffect, useState } from "react";

const Navbar = () => {
  const [darkMode, setDarkMode] = useState(JSON.parse(localStorage.getItem("dark-mode")) ?? false);
  
  useEffect(() => {
    if (darkMode) {
        document.documentElement.classList.remove("light");
        document.documentElement.classList.add("dark");
      } else {
        document.documentElement.classList.remove("dark");
        document.documentElement.classList.add("light");
      }
  }, [darkMode]);

  const handleTheme = () => {
    setDarkMode((prev) => {
      const isDarkMode = !prev;
      localStorage.setItem("dark-mode", JSON.stringify(isDarkMode));
      document.documentElement.classList.remove(isDarkMode ? "light" : "dark");
      document.documentElement.classList.add(isDarkMode ? "dark" : "light");
      return isDarkMode
    });
  };


  return (
    <div className="w-full flex items-center justify-between p-4 border-b border-border">
      {/* LOGO with options */}
      <div className="flex items-center justify-center  gap-5">
        <Link to={'/'} className="flex items-center justify-center gap-2 cursor-pointer">
          <Atom className="size-7" />
          <h1 className="text-2xl font">TECHERCE</h1>
        </Link>
        <div className="flex items-center gap-3">
          <NavLink className="text-sm text-textMuted transition duration-200 hover:text-primary">
            Home
          </NavLink>
          <NavLink className="text-sm text-textMuted transition duration-200 hover:text-primary">
            Shop
          </NavLink>
          <NavLink className="text-sm text-textMuted transition duration-200 hover:text-primary">
            Product
          </NavLink>
          <NavLink className="text-sm text-textMuted transition duration-200 hover:text-primary">
            Contact Us
          </NavLink>
        </div>
      </div>

      <div className="flex items-center gap-2">
        {/* Search */}
        <TextField />

        {/* Login, Cart, DarkMode */}
        <Login />
        <Cart />
          <button
            onClick={handleTheme}
            className="text-sm flex items-center justify-center min-w-[115px] border border-border py-1.5 px-3 rounded-md cursor-pointer hover:bg-hoverSecondary"
          >
            Appearance: {darkMode? "Dark" : "Light"}
          </button>
      </div>
    </div>
  );
};

export default Navbar;
