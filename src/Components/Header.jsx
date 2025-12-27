'use client';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React, { use } from 'react';
// import Logo from '../public/next.svg';

const Header = () => {
  const path = usePathname();

  if (path.includes('/dashboard')) {
    return null;
  }

  
    return (
        <div className='flex justify-between items-center p-4 bg-amber-200 text-black'>
          <Link href="/">
  <Image
    src="/next.svg"
    alt="Logo"
    width={100}
    height={40} // you need height for next/image
  />
</Link>
        <nav>
            

            <ul className='flex gap-x-4'>
                <li><Link href="/">Home</Link></li>
                <li><Link href="/about">About</Link></li>
                <li><Link href="/services">Services</Link></li>
                <li><Link href="/contact">Contact</Link></li>
                <li><Link href="/story">Story</Link></li>
            </ul>
        </nav>
            
        </div>
    );
};

export default Header;