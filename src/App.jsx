import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import SingleProductPage from "./components/SingleProductPage";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Shop from "./components/Shop";
import Cart from "./components/Cart"; // ✅ import
import CartProvider from "./context/CartContextProvider";


function App() {
  return (
    <CartProvider>
        <div className="app">
        <Header />
        {/* main content area */}
        <div className="page-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/product/:id" element={<SingleProductPage />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </div>

        <Footer />
      </div>
    </CartProvider>
      
    
  );
}

export default App;
