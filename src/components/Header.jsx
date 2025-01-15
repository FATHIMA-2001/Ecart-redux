import React from 'react'
import { Link } from 'react-router-dom'

const Header = ({insideHome}) => {
  return (
    <nav className='flex  bg-violet-600 fixed w-full p-5 text-white' >

       <Link to={'/'} className='text-2xl font-bold text-white ' > <i class="fa-solid fa-truck text-white"></i> Daily Cart</Link>
       
       <ul className=' flex-1 text-right'>

        {
          insideHome && 
          <li className='list-none inline-block px-5'><input className='rounded p-2' type="text" placeholder='Search Products Here...' /></li>

        }

         <li className='list-none inline-block px-5'><i class="fa-solid fa-heart text-red-600"></i> Wishlist <span className='bg-black text-white '>20</span></li>
         
         <li className='list-none inline-block px-5'><i class="fa-solid fa-cart-plus text-green-600"></i> Cart <span className='bg-black text-white '>10</span></li>

         
         
           </ul>





     </nav>
  )
}

export default Header