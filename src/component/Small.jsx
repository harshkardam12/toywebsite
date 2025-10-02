import React, { useState } from "react";
import "../make/small.css";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

function Small() {
  const [openDropdown, setOpenDropdown] = useState(null);

  // dropdown animation
  const dropdownAnim = {
    hidden: { opacity: 0, height: 0 },
    show: { 
      opacity: 1, 
      height: "auto", 
      transition: { duration: 0.4, ease: "easeOut" } 
    },
    exit: { 
      opacity: 0, 
      height: 0, 
      transition: { duration: 0.3, ease: "easeIn" } 
    }
  };

  // item animation (stagger children)
  const itemAnim = {
    hidden: { opacity: 0, y: 15 },
    show: { opacity: 1, y: 0, transition: { duration: 0.3 } }
  };

  const toggleDropdown = (name) => {
    setOpenDropdown(openDropdown === name ? null : name);
  };

  return (
    <div className="small">
      {/* SHOP BY AGE */}
      <div className="dropdown">
        <summary onClick={() => toggleDropdown("age")}>SHOP BY AGE</summary>
        <AnimatePresence>
          {openDropdown === "age" && (
            <motion.ul 
              className="dropdown-menu"
              variants={dropdownAnim}
              initial="hidden"
              animate="show"
              exit="exit"
            >
              <motion.li variants={itemAnim}><Link to="/list">0-2 Years</Link></motion.li>
              <motion.li variants={itemAnim}>3-5 Years</motion.li>
              <motion.li variants={itemAnim}>6-8 Years</motion.li>
              <motion.li variants={itemAnim}>9+ Years</motion.li>
            </motion.ul>
          )}
        </AnimatePresence>
      </div>

      {/* TOY'S */}
      <div className="dropdown">
        <summary onClick={() => toggleDropdown("toys")}>TOY'S</summary>
        <AnimatePresence>
          {openDropdown === "toys" && (
            <motion.ul 
              className="dropdown-menu"
              variants={dropdownAnim}
              initial="hidden"
              animate="show"
              exit="exit"
            >
              <motion.li variants={itemAnim}>Soft Toys</motion.li>
              <motion.li variants={itemAnim}>Educational Toys</motion.li>
              <motion.li variants={itemAnim}>Action Figures</motion.li>
            </motion.ul>
          )}
        </AnimatePresence>
      </div>

      {/* PREMIUM TOYS */}
      <div className="dropdown">
        <summary onClick={() => toggleDropdown("premium")}>PREMIUM TOYS</summary>
        <AnimatePresence>
          {openDropdown === "premium" && (
            <motion.ul 
              className="dropdown-menu"
              variants={dropdownAnim}
              initial="hidden"
              animate="show"
              exit="exit"
            >
              <motion.li variants={itemAnim}>Robots</motion.li>
              <motion.li variants={itemAnim}>Remote Cars</motion.li>
              <motion.li variants={itemAnim}>Drones</motion.li>
            </motion.ul>
          )}
        </AnimatePresence>
      </div>

      {/* CATEGORIES */}
      <div className="dropdown">
        <summary onClick={() => toggleDropdown("categories")}>CATEGORIES</summary>
        <AnimatePresence>
          {openDropdown === "categories" && (
            <motion.ul 
              className="dropdown-menu"
              variants={dropdownAnim}
              initial="hidden"
              animate="show"
              exit="exit"
            >
              <motion.li variants={itemAnim}>Boys</motion.li>
              <motion.li variants={itemAnim}>Girls</motion.li>
              <motion.li variants={itemAnim}>Unisex</motion.li>
            </motion.ul>
          )}
        </AnimatePresence>
      </div>

      {/* TRENDING */}
      <div className="dropdown">
        <summary onClick={() => toggleDropdown("trending")}>TRENDING</summary>
        <AnimatePresence>
          {openDropdown === "trending" && (
            <motion.ul 
              className="dropdown-menu"
              variants={dropdownAnim}
              initial="hidden"
              animate="show"
              exit="exit"
            >
              <motion.li variants={itemAnim}>Top Rated</motion.li>
              <motion.li variants={itemAnim}>New Arrivals</motion.li>
              <motion.li variants={itemAnim}>Best Sellers</motion.li>
            </motion.ul>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}

export default Small;
