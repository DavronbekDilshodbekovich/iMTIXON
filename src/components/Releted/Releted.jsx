import React from 'react'
import "./Releted.css"
import IMG2 from "../../assets/IMG2.svg"
import { Link } from 'react-router-dom'
import { BsFillCartPlusFill } from "react-icons/bs";



const Releted = () => {
    return (
        <div>
            <div className="ujjjj">
                <strong className="pppppp">
                    Releted Products
                </strong>
                <hr />
                <div className="itemmm">
                    <div className="product-card">
                        <div className="product-image">
                            <img src={IMG2} alt="Barberton Daisy" />
                            <div className="hover-icons">
                                <Link to="/Shop"><BsFillCartPlusFill className='hhhh' /></Link>
                                <button className='kichik'>...</button>
                                <button>...</button>
                            </div>
                        </div>
                        <h4 className='h'>Barberton Daisy</h4>
                        <p className="p">$119.00</p>
                    </div>
                    <div className="product-card">
                        <div className="product-image">
                            <img src={IMG2} alt="Barberton Daisy" />
                            <div className="hover-icons">
                                <Link to="/Shop"><BsFillCartPlusFill className='hhhh' /></Link>
                                <button className='kichik'>...</button>
                                <button>...</button>
                            </div>
                        </div>
                        <h4 className='h'>Barberton Daisy</h4>
                        <p className="p">$119.00</p>
                    </div>
                    <div className="product-card">
                        <div className="product-image">
                            <img src={IMG2} alt="Barberton Daisy" />
                            <div className="hover-icons">
                                <Link to="/Shop"><BsFillCartPlusFill className='hhhh' /></Link>
                                <button className='kichik'>...</button>
                                <button>...</button>
                            </div>
                        </div>
                        <h4 className='h'>Barberton Daisy</h4>
                        <p className="p">$119.00</p>
                    </div>
                    <div className="product-card">
                        <div className="product-image">
                            <img src={IMG2} alt="Barberton Daisy" />
                            <div className="hover-icons">
                                <Link to="/Shop"><BsFillCartPlusFill className='hhhh' /></Link>
                                <button className='kichik'>...</button>
                                <button>...</button>
                            </div>
                        </div>
                        <h4 className='h'>Barberton Daisy</h4>
                        <p className="p">$119.00</p>
                    </div>
                    <div className="product-card">
                        <div className="product-image">
                            <img src={IMG2} alt="Barberton Daisy" />
                            <div className="hover-icons">
                                <Link to="/Shop"><BsFillCartPlusFill className='hhhh' /></Link>
                                <button className='kichik'>...</button>
                                <button>...</button>
                            </div>
                        </div>
                        <h4 className='h'>Barberton Daisy</h4>
                        <p className="p">$119.00</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Releted
