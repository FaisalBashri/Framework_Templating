import React from 'react';
import Region from './Region';

interface SidebarProps {
  setActivePage: (page: 'home' | 'products' | 'cart' | 'productDetail' | 'wishlist') => void;
  activePage: 'home' | 'products' | 'cart' | 'productDetail' | 'wishlist';
  isSidebarMinimized: boolean;
}

const NavLink: React.FC<{
  onClick: () => void;
  isActive: boolean;
  children: React.ReactNode;
  icon: React.ReactNode;
  isMinimized: boolean;
}> = ({ onClick, isActive, children, icon, isMinimized }) => (
    <button
        onClick={onClick}
        aria-label={String(children)}
        className={`w-full flex items-center px-4 py-3 text-left font-medium transition-colors duration-200 rounded-lg ${isMinimized ? 'justify-center' : ''} ${
            isActive
                ? 'bg-theme-primary text-theme-text-inverted'
                : 'text-theme-text-base hover:bg-theme-bg-tertiary'
        }`}
    >
        <span className={!isMinimized ? "mr-3" : ""}>{icon}</span>
        <span className={isMinimized ? 'sr-only' : 'inline'}>{children}</span>
    </button>
);

const HomeIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
    </svg>
);

const ProductsIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
    </svg>
);

const CartIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
    </svg>
);

const WishlistIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 016.364 0L12 7.662l1.318-1.344a4.5 4.5 0 116.364 6.364L12 20.348l-7.682-7.682a4.5 4.5 0 010-6.348z" />
    </svg>
);


const Sidebar: React.FC<SidebarProps> = ({ setActivePage, activePage, isSidebarMinimized }) => {
  return (
    <aside className={`flex flex-col flex-shrink-0 bg-theme-bg-primary p-4 shadow-lg transition-all duration-300 ease-in-out overflow-y-auto ${isSidebarMinimized ? 'w-20' : 'w-64'}`}>
      <div className="flex-1">
        <nav>
          <ul className="space-y-2">
            <li>
              <NavLink onClick={() => setActivePage('home')} isActive={activePage === 'home'} icon={<HomeIcon/>} isMinimized={isSidebarMinimized}>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink onClick={() => setActivePage('products')} isActive={activePage === 'products' || activePage === 'productDetail'} icon={<ProductsIcon/>} isMinimized={isSidebarMinimized}>
                Products
              </NavLink>
            </li>
             <li>
              <NavLink onClick={() => setActivePage('wishlist')} isActive={activePage === 'wishlist'} icon={<WishlistIcon/>} isMinimized={isSidebarMinimized}>
                Wishlist
              </NavLink>
            </li>
            <li>
              <NavLink onClick={() => setActivePage('cart')} isActive={activePage === 'cart'} icon={<CartIcon/>} isMinimized={isSidebarMinimized}>
                Shopping Cart
              </NavLink>
            </li>
          </ul>
        </nav>
        <div className={`border-t border-theme-border pt-6 mt-6 ${isSidebarMinimized ? 'space-y-2' : 'space-y-6'}`}>
          <h3 className={`px-4 text-xs font-semibold text-theme-text-muted uppercase tracking-wider ${isSidebarMinimized ? 'sr-only' : 'block'}`}>Promotions</h3>
          <div className="mt-2 space-y-2">
            <Region name="sidebar" isSidebarMinimized={isSidebarMinimized} />
          </div>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;