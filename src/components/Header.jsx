import { Icon } from '@iconify/react/dist/iconify.js';
import React, { useState } from 'react';

const Header = () => {
    const [toggle, setToggle] = useState('-top-[-1]');

    return (
        <>
            <div className="max-w-screen-lg mx-auto lg:hidden">
                <span onClick={() => setToggle(!toggle)} className='absolute right-2 top-1 bg-red-700 text-white p-1 rounded-md'>
                    <Icon icon="mdi:hamburger-menu" width="30" height="30"></Icon>
                </span>
            </div>

            <header className={`poppins transition-all absolute lg:relative ${toggle ? '-top-[100%]' : '-top-[-1%]'} left-2 lg:left-0`}>
                <div className="max-w-screen-lg mx-auto flex justify-between items-center flex-col lg:flex-row  bg-slate-700 lg:bg-transparent text-white lg:text-black p-10 lg:px-5 lg:py-2.5 rounded-xl">
                    <img className='w-20 select-none' src="https://i.ibb.co/PhPRQ8f/hd-yellow-nike-logo-png-701751694777161707wuz5lyy-removebg-preview.png" alt="" />

                    <ul className='flex justify-between items-start gap-4 flex-col lg:flex-row text-white' id="list">
                        <li className='select-none hover:text-white/70'>Menu</li>
                        <li className='select-none hover:text-white/70'>Location</li>
                        <li className='select-none hover:text-white/70'>About</li>
                        <li className='select-none hover:text-white/70'>Contact</li>
                    </ul>

                    <button type="button" className='bg-red-600 hover:bg-red-500 active:bg-red-600 text-white p-2.5 px-4 my-7'>Login</button>
                </div>
            </header>
        </>
    )
}

export default Header
