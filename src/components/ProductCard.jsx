// src/components/ProductCard.jsx
// import "./ProductCard.css";
// import products from "../data/products";
// import { Link } from "react-router-dom";

// export default function ProductCard() {
//   return (
//     <>
//       <p className="second-title">Most Popular</p>
//       <div className="second">
//         {products.map((product, index) => (
//           <Link
//             key={index}
//             to={`/product/${product.id}`}
//             style={{ textDecoration: "none", color: "inherit" }}
//           >
//           <div className="item">
//             <div className={`img ${product.imageClass}`}></div>
//             <div className="card">
//               <p className="category">{product.category}</p>
//               <h3 className="description">{product.name}</h3>
//               <p className="price">${product.price.toFixed(2)}</p>

//               <div className="sizes">
//                 {product.sizes.map((size, i) => (
//                   <button key={i}>{size}</button>
//                 ))}
//               </div>

//               <div className="colors">
//                 {product.colors.map((color, i) => (
//                   <span key={i} className={`dot ${color}`}></span>
//                 ))}
//               </div>
//             </div>
//           </div>
//           </Link>
//         ))}
//       </div>
//     </>
//   );
// }

import React, { useState } from "react";
import "./ProductCard.css";
import products from "../data/products";
import { Link } from "react-router-dom";

export default function ProductCard({limit}) {
  const [selectedColors, setSelectedColors] = useState({});

  const handleColorClick = (productId, color) => {
    setSelectedColors((prev) => ({
      ...prev,
      [productId]: color,
    }));
  };

  // **If limit is passed, show only limited items**
  const itemsToShow = limit ? products.slice(0, limit) : products;

  return (
    <>
      <p className="second-title">Most Popular</p>
      <div className="second">
        {itemsToShow.map((product, index) => {
          const selectedColor = selectedColors[product.id] || "black"; // default to black
          const imagePath = `/images/${product.images[selectedColor]}`;

          // map return
          return (
            <Link
              key={index}
              to={`/product/${product.id}?color=${selectedColor}`}
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <div className="item">
                <div
                  className="img"
                  style={{
                    backgroundImage: `url(${imagePath})`,
                  }}
                ></div>

                <div className="card">
                  <p className="category">{product.category}</p>
                  <h3 className="description">{product.name}</h3>
                  <p className="price">${product.price.toFixed(2)}</p>

                  <div className="sizes">
                    {product.sizes.map((size, i) => (
                      <button key={i}>{size}</button>
                    ))}
                  </div>

                  <div className="colors">
                    {product.colors.map((color, i) => (
                      <span
                        key={i}
                        className={`dot ${color} ${
                          selectedColor === color ? "active" : ""
                        }`}
                        onClick={(e) => {
                          e.preventDefault(); // prevent Link redirect
                          handleColorClick(product.id, color);
                        }}
                      ></span>
                    ))}
                  </div>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </>
  );
}
