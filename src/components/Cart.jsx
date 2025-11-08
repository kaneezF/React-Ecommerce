// src/components/Cart.jsx
// export default function Cart({ cart, removeFromCart }) {
//   return (
//     <div style={{ padding: "20px" }}>
//       <h2>Your Cart</h2>

//       {cart.length === 0 ? (
//         <p>🛒 Your cart is empty</p>
//       ) : (
//         <ul>
//           {cart.map((item, index) => (
//             <li key={index}>
//               <strong>{item.name}</strong> - {item.color} - Qty: {item.quantity}{" "}
//               - ${item.price}
//               <div className="add-to-cart">
//                 <button
//                   className="cart"
//                   onClick={() => removeFromCart(item, 1, item.color)}
//                 >
//                   Remove from cart
//                 </button>
//               </div>
//             </li>
//           ))}
//         </ul>
//       )}
//     </div>
//   );
// }

export default function Cart({ cart, removeFromCart }) {
  return (
    <div style={{ padding: "20px" }}>
      <h2>Your Cart</h2>

      {cart.length === 0 ? (
        <p>🛒 Your cart is empty</p>
      ) : (
        <ul>
          {cart.map((item, index) => (
            <li key={index} style={{ marginBottom: "20px", listStyle: "none" }}>
              <img
                src={`/images/${item.image}`}
                alt={item.name}
                style={{
                  width: "80px",
                  height: "100px",
                  objectFit: "cover",
                  marginRight: "10px",
                }}
              />
              <div>
                <strong>{item.name}</strong> - {item.color} - ${item.price}-
                Qty: {item.quantity}{" "}
              </div>

              {/* Add to Cart + Counter */}
              <div className="btns">
                <div className="counter-btn">
                  <button
                    className="counter-symbol"
                    onClick={() =>
                      removeFromCart(item.id, item.color, "decrease")
                    }
                  >
                    –
                  </button>
                  <span className="counter-display">{item.quantity}</span>
                  <button
                    className="counter-symbol"
                    onClick={() =>
                      removeFromCart(item.id, item.color, "increase")
                    }
                  >
                    +
                  </button>
                </div>
                <div className="add-to-cart">
                  {/* Remove Button */}
                  <button
                    className="cart"
                    onClick={() =>
                      removeFromCart(item.id, item.color, item.quantity)
                    }
                  >
                    Remove from cart
                  </button>
                </div>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
