import { Search } from "lucide-react"

const TextField = () => {
  return (
    <div className="flex items-center justify-between bg-primaryForeground w-60 gap-2 py-1.5 px-3 rounded-md">
        <input type="text" placeholder="Search for product..." className="text-sm outline-none w-full bg-transparent" />
        <Search className="size-5" />
    </div>
  )
}

export default TextField