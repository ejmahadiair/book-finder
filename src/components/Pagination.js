const Pagination = ({ currentPage, totalPages, setPage }) => {
  const maxPages = 5;
  const startPage = Math.max(currentPage - 2, 1);
  const endPage = Math.min(currentPage + 2, totalPages);

  const jumpToFirstPage = () => setPage(1);
  const jumpToLastPage = () => setPage(totalPages);

  return (
    <div className="flex justify-center mt-8">
      <button
        onClick={() => setPage(currentPage - 1)}
        disabled={currentPage === 1}
        className="px-3 py-1 mx-1 bg-blue-500 text-white rounded-lg disabled:bg-gray-300"
      >
        Prev
      </button>

      {currentPage > maxPages && (
        <button
          onClick={jumpToFirstPage}
          className="px-3 py-1 mx-1 bg-blue-500 text-white rounded-lg"
        >
          1
        </button>
      )}

      {Array.from({ length: endPage - startPage + 1 }).map((_, idx) => {
        const page = startPage + idx;
        return (
          <button
            key={page}
            onClick={() => setPage(page)}
            className={`px-3 py-1 mx-1 rounded-lg ${
              page === currentPage ? 'bg-blue-600 text-white' : 'bg-gray-200'
            }`}
          >
            {page}
          </button>
        );
      })}

      {currentPage < totalPages - 2 && (
        <button
          onClick={jumpToLastPage}
          className="px-3 py-1 mx-1 bg-blue-500 text-white rounded-lg"
        >
          {totalPages}
        </button>
      )}

      <button
        onClick={() => setPage(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="px-3 py-1 mx-1 bg-blue-500 text-white rounded-lg disabled:bg-gray-300"
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
