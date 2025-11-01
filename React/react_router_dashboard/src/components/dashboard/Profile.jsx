const Profile = () => {
  const user = JSON.parse(localStorage.getItem("user"));

  return (
    <div className="p-8">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-3xl font-bold text-gray-800">Profile</h2>
        <span className="text-sm text-gray-500 bg-gray-100 px-3 py-1 rounded-full">
          dashboard/profile
        </span>
      </div>
      <div className="bg-white rounded-lg shadow-md p-6">
        <div className="flex items-center space-x-4 mb-6">
          <div className="w-20 h-20 bg-linear-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white text-2xl font-bold">
            {user?.email?.charAt(0).toUpperCase() || "U"}
          </div>
          <div>
            <h3 className="text-xl font-semibold text-gray-800">
              {user?.email || "User"}
            </h3>
           
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
