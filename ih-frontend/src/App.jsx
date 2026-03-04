import './App.css'
import { useState } from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Cart from "./pages/Cart";

function App() {
  const [cartCount, setCartCount] = useState(0);

  function handleAddToCart() {
    setCartCount((currentCount) => currentCount + 1);
  }

  return (
    <BrowserRouter>
      <div className="page">
        <Header cartCount={cartCount} />
        <main className="page-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/shop" element={<Shop onAddToCart={handleAddToCart} />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/cart" element={<Cart cartCount={cartCount} />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  )
}

export default App
