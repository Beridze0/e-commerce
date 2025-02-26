import { ChartNoAxesColumnIncreasing } from "lucide-react"
import ItemCard from "../ui/ItemCard"
import { useSelector } from "react-redux"

const Featured = () => {

  const techData = useSelector((state) => state.data.techData)

  return (
    <div className="flex flex-col gap-4 mt-5">
        <div className="flex items-center gap-1">
            <ChartNoAxesColumnIncreasing />
            <h1 className="text-3xl">Featured</h1>  
        </div>
        <div className="flex items-center gap-3">
            {
              techData.map((item, index)=>(
                <ItemCard key={index} details={item} />
              ))
            }
        </div>
    </div>
  )
}

export default Featured