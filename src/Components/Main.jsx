import React from 'react';
import hero from '../assets/logo.png';

const Main = () => {
    return (
        <section className="bace text-white pt-32 pb-16 px-4 md:px-10 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div className="max-w-xl select-none">
                <button className="cursor-pointer relative px-6 py-2 text-white border border-yellow-400 rounded-md overflow-hidden group mb-6">
                    <span className="absolute inset-0 border border-yellow-400 rounded-md transform scale-x-0 origin-center group-hover:scale-x-100 transition-transform duration-500 ease-in-out"></span>
                    <span className="relative z-10">2 Yildan beri siz bilan</span>
                </button>
                <h1 className="text-5xl sm:text-6xl md:text-7xl font-extrabold tracking-wider leading-tight mb-6">
                    <span>DataSitega</span>
                    <br />
                    <span className="text-yellow-300">Academy</span>
                </h1>
                <p className="text-2xl sm:text-3xl font-semibold mt-4">
                    <span className="text-red-500">Strong</span> knowledge,{' '}
                    <span className="text-red-500">Many</span> practices
                </p>
            </div>
            <div className="flex justify-center">
                <img className="w-[200px] sm:w-[300px] lg:w-[500px] object-contain" src={hero} alt="Main" />
            </div>
        </section>
    );
};

export default Main;
