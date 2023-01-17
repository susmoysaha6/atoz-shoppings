import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
import Product from './Product';

// ..

const Products = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {

        fetch('http://localhost:5000/products')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, []);
    useEffect(() => {

        AOS.init();

    }, [])
    useEffect(() => {

        AOS.refresh();
    }, [])
    return (
        <div className='text-black w-11/12 mx-auto my-10'>
            <h3 className=' text-orange-600 text-2xl text-center font-bold my-10'>Available Products</h3>

            {products.length}
            <div className='grid md:grid-cols-3 lg:grid-cols-4 gap-10'>
                {
                    products.map(product => <Product key={product._id} product={product} />)
                }
            </div>
        </div>
    );
};

export default Products;