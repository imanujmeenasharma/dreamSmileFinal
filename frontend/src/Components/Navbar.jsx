import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Turn as Hamburger } from 'hamburger-react';

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <header className="w-full shadow-sm">
            <nav className="h-[10vh] w-full flex items-center justify-between px-5 lg:px-20">
                <div className="logo w-full lg:w-[20%]">
                    <h1 className="text-lg lg:text-xl font-medium tracking-tighter leading-none whitespace-nowrap flex items-center gap-2">Dream Smile Dental</h1>
                    <span className='text-sm leading-none relative bottom-1'>Dental care with gental touch</span>
                    <a href="tel:706-508-4222" className="text-xs block font-bold leading-none lg:text-base">706-508-4222</a>
                </div>

                {/* Desktop Menu */}
                <div className="hidden lg:flex w-[60%] items-center justify-center gap-8">
                    <Link to="/" className="hover:text-gray-600 font-medium text-lg">Home</Link>
                    <Link to="/about" className="hover:text-gray-600 font-medium text-lg">About</Link>
                    <Link to="/gallery" className="hover:text-gray-600 font-medium text-lg">Gallery</Link>
                    <Link to="/contact" className="hover:text-gray-600 font-medium text-lg">Contact</Link>
                </div>

                {/* Contact Button for Desktop */}
                <div className="hidden lg:flex w-[20%] justify-end">
                    <a href="tel:706-508-4222" className="bg-black text-white px-5 py-2 rounded-full text-sm font-medium">
                        Contact us
                    </a>
                </div>

                {/* Hamburger for Mobile */}
                <div className="lg:hidden">
                    <Hamburger
                        size={20}
                        direction="left"
                        duration={0.8}
                        easing="ease-in"
                        rounded
                        toggled={menuOpen}
                        toggle={setMenuOpen}
                    />
                </div>
            </nav>

            {/* Mobile Menu */}
            {menuOpen && (
                <div className="lg:hidden flex flex-col items-center bg-white shadow-md py-4 gap-4">
                    <Link to="/" onClick={() => setMenuOpen(false)} className="text-lg font-medium hover:text-gray-600">Home</Link>
                    <Link to="/about" onClick={() => setMenuOpen(false)} className="text-lg font-medium hover:text-gray-600">About</Link>
                    <Link to="/gallery" onClick={() => setMenuOpen(false)} className="text-lg font-medium hover:text-gray-600">Gallery</Link>
                    <Link to="/contact" onClick={() => setMenuOpen(false)} className="text-lg font-medium hover:text-gray-600">Contact</Link>
                    <a href="/contact" className="bg-black text-white px-5 py-2 rounded-full text-sm font-medium">
                        Contact us
                    </a>
                </div>
            )}
        </header>
    );
};

export default Navbar;
