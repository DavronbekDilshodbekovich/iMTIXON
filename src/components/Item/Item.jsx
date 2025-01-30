import React, { useEffect, useState } from 'react';
import { Link, NavLink, useParams } from 'react-router-dom';
import { BsFillCartPlusFill } from 'react-icons/bs';
import './Item.css';
import IMG2 from '../../assets/IMG2.svg';

const Item = () => {
    const [product, setProduct] = useState([]);

    useEffect(() => {
        fetch('https://greenshop-c00c.onrender.com/api/flowers')
            .then(response => response.json())
            .then(data => setProduct(data))
            .catch(error => console.error('Error fetching data:', error));
    }, []);

    return (
        <div className='moto'>
            <div className='Linkkk'>
                <nav className='header-nav'>
                    <NavLink to='/' className={({ isActive }) => isActive ? 'active header-nav-link' : 'header-nav-link'}>All Plants</NavLink>
                    <NavLink to='/New Arrivals' className={({ isActive }) => isActive ? 'active header-nav-link' : 'header-nav-link'}>New Arrivals</NavLink>
                    <NavLink to='/Sale' className={({ isActive }) => isActive ? 'active header-nav-link' : 'header-nav-link'}>Sale</NavLink>
                </nav>
                <div className='select'>
                    <p className='selectt'>
                        Short by: Default sorting
                        <select name='Default sorting'>
                            <option value='1'>Default</option>
                        </select>
                    </p>
                </div>
            </div>
            <div className='behruzjan'>
                <div className='product-grid'>
                    {product.map((item) => (
                        <div className='product-card' key={item._id}>
                            <div className='product-image'>
                                <img src={IMG2} alt={item.name} />
                                <div className='hover-icons'>
                                    <Link to={`/Shop/${item._id}`}>
                                        <BsFillCartPlusFill className='hhhh' />
                                    </Link>
                                    <button className='kichik'>...</button>
                                    <button>...</button>
                                </div>
                            </div>
                            <h4 className='h'>{item.name}</h4>
                            <p className='p'>${item.price.toFixed(2)}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Item;
