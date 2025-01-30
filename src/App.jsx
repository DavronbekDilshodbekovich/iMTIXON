import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import PrivatePage from './components/privatePage/privatePage'
import Shop from './components/Shop/Shop'
import Product from './components/Product/Product'
import Adress from './components/Adress/Adress'

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <PrivatePage />,
      children: [
        {
          path: "/category",
          element: <PrivatePage />,
        },
      ]
    },
    {
      path: "/Shop/:id",
      element: <Shop />,
    },
    {
      path: "/Product",
      element: <Product />,
    },
    {
      path: "/Adress",
      element: <Adress />,
    }
  ])
  
  return (
    <RouterProvider router={router} />
  )
}

export default App