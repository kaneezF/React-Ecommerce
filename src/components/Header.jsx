import "./Header.css";
import { NavLink } from "react-router-dom";
import { IoCartOutline } from "react-icons/io5";
import { IoSearchOutline } from "react-icons/io5";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoCloseSharp } from "react-icons/io5";
import { useState, useEffect } from "react";

export default function Header({ cartCount }) {
  // const location = useLocation();

  // statefor hamburger menu
  const [isMenuOpen, setisMenuOpen] = useState(false);
  const handleMenuClick = () => {
    setisMenuOpen((prev) => !prev);
  };

  useEffect(() => {
    console.log("Menu open:", isMenuOpen);
  }, [isMenuOpen]);

  // const isLightPage = location.pathname.includes("/product");
  return (
    <>
     <div className= "navbar">
        <section className={"left"}>
          <ul className="nav-items">
            <li>
              <NavLink to={"/"}>Home</NavLink>
            </li>
            <li>
              <NavLink>About us</NavLink>
            </li>
            <li>
              <NavLink to={"shop"}>Shop</NavLink>
            </li>
            <li>
              <NavLink>Contact us</NavLink>
            </li>
          </ul>
        </section>
        <section className="centre">
          <img src="/images/logo-01.svg" alt="" />
        </section>
        <section className="right">
          <button className="icons">
           <NavLink to={"cart"}><IoCartOutline size={40} /></NavLink> 
            <span className="cartCount">{cartCount}</span> {/* 🛒 show cart count */}
          </button>
          <button className="icons">
            <IoSearchOutline size={30} />
          </button>
        </section>

        <section className="hamburger">
          {isMenuOpen ? (
            <button onClick={handleMenuClick}>
              <IoCloseSharp size={30} />
            </button>
          ) : (
            <button onClick={handleMenuClick}>
              {" "}
              <GiHamburgerMenu size={30} />
            </button>
          )}
        </section>

        <div className={`mobile-menu ${isMenuOpen ? "open" : "closed"}`}>
          <div className="mobile-nav-items">
            <ul className="nav-items">
              <li>
              <NavLink to={"/"}>Home</NavLink>
            </li>
            <li>
              <NavLink>About us</NavLink>
            </li>
            <li>
              <NavLink to={"/shop"}>Shop</NavLink>
            </li>
            <li>
              <NavLink>Contact us</NavLink>
            </li>
            </ul>

            <section className="mobile-right">
              <button className="mobile-icons">
               <NavLink to={"cart"}><IoCartOutline size={30} /></NavLink> 
                <span className="cartCount">{cartCount}</span> {/* 🛒 show cart count */}
              </button>
              <button className="icons">
                <IoSearchOutline size={30} />
              </button>
            </section>
          </div>
        </div>
      </div>
    </>
  );
}
