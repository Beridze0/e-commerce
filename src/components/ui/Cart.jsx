import { ShoppingCart } from "lucide-react"

const Cart = () => {
  return (
    <div className="flex items-center border border-border gap-2 py-1.5 px-3 rounded-md bg-primary text-textInverted hover:bg-hoverPrimary cursor-pointer">
        <ShoppingCart className="size-5" />
        <p className="text-sm">Cart</p>
    </div>
  )
}

export default Cart