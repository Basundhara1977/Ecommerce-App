// components/SearchFilter.tsx
import { useStore } from '@/store';
import { useQuery } from '@tanstack/react-query';

export default function SearchFilter() {
  const { search, setSearch, category, setCategory } = useStore();
  const { data: categories } = useQuery({
    queryKey: ['categories'],
    queryFn: () => fetch('https://fakestoreapi.com/products/categories').then(res => res.json())
  });

  return (
    <div className="flex flex-col sm:flex-row justify-between mb-4 gap-2">
      <input
        className="border p-2 rounded w-full sm:w-1/2"
        placeholder="Search products"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <select
        className="border p-2 rounded w-full sm:w-1/4"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
      >
        <option value="">All Categories</option>
        {categories?.map(cat => (
          <option key={cat} value={cat}>{cat}</option>
        ))}
      </select>
    </div>
  );
}
