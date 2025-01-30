import React from 'react'
import Links from "../../components/Links/Links"
import Newsletter from "../../components/Newsletter/Newsletter"
import Services from "../../components/Services/Services"
import "./Footer.css"

const Footer = () => {
  return (
    <div>
        <div className='HBHBH'>
      <Services/>
      <Newsletter/>
        </div>
      <Links/>
    </div>
  )
}

export default Footer
