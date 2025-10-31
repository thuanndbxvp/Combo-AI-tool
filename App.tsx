
import React, { useState } from 'react';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { HomePage } from './pages/HomePage';
import { Modal } from './components/Modal';
import type { Tool } from './types';

const App: React.FC = () => {
  const [activeTool, setActiveTool] = useState<Tool | null>(null);

  const handleShowDetails = (tool: Tool) => {
    setActiveTool(tool);
    document.body.style.overflow = 'hidden'; // Prevent background scrolling
  };

  const handleCloseDetails = () => {
    setActiveTool(null);
    document.body.style.overflow = ''; // Restore background scrolling
  };

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100 flex flex-col">
      <div className="absolute top-0 left-0 w-full h-full bg-grid-white/[0.05] [mask-image:linear-gradient(to_bottom,white_5%,transparent_100%)]"></div>
      
      <Header />

      <main className="flex-grow z-10">
        <HomePage onShowDetails={handleShowDetails} />
      </main>

      <Footer />

      <Modal tool={activeTool} onClose={handleCloseDetails} />
    </div>
  );
};

export default App;
