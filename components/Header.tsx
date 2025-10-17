import React from 'react';
import ThemeSwitcher from './ThemeSwitcher';

const HamburgerIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
    </svg>
);

interface HeaderProps {
    toggleSidebar: () => void;
}

const Header: React.FC<HeaderProps> = ({ toggleSidebar }) => {
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
      <ThemeSwitcher />
    </header>
  );
};

export default Header;