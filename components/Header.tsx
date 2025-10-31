
import React from 'react';

export const Header: React.FC = () => {
  return (
    <header className="sticky top-0 z-50 bg-gray-900/50 backdrop-blur-md">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <div className="text-2xl font-bold tracking-wider">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
            StudyAI86
          </span>
        </div>
        <nav>
          <a
            href="#tools"
            className="text-gray-300 hover:text-white transition-colors duration-300 px-4 py-2 rounded-md"
          >
            Công Cụ
          </a>
        </nav>
      </div>
    </header>
  );
};
