import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const layout = ({ children }) => {
    return (
        <div className=''>
            <div className='grid grid-cols-12  min-h-screen gap-5 '>
                <div className='col-span-3 h-full bg-amber-200 p-5 text-black'>
                    
                           <Link href="/">
  <Image
    src="/next.svg"
    alt="Logo"
    height={40} // you need height for next/image
    width={150}

  />
</Link>

                    <ul>
                        <li className='my-3'><Link href="/dashboard">Dashboard Home</Link></li>
                        <li className='my-3'><Link href="/dashboard/add-story">Profile</Link></li>
                        <li className='my-3'><Link href="/dashboard/settings">Settings</Link></li>
                     
                    </ul>
                </div>
                <div className='col-span-9 p-5'>{children}</div>


            </div>
          
        </div>
    );
};

export default layout;