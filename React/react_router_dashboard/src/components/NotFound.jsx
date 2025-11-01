import { Link } from 'react-router-dom';

const NotFound = () => {
  

  return (
    <div className="min-h-screen bg-linear-to-br from-purple-50 to-indigo-100 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-lg overflow-hidden text-center">
        <div className=" p-8">
          
          <h1 className="text-4xl text-black font-bold">404</h1>
          <p className="text-black mt-2">Page Not Found</p>
        </div>
        
        <div className="p-8 space-y-6">
          

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            
            
            <Link
              to="/login"
              className="border border-gray-300 text-center text-gray-700 py-3 px-4 rounded-lg font-semibold hover:bg-gray-50 transition-all duration-200"
            >
             Back to Login Page
            </Link>

           
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;