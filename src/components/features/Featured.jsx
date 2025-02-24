import { ChartNoAxesColumnIncreasing } from "lucide-react"
import ItemCard from "../ui/ItemCard"

const Featured = () => {
  return (
    <div>
        <div className="flex items-center gap-1">
            <ChartNoAxesColumnIncreasing />
            <h1 className="text-2xl">Featured</h1>  
        </div>
        <div>
            <ItemCard />
        </div>
    </div>
  )
}

export default Featured