import React from 'react'

const Wishlist = () => {
  return (
    <div style={{paddingTop:'100px'}} className='px-5'>

      <>

      <h2 className='text-red-600 text-4xl font-bold'>My Wishlist</h2>

      <div className='grid grid-cols-4 gap-4'>
        <div className='rounded border p-2 shadow'>

          <img height={'200px'} width={'100%'} src="https://img.freepik.com/free-vector/shopping-supermarket-cart-with-grocery-pictogram_1284-11697.jpg?semt=ais_hybrid" alt="" />
          <div className='text-center'>
            <h3 className='text-xl font-bold'>title</h3>

            <div className='flex justify-evenly mt-3'>

              <button className='text-xl '><i className='fa-solid fa-heart-circle-xmark text-red-600'></i></button>
              <button className='text-xl '><i className='fa-solid fa-cart-plus text-green-600'></i></button>

             
              </div>
          </div>

        </div>
      </div>
      
      </>



    </div>
  )
}

export default Wishlist