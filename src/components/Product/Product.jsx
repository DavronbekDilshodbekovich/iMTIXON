import React, { useState } from 'react';
import Header from '../Header/Header';
import "./Product.css";
import IMG111 from "../../assets/IMG111.svg"
import { Link, NavLink } from 'react-router-dom';
import { RiDeleteBin6Line } from "react-icons/ri";
import IMG2 from "../../assets/IMG2.svg"
import Footer from '../Footer/Footer';
import Releted from '../Releted/Releted';


const Product = () => {

    const [selectedSize, setSelectedSize] = useState("L");
    const [quantity, setQuantity] = useState(1);
    const [froo, setFroo] = useState(1);
    const [from, setFrom] = useState(1);
    return (
        <div className="container">
            <Header />
            <div className="breadcrumbs">
                <NavLink className='jnjn' to="/">Home</NavLink> / <NavLink className='jnjn' to="/shop">Shop</NavLink> /  <NavLink className='jnjn' to="/Product">Product</NavLink>
            </div>
            <div className="cart-container">
                <div className='ijiun'>

                    <strong>Products</strong>
                    <div className="dffb">
                        <strong className='dd'>Price</strong>
                        <strong className='dd'>Quantity</strong>
                        <strong className='dd'>Total</strong>
                    </div>
                    <h3 className="jnjnb">
                        Cart Totals
                    </h3>
                </div>
                <hr />


                <div className='vbgbhb'>
                    <img src={IMG111} alt="" />
                    <div>
                        <p>Barberton Daisy <br /><span>SKU: 1995751877966</span></p>
                    </div>
                    <div className="ybf">
                        <div className="quantity-section">
                            <p>$119.00</p>
                            <div className="quantity1-section">
                                <button
                                    className="quantity-btn"
                                    onClick={() => setQuantity(quantity > 1 ? quantity - 1 : 1)}
                                >
                                    -
                                </button>
                                <input className="wa" type="text" value={quantity} readOnly />
                                <button
                                    className="quantity-btn"
                                    onClick={() => setQuantity(quantity + 1)}
                                >
                                    +
                                </button>
                            </div>
                            <p className="ddd">
                                $238.00
                            </p>
                            <RiDeleteBin6Line className='hbhb' />
                        </div>

                    </div>
                </div>


                <div className='vbgbhb'>
                    <img src={IMG111} alt="" />
                    <div>
                        <p>Barberton Daisy <br /><span>SKU: 1995751877966</span></p>
                    </div>
                    <div className="ybf">
                        <div className="quantity-section">
                            <p>$119.00</p>
                            <div className="quantity1-section">
                                <button
                                    className="quantity-btn"
                                    onClick={() => setFroo(froo > 1 ? froo - 1 : 1)}
                                >
                                    -
                                </button>
                                <input className="wa" type="text" value={froo} readOnly />
                                <button
                                    className="quantity-btn"
                                    onClick={() => setFroo(froo + 1)}
                                >
                                    +
                                </button>
                            </div>
                            <p className="ddd">
                                $238.00
                            </p>
                            <RiDeleteBin6Line className='hbhb' />
                        </div>

                    </div>
                </div>


                <div className='vbgbhb'>
                    <img src={IMG111} alt="" />
                    <div>
                        <p>Barberton Daisy <br /><span>SKU: 1995751877966</span></p>
                    </div>
                    <div className="ybf">
                        <div className="quantity-section">
                            <p>$119.00</p>
                            <div className="quantity1-section">
                                <button
                                    className="quantity-btn"
                                    onClick={() => setFrom(from > 1 ? from - 1 : 1)}
                                >
                                    -
                                </button>
                                <input className="wa" type="text" value={from} readOnly />
                                <button
                                    className="quantity-btn"
                                    onClick={() => setFrom(from + 1)}
                                >
                                    +
                                </button>
                            </div>
                            <p className="ddd">
                                $238.00
                            </p>
                            <RiDeleteBin6Line className='hbhb' />
                        </div>

                    </div>
                </div>


                <div className='HJB'>

                    <div className="cart-totals">
                        <div className="jnbhjbhb">
                            <input className='jhb' type="email" placeholder="enter your email address..." />
                            <button className='jbjh'>Apply</button>
                        </div>
                        <p className='huvbhugb'>Subtotal: <span className='ijbnhijb'>$2,683.00</span></p>
                        <p className='huvbhugb'>Subtotal: <span className='ijbnhijb'>$2,683.00</span></p>
                        <p className='huvbhugb'>Shipping: <span className='ijbnhijbj'>$16.00</span></p>
                        <p className="cart-total">Total: <span className='ijbnhijbjn'>$2,699.00</span></p>
                        <button className="checkout-btn">Proceed to Checkout</button>
                    </div>
                        <Link to="/Adress" className='hjv'>Continue Shopping</Link>
                </div>

            </div>
            <Releted />
            <Footer />
        </div >
    );
};

export default Product;
