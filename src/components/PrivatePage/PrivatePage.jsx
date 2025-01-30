import React from 'react'
import Header from '../Header/Header'
import Hero from '../Hero/Hero'
import Sidebar from '../Sidebar/Sidebar'
import Item from '../Item/Item'
import ItemForm from '../ItemFor/ItemFor'
import Footer from '../Footer/Footer'
import Blog from '../Blog/Blog'
import "./PrivatePage.css"
const privatePage = () => {
  return (
    <div className='container'>
      <Header />
      <Hero />
      <div className='flexcha'>
        <Sidebar />
        <Item />
      </div>
      <ItemForm />
      <Blog />
      <Footer />



    </div>
  )
}

export default privatePage
