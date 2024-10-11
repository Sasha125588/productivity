import React from 'react';

export const Layout = ({children, className}: {children: React.ReactNode, className?: string}) => (
  <div className={`bg-[#F5F8FF] w-[screen] h-screen ${className}`}>
    {children}
  </div>
);