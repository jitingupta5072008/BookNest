import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { User, Search, Heart, ShoppingCart, Menu, X, Plus } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [menuHeight, setMenuHeight] = useState("0px");

  useEffect(() => {
    setIsMenuOpen(false);
    setIsProfileOpen(false);
  }, []);

  useEffect(() => {
    setMenuHeight(isMenuOpen ? "300px" : "0px");
  }, [isMenuOpen]);

  return (
    <nav className='bg-white shadow-md relative z-50'>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <Link to={'/'}>
            <h1 className='font-bold text-xl text-pink-500'>BookNest</h1>
            </Link>
          </div>

          <div className="hidden md:flex space-x-4">
            <Link to="/" className="font-semibold text-gray-700 hover:text-pink-500 transition">Home</Link>
            <Link to="/about" className="font-semibold text-gray-700 hover:text-pink-500 transition">About</Link>
          </div>

          <div className="hidden md:flex items-center space-x-4">

            <Link to="/books/add" className="flex flex-col items-center text-gray-700 hover:text-pink-500">
              <Plus className="w-5 h-5" />
              <span className="text-xs">Add Book</span>
            </Link>
          </div>

          <div className="md:hidden flex gap-2 items-center">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="p-2 rounded-md text-gray-700 hover:text-pink-500 hover:bg-gray-100 focus:outline-none">
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      <div className={`md:hidden shadow-md overflow-hidden transition-all duration-300 ease-in-out absolute bg-white w-full`} style={{ maxHeight: menuHeight }}>
        <div className="pt-1 pb-3 border-t border-gray-200">
          <div className="mt-3 px-2 space-y-1">
            <Link to="/" className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-pink-500 hover:bg-gray-100">Home</Link>
            <Link to="/about" className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-pink-500 hover:bg-gray-100">About</Link>
            <Link to="/books/add" className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-pink-500 hover:bg-gray-100 flex items-center">
             <Plus className="w-5 h-5 mr-2" />
              <span>Add Book</span></Link>
            
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
