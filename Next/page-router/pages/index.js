import Link from 'next/link'

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-md mx-auto bg-white rounded-lg shadow p-6">
        <h1 className="text-2xl font-bold text-gray-800 mb-6">Home Page</h1>
        <div className="space-y-4">
          <Link href="/about" className="block p-4 bg-blue-50 rounded-lg hover:bg-blue-100 transition">
            <h2 className="font-semibold">About Page</h2>
            <p className="text-sm text-gray-600">Normal page example</p>
          </Link>
          
          <Link href="/products" className="block p-4 bg-green-50 rounded-lg hover:bg-green-100 transition">
            <h2 className="font-semibold">Products Page</h2>
            <p className="text-sm text-gray-600">Dynamic page example</p>
          </Link>
          
          <Link href="/dashboard" className="block p-4 bg-purple-50 rounded-lg hover:bg-purple-100 transition">
            <h2 className="font-semibold ">Dashboard Page</h2>
            <p className="text-sm text-gray-600">Nested page example</p>
          </Link>
        </div>
      </div>
    </div>
  )
}