
import axios from 'axios';
import React from 'react';
import { useLoaderData } from 'react-router-dom';

export async function loader({params}){
    const res = await axios.get('http://localhost:3000/products/'+params.productsId)
    const products = res.data
    
    return {products}
    }
   
    

function CartPage(props) {
    const {products} = useLoaderData()
    console.log(products)

    
    

    return (
        <main className='h-screen mt-36'>
           <div className='bg-yellow-100'>

            <img className='w-96 h-96 ' src={products.image} alt="" />
            <p className='m-4 text-3xl'>{products.title}</p>
            <p  className='m-4 text-3xl'>{products.price}</p>
            </div>
        </main>
    );
}

export default CartPage;



 