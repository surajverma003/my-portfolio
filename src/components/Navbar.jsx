import React, { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
    const path = useLocation();
    useEffect(() => { window.scrollTo(0, 0); }, []);

    const items = [
        { path: '/about', label: 'About' },
        { path: '/resume', label: 'Resume' },
        { path: '/portfolio', label: 'Portfolio' },
        { path: '/blog', label: 'Blog' },
        { path: '/contact', label: 'Contact' }
    ];

    return (
        <nav className='navRadius poppins fixed md:absolute top-0 right-0 z-10 w-full md:w-fit uppercase'>
            <ul className='flex justify-center md:justify-start items-center gap-1 sm:gap-2 px-4 sm:px-7 py-4 sm:py-5 bg-white/95 dark:bg-neutral-900/95 border border-teal-200 dark:border-neutral-700 rounded-ee-3xl md:rounded-ee-none md:rounded-se-2xl rounded-bl-3xl'>
                {items.map((item) => {
                    const isActive = path.pathname === item.path;
                    return (
                        <li key={item.path}>
                            <Link to={item.path} className={`relative px-1 sm:px-5 py-2 sm:py-2.5 text-sm :text-base font-semibold transition-all duration-300 block ${isActive ? 'text-teal-600 dark:text-orange-400' : 'text-gray-700 dark:text-neutral-400 hover:text-teal-600 dark:hover:text-orange-400'}`}>
                                {item.label}
                            </Link>
                        </li>
                    );
                })}
            </ul>
        </nav>
    )
}

export default Navbar
