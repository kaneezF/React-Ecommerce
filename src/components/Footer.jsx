import "./Footer.css"

export default function Footer(){
 return (
    <>
    <div className="footer">
      <div className="footer-items">
        <p className="footer-item-title">Home</p>
        <ul className="footer-item-list">
          <li>Home</li>
          <li>Shop</li>
          <li>About Us</li>
        </ul>
      </div>
      <div className="footer-items">
        <p className="footer-item-title">Categories</p>
        <ul className="footer-item-list">
          <li>Casual</li>
          <li>Work and Office</li>
          <li>Active Wear</li>
          <li>Evening Dress</li>
        </ul>
      </div>
      <div className="footer-items">
        <p className="footer-item-title">Resources</p>
        <ul className="footer-item-list">
          <li>Contact Us</li>
          <li>FAQ</li>
        </ul>
      </div>
      <div className="footer-items">
        <p className="footer-item-title">Social Media</p>
        <ul className="footer-item-list">
          <li>Facebook</li>
          <li>Instagram</li>
          <li>Pinterest</li>
        </ul>
      </div>
    </div>
    </>
 )
}