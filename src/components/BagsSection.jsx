import "./BagsSection.css";
import { useNavigate } from "react-router-dom";

export default function BagsSection() {

  const navigate = useNavigate();
  return (
    <>
      <div className="bags-container">
        <div className="right-side-content">
          <div className="right-side-img">
            <img src="/images/bg-03-b.jpg" alt="" />
          </div>
          <div className="right-side-text">
            <p className="sec-title">Explore our exquisite Bag Collection now!</p>
            <button className="side-btn" onClick={() => navigate("/shop")}>View Collection</button>
          </div>
        </div>
      </div>
    </>
  );
}
