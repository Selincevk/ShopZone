
import React, { useEffect,useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getCategoryProducts, getProducts} from "../../redux/productSlice"
import Loading from "../Loading"
import Product from './Product'
import ReactPaginate from 'react-paginate';

const Products = ({category,sort}) => {

  const dispatch = useDispatch();
  const {products,productsStatus} = useSelector(state => state.products);

  const [itemOffset, setItemOffset] = useState(0);

  const itemsPerPage = 6;
  const endOffset = itemOffset + itemsPerPage;
  console.log(`Loading items from ${itemOffset} to ${endOffset}`);
  const currentItems = products.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(products.length / itemsPerPage);

  // Invoke when user click to request another page.
  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % products.length;
    console.log(
      `User requested page number ${event.selected}, which is offset ${newOffset}`
    );
    setItemOffset(newOffset);
  };


  

  useEffect(() => {
    if (category) {
      dispatch(getCategoryProducts(category))
    } else {
      dispatch(getProducts())
    }
    dispatch(getProducts());
  }, [dispatch,category])

  return (
    <div>
      {
        productsStatus == "LOADING" ? <Loading/> :
        <>
        <div className='flex flex-wrap'>
          {
            currentItems?.sort((a,b) => sort == "inc" ? a.price-b.price : sort == "dec" ? b.price-a.price : null)?.map((product,i) => (
              <Product key={i} product={product} />
            ))
          }
        </div>
        <ReactPaginate
              className='paginate'
              breakLabel="..."
              nextLabel=">"
              onPageChange={handlePageClick}
              pageRangeDisplayed={5}
              pageCount={pageCount}
              previousLabel="<"
              renderOnZeroPageCount={null}
            />
        </>
      }
    </div>
  )
}

export default Products