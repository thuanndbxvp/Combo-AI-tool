import React from 'react';

export const Header: React.FC = () => {
  return (
    <header className="sticky top-0 z-50 bg-gray-900/50 backdrop-blur-md h-6">
      <div className="container mx-auto px-6 h-full flex items-center">
        {/* Logo has been removed from the header as per user request to avoid duplication. */}
      </div>
    </header>
  );
};