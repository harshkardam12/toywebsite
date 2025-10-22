import React, { useState } from "react";
import "../make/Boardgame.css";
import { motion } from "framer-motion";
import { ShoppingCart, Heart } from "lucide-react";

const Boardgame = () => {
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
        { id: 40, name: "Sandbox Kit", price: 899, oldPrice: 1199, image: "https://via.placeholder.com/300x200?text=Sandbox+Kit" },
    ];

    const [liked, setLiked] = useState([]);
    const [price, setPrice] = useState(500);

    const toggleLike = (id) => {
        setLiked((prev) =>
            prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]
        );
    };

    return (
        <div className="boardgame-header">
            <h2>BOARD GAMES</h2>
            <div className="boardgame-container">

                {/* Sidebar */}
                <aside className="boardgame-sidebar">
                    <h3>Age Group</h3>
                    <div className="boardgame-age-group">
                        <button className="boardgame-age-btn pink">0-5</button>
                        <button className="boardgame-age-btn blue">5-7</button>
                        <button className="boardgame-age-btn yellow">7-12</button>
                        <button className="boardgame-age-btn purple">12+</button>
                    </div>

                    <h3>Price</h3>
                    <input
                        type="range"
                        min="99"
                        max="5000"
                        step="50"
                        value={price}
                        onChange={(e) => setPrice(e.target.value)}
                        className="boardgame-range"
                    />
                    <p>₹99 - ₹{price}</p>

                    <h3>Category</h3>
                    <ul className="boardgame-filters">
                        <li><input type="checkbox" /> Sports</li>
                        <li><input type="checkbox" /> Water Play</li>
                        <li><input type="checkbox" /> Outdoor Games</li>
                        <li><input type="checkbox" /> Ride-ons</li>
                    </ul>

                    <h3>Gender</h3>
                    <ul className="boardgame-filters">
                        <li><input type="checkbox" /> Boys</li>
                        <li><input type="checkbox" /> Girls</li>
                    </ul>

                    <h3>Availability</h3>
                    <ul className="boardgame-filters">
                        <li><input type="checkbox" /> In Stock</li>
                    </ul>

                    <button className="boardgame-apply-btn">Apply Filter</button>
                </aside>

                {/* Product Cards */}
                <main className="boardgame-products">
                    {products
                        .filter((p) => p.price <= Number(price))
                        .map((item) => (
                            <div key={item.id} className="boardgame-card">
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

                                    <button
                                        onClick={() => toggleLike(item.id)}
                                        aria-label={liked.includes(item.id) ? "Unlike" : "Like"}
                                        className={`boardgame-like-btn ${liked.includes(item.id) ? "liked" : ""}`}
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
                            </div>
                        ))}
                </main>
            </div>
        </div>
    );
};

export default Boardgame;
