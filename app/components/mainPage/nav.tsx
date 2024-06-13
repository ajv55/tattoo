// components/NavBar.js

import { dancing_script } from '@/app/font/font';
import Link from 'next/link';

const Nav = () => {
  return (
    <nav className=" bg-gradient-to-br from-zinc-800 via-zinc-900 to-black text-white shadow-md py-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        {/* Logo or Artist's Name */}
        <div className="flex-shrink-0">
          <Link className={`${dancing_script.className} font-bold text-3xl`} href="/">
            Mario&#39;s Studio
          </Link>
        </div>

        {/* Navigation Links */}
        <div className="hidden sm:block">
          <ul className="flex space-x-6">
            <li>
              <Link className="text-orange-500 hover:text-orange-400" href="/">
                Home
              </Link>
            </li>
            <li>
              <Link className="text-orange-500 hover:text-orange-400" href="/portfolio">
                Portfolio
              </Link>
            </li>
            <li>
              <Link className="text-orange-500 hover:text-orange-400" href="/about">
                About
              </Link>
            </li>
            <li>
              <Link href="/contact">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* Call-to-action Button */}
        <div>
          <Link className="bg-orange-500 text-center hover:bg-orange-600 text-white font-bold py-2 lg:px-4 px-2 lg:text-xl text-sm rounded-md" href="/book">
           
              Book Your Appointment
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
