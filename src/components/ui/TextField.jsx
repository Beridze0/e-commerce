import { Search } from "lucide-react"

const TextField = () => {
  return (
    <div className="flex items-center justify-between bg-primaryForeground w-64 gap-2 py-1.5 px-2 rounded-md">
        <input type="text" placeholder="Search for product..." className="text-sm font-sans outline-none w-full bg-transparent placeholder:text-textMuted" />
        <Search className="size-5" />
    </div>
  )
}

export default TextField