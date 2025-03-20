import React from 'react'
import 'remixicon/fonts/remixicon.css'
const Navbar = () => {
  return (
    <div className=''>
      <div className=' flex items-center justify-between px-15 py-6'>
        <div>
            <img src='https://cdn.shopify.com/s/files/1/0874/8928/2359/files/logo.svg?v=1714142588&width=148&height=38&crop=center'></img>
        </div>

        <div>
            <ul className='flex gap-10 text-xl'>
                <li>Home</li>
                <li>Products</li>
                <li>About</li>
                <li>Contact</li>
            </ul>
        </div>
        <div className='flex gap-2 items-center justify-center text-xl'>
            <button className='text-xl'>Cart</button>
            <i class="ri-shopping-cart-line"></i>
        </div>
      </div>
    </div>
  )
}

export default Navbar
