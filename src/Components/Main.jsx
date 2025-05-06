import React from 'react'
import hero from "../assets/logo.png"

const Main = () => {
    return (
        <div className='bace text-white grid grid-cols-2 items-center justify-between pt-28'>
            <div className="max-w-[700px] select-none">
                <button className="cursor-pointer relative px-6 py-2 text-white border-x border-yellow-400 rounded-md overflow-hidden group mb-8">
                    <span className="absolute top-0 left-0 w-full h-full border border-yellow-400 rounded-md transform scale-x-0 origin-center group-hover:scale-x-100 transition-transform duration-500 ease-in-out"></span>
                    <span className="relative z-10">2 Yil dan beri siz bilan</span>
                </button>
                <h1 className='text-8xl font-bold select-none flex flex-col gap-3 tracking-[7px]'><span>DataSitega</span> <span className='text-yellow-300'>Academy</span></h1>
                <p className='font-bold text-4xl mt-4'><span className='text-red-500'>Strong</span> knowledge, <span className='text-red-500'>Many</span> practices</p>
            </div>
            <img className='w-[500px] ml-auto' src={hero} alt="Main image" />
        </div>
    )
}

export default Main
