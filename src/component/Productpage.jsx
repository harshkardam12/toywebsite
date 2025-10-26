import React, { useState } from "react";
import "../make/Productpage.css";
import { motion } from "framer-motion";
import { ShoppingCart, Heart } from "lucide-react";

const Productpage = () => {
  const products = [
    { id: 11, name: "Color Blocks", price: 249, oldPrice: 349, image: "..." },
    { id: 12, name: "Color Blocks", price: 249, oldPrice: 349, image: "..." },
    { id: 13, name: "Color Blocks", price: 249, oldPrice: 349, image: "..." },
    { id: 14, name: "Color Blocks", price: 249, oldPrice: 349, image: "..." },
    { id: 15, name: "Color Blocks", price: 249, oldPrice: 349, image: "..." },
    { id: 16, name: "Color Blocks", price: 249, oldPrice: 349, image: "..." },
    { id: 17, name: "Color Blocks", price: 249, oldPrice: 349, image: "..." },
    { id: 18, name: "Color Blocks", price: 249, oldPrice: 349, image: "..." },
    { id: 19, name: "Color Blocks", price: 249, oldPrice: 349, image: "..." },
    { id: 20, name: "Color Blocks", price: 249, oldPrice: 349, image: "..." },
  ];

  const [liked, setLiked] = useState([]);
  const [price, setPrice] = useState(10000); 
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [selectedGender, setSelectedGender] = useState([]);
  const [inStock, setInStock] = useState(false);
  const [filteredProducts, setFilteredProducts] = useState(products);

  const toggleLike = (id) => {
    setLiked((prev) =>
      prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]
    );
  };

  // Filter apply function
  const applyFilter = () => {
    let filtered = products.filter((p) => p.price <= Number(price));

    if (selectedCategories.length > 0) {
      filtered = filtered.filter((p) =>
        selectedCategories.some((cat) => p.name.toLowerCase().includes(cat))
      );
    }

    if (selectedGender.length > 0) {
      filtered = filtered.filter((p) =>
        selectedGender.some((g) => p.name.toLowerCase().includes(g))
      );
    }

    if (inStock) {
      filtered = filtered.filter((p) => true); // Placeholder if stock info added
    }

    setFilteredProducts(filtered);
  };

  // Handle checkbox
  const handleCategoryChange = (e) => {
    const value = e.target.nextSibling.textContent.toLowerCase();
    if (e.target.checked) {
      setSelectedCategories([...selectedCategories, value]);
    } else {
      setSelectedCategories(selectedCategories.filter((c) => c !== value));
    }
  };

  const handleGenderChange = (e) => {
    const value = e.target.nextSibling.textContent.toLowerCase();
    if (e.target.checked) {
      setSelectedGender([...selectedGender, value]);
    } else {
      setSelectedGender(selectedGender.filter((g) => g !== value));
    }
  };

  return (
    <div className="container">
      <aside className="sidebarw">
        <h3>Age Group</h3>
        <div className="age-group">
          <button className="age-btn pink">0-5</button>
          <button className="age-btn blue">5-7</button>
          <button className="age-btn yellow">7-12</button>
          <button className="age-btn purple">12+</button>
        </div>

        <h3>Price</h3>
        <input
          type="range"
          min="99"
          max="10000"
          step="100"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          className="range"
        />
        <p>₹99 - ₹{price}</p>

        <h3>Category</h3>
        <ul className="filters">
          {["marvel", "wooden", "cartoon", "cars & bike"].map((cat) => (
            <li key={cat}>
              <input type="checkbox" onChange={handleCategoryChange} /> {cat}
            </li>
          ))}
        </ul>

        <h3>Gender</h3>
        <ul className="filters">
          {["boys", "girls"].map((g) => (
            <li key={g}>
              <input type="checkbox" onChange={handleGenderChange} /> {g}
            </li>
          ))}
        </ul>

        <h3>Availability</h3>
        <ul className="filters">
          <li>
            <input type="checkbox" onChange={(e) => setInStock(e.target.checked)} /> In Stock
          </li>
        </ul>

        <button className="apply-btn" onClick={applyFilter}>Apply Filter</button>
      </aside>

      <main className="product-area">
        {filteredProducts.map((item) => (
          <motion.div
            key={item.id}
            className="card"
            whileHover={{ scale: 1.03 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <div className="img-box">
              <img src={item.image} alt={item.name} />
            </div>

            <h4>{item.name}</h4>
            <p>
              <span className="price">₹{item.price}</span>{" "}
              <span className="old">₹{item.oldPrice}</span>
            </p>

            <div className="actions">
              <button className="buy-btn">
                Buy Now<ShoppingCart size={20} />
              </button>
              <button
                onClick={() => toggleLike(item.id)}
                aria-label={liked.includes(item.id) ? "Unlike" : "Like"}
                className={`like-btn ${liked.includes(item.id) ? "liked" : ""}`}
              >
                <motion.div
                  animate={{ scale: liked.includes(item.id) ? 1.3 : 1 }}
                  transition={{ type: "spring", stiffness: 300, damping: 15 }}
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
      </main>
    </div>
  );
};

export default Productpage;
