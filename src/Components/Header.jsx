import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';
import { Menu, X } from 'lucide-react';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

    return (
        <header className="fixed top-0 left-0 right-0 z-50 bg-black/30 backdrop-blur-md shadow-md">
            <div className="lg:max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
                <div className="flex justify-between items-center h-20">
                    <Link to="/" className="flex items-center gap-3">
                        <img src={logo} alt="Logo" className="h-12" />
                        <div className="leading-tight select-none">
                            <h2 className="text-white text-2xl sm:text-3xl font-bold tracking-wide">DataSite</h2>
                            <p className="text-yellow-400 text-lg font-semibold tracking-widest">Academy</p>
                        </div>
                    </Link>

                    <nav className="hidden md:flex items-center gap-8 text-white font-medium">
                        <Link className="hover:text-yellow-400 transition" to="/">Bosh Sahifa</Link>
                        <Link className="hover:text-yellow-400 transition" to="/about">About</Link>
                        <Link className="hover:text-yellow-400 transition" to="/contact">Contact</Link>
                        <Link className="hover:text-yellow-400 transition" to="/news/1">Yangiliklar</Link>
                        <Link
                            to="/login"
                            className="ml-4 bg-yellow-400 hover:bg-yellow-500 text-black px-4 py-2 rounded-md font-semibold transition"
                        >
                            LogIn
                        </Link>
                    </nav>

                    <div className="md:hidden">
                        <button
                            onClick={toggleMenu}
                            className="text-white focus:outline-none"
                            aria-label="Open Menu"
                        >
                            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
                        </button>
                    </div>
                </div>
            </div>

            {isMenuOpen && (
                <div className="md:hidden bg-black/90 px-6 pb-6 pt-4 text-white space-y-4">
                    <Link onClick={toggleMenu} to="/" className="block hover:text-yellow-400">Bosh Sahifa</Link>
                    <Link onClick={toggleMenu} to="/about" className="block hover:text-yellow-400">About</Link>
                    <Link onClick={toggleMenu} to="/contact" className="block hover:text-yellow-400">Contact</Link>
                    <Link onClick={toggleMenu} to="/news/1" className="block hover:text-yellow-400">Yangiliklar</Link>
                    <Link
                        onClick={toggleMenu}
                        to="/login"
                        className="inline-block mt-2 bg-yellow-400 hover:bg-yellow-500 text-black px-4 py-2 rounded-md font-semibold"
                    >
                        LogIn
                    </Link>
                </div>
            )}
        </header>
    );
};

export default Header;
