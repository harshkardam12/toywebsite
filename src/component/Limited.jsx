import React, { useState } from "react";
import "../make/Limited.css";
import { motion } from "framer-motion";
import { ShoppingCart, Heart } from "lucide-react";

const Limited = () => {
  const [liked, setLiked] = useState([]);

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
    setLiked((prev) =>
      prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]
    );
  };

  return (
    <div className="limited-page">
      {/* Marquee at top */}
      <div className="limited-marquee">
        <marquee behavior="scroll" direction="left">
          🎉 LIMITED TIME OFFER ON YOUR FAVORITES! 🎉    
        </marquee>
      </div>

      <h2 className="limited-title">LIMITED EDITION TOYS</h2>

      {/* Product Grid */}
      <div className="limited-products">
        {products.map((item) => (
          <motion.div
            key={item.id}
            className="limited-card"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
          >
            <div className="limited-image-box">
              <img src={item.image} alt={item.name} />
            </div>

            <h4>{item.name}</h4>

            <p className="limited-pname">
              <span className="limited-price">₹{item.price}</span>
              <span className="limited-old">₹{item.oldPrice}</span>
            </p>

            <div className="limited-actions">
              <button className="limited-buy-btn">
                Buy Now <ShoppingCart size={18} />
              </button>

              <button
                onClick={() => toggleLike(item.id)}
                aria-label={liked.includes(item.id) ? "Unlike" : "Like"}
                className={`limited-like-btn ${liked.includes(item.id) ? "liked" : ""}`}
              >
                <motion.div
                  animate={{ scale: liked.includes(item.id) ? 1.2 : 1 }}
                  transition={{ type: "spring", stiffness: 300, damping: 18 }}
                >
                  <Heart
                    fill={liked.includes(item.id) ? "red" : "none"}
                    color={liked.includes(item.id) ? "red" : "black"}
                    size={24}
                  />
                </motion.div>
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Limited;
