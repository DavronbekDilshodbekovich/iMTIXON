import React from 'react'
import { RxArrowRight } from "react-icons/rx";
import { Link } from 'react-router-dom';
import IMG15 from "../../assets/IMG15.SVG"
import IMG16 from "../../assets/IMG16.SVG"
import "./ItemFor.css"


const ItemFor = () => {
    return (
        <div className="backsss">

           <div className='backkkk'>
        <div className='ItemFor'>
                <div className='rigtt'>
                    <img src={IMG15} alt="" />
                    <ul className='allitem'>
                        <li className='tittttt'><strong>Summer cactus <br /> & succelents</strong></li>
                        <li className='textttt'><p>We are an online plan shop offering a wide <br /> range of cheap and trendy plants </p></li>
                        <div className="btndd">
                            
                        <li className='btntn'><Link className='btntn'>Find More</Link><RxArrowRight className='loggg' />

                        </li>
                        </div>
                    </ul>
                </div>
                <div className='rigtt'>
                    <img width={250} src={IMG16} alt="" />
                    <ul className='allitem'>
                        <li className='tittttt'><strong>Styling trends <br /> & much more</strong></li>
                        <li className='textttt'><p>We are an online plan shop offering a wide <br /> range of cheap and trendy plants </p></li>
                        <li className='btntn'><Link className='btntn'>Find More</Link><RxArrowRight className='loggg' />

                        </li>
                    </ul>
                </div>

            </div>
        </div>
        </div>
           
    )
}

export default ItemFor
