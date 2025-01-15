import React from 'react'
import Header from '../components/Header'
import { Link } from 'react-router-dom'
import { useEffect } from 'react'
import { fetchProducts } from '../redux/slices/productSlice'
import  {useDispatch,useSelector} from 'react-redux'

const Home = () => {

  const dispatch = useDispatch()
// select states using useselector hook also destructuring
  const {allProducts,loading,errorMsg} = useSelector(state=>state.productReducer)
  console.log(allProducts,loading,errorMsg);

  // datas dispalying at the time of page loading..so we use useeffect hook.
  useEffect(()=>{
    dispatch(fetchProducts())
  },[])
  return (
    <>

    <Header insideHome={true} />

    <div className='container px-4 mx-auto' style={{paddingTop:'100px'}}>

     {
       loading ?
       <div className='flex justify-center items-center my-5 text-2xl '>
        <img src="https://media4.giphy.com/media/3oEjI6SIIHBdRxXI40/200w.gif?cid=6c09b952mafid2vi8ryc9dvtqmevc6dofce9b1os4l8g9jit&ep=v1_gifs_search&rid=200w.gif&ct=g" alt="" />

        <h2>loading...</h2>
       </div>




       :
       <>

       <div className='grid grid-cols-4 gap-4'>
        
        {
          allProducts?.length >0 ?

          allProducts?.map(products=>(
            <div className='rounded border p-2 shadow'>

          <img height={'200px'} width={'100%'} src={products?.thumbnail} alt="" />
          <div className='text-center'>
            <h3 className='text-xl font-bold'>{products?.title}</h3>
            <Link className='bg-violet-700 rounded p-1 mt-3 text-white inline-block' to={`/${products?.id}/view`}>View More</Link>
          </div>

        </div>

          ))

          :
          <div className='flex justify-center items-center font-bold text-red-600 my-4 '>PRODUCTS NOT FOUND...</div>
        }
      </div>
       
       </>



     }
    </div>
    
    
    </>
  )
}

export default Home