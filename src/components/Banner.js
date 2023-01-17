import React from 'react';
// import logo from '../assets/logo.png'
import Typewriter from 'typewriter-effect';

const Banner = () => {
    return (
        <div className='w-full min-h-[400px] bg-orange-600 grid grid-cols-1 md:grid-cols-2 gap-4 items-center justify-center '>
            {/* <img src={logo} alt="" /> */}
            <div className='text-3xl my-10 px-5 lg:px-20 w-full lg:mx-20'>
                <h1 className='font-bold mb-5'>Welcome to AtoZ</h1>
                <h2 className=' mb-5'>We provide you a daily Solution</h2>
                <Typewriter
                    options={{
                        strings: ['Laptop', 'Mobile', 'Lifestyle', 'Cosmetics', 'Grocery', 'Shoes', 'Anything You Want'],
                        autoStart: true,
                        loop: true,
                    }}
                />
            </div>
            <div className=' md:block'>
                <img width="w-full" src="https://i.ibb.co/VV0R2q3/bp.png" alt="" />
            </div>
        </div>
        // <div className='mb-10'>
        //     <div className="carousel w-full">
        //         <div id="slide1" className="carousel-item relative w-full">
        //             <img src="https://placeimg.com/800/200/arch" className="w-full" alt='' />
        //             <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
        //                 <a href="#slide4" className="btn btn-circle">❮</a>
        //                 <a href="#slide2" className="btn btn-circle">❯</a>
        //             </div>
        //         </div>
        //         <div id="slide2" className="carousel-item relative w-full">
        //             <img src="https://placeimg.com/800/200/arch" className="w-full" alt='' />
        //             <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
        //                 <a href="#slide1" className="btn btn-circle">❮</a>
        //                 <a href="#slide3" className="btn btn-circle">❯</a>
        //             </div>
        //         </div>
        //         <div id="slide3" className="carousel-item relative w-full">
        //             <img src="https://placeimg.com/800/200/arch" className="w-full" alt='' />
        //             <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
        //                 <a href="#slide2" className="btn btn-circle">❮</a>
        //                 <a href="#slide4" className="btn btn-circle">❯</a>
        //             </div>
        //         </div>
        //         <div id="slide4" className="carousel-item relative w-full">
        //             <img src="https://placeimg.com/800/200/arch" className="w-full" alt='' />
        //             <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
        //                 <a href="#slide3" className="btn btn-circle">❮</a>
        //                 <a href="#slide1" className="btn btn-circle">❯</a>
        //             </div>
        //         </div>
        //     </div>
        // </div>

    );
};

export default Banner;