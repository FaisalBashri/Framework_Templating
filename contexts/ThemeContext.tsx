
import React, { createContext, useState, useEffect, useMemo } from 'react';
import { Theme } from '../types';

interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
}

export const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [theme, setTheme] = useState<Theme>(Theme.Light);

  useEffect(() => {
    const root = window.document.documentElement;
    const isDark = theme === Theme.Dark;
    
    root.classList.remove(isDark ? Theme.Light : Theme.Dark);
    root.classList.add(theme);

    // Also set a background color on the body for better theme transition
    document.body.style.backgroundColor = isDark ? '#111827' : '#f9fafb';
    document.body.className = 'transition-colors duration-300';
    
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === Theme.Light ? Theme.Dark : Theme.Light));
  };
  
  const value = useMemo(() => ({ theme, toggleTheme }), [theme]);

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  );
};
