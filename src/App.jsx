import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import SingleProductPage from "./components/SingleProductPage";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Shop from "./components/Shop";
import Cart from "./components/Cart"; // ✅ import
import { useState } from "react";

function App() {
  // 🛒 Cart state here
  const [cart, setCart] = useState([]);

  const addToCart = (product, quantity, color) => {
 

  setCart((prevCart) => {
    const existingIndex = prevCart.findIndex(
      (item) => item.id === product.id && item.color === color
    );
     const image = product.images[color]; // pick image based on selected color

    if (existingIndex >= 0) {
      const updatedCart = [...prevCart];
      updatedCart[existingIndex].quantity += quantity;
      return updatedCart;
    } else {
      return [...prevCart, { ...product, quantity, color, image }];
    }
  });
};


const removeFromCart = (productId , color , action) => {
    setCart((prevCart) => 
      prevCart.map((item) => {
        if(item.id === productId && item.color === color) {
          let newQuantity;
          if(action == "increase"){
            newQuantity = item.quantity + 1
          }
          else if (action == "decrease") {
          newQuantity = item.quantity - 1
          }
          return {
            ...item,
            quantity : newQuantity
          }
        }
        // return unchanged item
      return item;
      })
       .filter((item) => item.quantity > 0) // 🔑 removes items with 0 or less
    )
  }

 

return (
    <div className="app">
      <Header cartCount={cart.length} />

      {/* main content area */}
      <div className="page-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route
            path="/product/:id"
            element={
              <SingleProductPage
                addToCart={addToCart}
                cartCount={cart.length}
              />
            }
          />
          <Route
            path="/cart"
            element={<Cart cart={cart} removeFromCart={removeFromCart} />}
          />
        </Routes>
      </div>

      <Footer />
    </div>
  );
}

export default App;
