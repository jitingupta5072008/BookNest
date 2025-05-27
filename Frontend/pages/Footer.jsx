import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-white text-gray-700 border-t border-gray-300 py-6">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
        
        <div className="text-center md:text-left">
          <h2 className="text-lg font-bold">📚 BookNest</h2>
          <p className="text-sm mt-1">A haven for book lovers. Discover stories <br /> that inspire, educate, and entertain.</p>
        </div>

        <nav>
          <ul className="flex space-x-6 text-sm font-medium">
            <li>
              <Link to="/" className="hover:text-pink-600 transition">
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" className="hover:text-pink-600 transition">
                About
              </Link>
            </li>
            <li>
              <Link to="/books/add" className="hover:text-pink-600 transition">
                Add Book
              </Link>
            </li>
          </ul>
        </nav>

        <div className="text-center md:text-right text-sm">
          <p>
            Developed by <Link to={'https://github.com/jitingupta5072008'} target="_blank" className="font-semibold underline">Jitin Gupta</Link>
          </p>
          <p>© {new Date().getFullYear()} All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
