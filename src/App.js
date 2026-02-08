import './App.css';
import React, { useEffect, useState } from 'react';

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Icon } from '@iconify/react/dist/iconify.js';

import Aside from './reuse/Aside';
import About from './components/About';
import Resume from './components/Resume';
import Portfolio from './components/Portfolio';
import Blog from './components/Blog';
import Contact from './components/Contact';


const App = () => {
    const [isDarkMode, setIsDarkMode] = useState(() => {
        return localStorage.getItem('theme') === 'dark';
    });

    const toggleDarkMode = () => {
        setIsDarkMode(!isDarkMode);

        if (!isDarkMode) {
            document.documentElement.classList.add('dark');
            localStorage.setItem('theme', 'dark');
        } else {
            document.documentElement.classList.remove('dark');
            localStorage.setItem('theme', 'light');
        }
    };

    useEffect(() => {
        const savedTheme = localStorage.getItem('theme');

        if (savedTheme === 'dark') {
            setIsDarkMode(true);
            document.documentElement.classList.add('dark');
        }
    }, []);

    return (
        <>
            {/* Minimal Dark Mode Toggle */}
            <button onClick={toggleDarkMode} className="group fixed bottom-6 right-6 z-50 p-3.5 bg-white dark:bg-neutral-800 rounded-xl shadow-lg shadow-gray-200 dark:shadow-neutral-900/50 transition-all duration-300 transform hover:scale-110 active:scale-95 border-2 border-teal-200 dark:border-orange-400/30 hover:border-teal-400 dark:hover:border-orange-400" aria-label="Toggle dark mode">
                <div className={`transition-all duration-500 transform ${isDarkMode ? 'rotate-0 scale-100 opacity-100' : 'rotate-180 scale-0 opacity-0'} absolute inset-0 flex items-center justify-center`}>
                    <Icon icon="solar:sun-bold" width="24" height="24" className="text-teal-600"/>
                </div>

                <div className={`transition-all duration-500 transform ${!isDarkMode ? 'rotate-0 scale-100 opacity-100' : '-rotate-180 scale-0 opacity-0'} flex items-center justify-center`}>
                    <Icon  icon="solar:moon-bold"  width="24"  height="24"  className="text-orange-400"  />
                </div>
            </button>

            {/* Main App Container */}
            <div className="max-w-screen-xl mx-auto min-h-screen transition-all duration-500">
                <BrowserRouter basename='/my-portfolio'>
                    <div className='poppins xl:flex xl:gap-3 px-4 my-4 mt-20 sm:mt-[93px] md:mt-4 xl:mx-0 xl:my-20 min-h-screen relative'>
                        <div className="aside-scroll h-full xl:sticky top-0"><Aside /></div>
                        <div className="flex-1 h-full xl:mb-4 overflow-hidden">
                            <Routes>
                                <Route path='/' element={<About />} />
                                <Route path='/about' element={<About />} />
                                <Route path='/resume' element={<Resume />} />
                                <Route path='/portfolio' element={<Portfolio />} />
                                <Route path='/blog' element={<Blog />} />
                                <Route path='/contact' element={<Contact />} />
                            </Routes>
                        </div>
                    </div>
                </BrowserRouter>
            </div>
        </>
    )
}

export default App