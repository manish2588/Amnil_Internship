import Link from 'next/link'

export default function Products() {
  const products = [
    { id: 'laptop', name: 'Laptop' },
    { id: 'phone', name: 'Smartphone' },
    { id: 'tablet', name: 'Tablet' }
  ]

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-md mx-auto bg-white rounded-lg shadow p-6">
        <h1 className="text-2xl font-bold text-gray-800 mb-4">Products</h1>
       
        
        <div className="space-y-3 mb-6">
          {products.map(product => (
            <Link 
              key={product.id}
              href={`/products/${product.id}`}
              className="block p-3 bg-gray-50 rounded border hover:bg-gray-100 transition"
            >
              {product.name}
            </Link>
          ))}
        </div>
        
        <Link href="/" className="text-blue-600 hover:text-blue-800">
          ← Back to Home
        </Link>
      </div>
    </div>
  )
}