const Favorites = () => {
  return (
    <div className="p-8">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-3xl font-bold text-gray-800">Favorites</h2>
        <span className="text-sm text-gray-500 bg-gray-100 px-3 py-1 rounded-full">
          dashboard/favorites
        </span>
      </div>
      <div className="bg-white rounded-lg shadow-md p-6">
        <div className="text-center py-8">
          <div className="text-gray-400 text-6xl mb-4">❤️</div>
          <h3 className="text-xl font-semibold text-gray-600 mb-2">No favorites yet</h3>
          
        </div>
      </div>
    </div>
  );
};

export default Favorites;