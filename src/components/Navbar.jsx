import React from 'react'
import Link from "next/link";

const Navbar = () => {
    return (
        <nav className="bg-[#47cdb8]">
          <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
            <div className='flex items-center justify-between h-16'>
              <div className='flex items-center'>
                <div className='flex-shrink-0'>
                  <a href="/" className='text-white'>Logo</a>
                </div>
              </div>
            </div>
          </div>
        </nav>
    );
}

export default Navbar