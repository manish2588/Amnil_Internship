import Link from 'next/link'

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-md mx-auto bg-white rounded-lg shadow p-6">
        <h1 className="text-2xl font-bold text-gray-800 mb-4">Dashboard</h1>
        <p className="text-gray-600 mb-6"> nested routes :</p>
        
        <div className="space-y-3 mb-6">
          <Link 
            href="/dashboard/settings" 
            className="block p-3 bg-gray-50 rounded border hover:bg-gray-100 transition"
          >
            Settings
          </Link>
          <Link 
            href="/dashboard/profile" 
            className="block p-3 bg-gray-50 rounded border hover:bg-gray-100 transition"
          >
            Profile
          </Link>
        </div>
        
        <Link href="/" className="text-blue-600 hover:text-blue-800">
          ← Back to Home
        </Link>
      </div>
    </div>
  )
}