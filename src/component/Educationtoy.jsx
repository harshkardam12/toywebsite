import React, { useState } from "react";
import "../make/Educationtoy.css";
import { motion } from "framer-motion";
import { ShoppingCart, Heart } from "lucide-react";

const Educationtoy = () => {
  const products = [
    { id: 11, name: "Color Blocks", price: 249, oldPrice: 349, category: "Marvel", age: "0-5", gender: "Boys", inStock: true, image: "https://via.placeholder.com/150" },
    { id: 12, name: "Puzzle Set", price: 499, oldPrice: 699, category: "Wooden", age: "5-7", gender: "Girls", inStock: true, image: "https://via.placeholder.com/150" },
    { id: 13, name: "Wooden Toys", price: 799, oldPrice: 999, category: "Wooden", age: "7-12", gender: "Boys", inStock: false, image: "https://via.placeholder.com/150" },
    { id: 14, name: "Lego Blocks", price: 1200, oldPrice: 1499, category: "Cartoon", age: "12+", gender: "Girls", inStock: true, image: "https://via.placeholder.com/150" },
    { id: 15, name: "Cartoon Figures", price: 350, oldPrice: 450, category: "Cartoon", age: "0-5", gender: "Boys", inStock: true, image: "https://via.placeholder.com/150" },
    { id: 16, name: "Cars & Bikes", price: 650, oldPrice: 899, category: "Cars & Bike", age: "5-7", gender: "Girls", inStock: true, image: "https://via.placeholder.com/150" },
  ];

  const [liked, setLiked] = useState([]);
  const [tempFilters, setTempFilters] = useState({
    price: 10000,
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
    <div className="educationtoy-page">
      <h2 className="educationtoy-title">Educational Toys</h2>
      <div className="educationtoy-container">
        {/* Sidebar */}
        <aside className="educationtoy-sidebar">
          <h3>Age Group</h3>
          <div className="educationtoy-age-group">
            {["0-5", "5-7", "7-12", "12+"].map((age) => (
              <button
                key={age}
                className={`educationtoy-age-btn ${
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
            max="10000"
            step="50"
            value={tempFilters.price}
            onChange={(e) =>
              setTempFilters((prev) => ({ ...prev, price: Number(e.target.value) }))
            }
            className="educationtoy-range"
          />
          <p>₹99 - ₹{tempFilters.price}</p>

          <h3>Category</h3>
          <ul className="educationtoy-filters">
            {["Marvel", "Wooden", "Cartoon", "Cars & Bike"].map((cat) => (
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
          <ul className="educationtoy-filters">
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
          <ul className="educationtoy-filters">
            <li>
              <input
                type="checkbox"
                checked={tempFilters.inStock}
                onChange={(e) => handleTempChange("inStock", null, e.target.checked)}
              />{" "}
              In Stock
            </li>
          </ul>

          <button className="educationtoy-apply-btn" onClick={applyFilter}>
            Apply Filter
          </button>
        </aside>

        {/* Product Cards */}
        <main className="educationtoy-products">
          {filteredProducts.map((item) => (
            <motion.div
              key={item.id}
              className="educationtoy-card"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="educationtoy-image-box">
                <img src={item.image} alt={item.name} />
              </div>

              <h4>{item.name}</h4>
              <p>
                <span className="educationtoy-price">₹{item.price}</span>{" "}
                <span className="educationtoy-old">₹{item.oldPrice}</span>
              </p>

              <div className="educationtoy-actions">
                <button className="educationtoy-buy-btn">
                  Buy Now <ShoppingCart size={20} />
                </button>

                <motion.button
                  onClick={() => toggleLike(item.id)}
                  aria-label={liked.includes(item.id) ? "Unlike" : "Like"}
                  className={`educationtoy-like-btn ${
                    liked.includes(item.id) ? "liked" : ""
                  }`}
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

export default Educationtoy;
