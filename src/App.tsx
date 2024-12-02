import { Routes, Route } from "react-router-dom"
import './App.css'
import NavigationBar from './components/NavBar'
import Home from "./pages/Home"
import ShoppingCart from "./pages/ShoppingCart"
import About from "./pages/About"
import { ShoppingCartProvider } from "./context/ShoppingCartContext"


function App() {

  return (
    <>
    {/* <NavigationBar /> */}
      <ShoppingCartProvider>
      <NavigationBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/ShoppingCart" element={<ShoppingCart />} />
        </Routes>
      </ShoppingCartProvider>


    </>
  )
}

export default App
