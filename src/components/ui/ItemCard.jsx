import computer from "../../assets/computer.jpg";

const ItemCard = () => {
  return (
    <div className=" flex flex-col border border-border rounded-xl gap-1 items-centerrounded-xl w-[270px] min-w-[270px] h-[260px] cursor-pointer">
      <div className="max-w-[270px] ">
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
