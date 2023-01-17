import React, { useEffect, useState } from 'react';

const Products = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {

        fetch('http://localhost:5000/products')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])
    return (
        <div className='text-black w-11/12 mx-auto my-10'>
            <h3 className=' text-orange-600 text-2xl text-center font-bold my-10'>Available Products</h3>

            {products.length}
            <div className='grid md:grid-cols-3 lg:grid-cols-4 gap-5'>
                {
                    products.map(product => <div key={product._id} className="card bg-base-100 shadow-xl">
                        <figure><img src={product.img} alt="Shoes" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">{product.name}</h2>
                            <p>If a dog chews shoes whose shoes does he choose?</p>
                            <div className="card-actions ">
                                <button className="btn bg-orange-600 border-0 w-full">Buy Now</button>
                            </div>
                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default Products;