import { Star } from "lucide-react";
import computer from "../../assets/computer.jpg";

const ItemCard = () => {
  return (
    <div className="h-[370px] rounded-xl cursor-pointer">
      <div className="w-[320px] h-[250px]">
        <img src={computer} alt="" className="w-full h-full object-cover rounded-lg" />
        <div className="px-1">
          <div className="flex items-center pt-3 pb-2 gap-[2px]">
            <Star className="size-[1.1rem] fill-primary" />
            <Star className="size-[1.1rem] fill-primary" />
            <Star className="size-[1.1rem] fill-primary" />
            <Star className="size-[1.1rem] fill-primary" />
          </div>
          <p className="font-bold pb-1">
            Apple PC -{" "}
            <span className="text-sm">
              M2 Chip | 8GB RAM | 256GB SSD | Retina Display | macOS | All-Day
              Battery Life
            </span>
          </p>
          <p className="text-sm">$1000.00</p>
        </div>
      </div>
    </div>
  );
};

export default ItemCard;
