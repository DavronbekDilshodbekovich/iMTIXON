import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import "./Shop.css";
import shop1 from "../../assets/shop1.svg";
import shop2 from "../../assets/shop2.svg";
import shop3 from "../../assets/shop3.svg";
import shop4 from "../../assets/shop4.svg";
import shop5 from "../../assets/shop5.svg";
import Releted from "../Releted/Releted";

const Shop = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [selectedSize, setSelectedSize] = useState(null);
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    setProduct(null); // Yeni veri gelene kadar önceki ürünü temizle

    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 5000); // 5 saniye içinde yanıt gelmezse iptal

    fetch(`https://greenshop-c00c.onrender.com/api/flowers/${id}`, { signal: controller.signal })
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        setProduct(data);
        if (data.size?.length > 0) {
          setSelectedSize(data.size[0]);
        }
      })
      .catch((error) => console.error("Error fetching product data:", error));

    return () => {
      clearTimeout(timeout);
      controller.abort(); // Bileşen unmount olursa istek iptal edilir
    };
  }, [id]);

  if (!product) {
    return <h2>Loading...</h2>;
  }

  return (
    <div className="container">
      <Header />
      <div className="product-details">
        <div className="breadcrumbs">
          <a href="/">Home</a> / <a href="#">Shop</a>
        </div>
        <div className="product-container">
          <div className="product-images">
            <div className="thumbnail-list">
              <img src={shop1} alt="1" className="thumbnail" />
              <img src={shop2} alt="2" className="thumbnail" />
              <img src={shop3} alt="3" className="thumbnail" />
              <img src={shop4} alt="4" className="thumbnail" />
            </div>
            <div className="main-image">
              <img src={shop5} alt="Main Product" />
            </div>
          </div>

          <div className="product-info">
            <h1 className="product-title">{product.name}</h1>
            <p className="product-price">${product.price}</p>
            <p className="product-rating">
              <span>⭐️⭐️⭐️⭐️⭐️ {product.reviews} Customer Reviews</span>
            </p>

            <div className="short-description">
              <h3>Short Description:</h3>
              <p>{product.description}</p>
            </div>

            <div className="product-options">
              <h3>Size:</h3>
              <div className="sizes">
                {product.size?.map((size) => (
                  <button
                    key={size}
                    className={`size-button ${selectedSize === size ? "active" : ""}`}
                    onClick={() => setSelectedSize(size)}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            <div className="quantity-section">
              <button className="quantity-btn" onClick={() => setQuantity(Math.max(1, quantity - 1))}>
                -
              </button>
              <input className="wa" type="text" value={quantity} readOnly />
              <button className="quantity-btn" onClick={() => setQuantity(quantity + 1)}>
                +
              </button>
            </div>

            <div className="action-buttons">
              <button className="btn buy-now">BUY NOW</button>
              <Link to="/product" className="btn add-to-cart">ADD TO CART</Link>
            </div>


            <div className="product-meta">
              <p>
                <strong>SKU:</strong> {product.sku}
              </p>
              <p>
                <strong>Categories:</strong> {product.category}
              </p>
              <p>
                <strong>Tags:</strong> {product.tags?.join(", ")}
              </p>
            </div>
          </div>
        </div>
        <Releted />
      </div>
      <Footer />
    </div>
  );
};

export default Shop;
