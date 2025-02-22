import { Search } from "lucide-react"

const TextField = () => {
  return (
    <div className="flex items-center justify-between border border-border w-60 gap-2 py-1 px-3 rounded-md cursor-pointer">
        <input type="text" placeholder="Search for product..." className="text-sm outline-none w-full" />
        <Search className="size-5" />
    </div>
  )
}

export default TextField