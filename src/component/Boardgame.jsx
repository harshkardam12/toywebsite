import React, { useState } from "react";
import "../make/Boardgame.css";
import { motion } from "framer-motion";
import { ShoppingCart, Heart } from "lucide-react";

const Boardgame = () => {
  const products = [
    { id: 31, name: "Frisbee", price: 199, oldPrice: 299, category: "Sports", age: "0-5", gender: "Boys", inStock: true, image: "https://via.placeholder.com/300x200?text=Frisbee" },
    { id: 32, name: "Kite", price: 249, oldPrice: 349, category: "Outdoor Games", age: "5-7", gender: "Girls", inStock: true, image: "https://via.placeholder.com/300x200?text=Kite" },
    { id: 33, name: "Bubble Gun", price: 299, oldPrice: 399, category: "Water Play", age: "7-12", gender: "Boys", inStock: true, image: "https://via.placeholder.com/300x200?text=Bubble+Gun" },
    { id: 34, name: "Jump Rope", price: 159, oldPrice: 229, category: "Sports", age: "0-5", gender: "Girls", inStock: true, image: "https://via.placeholder.com/300x200?text=Jump+Rope" },
    { id: 35, name: "Soccer Ball", price: 499, oldPrice: 699, category: "Sports", age: "5-7", gender: "Boys", inStock: true, image: "https://via.placeholder.com/300x200?text=Soccer+Ball" },
    { id: 36, name: "Water Gun", price: 349, oldPrice: 449, category: "Water Play", age: "7-12", gender: "Girls", inStock: true, image: "https://via.placeholder.com/300x200?text=Water+Gun" },
    { id: 37, name: "Scooter", price: 1499, oldPrice: 1799, category: "Ride-ons", age: "12+", gender: "Boys", inStock: true, image: "https://via.placeholder.com/300x200?text=Scooter" },
    { id: 38, name: "Badminton Set", price: 599, oldPrice: 799, category: "Sports", age: "5-7", gender: "Girls", inStock: true, image: "https://via.placeholder.com/300x200?text=Badminton+Set" },
    { id: 39, name: "Hula Hoop", price: 219, oldPrice: 299, category: "Outdoor Games", age: "0-5", gender: "Boys", inStock: true, image: "https://via.placeholder.com/300x200?text=Hula+Hoop" },
    { id: 40, name: "Sandbox Kit", price: 899, oldPrice: 1199, category: "Outdoor Games", age: "7-12", gender: "Girls", inStock: true, image: "https://via.placeholder.com/300x200?text=Sandbox+Kit" },
  ];

  const [liked, setLiked] = useState([]);
  const [tempFilters, setTempFilters] = useState({
    price: 5000,
    category: [],
    age: [],
    gender: [],
    inStock: false,
  });
  const [filters, setFilters] = useState({ ...tempFilters });
  const [filteredProducts, setFilteredProducts] = useState(products);

  const toggleLike = (id) => {
    setLiked((prev) =>
      prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]
    );
  };

  const handleTempChange = (key, value, checked) => {
    setTempFilters((prev) => {
      if (key === "inStock") return { ...prev, inStock: checked };
      const prevArr = prev[key];
      if (checked) return { ...prev, [key]: [...prevArr, value] };
      return { ...prev, [key]: prevArr.filter((v) => v !== value) };
    });
  };

  const applyFilter = () => {
    setFilters({ ...tempFilters });
    const result = products.filter((p) => {
      const priceMatch = p.price <= tempFilters.price;
      const categoryMatch =
        tempFilters.category.length === 0 || tempFilters.category.includes(p.category);
      const ageMatch = tempFilters.age.length === 0 || tempFilters.age.includes(p.age);
      const genderMatch =
        tempFilters.gender.length === 0 || tempFilters.gender.includes(p.gender);
      const stockMatch = !tempFilters.inStock || p.inStock;

      return priceMatch && categoryMatch && ageMatch && genderMatch && stockMatch;
    });
    setFilteredProducts(result);
  };

  return (
    <div className="boardgame-header">
      <h2>BOARD GAMES</h2>
      <div className="boardgame-container">

        {/* Sidebar */}
        <aside className="boardgame-sidebar">
          <h3>Age Group</h3>
          <div className="boardgame-age-group">
            {["0-5", "5-7", "7-12", "12+"].map((age) => (
              <button
                key={age}
                className={`boardgame-age-btn ${
                  age === "0-5" ? "pink" : age === "5-7" ? "blue" : age === "7-12" ? "yellow" : "purple"
                }`}
                onClick={() =>
                  handleTempChange("age", age, !tempFilters.age.includes(age))
                }
              >
                {age}
              </button>
            ))}
          </div>

          <h3>Price</h3>
          <input
            type="range"
            min="99"
            max="5000"
            step="50"
            value={tempFilters.price}
            onChange={(e) =>
              setTempFilters((prev) => ({ ...prev, price: Number(e.target.value) }))
            }
            className="boardgame-range"
          />
          <p>₹99 - ₹{tempFilters.price}</p>

          <h3>Category</h3>
          <ul className="boardgame-filters">
            {["Sports", "Water Play", "Outdoor Games", "Ride-ons"].map((cat) => (
              <li key={cat}>
                <input
                  type="checkbox"
                  checked={tempFilters.category.includes(cat)}
                  onChange={(e) => handleTempChange("category", cat, e.target.checked)}
                />{" "}
                {cat}
              </li>
            ))}
          </ul>

          <h3>Gender</h3>
          <ul className="boardgame-filters">
            {["Boys", "Girls"].map((g) => (
              <li key={g}>
                <input
                  type="checkbox"
                  checked={tempFilters.gender.includes(g)}
                  onChange={(e) => handleTempChange("gender", g, e.target.checked)}
                />{" "}
                {g}
              </li>
            ))}
          </ul>

          <h3>Availability</h3>
          <ul className="boardgame-filters">
            <li>
              <input
                type="checkbox"
                checked={tempFilters.inStock}
                onChange={(e) => handleTempChange("inStock", null, e.target.checked)}
              />{" "}
              In Stock
            </li>
          </ul>

          <button className="boardgame-apply-btn" onClick={applyFilter}>
            Apply Filter
          </button>
        </aside>

        {/* Product Cards */}
        <main className="boardgame-products">
          {filteredProducts.map((item) => (
            <motion.div
              key={item.id}
              className="boardgame-card"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="boardgame-image-box">
                <img src={item.image} alt={item.name} />
              </div>

              <h4 className="boardgame-pname">{item.name}</h4>
              <p>
                <span className="boardgame-price">₹{item.price}</span>{" "}
                <span className="boardgame-old">₹{item.oldPrice}</span>
              </p>

              <div className="boardgame-actions">
                <button className="boardgame-buy-btn">
                  Buy Now <ShoppingCart size={18} />
                </button>

                <motion.button
                  onClick={() => toggleLike(item.id)}
                  aria-label={liked.includes(item.id) ? "Unlike" : "Like"}
                  className={`boardgame-like-btn ${liked.includes(item.id) ? "liked" : ""}`}
                  whileTap={{ scale: 0.9 }}
                >
                  <motion.div
                    animate={{ scale: liked.includes(item.id) ? 1.3 : 1 }}
                    transition={{ type: "spring", stiffness: 250, damping: 15 }}
                  >
                    <Heart
                      fill={liked.includes(item.id) ? "red" : "none"}
                      color={liked.includes(item.id) ? "red" : "black"}
                      size={24}
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

export default Boardgame;
