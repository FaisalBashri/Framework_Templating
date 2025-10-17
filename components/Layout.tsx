import React, { useState } from 'react';
import Header from './Header';
import Footer from './Footer';
import Sidebar from './Sidebar';

interface LayoutProps {
  children: React.ReactNode;
  setActivePage: (page: 'home' | 'users') => void;
  activePage: 'home' | 'users';
}

const Layout: React.FC<LayoutProps> = ({ children, setActivePage, activePage }) => {
  const [isSidebarMinimized, setIsSidebarMinimized] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarMinimized(!isSidebarMinimized);
  };

  return (
    <div className="flex flex-col min-h-screen bg-theme-bg-secondary text-theme-text-base">
      <Header 
        toggleSidebar={toggleSidebar}
      />
      <div className="flex flex-1">
        <Sidebar 
          setActivePage={setActivePage} 
          activePage={activePage}
          isSidebarMinimized={isSidebarMinimized}
        />
        <main className="flex-1 p-6 lg:p-8">
          {children}
        </main>
      </div>
      <Footer />
    </div>
  );
};

export default Layout;