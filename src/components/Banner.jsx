// import "./Banner.css";
// export default function Banner({maintitle}) {
//   return (
//     <>
//       <div className="container banner">
//         <div className="title">
//           <p className="pre-title">Casual & Everyday</p>
//           <p className="main-title">{maintitle}</p>
//           <p className="post-title">
//             Effortlessly blend comfort and style with our Casual & Everyday
//             collection, featuring cozy sweaters, <br />
//             versatile denim, laid-back tees, and relaxed-fit joggers for your
//             everyday adventures
//           </p>
//           <button className="viewCollectionBtn">View Collection</button>
//         </div>
//       </div>
//     </>
//   );
// }

// Banner.jsx
import "./Banner.css";

export default function Banner({
  maintitle,
  pretitle,
  posttitle,
  showPreTitle = true,
  showPostTitle = true,
  showButton = true,
}) {
  return (
    <div className="container banner">
      <div className="title">
        {showPreTitle && pretitle && <p className="pre-title">{pretitle}</p>}
        {maintitle && <p className="main-title">{maintitle}</p>}
        {showPostTitle && posttitle && <p className="post-title">{posttitle}</p>}
        {showButton && <button className="viewCollectionBtn">View Collection</button>}
      </div>
    </div>
  );
}

