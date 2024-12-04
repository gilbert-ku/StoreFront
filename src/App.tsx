import { Routes, Route } from "react-router-dom"
import './App.css'
import NavigationBar from './components/NavBar'
import Home from "./pages/Home"
import ShoppingCart from "./pages/ShoppingCart"
import About from "./pages/About"
import { ShoppingCartProvider } from "./context/ShoppingCartContext"
import ProductDetails from "./components/ProductDetails"
import Footer from "./components/Footer"


function App() {

  return (
    <>
    {/* <NavigationBar /> */}
      <ShoppingCartProvider>
      <NavigationBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/product/:id" element={<ProductDetails/>} />
          <Route path="/ShoppingCart" element={<ShoppingCart />} />
        </Routes>
        <Footer />
      </ShoppingCartProvider>


    </>
  )
}

export default App
