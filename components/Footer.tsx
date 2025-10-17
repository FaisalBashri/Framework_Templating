
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="p-4 text-center text-sm text-gray-500 dark:text-gray-400 bg-white dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700">
      © {new Date().getFullYear()} ModularApp Inc. All rights reserved.
    </footer>
  );
};

export default Footer;
