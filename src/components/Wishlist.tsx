"use client"
import { useEffect, useState } from 'react';
import BookCard from './BookCard';
import LoadingSpinner from './LoadingSpinner';

const Wishlist = () => {
  const [wishlist, setWishlist] = useState([]);
  const [loading, setLoading] = useState(true);

  // Load wishlist from localStorage when the component mounts
  useEffect(() => {
    const savedWishlist = JSON.parse(localStorage.getItem('wishlist') || "") || [];
    setWishlist(savedWishlist);
    setLoading(false);
  }, []);

  // Function to refresh the wishlist from localStorage
  const refreshWishlist = () => {
    const updatedWishlist = JSON.parse(localStorage.getItem('wishlist') || "") || [];
    setWishlist(updatedWishlist);
  };

  return (
    <>
      <h1 className="text-2xl font-bold text-center my-6">My Wishlist</h1>

      {loading ? (
        <LoadingSpinner />
      ) : wishlist.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {wishlist.map((book:any) => (
            <BookCard
              key={book.id}
              book={book}
              refreshWishlist={()=>{
                refreshWishlist();
                // Update localStorage after refreshing the wishlist
              }} // Pass the refresh function
            />
          ))}
        </div>
      ) : (
        <p className="text-center text-gray-600">Your wishlist is empty.</p>
      )}
    </>
  );
};

export default Wishlist;
