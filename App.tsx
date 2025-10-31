
import React from 'react';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { tools } from './constants';
import { HomePage } from './pages/HomePage';
import { ToolDetailPage } from './pages/ToolDetailPage';

const App: React.FC = () => {
  const path = window.location.pathname;

  const renderPage = () => {
    if (path.startsWith('/tool/')) {
      const slug = path.split('/')[2];
      const tool = tools.find(t => t.slug === slug);
      if (tool) {
        return <ToolDetailPage tool={tool} />;
      }
      // TODO: Add a 404 Not Found page for better UX
    }
    
    // Default to home page for root path or any unhandled paths
    return <HomePage />;
  };

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100 flex flex-col">
      <div className="absolute top-0 left-0 w-full h-full bg-grid-white/[0.05] [mask-image:linear-gradient(to_bottom,white_5%,transparent_100%)]"></div>
      
      <Header />

      <main className="flex-grow z-10">
        {renderPage()}
      </main>

      <Footer />
    </div>
  );
};

export default App;
