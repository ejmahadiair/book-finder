const SearchBar = ({ searchTerm, setSearchTerm }) => {
  return (
    <div className="flex justify-center mb-6">
      <input
        type="text"
        placeholder="Search by book title..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="px-4 py-2 border border-gray-300 rounded-lg shadow-sm w-full max-w-md"
      />
    </div>
  );
};

export default SearchBar;
