import { Routes, Route } from "react-router-dom"
import './App.css'
import NavigationBar from './components/NavBar'
import Home from "./pages/Home"
import ShoppingCart from "./pages/ShoppingCart"
import About from "./pages/About"


function App() {

  return (
    <>
    <NavigationBar />
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/About" element={<About />}/>
      <Route path="/ShoppingCart" element={<ShoppingCart />}/>
    </Routes>
    
    </>
  )
}

export default App
