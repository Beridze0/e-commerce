import { CircleUserRound, ShoppingCart } from "lucide-react"
import { NavLink } from "react-router-dom"
import TextField from "../ui/TextField"

const Navbar = () => {
  return (
    <div className="flex items-center justify-between px-14 py-8 bg-background border border-border h-14">
        <div className="flex gap-8 items-center justify-center">
            <h1 className="text-2xl">E-Commerce</h1>
            <div className="flex gap-4 text-sm">
                <NavLink className="text-textMuted hover:text-textPrimary transition duration-200">Home</NavLink>
                <NavLink className="text-textMuted hover:text-textPrimary transition duration-200">Shop</NavLink>
                <NavLink className="text-textMuted hover:text-textPrimary transition duration-200">Product</NavLink>
                <NavLink className="text-textMuted hover:text-textPrimary transition duration-200">Contact Us</NavLink>
            </div>
        </div>
        <div className="flex items-center justify-center gap-4">
            <TextField />
            <CircleUserRound className="text-textPrimary cursor-pointer" size={19} />
            <ShoppingCart className="text-textPrimary cursor-pointer" size={19} />
        </div>
    </div>
  )
}

export default Navbar