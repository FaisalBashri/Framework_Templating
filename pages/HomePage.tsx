import React, { useEffect, useState } from 'react';
import { getMockProducts } from '../services/dataService';
import { Product } from '../types';
import { ProductCard } from '../components/UsersTable'; // Re-using UsersTable file for Product components

interface HomePageProps {
  onProductSelect: (product: Product) => void;
}

const HomePage: React.FC<HomePageProps> = ({ onProductSelect }) => {
  const [featured, setFeatured] = useState<Product[]>([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const allProducts = await getMockProducts();
      // Feature the first 4 products for this demo
      setFeatured(allProducts.slice(0, 4));
    };
    fetchProducts();
  }, []);

  return (
    <div className="space-y-12">
      {/* Hero Section */}
      <div className="bg-theme-bg-primary shadow-lg rounded-xl p-8 md:p-12 flex flex-col md:flex-row items-center gap-8">
        <div className="flex-1 text-center md:text-left">
          <h1 className="text-4xl md:text-6xl font-extrabold text-theme-text-base mb-4 leading-tight">
            Step Into Style
          </h1>
          <p className="text-lg text-theme-text-muted mb-8">
            Discover the latest trends and timeless classics. The perfect pair of shoes awaits you.
          </p>
          <button className="px-8 py-4 text-lg font-bold text-white bg-theme-primary hover:bg-theme-primary-hover rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-theme-primary shadow-lg transform hover:scale-105 transition-transform">
            Shop Latest Shoes
          </button>
        </div>
        <div className="flex-1">
          <img src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=2070&auto=format&fit=crop" 
               alt="Featured Shoe" 
               className="rounded-xl shadow-2xl w-full h-auto object-cover" />
        </div>
      </div>
      
      {/* Featured Products Section */}
      <div>
        <h2 className="text-3xl font-bold text-theme-text-base mb-6">Featured Products</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featured.map(product => (
                <ProductCard key={product.id} product={product} onProductSelect={onProductSelect} />
            ))}
        </div>
      </div>
    </div>
  );
};

export default HomePage;