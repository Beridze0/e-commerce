import { Route, Routes } from "react-router-dom"
import Navbar from "./components/layout/Navbar"
import Home from "./pages/Home"
import Details from "./pages/Details"

const App = () => {
  return (
    <div className="text-primary">
      <Navbar />
      <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/details/:id' element={<Details />} />
      </Routes>
    </div>
  )
}

export default App