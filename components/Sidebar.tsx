import React from 'react';
import Region from './Region';

interface SidebarProps {
  setActivePage: (page: 'home' | 'users') => void;
  activePage: 'home' | 'users';
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
                ? 'bg-primary-500 text-white'
                : 'text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
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

const UsersIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M15 21a6 6 0 00-9-5.197M15 21a6 6 0 006-5.197M12 12a4 4 0 110-8 4 4 0 010 8z" />
    </svg>
);

const Sidebar: React.FC<SidebarProps> = ({ setActivePage, activePage, isSidebarMinimized }) => {
  return (
    <aside className={`flex flex-col flex-shrink-0 bg-white dark:bg-gray-800 p-4 shadow-lg transition-all duration-300 ease-in-out ${isSidebarMinimized ? 'w-20' : 'w-64'}`}>
      <div className="flex-1">
        <nav>
          <ul className="space-y-2">
            <li>
              <NavLink onClick={() => setActivePage('home')} isActive={activePage === 'home'} icon={<HomeIcon/>} isMinimized={isSidebarMinimized}>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink onClick={() => setActivePage('users')} isActive={activePage === 'users'} icon={<UsersIcon/>} isMinimized={isSidebarMinimized}>
                User Management
              </NavLink>
            </li>
          </ul>
        </nav>
        <div className={`border-t border-gray-200 dark:border-gray-700 pt-6 mt-6 ${isSidebarMinimized ? 'space-y-2' : 'space-y-6'}`}>
          <h3 className={`px-4 text-xs font-semibold text-gray-500 uppercase tracking-wider ${isSidebarMinimized ? 'sr-only' : 'block'}`}>Plugins</h3>
          <div className="mt-2 space-y-2">
            <Region name="sidebar" isSidebarMinimized={isSidebarMinimized} />
          </div>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;