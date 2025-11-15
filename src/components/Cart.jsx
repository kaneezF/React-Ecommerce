import { useContext } from "react";
import { CartContext } from "../context/CartContextProvider";
import "./Cart.css"

export default function Cart() {
  const { cart, removeFromCart } = useContext(CartContext);

  return (
    <div className="second-title">
      <h2>Your Cart</h2>

      {cart.length === 0 ? (
        <p>🛒 Your cart is empty</p>
      ) : (
        <div className="cart-table-wrapper">
        <table className="cart-table">
  <thead>
    <tr>
      <th>Product</th>
      <th>Product Name</th>
      <th>Price</th>
      <th>Quantity</th>
      <th>Subtotal</th>
    </tr>
  </thead>

  <tbody>
    {cart.map((item) => (
      <tr key={item.id + item.color}>
        <td>
          <img
            src={`/images/${item.image}`}
            alt={item.name}
            className="cart-img"
          />
        </td>

        <td>
          <div className="cart-product-details">
            {item.name}
          </div>
        </td>

        <td className="product-price">${item.price}.00</td>

        {/* Quantity buttons */}
        <td className="quantity-cell">
           <div className="quantity-wrapper">
          <button
            className="qty-btn"
            onClick={() =>
              removeFromCart(item.id, item.color, "decrease")
            }
          >
            –
          </button>

          <span className="qty-display">{item.quantity}</span>

          <button
            className="qty-btn"
            onClick={() =>
              removeFromCart(item.id, item.color, "increase")
            }
          >
            +
          </button>
          </div>
        </td>

        <td className="subtotal">
          ${item.price * item.quantity}.00
        </td>
      </tr>
    ))}
  </tbody>
</table>
</div>

      )}
    </div>
  );
}
