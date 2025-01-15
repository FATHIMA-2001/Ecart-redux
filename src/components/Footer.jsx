import React from 'react'
import { Link } from 'react-router-dom'


const Footer = () => {
  return (

    <div style={{height:'200px'}} className='bg-violet-700 ' >
    <div className='flex justify-between ps-3 ms-3'>

    <div style={{width:'400px'}} className='text-white '>        
        <h5 className='text-white text-2xl'> <i className="fa-solid fa-truck text-white p-3"></i>
          Daily Cart</h5>

        <p>Designed and built with all the love in the world by the Luminar team with the help of our contributors.</p>
        <p>Code licensed with MIT,docs CC BY 3.0.</p>
        <p>Currently v5.3.3.</p>

    </div> 
    <div className=' flex flex-col p-3'>
    <h5 className='text-white text-2xl '>Links</h5>
        <Link to={'/'} style={{textDecoration:'none', color:'white'}}>Home page</Link>
        <Link to={'/wishlist'} style={{textDecoration:'none' ,color:'white'}}>Wishlist</Link>
        <Link to={'/cart'} style={{textDecoration:'none' ,color:'white'}}>Cart</Link>

    </div>

    <div  className='flex flex-col p-3'>
    <h5 className='text-white text-2xl '>Guides</h5>
               
               <a  style={{textDecoration:'none', color:'white'}} target='_blank' href="https://react-bootstrap.netlify.app/">React</a>
               <a  style={{textDecoration:'none', color:'white'}} target='_blank'  href="https://react-bootstrap.netlify.app/">React Bootstrap</a>
               <a  style={{textDecoration:'none', color:'white'}} target='_blank' href="https://www.npmjs.com/package/react-router-dom">React Router</a>
              
               
    </div>

    <div className='flex flex-col p-3'>

<h5 className='text-white text-2xl'>Contact Us</h5>

<div className='flex justify-between ms-2'>
<input className='me-3' type="email" placeholder='Enter your email here.. ' />
<button className='btn'><i class="fa-solid fa-arrow-right text-white"></i></button>

</div>
<div className='flex justify-between ms-2'>
    
<a  style={{textDecoration:'none', color:'white'}} href="https://twitter.com/i/moments"><i class="fa-brands fa-twitter"></i></a>

<a  style={{textDecoration:'none', color:'white'}} href="https://www.instagram.com/"><i class="fa-brands fa-instagram"></i></a>

<a  style={{textDecoration:'none', color:'white'}} href="https://www.facebook.com/"> <i class="fa-brands fa-facebook"></i></a>
<a  style={{textDecoration:'none', color:'white'}} href="https://www.linkedin.com/"> <i class="fa-brands fa-linkedin"></i></a>
<a  style={{textDecoration:'none', color:'white'}} href="https://github.com/login"><i class="fa-brands fa-github"></i></a>

</div>



</div>  

</div>


<p className='text-center text-white '>Copyright &copy may 2024 batch,Daily cart built with react.</p>


    
    </div>





  )
}

export default Footer