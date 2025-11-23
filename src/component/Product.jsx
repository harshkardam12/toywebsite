import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "../make/product.css";

function ProductCarousel() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4000/toyproduct")
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="carousel-container">
      <h2 className="carousel-title">New Launches</h2>

      <Swiper
        modules={[Navigation]}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
        loop={false}   // FIX 🔥 no button bug
        slidesPerView={3}
        spaceBetween={0}
        breakpoints={{
          0: { slidesPerView: 1, spaceBetween: 12 },
          375: { slidesPerView: 1, spaceBetween: 12 },
          425: { slidesPerView: 2, spaceBetween: 0},
          768: { slidesPerView: 3, spaceBetween: 0 },
          1024: { slidesPerView: 3, spaceBetween: 20 },
        }}
        className="carousel-swiper"
      >
        {products.map((product) => (
          <SwiperSlide key={product.id}>
            <div className="product-card">
              <div className="product-image-wrapper">
                <img src={product.image} alt={product.name} />
                <span className="new-badge">{product.discount}</span>
              </div>

              <h3 className="product-name">{product.name}</h3>

              <div className="price-section">
                <p className="product-price">{product.price}</p>
                <p className="old-price2">{product.oldprice}</p>
              </div>

              <div className="product-rating">
                {"★".repeat(product.rating)}
                {"☆".repeat(5 - product.rating)}
              </div>

              <button className="buy-btn9">Buy Now</button>
            </div>
          </SwiperSlide>
        ))}

        {/* NOTE: Buttons must be inside the Swiper only */}
        <div className="swiper-button-prev custom-nav"></div>
        <div className="swiper-button-next custom-nav"></div>
      </Swiper>
    </div>
  );
}

export default ProductCarousel;
