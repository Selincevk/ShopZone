import { IoAddOutline } from "react-icons/io5";
import { FiMinus } from "react-icons/fi";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addToCart} from "../../redux/cartSlice"

const DetailComp = ({productDetail}) => {
    const dispatch = useDispatch();
    const [quantity, setQuantity] = useState(0);

    const decrement = () => {
        if (quantity > 0)
        setQuantity(quantity - 1)
    }

    const increment = () => {
        if (quantity < productDetail?.rating?.count)
        setQuantity(quantity + 1)
    }

    const addBasket = () => {
dispatch(addToCart({id: productDetail?.id, title: productDetail?.title, image: productDetail?.image, quantity: quantity,price: productDetail?.price}))
    }

  return (
    <div className='flex gap-10 my-10 border-2 p-3'>
      <img className='w-[500px] h-[600px] object-cover' src={productDetail?.image} alt=''/>
      <div className=''>
        <div className='text-4xl font-bold'>{productDetail?.title} </div>
        <div className='text-2xl my-2'>{productDetail?.description} </div>
        <div className='my-2 text-xl text-red-500'>Rating : {productDetail?.rating?.rate} </div>
        <div>Count : {productDetail?.rating?.count} </div>
        <div className='text-5xl font-bold mt-2'>{(productDetail?.price * 10).toFixed(2)}<span classname="text-sm" >TL</span> </div>
      
      <div className='flex items-center gap-5 m-3'>
        <div onClick={decrement} className='text-5xl mt-5'><FiMinus /></div>
        <input className='w-10 text-center text-4xl mt-5' type="text" value={quantity} />
        <div onClick={increment}
         className='text-5xl mt-5'><IoAddOutline /></div>
        
      </div>
      <div onClick={addBasket} className=' border w-[200px] text-2xl rounded-md bg-gray-200 cursor-pointer my-4 h-16 flex items-center justify-center'>Sepete Ekle</div>
      </div>
    </div>
  )
}

export default DetailComp