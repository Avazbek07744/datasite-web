import React from "react";
import {
    FaTelegramPlane,
    FaInstagram,
    FaYoutube,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png"

const Footer = () => {
    return (
        <footer className="text-white px-6 py-8 backdrop-blur-3xl bg-black">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start gap-8">
                <div>
                    <div className="logo h-14 p-2 my-5 flex items-center gap-3 select-none">
                        <img className='h-14' src={logo} alt="Logo image" />
                        <div className='tracking-[6px]'>
                            <h2 className='text-white text-4xl font-bold'>DataSite</h2>
                            <p className='text-yellow-300 text-2xl font-bold'>Academy</p>
                        </div>
                    </div>
                    <div className="flex gap-14 mt-9 text-4xl">
                        <Link target="_blank" to='https://t.me/Datasite_Academy'><FaTelegramPlane /></Link>
                        <Link target="_blank" to='https://www.instagram.com/datasite_academy/'><FaInstagram /></Link>
                        <Link target="_blank" to='https://www.youtube.com/@Datasiteacademy'><FaYoutube /></Link>
                    </div>
                    <div className="flex flex-wrap gap-10 mt-6 text-xl text-gray-300 font-medium">
                        <Link className="border-b-2 border-transparent hover:border-white pb-2 transition-all duration-500" to="/">Bosh Sahifa</Link>
                        <Link className="border-b-2 border-transparent hover:border-white pb-2 transition-all duration-500" to="/about">Biz Haqimizda</Link>
                        <Link className="border-b-2 border-transparent hover:border-white pb-2 transition-all duration-500" to="/contact">Bog'lanish</Link>
                        <Link className="border-b-2 border-transparent hover:border-white pb-2 transition-all duration-500" to="/new">Yangiliklar</Link>
                        <Link className="border-b-2 border-transparent hover:border-white pb-2 transition-all duration-500" to="/register">Ro'yxatdan o'tish</Link>
                    </div>
                </div>

                <div className="text-xl font-bold flex flex-col items-start gap-3">
                    <h2 className="text-2xl font-semibold mb-2">Bog'lanish</h2>
                    <Link to="/contact" type="" className="text-gray-300 border-b-2 border-transparent hover:border-blue-700 hover:text-blue-700">+998 95 061 64 66</Link>
                    <Link to="/contact" className="text-gray-300 border-b-2 border-transparent hover:border-blue-700 hover:text-blue-700">+998 88 466 22 09</Link>
                    <Link to="https://t.me/Datasite_Academy" className="text-gray-300 mt-2">Telegram</Link>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
