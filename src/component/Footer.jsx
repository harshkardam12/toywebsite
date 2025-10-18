import React from "react";
import "../make/footer.css"; // import CSS
import Toy from "../assets/toy.png";
import { Link } from "react-router-dom";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="footer">
      <div className="lone">
        <div className="lop">
          <img src={Toy} alt="Logo" />
        </div>

        <div className="account">
          <h2>Information</h2>
          <h3><Link to="/dis" onClick={scrollToTop}>Disclaimer</Link></h3>
          <h3><Link to="/term" onClick={scrollToTop}>Term & Condition</Link></h3>
          <h3><Link to="/privacy" onClick={scrollToTop}>Shipping Policy</Link></h3>
          <h3><Link to="/return" onClick={scrollToTop}>Return & Cancellation</Link></h3>
          <h3><Link to="/return" onClick={scrollToTop}>Refund</Link></h3>
          <h3><Link to="/contact" onClick={scrollToTop}>Support Team</Link></h3>
          <h3><Link to="/faq" onClick={scrollToTop}>FAQ</Link></h3>
        </div>

        <div className="service">
          <h2>Categories</h2>
          <h3><Link to="#">Smart Gadgets Tools</Link></h3>
          <h3><Link to="#">Transport Toys</Link></h3>
          <h3><Link to="#">Animals Toys</Link></h3>
          <h3><Link to="#">Toys and Games</Link></h3>
          <h3><Link to="#">Gift Boxes</Link></h3>
          <h3><Link to="#">Puzzles</Link></h3>
        </div>

        <div className="shop">
          <h2>Contact Us</h2>
          <h3><a href="tel:+911234567890">+91 1234567890</a></h3>
          <h3><a href="tel:+911234567890">+91 1234567890</a></h3>
          <h3><a href="mailto:Example@gmail.com">Example@gmail.com</a></h3>
          <h3><a href="mailto:Example@gmail.com">Example@gmail.com</a></h3>
        </div>
      </div>
    </footer>
  );
}
