import React from "react";
import "../make/thankyou.css";
import Thank from "../assets/party.png";
import Thanke from "../assets/than.png";
import Thanko from "../assets/thum.png";

const Thanks = [
  {
    id: "#1jj23456",
    name: "Teddy Bear",
    date: "March 15, 2025",
    price: "Rs. 299 /-",
    status: "Shipped",
    add: "Hrythm Raj Sharma, 1234 Nehru Road, Baraut 250611, Uttar Pradesh",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxcJbs8mMb4K_NmTCGsGIJPb5YaVnr5CXz7g&s",
  }
];

const Thankyou = () => {
  return (
    <div className="Thankyou">
      <div className="img-container">
        <img src={Thanko} alt="" className="thake1" />
        <img src={Thanke} alt="" className="thake" />
      </div>

      <p>YOUR ORDER HAS BEEN CONFIRMED</p>
      <h2>ORDER #242424</h2>

      <div className="recipe">
        {Thanks.map((item) => (
          <div className="order-card" key={item.id}>
            <div className="order-top">
              <div className="order-id">Order {item.id}</div>
              <img src={item.img} alt={item.name} className="item-img" />

              <div className="order-info">
                <h4>{item.name}</h4>
                <h7 className="prices">{item.price}</h7>
                <h6 className="qty">Quantity : 1</h6>
                <div className="btns">
                  <span className={`status ${item.status.toLowerCase()}`}>{item.status}</span>
                  <button className="buyn-btn">Buy Again</button>
                </div>
                <h5>Delivery address :</h5>
                <header>{item.add}</header>
              </div>
            </div>
          </div>
        ))}
      </div>
      <button className="bttnpe">Back to Home</button>
    </div>
  );
};

export default Thankyou;
