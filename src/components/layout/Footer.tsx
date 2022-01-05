import Link from 'next/link';
import React from 'react';
import Github from '../icons/Github';

const Footer: React.FC = () => (
  <footer className="flex justify-center py-3 text-accent-3">
    {/* <a href="https://github.com/alexnguyen98/pit-tool" className="flex items-center">
      <Github className="w-4 mr-1 fill-current" />
      Github
    </a> */}
    <Link href="/help">Help</Link>
  </footer>
);

export default Footer;
