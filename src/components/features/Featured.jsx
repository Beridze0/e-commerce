import { ChartNoAxesColumnIncreasing } from "lucide-react"
import ItemCard from "../ui/ItemCard"

const Featured = () => {
  return (
    <div className="flex flex-col gap-4">
        <div className="flex items-center gap-1">
            <ChartNoAxesColumnIncreasing />
            <h1 className="text-2xl">Featured</h1>  
        </div>
        <div className="flex items-center gap-3">
            <ItemCard />
            <ItemCard />
            <ItemCard />
        </div>
    </div>
  )
}

export default Featured