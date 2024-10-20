"use client"
import { useEffect, useState } from 'react';

const BookCard = ({ book, refreshWishlist }) => {
  const [isWishlisted, setIsWishlisted] = useState(false);

  // Check if the book is in the wishlist when the component mounts
  useEffect(() => {
    const wishlist = JSON.parse(localStorage.getItem('wishlist')) || [];
    const isBookWishlisted = wishlist.some((item) => item.id === book.id);
    setIsWishlisted(isBookWishlisted);
  }, [book.id]);

  // Toggle wishlist
  const toggleWishlist = () => {
    const wishlist = JSON.parse(localStorage.getItem('wishlist')) || [];

    if (isWishlisted) {
      // Remove from wishlist
      const updatedWishlist = wishlist.filter((item) => item.id !== book.id);
      localStorage.setItem('wishlist', JSON.stringify(updatedWishlist));
      setIsWishlisted(false);
    } else {
      // Add to wishlist
      wishlist.push(book);
      localStorage.setItem('wishlist', JSON.stringify(wishlist));
      setIsWishlisted(true);
    }

    // Refresh the wishlist display immediately
    // refreshWishlist();
  };

  return (
    <div className="border p-4 rounded shadow-sm bg-white relative">
      <img
        src={book.formats['image/jpeg']}
        alt={book.title}
        className="w-full h-40 object-cover rounded mb-4"
      />
      <h3 className="text-lg font-semibold mb-2">{book.title}</h3>
      <p className="text-gray-600">
        Author: {book.authors.map((author) => author.name).join(', ')}
      </p>
      <p className="text-gray-600">Genre: {book.subjects[0] || 'Unknown'}</p>

      {/* Heart icon to add/remove from wishlist */}
      <button
        onClick={toggleWishlist}
        className="absolute top-2 right-2 text-white"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-8 w-8"
          fill={isWishlisted ? 'red' : 'white'} // Dynamic heart color
          viewBox="0 0 24 24"
          stroke="red"
          strokeWidth="2"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3.172 5.172a4.001 4.001 0 015.656 0L12 8.343l3.172-3.171a4.001 4.001 0 015.656 5.656L12 18.828l-8.828-8.828a4.001 4.001 0 010-5.656z"
          />
        </svg>
      </button>
    </div>
  );
};

export default BookCard;
