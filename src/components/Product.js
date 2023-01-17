import React from 'react';
import { Zoom } from 'react-reveal';

const Product = ({ product }) => {
    return (
        < Zoom >
            <div
                className="card bg-base-100 shadow-xl">
                <figure><img src={product.img} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{product.name}</h2>
                    <p>If a dog chews shoes whose shoes does he choose?</p>
                    <div className="card-actions ">
                        <button className="btn bg-orange-600 border-0 w-full">Buy Now</button>
                    </div>
                </div>
            </div>
        </Zoom >
    );
};

export default Product;