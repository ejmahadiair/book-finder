const GenreFilter = ({ genre, setGenre, genres }) => {
  return (
    <div className="flex justify-center mb-6">
      <select
        value={genre}
        onChange={(e) => setGenre(e.target.value)}
        className="px-4 py-2 border border-gray-300 rounded-lg shadow-sm w-full max-w-xs"
      >
        <option value="">All Genres</option>
        {genres.map((g) => (
          <option key={g} value={g}>
            {g}
          </option>
        ))}
      </select>
    </div>
  );
};

export default GenreFilter;
