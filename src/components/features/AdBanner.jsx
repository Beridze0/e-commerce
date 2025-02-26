import laptop from "../../assets/laptop.jpg";

const AdBanner = () => {
  return (
    <div className="flex items-center justify-center mt-3">
      <div className="w-full h-[540px] border border-border relative">
        <img src={laptop} alt="laptop" className="w-full h-full object-cover" />
        <p className="text-white absolute bottom-40 left-12 w-[500px] opacity-70 hover:opacity-100 transition cursor-pointer">
          <span className="font-bold text-2xl">Experience Power & Performance!</span> Unleash next-level speed with the
          all-new laptop featuring an Intel Core i7, 16GB RAM, and a
          lightning-fast 1TB SSD. Stunning 15.6” FHD display, immersive graphics
          with RTX 4060, and all-day battery life. Work, game, and create like
          never before!
        </p>
      </div>
    </div>
  );
};

export default AdBanner;
