import { createContext, useState } from "react";

export const CartContext = createContext();

const CartProvider = ({ children }) => {
  //Cart state here
  const [cart, setCart] = useState([]);
  const [showNotification, setShowNotification] = useState(false);

  // Add to cart explanation
  //   {
  //     cart = [
  //   { id: 1, color: "black", quantity: 1 },   // index 0
  //   { id: 3, color: "red", quantity: 2 },     // index 1
  //   { id: 7, color: "white", quantity: 1 },   // index 2
  // ];
  //   }
  // user adds same product id = 7
  //existingIndex= 2 , updatedCart[2].quantity += quantity

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
    setShowNotification(false);
    setTimeout(() => {
      setShowNotification(true);
    }, 0);
    // setTimeout(()=>{setShowNotification(false)}, 2000)
  };

  const removeFromCart = (productId, color, action) => {
    setCart(
      (prevCart) =>
        prevCart
          .map((item) => {
            if (item.id === productId && item.color === color) {
              let newQuantity;
              if (action == "increase") {
                newQuantity = item.quantity + 1;
              } else if (action == "decrease") {
                newQuantity = item.quantity - 1;
              }
              return {
                ...item,
                quantity: newQuantity,
              };
            }
             // return unchanged item
            return item;
          })
          .filter((item) => item.quantity > 0) // removes items with 0 or less
    );

  }
  return (
    <CartContext.Provider
      value={{ cart, addToCart, removeFromCart, showNotification}}
    >
      {children}
    </CartContext.Provider>
  );
};
export default CartProvider;
