import React from 'react';
import ThemeSwitcher from './ThemeSwitcher';
import { useCart } from '../hooks/useRegions';
import { useWishlist } from '../hooks/useRegions';

const HamburgerIcon = () => (
    <svg xmlns= "http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
    </svg>
);

const CartIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
    </svg>
);

const WishlistIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 016.364 0L12 7.662l1.318-1.344a4.5 4.5 0 116.364 6.364L12 20.348l-7.682-7.682a4.5 4.5 0 010-6.348z" />
    </svg>
);

interface HeaderProps {
    toggleSidebar: () => void;
    setActivePage: (page: 'home' | 'products' | 'cart' | 'productDetail' | 'wishlist') => void;
}

const Header: React.FC<HeaderProps> = ({ toggleSidebar, setActivePage }) => {
  const { getCartItemCount } = useCart();
  const { getWishlistItemCount } = useWishlist();
  const cartItemCount = getCartItemCount();
  const wishlistItemCount = getWishlistItemCount();

  return (
    <header className="flex items-center justify-between p-4 bg-theme-bg-primary shadow-md">
      <div className="flex items-center">
        <button 
          onClick={toggleSidebar} 
          className="p-2 rounded-md text-theme-text-muted hover:bg-theme-bg-tertiary focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-theme-primary mr-4"
          aria-label="Toggle sidebar"
        >
          <HamburgerIcon />
        </button>
        <div className="flex items-center space-x-2">
            <svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 29.93 64.06" className="h-10 w-auto text-theme-primary" fill="currentColor">
              <polygon points="29.93 38.78 25.78 33.15 23.17 35.08 23.16 35.09 28.99 6.06 28.99 6.06 25.49 0 0 14.72 2.21 21.52 20.91 10.73 20.91 10.73 14.79 41.26 14.78 41.26 9.81 44.92 12.09 51.93 21.12 45.28 29.93 38.78"/>
              <polygon points="13.85 57.36 16.03 64.06 23.08 64.06 25.26 57.36 19.55 53.21 13.85 57.36"/>
            </svg>
            <h1 className="text-2xl font-bold text-theme-text-base">OneDering</h1>
        </div>
      </div>
      <div className="flex-1 flex justify-center px-8">
        <div className="relative w-full max-w-lg">
          <input type="search" placeholder="Search for shoes..." className="w-full pl-10 pr-4 py-2 rounded-full bg-theme-bg-tertiary text-theme-text-base border border-transparent focus:border-theme-primary focus:ring-1 focus:ring-theme-primary focus:outline-none transition" />
          <div className="absolute left-3 top-1/2 -translate-y-1/2 text-theme-text-muted">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
          </div>
        </div>
      </div>
      <div className="flex items-center space-x-2">
        <button
          onClick={() => setActivePage('wishlist')}
          className="relative p-2 rounded-full text-theme-text-muted hover:bg-theme-bg-tertiary focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-theme-primary"
          aria-label="View Wishlist"
        >
          <WishlistIcon />
          {wishlistItemCount > 0 && (
            <span className="absolute top-0 right-0 flex h-5 w-5 items-center justify-center rounded-full bg-theme-primary text-xs font-bold text-white">
              {wishlistItemCount}
            </span>
          )}
        </button>
        <button
          onClick={() => setActivePage('cart')}
          className="relative p-2 rounded-full text-theme-text-muted hover:bg-theme-bg-tertiary focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-theme-primary"
          aria-label="View Cart"
        >
          <CartIcon />
          {cartItemCount > 0 && (
            <span className="absolute top-0 right-0 flex h-5 w-5 items-center justify-center rounded-full bg-theme-primary text-xs font-bold text-white">
              {cartItemCount}
            </span>
          )}
        </button>
        <ThemeSwitcher />
      </div>
    </header>
  );
};

export default Header;