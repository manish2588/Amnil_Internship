import { Link, useLocation, useNavigate, Outlet } from 'react-router-dom';

const Dashboard = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const currentPath = location.pathname.split('/').pop();

  const handleSignOut = () => {
    localStorage.removeItem('isAuthenticated');
    navigate('/login');
  };

  const menuItems = [
    { id: 'profile', label: 'Profile', icon: '👤', path: '/dashboard/profile' },
    { id: 'orders', label: 'Orders', icon: '📦', path: '/dashboard/orders' },
    { id: 'favorites', label: 'Favorites', icon: '❤️', path: '/dashboard/favorites' },
    { id: 'settings', label: 'Settings', icon: '⚙️', path: '/dashboard/settings' },
  ];

  return (
    <div className="flex h-screen bg-gray-50">
      {/* Sidebar - 25% width */}
      <div className="w-1/4 bg-white shadow-lg">
        <div className="p-6 border-b border-gray-200">
          <h1 className="text-2xl font-bold text-gray-800">Dashboard</h1>
          <p className="text-gray-600 text-sm mt-1">Welcome back!</p>
        </div>
        
        <nav className="p-4 space-y-2">
          {menuItems.map((item) => (
            <Link
              key={item.id}
              to={item.path}
              className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition-all duration-200 ${
                currentPath === item.id
                  ? 'bg-blue-50 text-blue-700 border border-blue-200'
                  : 'text-gray-700 hover:bg-gray-50'
              }`}
            >
              <span className="text-lg">{item.icon}</span>
              <span className="font-medium">{item.label}</span>
            </Link>
          ))}
          
          <button
            onClick={handleSignOut}
            className="w-full flex items-center space-x-3 px-4 py-3 rounded-lg text-red-600 hover:bg-red-50 transition-all duration-200 mt-8"
          >
            <span className="text-lg">🚪</span>
            <span className="font-medium">Sign Out</span>
          </button>
        </nav>
      </div>

      {/* Main Content - 75% width */}
      <div className="flex-1 overflow-auto">
        <Outlet />
      </div>
    </div>
  );
};

export default Dashboard;