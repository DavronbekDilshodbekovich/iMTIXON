import React from 'react';
import "./Adress.css";
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import IMG2 from "../../assets/IMG2.svg"

const Adress = () => {
    return (
        <div>
            <div className="container">
                <Header />
                <div className="dfddd">
                    <div className="billing">
                        <h2>Billing Address</h2>
                        <form>
                            <div className="row">
                                <div className="input-group">
                                    <label>First Name *</label>
                                    <input type="text" />
                                </div>
                                <div className="input-group">
                                    <label>Last Name *</label>
                                    <input type="text" />
                                </div>
                            </div>

                            <div className="row">
                                <div className="input-group">
                                    <label>Country / Region *</label>
                                    <select>
                                        <option>Select a country / region</option>
                                    </select>
                                </div>
                                <div className="input-group">
                                    <label>Town / City *</label>
                                    <input type="text" />
                                </div>
                            </div>

                            <div className="input-group">
                                <label>Street Address *</label>
                                <input type="text" placeholder="House number and street name" />
                            </div>

                            <div className="row">
                                <div className="input-group">
                                    <label>State *</label>
                                    <select>
                                        <option>Select a state</option>
                                    </select>
                                </div>
                                <div className="input-group">
                                    <label>Zip *</label>
                                    <input type="text" />
                                </div>
                            </div>

                            <div className="row">
                                <div className="input-group">
                                    <label>Email address *</label>
                                    <input type="email" />
                                </div>
                                <div className="input-group">
                                    <label>Phone Number *</label>
                                    <select>
                                        <option>+966</option>
                                    </select>
                                    <input type="text" />
                                </div>
                            </div>

                            <div className="checkbox">
                                <input type="checkbox" />
                                <label>Ship to a different address?</label>
                            </div>

                            <div className="input-group">
                                <label>Order notes (optional)</label>
                                <textarea></textarea>
                            </div>
                        </form>
                    </div>

                    <div className="order-summary">
                        <h2>Your Order</h2>
                        <div className="order-item">
                            <img src={IMG2} alt="Barberton Daisy" />
                            <span>Barberton Daisy (x2)</span>
                            <span className="price">$238.00</span>
                        </div>

                        <div className="order-item">
                            <img src={IMG2} alt="Blushing Bromeliad" />
                            <span>Blushing Bromeliad (x6)</span>
                            <span className="price">$834.00</span>
                        </div>

                        <div className="order-item">
                            <img src={IMG2} alt="Aluminum Plant" />
                            <span>Aluminum Plant (x9)</span>
                            <span className="price">$1,611.00</span>
                        </div>

                        <div className="totals">
                            <div className="subtotal">
                                <span>Subtotal</span>
                                <span>$2,683.00</span>
                            </div>
                            <div className="shipping">
                                <span>Shipping</span>
                                <span>$16.00</span>
                            </div>
                            <div className="total">
                                <span>Total</span>
                                <span className="final-price">$2,699.00</span>
                            </div>
                        </div>

                        <h2>Payment Method</h2>
                        <div className="payment-methods">
                            <label><input type="radio" name="payment" /> PayPal</label>
                            <label><input type="radio" name="payment" /> Visa</label>
                            <label><input type="radio" name="payment" /> American Express</label>
                            <label><input type="radio" name="payment" /> Direct bank transfer</label>
                            <label><input type="radio" name="payment" defaultChecked /> Cash on delivery</label>
                        </div>

                        <button className="place-order">Place Order</button>
                    </div>
                </div>

                <Footer />
            </div>
        </div>
    );
}

export default Adress;
