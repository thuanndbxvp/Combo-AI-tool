import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 z-10">
      <div className="container mx-auto px-6 py-8 text-center text-gray-500">
        <div className="flex flex-col sm:flex-row justify-center items-center gap-x-4 gap-y-2">
            <p>&copy; {new Date().getFullYear()} studyai86.online. All rights reserved.</p>
            <span className="hidden sm:inline">|</span>
            <a
              href="https://www.facebook.com/deshunvn/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 hover:text-white transition-colors duration-300"
            >
              <i className="fab fa-facebook-f"></i>
              <span>Liên hệ</span>
            </a>
        </div>
      </div>
    </footer>
  );
};
