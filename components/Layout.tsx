import React, { useState } from 'react';
import Header from './Header';
import Footer from './Footer';
import Sidebar from './Sidebar';

interface LayoutProps {
  children: React.ReactNode;
  setActivePage: (page: 'home' | 'products' | 'cart' | 'productDetail' | 'wishlist') => void;
  activePage: 'home' | 'products' | 'cart' | 'productDetail' | 'wishlist';
}

const Layout: React.FC<LayoutProps> = ({ children, setActivePage, activePage }) => {
  const [isSidebarMinimized, setIsSidebarMinimized] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarMinimized(!isSidebarMinimized);
  };

  return (
    <div className="flex flex-col h-screen bg-theme-bg-secondary text-theme-text-base overflow-hidden">
      <Header 
        toggleSidebar={toggleSidebar}
        setActivePage={setActivePage}
      />
      <div className="flex flex-1 overflow-hidden">
        <Sidebar 
          setActivePage={setActivePage} 
          activePage={activePage}
          isSidebarMinimized={isSidebarMinimized}
        />
        <main className="flex-1 p-6 lg:p-8 overflow-y-auto">
          {children}
          <Footer />
        </main>
      </div>
    </div>
  );
};

export default Layout;