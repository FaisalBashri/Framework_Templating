import React from 'react';
import { Product } from '../types';
import { useCart } from '../hooks/useRegions';
import { useWishlist } from '../hooks/useRegions';
import { formatCurrency } from '../services/exportService';

// LikeButton Component
const LikeButton: React.FC<{ productId: number; className?: string }> = ({ productId, className }) => {
    const { isProductInWishlist, addToWishlist, removeFromWishlist } = useWishlist();
    const isLiked = isProductInWishlist(productId);

    const toggleWishlist = (e: React.MouseEvent) => {
        e.stopPropagation();
        if (isLiked) {
            removeFromWishlist(productId);
        } else {
            addToWishlist(productId);
        }
    };

    return (
        <button
            onClick={toggleWishlist}
            aria-label={isLiked ? "Remove from wishlist" : "Add to wishlist"}
            className={`p-2 rounded-full transition-colors duration-200 ${className}`}
        >
            {isLiked ? (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-red-500" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
                </svg>
            ) : (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 016.364 0L12 7.662l1.318-1.344a4.5 4.5 0 116.364 6.364L12 20.348l-7.682-7.682a4.5 4.5 0 010-6.348z" />
                </svg>
            )}
        </button>
    );
};


// ProductCard Component
interface ProductCardProps {
    product: Product;
    onProductSelect: (product: Product) => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product, onProductSelect }) => {
    const { addToCart } = useCart();
    return (
        <div 
            onClick={() => onProductSelect(product)}
            className="group relative bg-theme-bg-primary shadow-lg rounded-xl overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 cursor-pointer"
        >
            <div className="absolute top-2 right-2 z-10 bg-theme-bg-primary/50 backdrop-blur-sm rounded-full opacity-0 group-hover:opacity-100 transition-opacity">
                <LikeButton productId={product.id} />
            </div>
            <div className="h-48 overflow-hidden">
                <img src={product.image} alt={product.name} className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110" />
            </div>
            <div className="p-4">
                <p className="text-sm text-theme-text-muted">{product.brand}</p>
                <h3 className="font-bold text-lg text-theme-text-base truncate">{product.name}</h3>
                <p className="font-semibold text-theme-primary text-xl mt-2">{formatCurrency(product.price)}</p>
            </div>
            <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-theme-bg-primary/90 to-transparent translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out">
                 <button 
                    onClick={(e) => {
                        e.stopPropagation();
                        addToCart(product);
                    }} 
                    className="w-full py-2 font-bold text-white bg-theme-primary hover:bg-theme-primary-hover rounded-lg">
                    Add to Cart
                </button>
            </div>
        </div>
    )
}

// ProductGrid Component
interface ProductGridProps {
  products: Product[];
  onProductSelect: (product: Product) => void;
}

export const ProductGrid: React.FC<ProductGridProps> = ({ products, onProductSelect }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} onProductSelect={onProductSelect} />
      ))}
    </div>
  );
};

// ProductFilters Component
interface ProductFiltersProps {
    products: Product[];
    filters: { brand: string, size: string, price: number };
    setFilters: React.Dispatch<React.SetStateAction<{ brand: string, size: string, price: number }>>;
}

export const ProductFilters: React.FC<ProductFiltersProps> = ({ products, filters, setFilters }) => {
    const brands = ['All', ...Array.from(new Set(products.map(p => p.brand)))];
    const sizes = ['All', ...Array.from(new Set(products.flatMap(p => p.sizes)))].sort((a,b) => (a === 'All' ? -1 : b === 'All' ? 1 : Number(a) - Number(b)));
    const maxPrice = Math.ceil(Math.max(...products.map(p => p.price)) / 10) * 10;

    const handleFilterChange = (e: React.ChangeEvent<HTMLSelectElement | HTMLInputElement>) => {
        const { name, value } = e.target;
        setFilters(prev => ({...prev, [name]: name === 'price' ? Number(value) : value}));
    };

    return (
        <div className="bg-theme-bg-primary shadow-lg rounded-xl p-6 space-y-6">
            <h3 className="text-xl font-bold text-theme-text-base">Filters</h3>
            <div>
                <label htmlFor="brand" className="block text-sm font-medium text-theme-text-muted mb-2">Brand</label>
                <select id="brand" name="brand" value={filters.brand} onChange={handleFilterChange} className="w-full bg-theme-bg-tertiary border border-theme-border rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-theme-primary">
                    {brands.map(b => <option key={b} value={b}>{b}</option>)}
                </select>
            </div>
            <div>
                <label htmlFor="size" className="block text-sm font-medium text-theme-text-muted mb-2">Size (US)</label>
                <select id="size" name="size" value={filters.size} onChange={handleFilterChange} className="w-full bg-theme-bg-tertiary border border-theme-border rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-theme-primary">
                    {sizes.map(s => <option key={s} value={s}>{s}</option>)}
                </select>
            </div>
            <div>
                <label htmlFor="price" className="block text-sm font-medium text-theme-text-muted mb-2">Price Range</label>
                <input type="range" id="price" name="price" min="0" max={maxPrice} value={filters.price} onChange={handleFilterChange} className="w-full h-2 bg-theme-bg-tertiary rounded-lg appearance-none cursor-pointer accent-theme-primary" />
                <div className="text-right text-sm text-theme-text-base mt-1">Up to {formatCurrency(filters.price)}</div>
            </div>
        </div>
    )
}