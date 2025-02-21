import { Star } from "lucide-react";
import computer from "../../assets/computer.jpg";

const ItemCard = () => {
  return (
    <div>
      <div className="w-[300px] h-[250px]">
        <img src={computer} alt="" className="w-full h-full object-cover" />
        <div className="flex items-center pt-2 pb-1 gap-[2px]">
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
  );
};

export default ItemCard;
