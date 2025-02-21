import { ChartNoAxesColumnIncreasing } from "lucide-react";
import ItemCard from "../ui/ItemCard";

const Featured = () => {
  return (
    <div className="flex flex-col justify-center pt-3">
      <div className="flex items-center gap-1">
        <ChartNoAxesColumnIncreasing />
        <h1 className="text-2xl font-bold py-6">Featured</h1>
      </div>
      <div className="text-primary flex items-center justify-between h-full">
        <ItemCard />
        <ItemCard />
        <ItemCard />
        <ItemCard />
      </div>
    </div>
  );
};

export default Featured;
