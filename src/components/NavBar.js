"use client"
import Link from 'next/link';

const NavBar = () => {
  return (
    <nav className="bg-blue-600 shadow-lg">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className='text-2xl font-bold text-white'>
          Book List App
        </Link>
        <div className="space-x-4">
          <Link href="/" className="text-white hover:text-gray-300">
            Home
          </Link>
          <Link href="/wishlist" className="text-white hover:text-gray-300">
            Wishlist
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
