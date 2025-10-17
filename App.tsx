import React, { useState, useMemo } from 'react';
import { ThemeProvider } from './contexts/ThemeContext';
import { RegionProvider } from './contexts/RegionContext';
import Layout from './components/Layout';
import HomePage from './pages/HomePage';
import UsersPage from './pages/UsersPage';
import SamplePluginWidget from './plugins/SamplePluginWidget';

type Page = 'home' | 'users';

const App: React.FC = () => {
  const [activePage, setActivePage] = useState<Page>('home');

  const pageContent = useMemo(() => {
    switch (activePage) {
      case 'home':
        return <HomePage />;
      case 'users':
        return <UsersPage />;
      default:
        return <HomePage />;
    }
  }, [activePage]);

  return (
    <ThemeProvider>
      <RegionProvider>
        {/* Register plugins/components to regions here */}
        <SamplePluginWidget />

        <Layout setActivePage={setActivePage} activePage={activePage}>
          {pageContent}
        </Layout>
      </RegionProvider>
    </ThemeProvider>
  );
};

export default App;
