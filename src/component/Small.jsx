import React, { useState, useEffect, useRef } from "react";
import "../make/small.css";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

function Small() {
  const [activeIndex, setActiveIndex] = useState(null);
  const containerRef = useRef(null);

  // close when clicked outside
  useEffect(() => {
    function handleClickOutside(e) {
      if (containerRef.current && !containerRef.current.contains(e.target)) {
        setActiveIndex(null);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const toggleDropdown = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  const listItem = {
    hidden: { opacity: 0, x: -20 },
    show: { opacity: 1, x: 0, transition: { duration: 0.4 } }
  };

  return (
    <motion.div
      className="small"
      variants={container}
      initial="hidden"
      animate="show"
      ref={containerRef}
    >
      {/* SHOP BY AGE */}
      <motion.div className="dropdown" variants={fadeInUp}>
        <summary onClick={() => toggleDropdown(0)}>SHOP BY AGE</summary>
        {activeIndex === 0 && (
          <motion.ul
            className="dropdown-menu"
            initial="hidden"
            animate="show"
            variants={container}
          >
            <Link to="/list"><motion.li variants={listItem}>0-2 Years</motion.li></Link>
            <motion.li variants={listItem}>3-5 Years</motion.li>
            <motion.li variants={listItem}>6-8 Years</motion.li>
            <motion.li variants={listItem}>9+ Years</motion.li>
          </motion.ul>
        )}
      </motion.div>

      {/* TOY'S */}
      <motion.div className="dropdown" variants={fadeInUp}>
        <summary onClick={() => toggleDropdown(1)}>TOY'S</summary>
        {activeIndex === 1 && (
          <motion.ul
            className="dropdown-menu"
            initial="hidden"
            animate="show"
            variants={container}
          >
            <motion.li variants={listItem}>Soft Toys</motion.li>
            <motion.li variants={listItem}>Educational Toys</motion.li>
            <motion.li variants={listItem}>Action Figures</motion.li>
          </motion.ul>
        )}
      </motion.div>

      {/* PREMIUM TOYS */}
      <motion.div className="dropdown" variants={fadeInUp}>
        <summary onClick={() => toggleDropdown(2)}>PREMIUM TOYS</summary>
        {activeIndex === 2 && (
          <motion.ul
            className="dropdown-menu"
            initial="hidden"
            animate="show"
            variants={container}
          >
            <motion.li variants={listItem}>Robots</motion.li>
            <motion.li variants={listItem}>Remote Cars</motion.li>
            <motion.li variants={listItem}>Drones</motion.li>
          </motion.ul>
        )}
      </motion.div>

      {/* CATEGORIES */}
      <motion.div className="dropdown" variants={fadeInUp}>
        <summary onClick={() => toggleDropdown(3)}>CATEGORIES</summary>
        {activeIndex === 3 && (
          <motion.ul
            className="dropdown-menu"
            initial="hidden"
            animate="show"
            variants={container}
          >
            <motion.li variants={listItem}>Boys</motion.li>
            <motion.li variants={listItem}>Girls</motion.li>
            <motion.li variants={listItem}>Unisex</motion.li>
          </motion.ul>
        )}
      </motion.div>

      {/* TRENDING */}
      <motion.div className="dropdown" variants={fadeInUp}>
        <summary onClick={() => toggleDropdown(4)}>TRENDING</summary>
        {activeIndex === 4 && (
          <motion.ul
            className="dropdown-menu"
            initial="hidden"
            animate="show"
            variants={container}
          >
            <motion.li variants={listItem}>Top Rated</motion.li>
            <motion.li variants={listItem}>New Arrivals</motion.li>
            <motion.li variants={listItem}>Best Sellers</motion.li>
          </motion.ul>
        )}
      </motion.div>
    </motion.div>
  );
}

export default Small;
