// components/Footer.js

import React from 'react';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r w-full from-black via-zinc-900 to-black py-8 px-4 sm:px-6 lg:px-8 text-white">
      <div className="max-w-7xl mx-auto flex flex-col items-center">
        <nav className="flex  space-x-4 mb-4">
          <Link className="text-orange-500 hover:text-orange-400 transition-colors duration-200" href="/">
            Home
          </Link>
          <Link className="text-orange-500 hover:text-orange-400 transition-colors duration-200" href="/portfolio">
            Portfolio
          </Link>
          <Link className="text-orange-500 hover:text-orange-400 transition-colors duration-200" href="/about">
            About
          </Link>
          <Link className="text-orange-500 hover:text-orange-400 transition-colors duration-200" href="/contact">
            Contact
          </Link>
        </nav>
        <p className="text-sm  w-full text-center tracking-wider text-gray-400 mb-4">&copy; {new Date().getFullYear()} Abel J.Villareal. All rights reserved.</p>
        <div className="flex  space-x-4">
          <Link className="text-gray-400 hover:text-gray-300 transition-colors duration-200" href="/terms">
            Terms of Service
          </Link>
          <span className="text-gray-400">|</span>
          <Link className="text-gray-400 hover:text-gray-300 transition-colors duration-200" href="/privacy">
            Privacy Policy
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
