import React, { useState } from "react";
import "../make/Outdoor.css";
import { motion } from "framer-motion";
import { ShoppingCart, Heart } from "lucide-react";

const Outdoortoy = () => {
  const [likedItems, setLikedItems] = useState([]);
  const [price, setPrice] = useState(5000);

  const products = [
    { id: 31, name: "Frisbee", price: 199, oldPrice: 299, image: "https://via.placeholder.com/300x200?text=Frisbee" },
    { id: 32, name: "Kite", price: 249, oldPrice: 349, image: "https://via.placeholder.com/300x200?text=Kite" },
    { id: 33, name: "Bubble Gun", price: 299, oldPrice: 399, image: "https://via.placeholder.com/300x200?text=Bubble+Gun" },
    { id: 34, name: "Jump Rope", price: 159, oldPrice: 229, image: "https://via.placeholder.com/300x200?text=Jump+Rope" },
    { id: 35, name: "Soccer Ball", price: 499, oldPrice: 699, image: "https://via.placeholder.com/300x200?text=Soccer+Ball" },
    { id: 36, name: "Water Gun", price: 349, oldPrice: 449, image: "https://via.placeholder.com/300x200?text=Water+Gun" },
    { id: 37, name: "Scooter", price: 1499, oldPrice: 1799, image: "https://via.placeholder.com/300x200?text=Scooter" },
    { id: 38, name: "Badminton Set", price: 599, oldPrice: 799, image: "https://via.placeholder.com/300x200?text=Badminton+Set" },
    { id: 39, name: "Hula Hoop", price: 219, oldPrice: 299, image: "https://via.placeholder.com/300x200?text=Hula+Hoop" },
    { id: 40, name: "Sandbox Kitll", price: 899, oldPrice: 1199, image: "https://via.placeholder.com/300x200?text=Sandbox+Kit" },
    { id: 40, name: "Sandbox Kitll", price: 899, oldPrice: 1199, image: "https://via.placeholder.com/300x200?text=Sandbox+Kit" },
    { id: 40, name: "Sandbox Kitll", price: 899, oldPrice: 1199, image: "https://via.placeholder.com/300x200?text=Sandbox+Kit" },
    { id: 40, name: "Sandbox Kitll", price: 899, oldPrice: 1199, image: "https://via.placeholder.com/300x200?text=Sandbox+Kit" },
    { id: 40, name: "Sandbox Kitll", price: 899, oldPrice: 1199, image: "https://via.placeholder.com/300x200?text=Sandbox+Kit" },
  ];

  const toggleLike = (id) => {
    setLikedItems((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  return (
    <div className="outdoor-header">
      <h2 className="outdoor-title">OUTDOOR TOYS</h2>

      <div className="outdoortoy-container">
        {/* Sidebar */}
        <aside className="outdoortoy-sidebar">
          <h3>Age Group</h3>
          <div className="outdoortoy-age-group">
            <button className="outdoortoy-age-btn pink">0-5</button>
            <button className="outdoortoy-age-btn blue">5-7</button>
            <button className="outdoortoy-age-btn yellow">7-12</button>
            <button className="outdoortoy-age-btn purple">12+</button>
          </div>

          <h3>Price</h3>
          <input
            type="range"
            min="99"
            max="5000"
            step="50"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            className="outdoortoy-range"
          />
          <p>₹99 - ₹{price}</p>

          <h3>Category</h3>
          <ul className="outdoortoy-filters">
            <li><input type="checkbox" /> Sports</li>
            <li><input type="checkbox" /> Water Play</li>
            <li><input type="checkbox" /> Outdoor Games</li>
            <li><input type="checkbox" /> Ride-ons</li>
          </ul>

          <h3>Gender</h3>
          <ul className="outdoortoy-filters">
            <li><input type="checkbox" /> Boys</li>
            <li><input type="checkbox" /> Girls</li>
          </ul>

          <h3>Availability</h3>
          <ul className="outdoortoy-filters">
            <li><input type="checkbox" /> In Stock</li>
          </ul>

          <button className="outdoortoy-apply-btn">Apply Filter</button>
        </aside>

        {/* Product Cards */}
        <main className="outdoortoy-products">
          {products
            .filter((p) => p.price <= Number(price))
            .map((item) => (
              <motion.div
                key={item.id}
                className="outdoortoy-card"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="outdoortoy-image-box">
                  <img src={item.image} alt={item.name} />
                </div>

                <h4 className="outdoortoy-pname">{item.name}</h4>
                <p className="outdoortoy-price-section">
                  <span className="outdoortoy-price">₹{item.price}</span>{" "}
                  <span className="outdoortoy-old">₹{item.oldPrice}</span>
                </p>

                <div className="outdoortoy-actions">
                  <button className="outdoortoy-buy-btn">
                    <ShoppingCart size={18} /> Add to Cart
                  </button>

                  <motion.button
                    onClick={() => toggleLike(item.id)}
                    aria-label={likedItems.includes(item.id) ? "Unlike" : "Like"}
                    className={`outdoortoy-like-btn ${likedItems.includes(item.id) ? "liked" : ""}`}
                    whileTap={{ scale: 0.9 }}
                  >
                    <motion.div
                      animate={{ scale: likedItems.includes(item.id) ? 1.3 : 1 }}
                      transition={{ type: "spring", stiffness: 250, damping: 15 }}
                    >
                      <Heart
                        fill={likedItems.includes(item.id) ? "red" : "none"}
                        color={likedItems.includes(item.id) ? "red" : "black"}
                        size={22}
                      />
                    </motion.div>
                  </motion.button>
                </div>
              </motion.div>
            ))}
        </main>
      </div>
    </div>
  );
};

export default Outdoortoy;
