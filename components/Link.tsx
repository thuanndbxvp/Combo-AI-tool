
import React from 'react';

interface LinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  to: string;
  children: React.ReactNode;
}

export const Link: React.FC<LinkProps> = ({ to, children, ...props }) => {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    // allow ctrl+click or meta+click to open in a new tab
    if (e.metaKey || e.ctrlKey) {
      return;
    }
    
    e.preventDefault();
    window.history.pushState({}, '', to);
    // Dispatch a popstate event to notify the App component of the URL change
    window.dispatchEvent(new PopStateEvent('popstate'));
  };

  return (
    <a href={to} onClick={handleClick} {...props}>
      {children}
    </a>
  );
};
