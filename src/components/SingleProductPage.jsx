// // src/components/SingleProductPage.jsx
// import { useParams, useSearchParams } from "react-router-dom";
// import products from "../data/products";
// import "./ProductCard.css";
// import "./SingleProductCard.css";
// import { useState } from "react";

// export default function SingleProductPage() {
//   const { id } = useParams(); // get the product ID from URL
//   const product = products.find((p) => p.id === Number(id));

//    const selectedColor = searchParams.get("color");

//   if (!product) return <p>Product not found</p>;

//   const [quantity, setQuantity] = useState(1); // Step 1: create quantity state

//    const [color, setColor] = useState(selectedColor || product.colors[0]);
//     const currentImage = product.images[color];

//   // Step 2: handlers
//   const increaseQty = () => setQuantity((prev) => prev + 1);
//   const decreaseQty = () => {
//     if (quantity > 1) setQuantity((prev) => prev - 1);
//   };

//   return (
//     <div class="container-product">
//       <div className="product-visual">
//         {/* Product info */}
//         <div class="product-info product-overlay">
//           <p className="category product-category">{product.category}</p>
//           {/* <h2 className="product-name">{product.name}</h2> */}
//           <div className="product-div">
//             <p className="description product-desc">{product.description}</p>
//           </div>
//         </div>

//         {/* Product image */}

//         <div className={`product-bg ${product.imageClass}`}></div>
//         <div className={`img product-img ${product.imageClass}`}></div>
//         <div class="centered product-name">{product.name}</div>

//         <div
//           className="product-bg"
//           style={{ backgroundImage: `url(/images/${currentImage})` }}
//         ></div>
//         <div
//           className="product-img"
//           style={{ backgroundImage: `url(/images/${currentImage})` }}
//         ></div>
//         <div className="centered product-name">{product.name}</div>

//         {/* Product info */}
//         <div class="product-info product-overlay">
//           <p className="price product-size">${product.price.toFixed(2)}</p>
//           <hr />
//           <div className="color-size">
//             <div className="sizes">
//               <p className="size-text">Sizes: </p>
//               {product.sizes.map((size, i) => (
//                 <button key={i}>{size}</button>
//               ))}
//             </div>
//             <div className="colors">
//               <p className="color-text">Colors:</p>
//               {product.colors.map((color, i) => (
//                 <span key={i} className={`dot ${color}`}></span>
//               ))}
//             </div>
//           </div>
//           <hr />
//         </div>

//       </div>

//       <div class="btns">
//         <div class="counter-btn">
//           <button className="counter-symbol" onClick={decreaseQty}>
//             –
//           </button>
//           <span className="counter-display">{quantity}</span>
//           <button className="counter-symbol" onClick={increaseQty}>
//             +
//           </button>{" "}
//         </div>
//         <div class="add-to-cart">
//           <button className="cart">Add to cart</button>
//         </div>
//       </div>
//     </div>
//   );
// }

// src/components/SingleProductPage.jsx
import { useParams, useSearchParams } from "react-router-dom";
import products from "../data/products";
import "./ProductCard.css";
import "./SingleProductCard.css";
import { useState, useEffect, useContext } from "react";
import AdditionalInfo from "./AdditionalInfo";
import { CartContext } from "../context/CartContextProvider";

export default function SingleProductPage() {
  const { id } = useParams(); // Get product ID from URL
  const [searchParams, setSearchParams] = useSearchParams(); 
  const selectedColor = searchParams.get("color"); // get color query param
  const {addToCart} = useContext(CartContext)
  const {showNotification} = useContext(CartContext);

  const product = products.find((p) => p.id === Number(id));
  if (!product) return <p>Product not found</p>;

  const [quantity, setQuantity] = useState(1);
  const [color, setColor] = useState(selectedColor || product.colors[0]);

 console.log("State color" , color)
  useEffect(() => {
    if (selectedColor) {
      setColor(selectedColor);
    }
     console.log("selectedColor from URL:", selectedColor);
  }, [selectedColor]);
  const currentImage = product.images[color];

  const increaseQty = () => setQuantity((prev) => prev + 1);
  const decreaseQty = () => {
    if (quantity > 1) setQuantity((prev) => prev - 1);
  };

  return (
    <>
    {console.log("showNotification =", showNotification)}
{showNotification && console.log("NOTIFICATION SHOULD BE VISIBLE")}

{showNotification && (
  <div className="cart-notification">
    <p>{product.name} added</p>
  </div>
)}
   
    <div></div>
    <div className="container-product">
      <div className="product-visual">
        {/* Product Images */}
        <div
          className="product-bg"
          style={{ backgroundImage: `url(/images/${currentImage})` }}
        ></div>
        <div
          className="product-img"
          style={{ backgroundImage: `url(/images/${currentImage})` }}
        ></div>

        {/* Product Info */}
        <div className="product-info product-overlay">
          <div className=" product-name">{product.name}</div>
          <p className="category product-category">{product.category}</p>
          <div className="product-div">
            <p className="description product-desc">{product.description}</p>
          </div>
        </div>

        {/* Sizes and Colors */}
        <div className="product-info product-overlay">
          <p className="price product-size">${product.price.toFixed(2)}</p>
          <hr />
          <div className="color-size">
            <div className="sizes">
              <p className="size-text">Sizes:</p>
              {product.sizes.map((size, i) => (
                <button key={i}>{size}</button>
              ))}
            </div>
            {
              product.colors && product.colors.length > 0 &&( <div className="colors">
              <p className="color-text">Colors:</p>
              {product.colors.map((c, i) => (
                <span
                  key={i}
                  className={`dot ${c} ${color === c ? "active" : ""}`}
                  onClick={() => {
                    setColor(c);
                    setSearchParams({ color: c });
                  }}
                ></span>
              ))}
            </div>)
            }
          </div>
          <hr />
        </div>
      </div>

      {/* Add to Cart + Counter */}
      <div className="btns">
        <div className="counter-btn">
          <button className="counter-symbol" onClick={decreaseQty}>
            –
          </button>
          <span className="counter-display">{quantity}</span>
          <button className="counter-symbol" onClick={increaseQty}>
            +
          </button>
        </div>
        <div className="add-to-cart">
          <button className="cart"  onClick={() => addToCart(product, quantity, color)} >Add to cart</button>
        </div>
      </div>
     <AdditionalInfo product={product} />
    </div>
     </>
  );

  
}

