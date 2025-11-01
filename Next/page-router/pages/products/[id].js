import { useRouter } from 'next/router'
import Link from 'next/link'

export default function ProductDetail() {
  const router = useRouter()
  const { id } = router.query

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-md mx-auto bg-white rounded-lg shadow p-6">
        <h1 className="text-2xl font-bold text-gray-800 mb-4">Product: {id}</h1>
        <p className="text-gray-600 mb-6">
          This is a dynamic page. 
        </p>
        <Link href="/products" className="text-blue-600 hover:text-blue-800">
          ← Back to Products
        </Link>
      </div>
    </div>
  )
}