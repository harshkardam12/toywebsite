import React, { useState } from "react";
import "../make/Limited.css";
import { motion } from "framer-motion";
import { ShoppingCart, Heart } from "lucide-react";

const Limited = () => {
  const [likedItems, setLikedItems] = useState([]);

  const products = [
    { id: 1, name: "Deluxe Puzzle Set", price: 499, oldPrice: 699, image: "https://via.placeholder.com/300x200?text=Deluxe+Puzzle" },
    { id: 2, name: "Premium Chess Board", price: 899, oldPrice: 1099, image: "https://via.placeholder.com/300x200?text=Chess+Board" },
    { id: 3, name: "Limited Edition Car Toy", price: 599, oldPrice: 799, image: "https://via.placeholder.com/300x200?text=Car+Toy" },
    { id: 4, name: "Collector’s Doll", price: 799, oldPrice: 999, image: "https://via.placeholder.com/300x200?text=Doll" },
    { id: 5, name: "Rare Train Set", price: 1299, oldPrice: 1499, image: "https://via.placeholder.com/300x200?text=Train+Set" },
    { id: 6, name: "Exclusive Action Figure", price: 999, oldPrice: 1199, image: "https://via.placeholder.com/300x200?text=Action+Figure" },
    { id: 7, name: "Mini Drone", price: 1499, oldPrice: 1799, image: "https://via.placeholder.com/300x200?text=Mini+Drone" },
    { id: 8, name: "Robot Companion", price: 1999, oldPrice: 2299, image: "https://via.placeholder.com/300x200?text=Robot" },
    { id: 9, name: "RC Helicopter", price: 1599, oldPrice: 1899, image: "https://via.placeholder.com/300x200?text=Helicopter" },
  ];

  const toggleLike = (id) => {
    setLikedItems((prev) =>
      prev.includes(id)
        ? prev.filter((item) => item !== id)
        : [...prev, id]
    );
  };

  return (
    <div className="limited-page">
      {/* ✅ Marquee shifted to very top */}
      <div className="limited-marquee">
        <marquee behavior="scroll" direction="left">
LIMITED TIME OFFER ON YOUR FAVORITES!        </marquee>
      </div>

      <h2 className="limited-title">LIMITED EDITION TOYS</h2>

      <div className="limited-products">
        {products.map((product) => (
          <motion.div
            key={product.id}
            className="limited-card"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <div className="limited-image-box">
              <img src={product.image} alt={product.name} />
            </div>

            <h4>{product.name}</h4>

            <p className="limited-pname">
              <span className="limited-price">₹{product.price}</span>
              <span className="limited-old">₹{product.oldPrice}</span>
            </p>

            <div className="limited-actions">
              <button className="limited-buy-btn">
                <ShoppingCart size={18} /> buy now
              </button>

              <button
                className={`limited-like-btn ${
                  likedItems.includes(product.id) ? "liked" : ""
                }`}
                onClick={() => toggleLike(product.id)}
              >
                <Heart size={22} />
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Limited;
