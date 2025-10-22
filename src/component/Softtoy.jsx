import React, { useState } from "react";
import "../make/Softtoy.css";
import { motion } from "framer-motion";
import { ShoppingCart, Heart } from "lucide-react";

const Softtoys = () => {
    const products = [
        { id: 11, name: "Color Blocks", price: 249, oldPrice: 349, image: "https://via.placeholder.com/150" },
        { id: 12, name: "Stuffed Bear", price: 399, oldPrice: 499, image: "https://via.placeholder.com/150" },
        { id: 13, name: "Soft Rabbit", price: 299, oldPrice: 399, image: "https://via.placeholder.com/150" },
        { id: 14, name: "Plush Elephant", price: 349, oldPrice: 449, image: "https://via.placeholder.com/150" },
        { id: 15, name: "Cute Puppy", price: 299, oldPrice: 399, image: "https://via.placeholder.com/150" },
        { id: 16, name: "Fluffy Cat", price: 259, oldPrice: 359, image: "https://via.placeholder.com/150" },
        { id: 17, name: "Soft Lion", price: 399, oldPrice: 499, image: "https://via.placeholder.com/150" },
        { id: 18, name: "Plush Panda", price: 349, oldPrice: 449, image: "https://via.placeholder.com/150" },
        { id: 19, name: "Cute Owl", price: 299, oldPrice: 399, image: "https://via.placeholder.com/150" },
        { id: 20, name: "Fluffy Monkey", price: 399, oldPrice: 499, image: "https://via.placeholder.com/150" },
    ];

    const [liked, setLiked] = useState([]);
    const [price, setPrice] = useState(100);

    const toggleLike = (id) => {
        setLiked((prev) =>
            prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]
        );
    };

    return (
        <div className="softtoys-header">
            <h2>Soft Toys</h2>
        <div className="softtoys-container">
            {/* Sidebar */}
            <aside className="softtoys-sidebar">
                <h3>Age Group</h3>
                <div className="softtoys-age-group">
                    <button className="softtoys-age-btn pink">0-5</button>
                    <button className="softtoys-age-btn blue">5-7</button>
                    <button className="softtoys-age-btn yellow">7-12</button>
                    <button className="softtoys-age-btn purple">12+</button>
                </div>

                <h3>Price</h3>
                <input
                    type="range"
                    min="99"
                    max="10000"
                    step="100"
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                    className="softtoys-range"
                />
                <p>₹99 - ₹{price}</p>

                <h3>Category</h3>
                <ul className="softtoys-filters">
                    <li><input type="checkbox" /> Marvel</li>
                    <li><input type="checkbox" /> Wooden</li>
                    <li><input type="checkbox" /> Cartoon</li>
                    <li><input type="checkbox" /> Cars & Bike</li>
                </ul>

                <h3>Gender</h3>
                <ul className="softtoys-filters">
                    <li><input type="checkbox" /> Boys</li>
                    <li><input type="checkbox" /> Girls</li>
                </ul>

                <h3>Availability</h3>
                <ul className="softtoys-filters">
                    <li><input type="checkbox" /> In Stock</li>
                </ul>

                <button className="softtoys-apply-btn">Apply Filter</button>
            </aside>

            {/* Product Cards */}
            <main className="softtoys-products">
                {products.map((item) => (
                    <div key={item.id} className="softtoys-card">
                        <div className="softtoys-image-box">
                            <img src={item.image} alt={item.name} />
                        </div>

                        <h4>{item.name}</h4>
                        <p>
                            <span className="softtoys-price">₹{item.price}</span>{" "}
                            <span className="softtoys-old">₹{item.oldPrice}</span>
                        </p>

                        <div className="softtoys-actions">
                            <button className="softtoys-buy-btn">
                                Buy Now <ShoppingCart size={20} />
                            </button>

                            <button
                                onClick={() => toggleLike(item.id)}
                                aria-label={liked.includes(item.id) ? "Unlike" : "Like"}
                                className={`softtoys-like-btn ${liked.includes(item.id) ? "liked" : ""}`}
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
                    </div>
                ))}
            </main>
        </div>
        </div>
    );
};

export default Softtoys;
