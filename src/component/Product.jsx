import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "../make/product.css"
function ProductCarousel() {
    const [products, setproducts] = useState([]);
    useEffect(() => {
        const data2 = fetch("http://localhost:4000/toyproduct")
            .then((res) => res.json())
            .then((data) => {
                setproducts(data)
            })
            .catch((Error) => console.log(Error));
    }, [])

    return (
        <div className="carousel-container">
            <h2 className="carousel-title">New Launches</h2>

            <Swiper
                modules={[Navigation]}
                spaceBetween={-120}
                slidesPerView={3}
                navigation
                loop={true}
                className="carousel-swiper"
            >
                {products.map((product) => (
                    <SwiperSlide key={product.id}>
                        <div className="slide-content">
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
                                <button className="buy-btn">Buy Now</button>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
}

export default ProductCarousel;