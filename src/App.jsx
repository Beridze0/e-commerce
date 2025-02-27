import { Route, Routes } from "react-router-dom"
import Navbar from "./components/layout/Navbar"
import Home from "./pages/Home"
import Details from "./pages/Details"
import { useDispatch } from "react-redux"
import { useEffect } from "react"
import { setTechData } from "./redux/dataSlice"
import data from './data/productData.json'

const App = () => {

  const dispatch = useDispatch()
  

  useEffect(()=>{
    dispatch(setTechData(data))
  },[dispatch])
  

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