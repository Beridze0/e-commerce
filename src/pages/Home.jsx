import AdBanner from "../components/features/AdBanner"
import Featured from "../components/features/Featured"

const Home = () => {
  return (
    <div className="flex flex-col gap-10 p-5 px-16">
      <AdBanner />
      <Featured />
    </div>
  )
}

export default Home