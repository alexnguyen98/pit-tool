import React from 'react';
import Navbar from '../layout/Navbar';

const Layout: React.FC = ({ children }) => {
  return (
    <>
      <div className="flex flex-col min-h-screen h-full leading-normal overflow-x-hidden bg-primary text-accent-5">
        <Navbar />
        <main className="flex-1 flex flex-col px-3 md:px-5">{children}</main>
      </div>
    </>
  );
};

export default Layout;
