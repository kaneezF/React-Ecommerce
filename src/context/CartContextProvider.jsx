import { createContext, useState } from "react";
import CartNotification from "../components/CartNotification";

export const CartContext = createContext();

const CartProvider = ({ children }) => {
  //Cart state here
  const [cart, setCart] = useState([]);

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
  const [notification, setNotification] = useState(null);

  const showNotification = (msg, type="success") => {
    setNotification({msg, type});
    setTimeout(() => setNotification(null), 2000);
    console.log("TRUE");
  };

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
    // showNotification("Item removed from cart", "error");
  };
  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        showNotification,
      }}
    >
      {children}
      {notification && (
         <div className={`cart-notification ${notification.type}`}>
          <p>{notification.msg}</p>
        </div>
      )}
    </CartContext.Provider>
  );
};
export default CartProvider;
