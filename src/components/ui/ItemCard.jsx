import computer from "../../assets/computer.jpg";

const ItemCard = () => {
  return (
    <div className=" flex flex-col gap-1 items-center border rounded-xl w-[260px] h-[250px] cursor-pointer">
      <div className="max-w-[260px] ">
        <img
          src={computer}
          alt="computer"
          className="w-full h-full object-cover rounded-t-xl"
        />
      </div>
      <div className="p-1">
        <p className="font-bold text-[0.8rem]">
          Apple PC <span className="font-normal">- M2 Chip, 16GB RAM, 512GB SSD</span>
        </p>
        <p className="text-xs">Price: $1000</p>
      </div>
    </div>
  );
};

export default ItemCard;
