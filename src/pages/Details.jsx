import { Heart } from "lucide-react";
import computer from "../assets/computer.jpg";
import { useDispatch, useSelector } from "react-redux";
import { increment, decrement } from "../redux/quantitySlice";

const Details = () => {

  const quantity = useSelector((state) => state.quantity.value)
  const dispatch = useDispatch()

  return (
    <div className="flex gap-10 p-5 px-24">
      <div className="w-[650px] h-[400px] shrink-0">
        <img src={computer} alt="" className="w-full h-full object-cover" />
      </div>
      <div className="flex flex-col gap-2">
        <p className="font-bold text-lg">
          Apple PC - M2 Chip, 16GB RAM, 512GB SSD, Retina Display, 10-Core GPU,
          All-Day Battery, macOS, Thunderbolt 4, Magic Keyboard & Touch ID
        </p>
        <p className="text-textMuted text-sm">
          Experience unparalleled speed and efficiency with the Apple PC
          featuring the powerful M2 chip, 16GB RAM, and a lightning-fast 512GB
          SSD. Enjoy stunning visuals on the Retina Display, smooth graphics
          with the 10-Core GPU, and seamless multitasking. Designed for all-day
          productivity with an extended battery life, macOS optimization, and
          cutting-edge Thunderbolt 4 connectivity. Unlock convenience with the
          Magic Keyboard & Touch ID—built for professionals, creators, and tech
          enthusiasts alike!{" "}
        </p>
        <p className="text-lg font-bold">
          Price: <span className="font-normal">$1000</span>
        </p>
        <div className="flex gap-3 w-[65%] flex-col">
          <div className="w-full flex gap-4">
            <div className="flex items-center gap-3 border px-2 py-1.5 w-fit rounded bg-background">
              <button onClick={dispatch(decrement())} className="px-2">-</button>
              <p>{quantity}</p>
              <button onClick={dispatch(increment())} className="px-2">+</button>
            </div>
            <div className="w-full">
              <button className="w-full flex items-center justify-center gap-2 border h-full rounded font-bold hover:bg-hoverSecondary">
                <Heart /> Wishlist
              </button>
            </div>
          </div>
          <button className="border py-1.5 rounded hover:bg-hoverSecondary">Add to Cart</button>
        </div>
      </div>
    </div>
  );
};

export default Details;
