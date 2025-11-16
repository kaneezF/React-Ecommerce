import "./NewProduct.css";
import products from "../data/products";
import { Link } from "react-router-dom";

export default function NewProduct({limit}) {
  // **If limit is passed, show only limited items**
  const itemsToShow = limit ? products.slice(0, limit) : products;

  return (
    
    <>
      <div className="info">
        <div className="info-title">
          <i className="fa-solid fa-lock"></i>
          <h4>Secure Payments</h4>
          <p>
            Shop with confidence knowing that your transactions are safeguarded.
          </p>
        </div>
        <div className="info-title">
          <i className="fa-solid fa-truck"></i>
          <h4>Free Shipping</h4>
          <p>
            Shopping with no extra charges – savor the liberty of complimentary
            shipping on every order.
          </p>
        </div>
        <div className="info-title">
          <i className="fa-solid fa-rotate-left"></i>
          <h4>Easy Returns</h4>
          <p>
            With our hassle-free Easy Returns, changing your mind has never been
            more convenient.
          </p>
        </div>
        <div className="info-title">
          <i className="fa-solid fa-location-dot"></i>
          <h4>Order Tracking</h4>
          <p>
            Stay in the loop with our Order Tracking feature – from checkout to
            your doorstep.
          </p>
        </div>
      </div>

      <p className="second-title">Newest Products</p>
      <div className="second">
        {itemsToShow.map((product, index) => (
          <Link
            key={index}
            to={`/product/${product.id}`}
            style={{ textDecoration: "none", color: "inherit" }}
          >
          <div className="item" key={index}>
            <div className={`img new-products-img ${product.imageClass}`}></div>
            <div className="card">
              <p className="category">{product.category}</p>
              <h3 className="description">{product.name}</h3>
              <p className="price">${product.price.toFixed(2)}</p>
            </div>
          </div>
          </Link>
        ))}
      </div>
    </>
  );
}
