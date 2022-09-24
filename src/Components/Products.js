import React, { useEffect, useState } from 'react'
import { add } from '../Store/CartSlice';
import {useDispatch} from 'react-redux'


const Products = () => {
  const dispatch = useDispatch();
    const [Products, setProducts] = useState([]);
useEffect(() => {
    const fetchProducts = async () => {
        const res = await fetch('https://fakestoreapi.com/products');
        const data = await res.json();
        console.log(data);
        setProducts(data);
    } 
    fetchProducts();
}, []);
const handleAdd = (Product) => {
  dispatch(add(Product))
}
  return (
    <div className='ProductsWrapper'>   
      {
        Products.map(Product => (
            <div className='Card' key={Product.id}>
                <img src={Product.image} alt="" />
                <h4>{Product.title}</h4>
                <h4>{Product.price}</h4>
                <button onClick={() =>handleAdd(Product)} className='btn'>Add to Cart</button>
            </div>
        ))
      }
    </div>
  )
}

export default Products
