import React, {useState, useEffect, Suspense, useLayoutEffect} from 'react'
import axios from 'axios'
import data from '../data.json'
import Loader from './Loader'

const ProductWithLazyLoad = React.lazy(()=> import('./Product'))

const ProductLists = () => {
const [delay, setDelay] = useState(true)

    // const [giftCards, setGiftCards] = useState([])
    // const [error, setError] = useState(null)
    // const [isloading, setIsLoading ] = useState(false)
    console.log('second')

    // useEffect(() => {
    //     console.log('first')
    //     try {
    //         setIsLoading(true)
    //         const getGiftCard = async() => {
    //             const response = await axios.get("https://api.chimoney.io/v0.2/info/assets")
    //             const data = response.data
    //             setGiftCards(data)
    //             console.log(giftCards, 'dddfff')
    //         }
    //         getGiftCard()
            
    //     } catch (error) {
    //         console.log(error.message)
    //     }
        
    // }, [])
    // console.log(<FaSpinner/>)
    useEffect(()=>{
        setTimeout(()=>{
            setDelay(false)
            console.log('done')
        },5000)
    },[])
  
    
    // if(delay) return 

  return (
    <div className={`flex items-center justify-center ${delay ? 'h-[100vh]' : 'h-auto'} py-[10px] mt-[10em]`}>
        {/* {
            delay && <BiLoader size={25} color={'red'}  />
        } */}
        {
            delay === true ? <div className='.loader-container'><div className='spinner'></div></div> :
        <div className='-z-10 flex flex-wrap md:gap-6 md:justify-evenly mb-4 mx-auto'>
            {data.map((list) => {
                return <Suspense fallback={<Loader/>}>
                           
                           <ProductWithLazyLoad list={list}/>

                        </Suspense>

                 }
                )
            }
        </div>
        }
    </div>
  )
}

export default ProductLists