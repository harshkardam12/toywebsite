import React from "react";
import "../make/Contact.css";
import pok from "../assets/boy.png";
import { Mail, ContactRound, MessageCircleMore, MapPinned } from "lucide-react";

function Contact() {
  return (
    <div className="contact">
      <h1>Contact us</h1>
      <div className="contact-container">
        <div className="conta">
          {/* Left Side - Location */}
          <div className="location">
            <h3>Our Location</h3>
            <h4><MapPinned size={25} />Address:</h4>
            <p>Mind Power World <br />
              C-3 Sainik Vihar, near Divider Road <br />
              Meerut, Uttar Pradesh
            </p>
            <p>Email: rhythm@gmail.com</p>
            <p>Phone: +91 9012897031</p>
          </div>
          <div className="intel">
            <span><Mail size={25}  className="icol"/>EMAIL : <h5>QWIQOWDMQWI</h5></span>
            <span><ContactRound size={25} className="icol"/>NUMBER :<h5>91+84149264169</h5></span>
            <span> <MessageCircleMore size={25} className="icol" />Number :<h5>91+84149264169</h5></span>
          </div>
          <img src={pok} alt="" className="pok"/>
        </div>

        {/* Right Side - Form */}
        <div className="form">
          <h2>Contact Form</h2>
          <form>
            <label>Name :</label>
            <input type="text" placeholder="Name" />

            <label>Email :</label>
            <input type="email" placeholder="Email" />

            <label>Phone Number :</label>
            <input type="tel" placeholder="XXXXXXXXXX" />

            <label>Subject :</label>
            <input type="text" placeholder="Subject" />

            <label>Message :</label>
            <textarea placeholder="Message"></textarea>

            <button type="submit">Send Query</button>
          </form>
        </div>
      </div>

      <div className="map">
        <h2>Map Area</h2>
      </div>
    </div>
  );
}

export default Contact;
