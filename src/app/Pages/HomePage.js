"use client"
import BookCard from '@/components/BookCard';
import GenreFilter from '@/components/GenreFilter';
import Pagination from '@/components/Pagination';
import SearchBar from '@/components/SearchBar';
import LoadingSpinner from '@/components/LoadingSpinner';
import { useEffect, useState } from 'react';


const Home = () => {
  const [books, setBooks] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [genre, setGenre] = useState('');
  const [wishlist, setWishlist] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    // Fetch 9 books per page based on the current page
    fetch(`https://gutendex.com/books?page=${page}&page_size=9`)
      .then((response) => response.json())
      .then((data) => {
        setBooks(data.results);
        setTotalPages(Math.ceil(data.count / 9)); // Total pages based on total books
        setLoading(false);
      });
  }, [page]);

  const filteredBooks = books
    ?.filter((book) =>
      book?.title?.toLowerCase()?.includes(searchTerm?.toLowerCase())
    )
    ?.filter((book) => (genre === '' ? true : book?.subjects?.includes(genre)));

  const toggleWishlist = (book) => {
    const updatedWishlist = wishlist?.includes(book)
      ? wishlist?.filter((b) => b?.id !== book?.id)
      : [...wishlist, book];

    setWishlist(updatedWishlist);
    localStorage.setItem('wishlist', JSON.stringify(updatedWishlist));
  };

  return (
    <>
    <div className='flex justify-between items-center '>

      <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <GenreFilter genre={genre} setGenre={setGenre} genres={["Fiction", "Drama", "History"]} />
    </div>


      {loading ? (
        <LoadingSpinner />
      ) : filteredBooks?.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredBooks?.slice(0, 9)?.map((book) => (
            <BookCard
              key={book.id}
              book={book}
              toggleWishlist={toggleWishlist}
              isWishlisted={wishlist.some((b) => b.id === book.id)}
            />
          ))}
        </div>
      ) : (
        <p className="text-center text-gray-600">No books found</p>
      )}

      <Pagination currentPage={page} totalPages={totalPages} setPage={setPage} />
    </>
  );
};

export default Home;
