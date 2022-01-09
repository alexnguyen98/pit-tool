import React from 'react';
import Link from 'next/link';
import dynamic from 'next/dynamic';
import Logo from '../icons/Logo';

const ThemeToggle = dynamic(() => import('../utils/ThemeToggle'), {
  ssr: false,
});

const Navbar: React.FC = () => {
  return (
    <header>
      <nav className="px-5 py-3 flex items-center">
        <Link href="/">
          <a className="flex items-center text-blue-700">
            <Logo className="w-8 mr-1" />
            Quiz tool
          </a>
        </Link>
        <div className="ml-auto text-sm text-accent-3">
          <ThemeToggle />
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
