import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="p-4 text-center text-sm text-theme-text-muted bg-theme-bg-primary border-t border-theme-border">
      © {new Date().getFullYear()} OneDering. All rights reserved.
    </footer>
  );
};

export default Footer;