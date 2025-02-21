import laptop from "../../assets/laptop.jpg";

const AdBanner = () => {
  return (
    <div className="text-primary flex items-center w-full py-7">
      <div className="w-full h-[500px] border border-border overflow-hidden rounded-xl shadow-lg relative">
        <img
          src={laptop}
          alt="Ad"
          className="w-full h-full object-cover"
        />
        <div className="absolute top-52 left-14 max-w-[500px] opacity-80 text-white">
          <h1 className="text-3xl">Introducing the Next-Gen Laptop!</h1>
          <p className="text-base">
            Experience lightning-fast performance, stunning visuals, and all-day
            battery life with our latest laptop. Perfect for work, gaming, and
            creativity. Upgrade today!
          </p>
          <button className="my-8 border border-border py-2 px-6 text-textMuted transition hover:text-primary hover:border-primary">
            Shop Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default AdBanner;
