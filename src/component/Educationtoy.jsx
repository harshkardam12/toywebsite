import React, { useState } from "react";
import "../make/Educationtoy.css";
import { motion } from "framer-motion";
import { ShoppingCart, Heart } from "lucide-react";

const Educationtoy = () => {
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
    const [price, setPrice] = useState(100);

    const toggleLike = (id) => {
        setLiked((prev) =>
            prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]
        );
    };

    return (
    <div className="educationtoy-page">
        <h2 className="educationtoy-title">Educational Toys</h2>
        <div className="educationtoy-container">
            {/* --- Sidebar --- */}
            <aside className="educationtoy-sidebar">
                <h3>Age Group</h3>
                <div className="educationtoy-age-group">
                    <button className="educationtoy-age-btn pink">0-5</button>
                    <button className="educationtoy-age-btn blue">5-7</button>
                    <button className="educationtoy-age-btn yellow">7-12</button>
                    <button className="educationtoy-age-btn purple">12+</button>
                </div>

                <h3>Price</h3>
                <input
                    type="range"
                    min="99"
                    max="10000"
                    step="100"
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                    className="educationtoy-range"
                />
                <p>₹99 - ₹{price}</p>

                <h3>Category</h3>
                <ul className="educationtoy-filters">
                    <li><input type="checkbox" /> Marvel</li>
                    <li><input type="checkbox" /> Wooden</li>
                    <li><input type="checkbox" /> Cartoon</li>
                    <li><input type="checkbox" /> Cars & Bike</li>
                </ul>

                <h3>Gender</h3>
                <ul className="educationtoy-filters">
                    <li><input type="checkbox" /> Boys</li>
                    <li><input type="checkbox" /> Girls</li>
                </ul>

                <h3>Availability</h3>
                <ul className="educationtoy-filters">
                    <li><input type="checkbox" /> In Stock</li>
                </ul>

                <button className="educationtoy-apply-btn">Apply Filter</button>
            </aside>

            {/* --- Product Cards --- */}
            <main className="educationtoy-products">
                {products.map((item) => (
                    <div key={item.id} className="educationtoy-card">
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
                            <button
                                onClick={() => toggleLike(item.id)}
                                aria-label={liked.includes(item.id) ? "Unlike" : "Like"}
                                style={{ background: "none", border: "none", cursor: "pointer" }}
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

export default Educationtoy;
