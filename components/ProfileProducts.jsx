'use client';
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import deleteProduct from '@/app/actions/deleteProduct';


const ProfileProducts = ({ products: initialProducts }) => {
  const [products, setProducts] = useState(initialProducts)

  const handleDeleteProduct = async (productId) => {
    const confirmed = window.confirm('Are you sure you want to delete this product?')

    if (!confirmed) return;

    await deleteProduct(productId);

    const updatedProducts = products.filter((product) => product._id !== productId);

    setProducts(updatedProducts);
  }

  return products.map((product) => (
    <div key={product._id} className="mb-10">
      <Link href={`/products/${product._id}`}>
        <Image
          className="h-32 w-full rounded-md object-cover"
          src={product.images[0]}
          width={1000}
          height={200}
          alt="Product 1"
        />
      </Link>
      <div className="mt-2">
        <p className="text-lg font-semibold">{product.name}</p>
        <p className="text-lg font-semibold">{product.sku}</p>
        <p className="text-lg font-semibold">{product.regular}</p>
        <p className="text-lg font-semibold">{product.disc}</p>
      </div>
      <div className="mt-2">
        <Link href={`/products/${product._id}/edit`}
          className="bg-blue-500 text-white px-3 py-3 rounded-md mr-2 hover:bg-blue-600"
        >
          Edit
        </Link>
        <button
          className="bg-red-500 text-white px-3 py-2 rounded-md hover:bg-red-600"
          type="button"
          onClick={() => handleDeleteProduct(product._id)}
        >
          Delete
        </button>
      </div>
    </div>
  ));
}

export default ProfileProducts;