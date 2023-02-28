import React, { useEffect, useState } from 'react';
import { HiShoppingCart } from "react-icons/hi2";

const Home = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])
    console.log(products)
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 mx-auto m-4'>
            {
                products.map(product => <div key={product._id} className='border-2 border-indigo-200'>
                    <div className='flex justify-center items-center'><img className='w-48 h-48' src={product.image} alt="" /></div>
                    <div className='flex justify-between mx-5 font-bold text-red-800'>
                        <h1>Brand: {product.brand}</h1>
                        <h1>Name: {product.name}</h1>
                        <p>Price: BDT {product.price}</p>
                    </div>
                    <p className='mx-5 my-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque optio iusto soluta rerum consequuntur doloribus ab nemo, excepturi nam. Minima veritatis aliquid quaerat earum dolores?</p>


                    <button className=' bg-indigo-500 mx-auto rounded-full py-1 px-8 flex-1 m-2 text-white text-bold flex justify-center items-center'><HiShoppingCart className='mx-2'></HiShoppingCart> <p>Add To Card</p></button>


                </div>)
            }
        </div>
    );
};

export default Home;