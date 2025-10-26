import React, { useState } from "react";
import "../make/Puzzlegame.css";
import { motion } from "framer-motion";
import { ShoppingCart, Heart } from "lucide-react";

const Puzzlegame = () => {
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

  const [likedItems, setLikedItems] = useState([]);
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
    setLikedItems((prev) =>
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
    <div className="puzzle-header">
      <h2 className="puzzle-title">PUZZLE GAMES</h2>

      <div className="puzzle-container">
        {/* Sidebar */}
        <aside className="puzzle-sidebar">
          <h3>Age Group</h3>
          <div className="puzzle-age-group">
            {["0-5", "5-7", "7-12", "12+"].map((age) => (
              <button
                key={age}
                className={`puzzle-age-btn ${
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
            className="puzzle-range"
          />
          <p>₹99 - ₹{tempFilters.price}</p>

          <h3>Category</h3>
          <ul className="puzzle-filters">
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
          <ul className="puzzle-filters">
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
          <ul className="puzzle-filters">
            <li>
              <input
                type="checkbox"
                checked={tempFilters.inStock}
                onChange={(e) => handleTempChange("inStock", null, e.target.checked)}
              />{" "}
              In Stock
            </li>
          </ul>

          <button className="puzzle-apply-btn" onClick={applyFilter}>
            Apply Filter
          </button>
        </aside>

        {/* Product Cards */}
        <main className="puzzle-products">
          {filteredProducts.map((item) => (
            <motion.div
              key={item.id}
              className="puzzle-card"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="puzzle-image-box">
                <img src={item.image} alt={item.name} />
              </div>

              <h4 className="puzzle-pname">{item.name}</h4>
              <p className="puzzle-price-section">
                <span className="puzzle-price">₹{item.price}</span>{" "}
                <span className="puzzle-old">₹{item.oldPrice}</span>
              </p>

              <div className="puzzle-actions">
                <button className="puzzle-buy-btn">
                  Buy Now <ShoppingCart size={20} />
                </button>

                <motion.button
                  onClick={() => toggleLike(item.id)}
                  aria-label={likedItems.includes(item.id) ? "Unlike" : "Like"}
                  className={`puzzle-like-btn ${likedItems.includes(item.id) ? "liked" : ""}`}
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

export default Puzzlegame;
