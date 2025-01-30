import React from 'react'
import Filter from "../../assets/filter.svg"
import Sale from "../../assets/Sale.svg"
import { Link } from 'react-router-dom'
import "./Sidebar.css"

const Sidebar = () => {
    return (
        <div className='Sidebar-container'>
            <div className='Sidebar-inner'>
                <strong className='Category'>
                    Categories
                </strong>
                <div className='Link-form'>
                    <ul className='links'>
                        <li className='link'>
                            <Link className='text1' to="/House Plants" >House Plants</Link>
                            <p className='number1'>(33)</p>
                        </li>
                        <li className='link'>
                            <Link className='text' to="/Potter Plants" >Potter Plants</Link>
                            <p className='number'>(12)</p>
                        </li>
                        <li className='link'>
                            <Link className='text' to="/Seeds" >Seeds</Link>
                            <p className='number'>(65)</p>
                        </li>
                        <li className='link'>
                            <Link className='text' to="/Small Plants" >Small Plants</Link>
                            <p className='number'>(39)</p>
                        </li>
                        <li className='link'>
                            <Link className='text' to="/Big Plants" >Big Plants</Link>
                            <p className='number'>(23)</p>
                        </li>
                        <li className='link'>
                            <Link className='text' to="/Succulents" >Succulents</Link>
                            <p className='number'>(17)</p>
                        </li>
                        <li className='link'>
                            <Link className='text' to="/Trerrariums" >Trerrariums</Link>
                            <p className='number'>(19)</p>
                        </li>
                        <li className='link'>
                            <Link className='text' to="/Gardening" >Gardening</Link>
                            <p className='number'>(13)</p>
                        </li>
                        <li className='link'>
                            <Link className='text' to="/Accessories" >Accessories</Link>
                            <p className='number'>(18)</p>
                        </li>
                    </ul>
                </div>
                <div className='filter-fake'>
                    <img src={Filter} alt="filter" />
                </div>
                <div className='links-bottom'>
                    <strong className='Category'>Size</strong>
                    <ul className='bottom-form'>
                        <li className='link'>
                            <Link className='text' to="/Small" >Small</Link>
                            <p>(119)</p>
                        </li>
                        <li className='link'>
                            <Link className='text' to="/Medium" >Medium</Link>
                            <p>(86)</p>
                        </li>
                        <li className='link'>
                            <Link className='text' to="/Large" >Large</Link>
                            <p>(78)</p>
                        </li>
                    </ul>
                    <img className='bottom-imgg' src={Sale} alt="" />
                </div>
            </div>
        </div>
    )
}

export default Sidebar
