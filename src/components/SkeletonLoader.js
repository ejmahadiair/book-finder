const SkeletonLoader = () => {
    return (
      <div className="animate-pulse flex flex-wrap gap-4">
        {Array.from({ length: 9 }).map((_, index) => (
          <div
            key={index}
            className="w-full md:w-1/2 lg:w-1/3 p-4 bg-gray-200 h-64 rounded-lg"
          ></div>
        ))}
      </div>
    );
  };
  
  export default SkeletonLoader;
  