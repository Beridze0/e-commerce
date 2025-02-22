import { NavLink } from "react-router-dom";
import TextField from "../ui/TextField";
import { Atom } from "lucide-react";
import Login from "../ui/Login";
import Cart from "../ui/Cart";

const Navbar = () => {
  return (
    <div className="w-full flex items-center justify-between p-3 border-b border-border">
      {/* LOGO with options */}
      <div className="flex items-center justify-center  gap-5">
        <div className="flex items-center justify-center gap-2">
          <Atom className="size-9" />
          <h1 className="text-3xl font">E-Commerce</h1>
        </div>
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

        {/* Login & Cart */}
        <Login />
        <Cart />
      </div>
    </div>
  );
};

export default Navbar;
