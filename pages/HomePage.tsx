
import React from 'react';

const HomePage: React.FC = () => {
  return (
    <div className="bg-white dark:bg-gray-800 shadow-lg rounded-xl p-8">
      <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Welcome to the Modular React Application</h1>
      <p className="text-gray-600 dark:text-gray-300 mb-6">
        This application is a demonstration of architectural concepts from backend templating systems, implemented in a modern React SPA.
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="p-6 bg-gray-50 dark:bg-gray-700 rounded-lg">
          <h2 className="text-xl font-semibold mb-2 text-primary-600 dark:text-primary-400">Layout & Partials</h2>
          <p>The entire UI is structured using a main `Layout` component which includes reusable "partials" like the Header, Sidebar, and Footer.</p>
        </div>
        <div className="p-6 bg-gray-50 dark:bg-gray-700 rounded-lg">
          <h2 className="text-xl font-semibold mb-2 text-primary-600 dark:text-primary-400">Theme System</h2>
          <p>You can switch between light and dark themes using the icon in the header. This is managed by a `ThemeContext` and implemented with Tailwind CSS.</p>
        </div>
        <div className="p-6 bg-gray-50 dark:bg-gray-700 rounded-lg">
          <h2 className="text-xl font-semibold mb-2 text-primary-600 dark:text-primary-400">Area/Region System</h2>
          <p>The sidebar contains a dynamic "Region". Components can register themselves into this area, simulating a plugin system. See the "Sample Plugin Widget" example.</p>
        </div>
        <div className="p-6 bg-gray-50 dark:bg-gray-700 rounded-lg">
          <h2 className="text-xl font-semibold mb-2 text-primary-600 dark:text-primary-400">Client-Side Exports</h2>
          <p>Navigate to the "User Management" page to see a table of data that can be exported to CSV or JSON directly from the browser.</p>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
