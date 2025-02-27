import { Heart } from "lucide-react";
import computer from "../assets/computer.jpg";
import { useDispatch, useSelector } from "react-redux";
import { increment, decrement } from "../redux/quantitySlice";
import { useParams } from "react-router-dom";

const Details = () => {
  const {name} = useParams();
  const techData = useSelector((state) => state.data.techData);
  const quantity = useSelector((state) => state.quantity.quantities[name] || 0);
  const dispatch = useDispatch();

  const techDetails = techData.find((tech) => tech.name == name);


  if(!techDetails){
    return <p>Product not found!</p>
  }


  const handleIncrement = () => {
    dispatch(increment(name));
  };

  const handleDecrement = () => {
    dispatch(decrement(name));
  };


  return (
    <div className="flex gap-10 p-5 px-24">
      <div className="w-[650px] h-[570px] shrink-0">
        <img src={computer} alt={techDetails.name} className="w-full h-full object-cover" />
      </div>
      <div className="flex flex-col gap-2">
        <p className="font-bold text-lg">
          {techDetails.name} - {techDetails.description}</p>
        <p className="text-textMuted text-sm">
          {techDetails.description}
        </p>
        <p className="text-lg font-bold">
          Price: <span className="font-normal">{techDetails.Price}</span>
        </p>
        <div className="flex gap-3 w-[65%] flex-col">
          <div className="w-full flex gap-4">
            <div className="flex items-center gap-3 border px-2 py-1.5 w-fit rounded bg-background">
              <button onClick={handleDecrement} className="px-2">
                -
              </button>
              <p>{quantity}</p>
              <button onClick={handleIncrement} className="px-2">
                +
              </button>
            </div>
            <div className="w-full">
              <button className="w-full flex items-center justify-center gap-2 border h-full rounded font-bold hover:bg-hoverSecondary">
                <Heart /> Wishlist
              </button>
            </div>
          </div>
          <button className="border py-1.5 rounded hover:bg-hoverSecondary">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default Details;
