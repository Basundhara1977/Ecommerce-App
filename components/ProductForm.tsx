'use client';

import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useStore } from '@/store';

const schema = z.object({
  title: z.string().min(2),
  price: z.string(),
  description: z.string(),
  category: z.string(),
  image: z.string().url()
});

export default function ProductForm() {
  const { register, handleSubmit, reset, formState: { errors } } = useForm({
    resolver: zodResolver(schema)
  });

  const addMockProduct = useStore(state => state.addMockProduct);

  const onSubmit = (data) => {
    addMockProduct(data); // Add product to Zustand
    reset(); // Clear form
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="mt-8 max-w-md mx-auto border p-4 rounded shadow">
      <h2 className="text-lg font-bold mb-4">Add New Product (Mock)</h2>

      <input
        className="border p-2 rounded w-full mb-2"
        placeholder="Title"
        {...register('title')}
      />
      <p className="text-red-500 text-sm">{errors.title?.message}</p>

      <input
        className="border p-2 rounded w-full mb-2"
        placeholder="Price"
        {...register('price')}
      />
      <p className="text-red-500 text-sm">{errors.price?.message}</p>

      <input
        className="border p-2 rounded w-full mb-2"
        placeholder="Description"
        {...register('description')}
      />
      <p className="text-red-500 text-sm">{errors.description?.message}</p>

      <input
        className="border p-2 rounded w-full mb-2"
        placeholder="Category"
        {...register('category')}
      />
      <p className="text-red-500 text-sm">{errors.category?.message}</p>

      <input
        className="border p-2 rounded w-full mb-2"
        placeholder="Image URL"
        {...register('image')}
      />
      <p className="text-red-500 text-sm">{errors.image?.message}</p>

      <button
        className="bg-green-600 text-white px-4 py-2 rounded mt-2"
        type="submit"
      >
        Submit
      </button>
    </form>
  );
}
