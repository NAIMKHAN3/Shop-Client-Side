import React, { useEffect, useState } from 'react';

const Home = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])
    console.log(products)
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 mx-auto'>
            {
                products.map(product => <div key={product._id} className='text-center border-2'>
                    <div className='flex justify-center items-center'><img className='w-48' src={product.image} alt="" /></div>
                    <h1>Name: {product.name}</h1>
                    <p>Price: BDT {product.price}</p>
                    <button className='w-4/5 bg-indigo-500 rounded-full py-1 px-2 flex-1 text-white text-bold'>Add To Card</button>
                </div>)
            }
        </div>
    );
};

export default Home;