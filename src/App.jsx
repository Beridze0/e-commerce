import AdBanner from "./components/features/adBanner";
import Featured from "./components/features/Featured";
import Navbar from "./components/layout/Navbar";

const App = () => {
  return (
    <div className="w-full text-primary">
      <Navbar />
      <div className="mx-20">
        <AdBanner />
        <Featured />
      </div>
    </div>
  );
};

export default App;
