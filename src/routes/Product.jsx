import React, { useState, useEffect, useRef } from "react";
import { Link } from 'react-router-dom';
import axios from "axios";
import { useLoaderData } from "react-router-dom";

export async function loader() {
    const res = await axios.get(`${import.meta.env.VITE_API_URL}/products`);
    const data = res.data

    return { data }
}

function ProductPage(props) {
    const { data } = useLoaderData()
    const [searchQuery, setSearchQuery] = useState('');
  

    const filteredData = data.filter(products =>
        products.title.toLowerCase().includes(searchQuery.toLowerCase())

    );

    useEffect(() => {
        axios.post("http://localhost:3000/users/verify", {}, { withCredentials: true })
            .then((data) => {
                console.log("logged in")
            })
            .catch(error => {
                console.log(error)

            })
    }, [])

   
    console.log(data)


    return (
        <main className='h-full mt-40'>

            <div className="text-center h-20 text-amber-800 items-center justify-center flex text-4xl"><span className="text-amber-500">O</span>rganic</div>
<div className="items-end justify-end flex mr-20">
            <input type='text' placeholder='Search' className="p-2 focus:outline-none border border-amber-800 rounded-md w-56" value={searchQuery} onChange={(e)=>setSearchQuery(e.target.value)}/>
</div>
            <section>
                <ul className="grid lg:grid-cols-4 md:grid-cols-3 sm-grid-cols-2 gap-6 p-20">
                    {
                        filteredData.map((products, index) => {
                            return <li className="shadow-lg" key={products._id}>

                                <Link to={'/products/' + products._id}>
                                    <img className="rounded-lg w-72 h-64" src={products.image} />
                                    <h4 className="py-2 text-center text-amber-800">{products.title}</h4>
                                    <p className="py-2 text-center text-amber-800">{products.price}</p>
                                    <div className="flex justify-center items-center py-4"><Link to={'/products/' + products._id} className="p-2 rounded-md bg-amber-300 text-amber-800 font-bold">{products.cart}</Link></div>

                                </Link>

                            </li>
                        })
                    }
                </ul>
            </section>

        </main>
    );
}

export default ProductPage;