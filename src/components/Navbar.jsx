import React, { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
    const path = useLocation();

    useEffect(()=>{
        window.scrollTo(0,0);
      },[])

    return (
        <ul id='list' className='navRadius poppins fixed md:absolute top-0 right-0 z-10 flex justify-center md:justify-start items-center gap-3 sm:gap-8 px-7 py-5 bg-[#2b2b2cbf] border border-neutral-700 w-full md:w-fit backdrop-blur-lg md:backdrop-blur-none'>

            <Link to="/about"><li className={`text-sm sm:text-[16px] ${path.pathname === '/about' ? 'text-[#ffdb70]' : 'text-neutral-400'} ${path.pathname === '/about' ? 'hover:text-[#ffdb70b4]' : 'hover:text-white'} w-fit transition-all`}>About</li></Link>

            <Link to="/resume"><li className={`text-sm sm:text-[16px] ${path.pathname === '/resume' ? 'text-[#ffdb70]' : 'text-neutral-400'} ${path.pathname === '/resume' ? 'hover:text-[#ffdb70b4]' : 'hover:text-white'} w-fit transition-all`}>Resume</li></Link>

            <Link to="/portfolio"><li className={`text-sm sm:text-[16px] ${path.pathname === '/portfolio' ? 'text-[#ffdb70]' : 'text-neutral-400'} ${path.pathname === '/portfolio' ? 'hover:text-[#ffdb70b4]' : 'hover:text-white'} w-fit transition-all`}>Portfolio</li></Link>

            <Link to="/blog"><li className={`text-sm sm:text-[16px] ${path.pathname === '/blog' ? 'text-[#ffdb70]' : 'text-neutral-400'} ${path.pathname === '/blog' ? 'hover:text-[#ffdb70b4]' : 'hover:text-white'} w-fit transition-all`}>Blog</li></Link>

            <Link to="/contact"><li className={`text-sm sm:text-[16px] ${path.pathname === '/contact' ? 'text-[#ffdb70]' : 'text-neutral-400'} ${path.pathname === '/contact' ? 'hover:text-[#ffdb70b4]' : 'hover:text-white'} w-fit transition-all`}>Contact</li></Link>
        </ul>
    )
}

export default Navbar
