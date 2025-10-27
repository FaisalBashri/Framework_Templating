import React, { useEffect, useState, useMemo } from 'react';
import { ProductGrid, ProductFilters } from '../components/UsersTable';
import { getMockProducts } from '../services/dataService';
import { Product } from '../types';
import { exportToCsv, exportToJson } from '../services/exportService';

interface ProductsPageProps {
  onProductSelect: (product: Product) => void;
}

const ProductsPage: React.FC<ProductsPageProps> = ({ onProductSelect }) => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [filters, setFilters] = useState({ brand: 'All', size: 'All', price: 1000 });
  const [sort, setSort] = useState('default');

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        const product_data = await getMockProducts();
        setProducts(product_data);
      } catch (error) {
        console.error("Failed to fetch products", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  const filteredAndSortedProducts = useMemo(() => {
    let result = products;

    // Filtering
    if (filters.brand !== 'All') {
      result = result.filter(p => p.brand === filters.brand);
    }
    if (filters.size !== 'All') {
      result = result.filter(p => p.sizes.includes(Number(filters.size)));
    }
    result = result.filter(p => p.price <= filters.price);

    // Sorting
    if (sort === 'price-asc') {
      result.sort((a, b) => a.price - b.price);
    } else if (sort === 'price-desc') {
      result.sort((a, b) => b.price - a.price);
    }
    
    return result;
  }, [products, filters, sort]);

  const handleCsvExport = () => {
    exportToCsv('products.csv', filteredAndSortedProducts);
  };

  const handleJsonExport = () => {
    exportToJson('products.json', filteredAndSortedProducts);
  };

  if (loading) {
    return (
        <div className="flex justify-center items-center h-64">
            <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-theme-primary"></div>
        </div>
    )
  }

  return (
    <div className="flex gap-8">
      <aside className="w-1/4">
        <ProductFilters products={products} filters={filters} setFilters={setFilters} />
      </aside>
      <div className="w-3/4">
        <div className="bg-theme-bg-primary shadow-lg rounded-xl p-4 sm:p-6 mb-6 flex justify-between items-center">
          <h2 className="text-xl font-semibold text-theme-text-base">All Shoes ({filteredAndSortedProducts.length})</h2>
          <div className="flex items-center space-x-4">
            <select value={sort} onChange={(e) => setSort(e.target.value)} className="bg-theme-bg-tertiary border border-theme-border rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-theme-primary">
              <option value="default">Default Sort</option>
              <option value="price-asc">Price: Low to High</option>
              <option value="price-desc">Price: High to Low</option>
            </select>
            <div className="flex space-x-2">
              <button onClick={handleCsvExport} className="px-4 py-2 text-sm font-medium text-white bg-theme-primary hover:bg-theme-primary-hover rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-theme-primary">Export CSV</button>
              <button onClick={handleJsonExport} className="px-4 py-2 text-sm font-medium text-theme-text-base bg-theme-bg-tertiary hover:opacity-90 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-theme-primary">Export JSON</button>
            </div>
          </div>
        </div>
        <ProductGrid products={filteredAndSortedProducts} onProductSelect={onProductSelect} />
      </div>
    </div>
  );
};

export default ProductsPage;