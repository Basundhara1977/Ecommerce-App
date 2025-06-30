import { useQuery } from '@tanstack/react-query'
import { useEffect, useState } from 'react'
import ProductCard from '@/components/ProductCard'
import ProductModal from '@/components/ProductModal'
import SearchFilter from '@/components/SearchFilter'
import CartIcon from '@/components/CartIcon'
import { useStore } from '@/store'

export default function Home() {
  const [selectedProduct, setSelectedProduct] = useState(null)
  const { search, category } = useStore()

  const { data: products, isLoading } = useQuery({
    queryKey: ['products'],
    queryFn: () => fetch('https://fakestoreapi.com/products').then(res => res.json())
  })

  const filtered = products?.filter(p =>
    p.title.toLowerCase().includes(search.toLowerCase()) &&
    (category ? p.category === category : true)
  )

  return (
    <div className="p-4">
      <SearchFilter />
      <CartIcon />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
        {isLoading ? 'Loading...' : filtered?.map(product => (
          <ProductCard key={product.id} product={product} onClick={() => setSelectedProduct(product)} />
        ))}
      </div>
      {selectedProduct && <ProductModal product={selectedProduct} onClose={() => setSelectedProduct(null)} />}
    </div>
  )
}
