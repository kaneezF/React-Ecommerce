import "./AdditionalInfo.css";
import { useState } from "react";
import ReviewForm from "./ReviewForm";

// AdditionalInfo.jsx
export default function AdditionalInfo({ product }) {

      const [toggleState, setToggleState] = useState(1);

      const toggleTab = (index) => {
        setToggleState(index);
    }
  return (
    // <div className="info-container">
        
    //   <div className="description_new">
    //    <h4>Description</h4>
    //      <p>{product.new_description}</p>
    //   </div>
    //   <div className="additionalInfo">
    //     <h4>Additional Information</h4>
       
    //   </div>
    //   <div className="reviews">
    //     <h4>Review</h4>
    //   </div>
    // </div>

    // toggletab(1) ----> toggleState(1) -----> tabs active class on 1st tab -----> content of tab gets active-content class
    <div className="info-conatiner">
         <ul className="tab-list">
        <li className={toggleState === 1 ? 'tabs active-tabs' : "tabs"} onClick={() => toggleTab(1)}>Description</li>
        <li className={toggleState === 2 ? 'tabs active-tabs' : "tabs"} onClick={() => toggleTab(2)}>Information</li>
        <li className={toggleState === 3 ? 'tabs active-tabs' : "tabs"} onClick={() => toggleTab(3)}>Review</li>
      </ul>
       <div className="content-container">
        <div className={toggleState === 1 ? 'content active-content' : "content"}><p>{product.new_description}</p></div>
        <div className={toggleState === 2 ? 'content active-content' : "content"}>
            <table style={{ width: "100%" }}>
                <tbody>
                    <tr>
                    <th>Size</th>
                    <td>{product.sizes.join(", ")}</td>
    
                </tr>
                <tr>
                    <th>Color</th>
                    <td>{product.colors.join(", ")}</td>
                
                </tr>
                </tbody>
                
            </table>
        </div>
        <div className={toggleState === 3 ? 'content active-content' : "content"}><ReviewForm product={product}/></div>
      </div>
    </div>
  );
}

