import React from "react";
import "../make/footer.css"; // import css file
import Toy from "../assets/toy.png";
import { Link } from "react-router-dom";

export default function Footer() {
  // function for smooth scroll to top
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="footer">
      <div className="lone">
        <div className="lop">
          <img src={Toy} alt="" />
        </div>

        <div className="account">
          <h2>Information</h2>

          <h3>
            <Link to="/dis" onClick={scrollToTop}>
              Disclaimer
            </Link>
          </h3>
          <h3>
            <Link to="/term" onClick={scrollToTop}>
              Term & Condition
            </Link>
          </h3>
          <h3>
            <Link to="/privacy" onClick={scrollToTop}>
              Shipping Policy
            </Link>
          </h3>
          <h3>
            <Link to="/return" onClick={scrollToTop}>
              Return & Cancellation
            </Link>
          </h3>
          <h3>
            <Link to="/return" onClick={scrollToTop}>
              Refund
            </Link>
          </h3>
          <h3>
            <Link to="/contact" onClick={scrollToTop}>
              Support Team
            </Link>
          </h3>
          <h3>
            <Link to="/faq" onClick={scrollToTop}>
              FAQ
            </Link>
          </h3>
        </div>

        <div className="service">
          <h2>Categories</h2>
          <h3>Smart gadgets Tools</h3>
          <h3>Transport toys</h3>
          <h3>Animals toys</h3>
          <h3>Toys and games</h3>
          <h3>Gift Boxes</h3>
          <h3>Puzzles</h3>
        </div>

        <div className="shop">
          <h2>Contact us</h2>
          <div className="shop1">
            <h3>+91 1234567890</h3>
            <h3>+91 1234567890</h3>
          </div>
          <h3>Example@gmail.com</h3>
          <h3>Example@gmail.com</h3>
        </div>
      </div>
    </footer>
  );
}
