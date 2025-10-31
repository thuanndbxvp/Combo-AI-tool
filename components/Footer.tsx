
import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 z-10">
      <div className="container mx-auto px-6 py-8 text-center text-gray-500">
        <p>&copy; {new Date().getFullYear()} studyai86.online. All rights reserved.</p>
      </div>
    </footer>
  );
};
