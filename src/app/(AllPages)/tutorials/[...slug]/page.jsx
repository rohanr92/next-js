'use client';
import { usePathname } from 'next/navigation';

import React from 'react';

const Tutors = () => {
    const path = usePathname();
    console.log(path);
    
    return (
        <div>
            
        </div>
    );
};

export default Tutors;