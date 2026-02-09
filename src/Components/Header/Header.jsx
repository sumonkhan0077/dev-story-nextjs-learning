import Link from 'next/link';
import React from 'react';

const Header = () => {
    return (
        <div>
            <h1 className='text-2xl font-semibold text-center py-5 '>welcome to our shop 👌 </h1>
            <div  className='flex justify-between'>
                <Link href="/" className='font-black text-2xl'>Next.js</Link>
                <nav className='space-x-2'>
                    <Link href="/about">About</Link>
                    <Link href="/login">Login</Link>
                    <Link href="/dashboard">Dashboard</Link>
                    <Link href="/tutorial">Tutorial</Link>
                </nav>
            </div>
        </div>

);
};

export default Header;