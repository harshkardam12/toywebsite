import React, { useState } from "react";
import "../make/Softtoy.css";
import { motion } from "framer-motion";
import { ShoppingCart, Heart } from "lucide-react";

const Softtoys = () => {
  const products = [
    { id: 11, name: "Color Blocks", price: 249, oldPrice: 349, category: "Cartoon", age: "0-5", gender: "Boys", inStock: true, image: "https://via.placeholder.com/300x200?text=Color+Blocks" },
    { id: 12, name: "Stuffed Bear", price: 399, oldPrice: 499, category: "Marvel", age: "5-7", gender: "Girls", inStock: true, image: "https://via.placeholder.com/300x200?text=Stuffed+Bear" },
    { id: 13, name: "Soft Rabbit", price: 299, oldPrice: 399, category: "Wooden", age: "7-12", gender: "Boys", inStock: true, image: "https://via.placeholder.com/300x200?text=Soft+Rabbit" },
    { id: 14, name: "Plush Elephant", price: 349, oldPrice: 449, category: "Cartoon", age: "12+", gender: "Girls", inStock: true, image: "https://via.placeholder.com/300x200?text=Plush+Elephant" },
    { id: 15, name: "Cute Puppy", price: 299, oldPrice: 399, category: "Cars & Bike", age: "0-5", gender: "Boys", inStock: true, image: "https://via.placeholder.com/300x200?text=Cute+Puppy" },
    { id: 16, name: "Fluffy Cat", price: 259, oldPrice: 359, category: "Cartoon", age: "5-7", gender: "Girls", inStock: true, image: "https://via.placeholder.com/300x200?text=Fluffy+Cat" },
    { id: 17, name: "Soft Lion", price: 399, oldPrice: 499, category: "Marvel", age: "7-12", gender: "Boys", inStock: true, image: "https://via.placeholder.com/300x200?text=Soft+Lion" },
    { id: 18, name: "Plush Panda", price: 349, oldPrice: 449, category: "Wooden", age: "12+", gender: "Girls", inStock: true, image: "https://via.placeholder.com/300x200?text=Plush+Panda" },
    { id: 19, name: "Cute Owl", price: 299, oldPrice: 399, category: "Cartoon", age: "0-5", gender: "Boys", inStock: true, image: "https://via.placeholder.com/300x200?text=Cute+Owl" },
    { id: 20, name: "Fluffy Monkey", price: 399, oldPrice: 499, category: "Cars & Bike", age: "5-7", gender: "Girls", inStock: true, image: "https://via.placeholder.com/300x200?text=Fluffy+Monkey" },
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
    <div className="softtoys-header">
      <h2 className="softtoys-title">SOFT TOYS</h2>

      <div className="softtoys-container">
        {/* Sidebar */}
        <aside className="softtoys-sidebar">
          <h3>Age Group</h3>
          <div className="softtoys-age-group">
            {["0-5", "5-7", "7-12", "12+"].map((age) => (
              <button
                key={age}
                className={`softtoys-age-btn ${
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
            className="softtoys-range"
          />
          <p>₹99 - ₹{tempFilters.price}</p>

          <h3>Category</h3>
          <ul className="softtoys-filters">
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
          <ul className="softtoys-filters">
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
          <ul className="softtoys-filters">
            <li>
              <input
                type="checkbox"
                checked={tempFilters.inStock}
                onChange={(e) => handleTempChange("inStock", null, e.target.checked)}
              />{" "}
              In Stock
            </li>
          </ul>

          <button className="softtoys-apply-btn" onClick={applyFilter}>
            Apply Filter
          </button>
        </aside>

        {/* Product Cards */}
        <main className="softtoys-products">
          {filteredProducts.map((item) => (
            <motion.div
              key={item.id}
              className="softtoys-card"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="softtoys-image-box">
                <img src={item.image} alt={item.name} />
              </div>

              <h4 className="softtoys-pname">{item.name}</h4>
              <p className="softtoys-price-section">
                <span className="softtoys-price">₹{item.price}</span>{" "}
                <span className="softtoys-old">₹{item.oldPrice}</span>
              </p>

              <div className="softtoys-actions">
                <button className="softtoys-buy-btn">
                  Buy Now <ShoppingCart size={20} />
                </button>

                <motion.button
                  onClick={() => toggleLike(item.id)}
                  aria-label={likedItems.includes(item.id) ? "Unlike" : "Like"}
                  className={`softtoys-like-btn ${likedItems.includes(item.id) ? "liked" : ""}`}
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

export default Softtoys;
