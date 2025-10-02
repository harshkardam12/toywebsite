import React from "react";
import "../make/footer.css"; // import css file
import Toy from "../assets/toy.png"
import { Link } from "react-router-dom";
export default function Footer() {
  return (
    <footer className="footer">
      <div className='lone'>
        <div className='lop'>
          <img src={Toy} alt="" />
        </div>
        <div className='account'>

          <Link to="/" ><h2>Information</h2></Link>
          <Link to="/" ><h3>Disclaimer</h3></Link>
          <Link to="/term" ><h3>Term & Condition</h3></Link>
          <Link to="/" ><h3>Shipping Policy</h3></Link>
          <Link to="/" ><h3>Return & Cancellation</h3></Link>
          <Link to="/" ><h3>Refund</h3></Link>
          <Link to="/" ><h3>Support Team</h3></Link>
          <Link to="/" ><h3>FAQ</h3></Link>
        </div>
        <div className='service'>
          <h2>Catogeries</h2>
          <h3>Smart gadgets Tools</h3>
          <h3>Transport toys</h3>
          <h3>Animals toys</h3>
          <h3>Toys and games</h3>
          <h3>Gift Boxes</h3>
          <h3>Puzzels  </h3>
        </div>
        <div className='shop'>
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
