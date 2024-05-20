import React from 'react';
import Link from 'next/link';

const Navbar: React.FC = () => {
    return (
        <nav className='w-full text-md shadow-2xl sticky p-4 flex justify-between'>
            <div>
                <Link className="hover:text-red-600" href="/">bakshionfilms</Link>
            </div>
            <div className="flex gap-4">
                <Link className='hover:text-sky-600' href="/gallery">Gallery</Link>
                <Link className='hover:text-sky-600' href="/achievements">Achievements</Link>
                <Link className='hover:text-sky-600' href="/reviews">Reviews</Link>
                <Link className='font-bold hover:text-sky-600 hover:underline' href="/hireme">Hire Me!</Link>
            </div>
        </nav>
    );
};

export default Navbar;