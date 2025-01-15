import React from 'react'
import { Link } from 'react-router-dom'
import Header from '../components/Header'

const Cart = () => {
  return (
    <>
    <Header/>

    <div style={{paddingTop:'100px'}}>

      <>

      <h2 className='text-3xl font-bold text-blue-700'>Cart Summary</h2>

      <div className='grid grid-cols-3 gap-4 mt-5'>

        <div className='col-span-2 border rounded p-5 shadow'>

          <table >

            <thead>
              <tr>
                <td className='font-semibold'>#</td>
                <td className='font-semibold'>Name</td>
                <td className='font-semibold'>Image</td>
                <td className='font-semibold'>Quantity</td>
                <td className='font-semibold'>Price</td>
                <td className='font-semibold'>...</td>

              </tr>
            </thead>

            <tbody>
              <tr>
                <td>1</td>
                <td>Product name</td>
                <td><img width={'70px'} height={'70px'} src="https://img.freepik.com/free-vector/shopping-supermarket-cart-with-grocery-pictogram_1284-11697.jpg?semt=ais_hybrid" alt="" /></td>
                <td>
                  <div className='flex'>
                    <button className='font-bold'>-</button>
                    <input className='border p-1 rounded mx-2' value={12} readOnly type="text"  />
                    <button className='font-bold'>+</button>

                  </div>
                </td>

                <td>$ 250</td>
                <td><button className='text-red-600'><i className='fa-solid fa-trash'></i></button></td>
              </tr>
            </tbody>
          </table>

          <div className='float-right mt-5'>

            <button className='bg-red-500 rounded p-3 text-white'>Empty cart</button>
            <Link to={'/'} className='bg-blue-400 ms-3 rounded p-2 text-white'>Shop more..</Link>
          </div>
        </div>

        <div className='col-span-1'>
          <div className='border rounded p-5'>
            <h2 className='text-2xl font-bold my-4'>Total Amount: <span className='text-red-600'>$ 250</span></h2>

            <hr />
            <button className='bg-green-700 p-2 text-white w-full mt-4'>Check out</button>
          </div>


        </div>
      </div>
      
      
      </>
    </div>
    
    </>
  )
}

export default Cart