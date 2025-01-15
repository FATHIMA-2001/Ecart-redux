import React from 'react'
import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import Header from '../components/Header'
import  {useSelector} from 'react-redux'
import { useState } from 'react'


const View = () => {
  // state for holding products
  const [product,setProduct]= useState({})


// fetch dynamic url using hook
  const {id} = useParams()
  console.log(id);

  // const {allProducts}= useSelector(state.productReducer)
  // console.log(allProducts);

  useEffect(()=>{
    if(sessionStorage.getItem("allProducts")){
      const allProducts = JSON.parse(sessionStorage.getItem("allProducts"))
      console.log( allProducts.find(item=>item.id==id));
      setProduct(allProducts.find(item=>item.id==id))
    }
  },[])
  return (
    <>
    <Header/>

    <div className='flex flex-col mx-5'>
      <div className='grid grid-cols-2 items-center h-screen '>
        <img height={'250px'} width={'350px'} src={product?.thumbnail} alt="" />

        <div>
          <h3 className='font-bold'>PID: {product?.id}</h3>
          <h1 className='font-bold text-5xl'>{product?.title}</h1>
          <h4 className='font-bold text-red-600 text-2xl'>$ {product?.price}</h4>
          <h4>Brand : {product?.brand}</h4>
          <h4>Category :{product?.category}</h4>
          <p>

            <span className='font-bold'>Description : {product?.description}</span>
          </p>

          <div className='flex justify-between mt-5'>
            <button onClick={''} className='bg-blue-600 text-white p-2'>Add to wishlist</button>
            <button className='bg-green-600 text-white p-2'>Add to cart</button>
          </div>
        </div>


      </div>
    </div>
    
    </>
  )
}

export default View