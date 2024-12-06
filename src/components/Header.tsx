import React, { useState } from 'react';
import { TrendingUp, Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="bg-black text-white py-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <a 
          href='/'
          className="flex items-center space-x-2 cursor-pointer">
            <TrendingUp className="h-8 w-8 text-orange-500" />
            <span className="text-2xl font-bold text-white">Forexfundz</span>
          </a>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={toggleMobileMenu}
              className="text-white focus:outline-none"
            >
              {isMobileMenuOpen ? (
                <X className="h-8 w-8" />
              ) : (
                <Menu className="h-8 w-8" />
              )}
            </button>
          </div>

          {/* Navigation for larger screens */}
          <nav className="hidden md:flex space-x-8">
            <Link to="/" className="text-purple-400 hover:text-purple-300 transition-colors">
              Home
            </Link>
            <a href="#footer" className="text-white hover:text-gray-300 transition-colors">
              About us
            </a>
            <a href="#review" className="text-white hover:text-gray-300 transition-colors">
              Customer Review
            </a>
            <a href="#buy" className="text-white hover:text-gray-300 transition-colors">
              Buy Now
            </a>
          </nav>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <nav className="md:hidden bg-black">
          <div className="flex flex-col space-y-4 px-4 py-4">
            <Link to="/" className="text-purple-400 hover:text-purple-300 transition-colors">
              Home
            </Link>
            <a href="#footer" className="text-white hover:text-gray-300 transition-colors">
              About us
            </a>
            <a href="#review" className="text-white hover:text-gray-300 transition-colors">
              Customer Review
            </a>
            <a href="#buy" className="text-white hover:text-gray-300 transition-colors">
              Buy Now
            </a>
          </div>
        </nav>
      )}
    </header>
  );
}
