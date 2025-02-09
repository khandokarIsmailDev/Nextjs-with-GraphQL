import React from 'react'
import Social from './Social';
import Link from 'next/link';

export default function Header() {
  return (
    <header className='flex justify-between items-center px-8 py-4 text-white bg-[#020617]'>
      <h1 className='text-lg font-bold'>IsBlog</h1>
      <nav className='flex space-x-6'>
        <Link href="/">Home</Link>
        <Link href="/blog">Blog</Link>
        <Link href="/about">About</Link>
      </nav>
      <div className='flex items-center space-x-4'>
        <Social/>
        <button className='px-4 py-2 border rounded'>Sign Up</button>
      </div>
    </header>
  )
}
