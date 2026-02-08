import React, { useState } from 'react';
import Navbar from './Navbar';
import { Icon } from '@iconify/react/dist/iconify.js';
import { Link } from 'react-router-dom';

const Portfolio = () => {
    const [list, setList] = useState('All');
    const [hide, setHide] = useState('hidden');
    const [changeIcon, setChangeIcon] = useState('up');

    const categories = ['All', 'Web design', 'Applications', 'Web development'];

    const colorText = (category) => {
        setList(category);
        setHide('hidden');
    }

    const showCategory = () => {
        setHide(hide === 'hidden' ? 'block' : 'hidden');
        setChangeIcon(changeIcon === 'up' ? 'down' : 'up');
    }

    return (
        <div className='relative w-full'>
            <Navbar />

            {/* main component */}
            <main className='p-4 sm:p-7 bg-gradient-to-br from-slate-50 to-teal-50/30 dark:from-[#1a1a1b] dark:to-[#1e1e1f] border border-teal-200 dark:border-neutral-700 text-gray-900 dark:text-white rounded-2xl shadow-sm'>

                {/* Header Section */}
                <div className="mb-3">
                    <h1 className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-teal-600 to-cyan-600 dark:from-orange-400 dark:to-rose-400 bg-clip-text text-transparent">Portfolio</h1>
                </div>
                <hr className="border-2 border-teal-600 dark:border-orange-400 rounded-full w-16 mb-8" />

                {/* Mobile Filter Dropdown */}
                <div className="relative md:hidden mb-8">
                    <button onClick={showCategory} type="button" className='flex justify-between items-center px-5 py-3 border-2 border-teal-200 dark:border-neutral-700 bg-white dark:bg-neutral-800/60 hover:border-teal-400 dark:hover:border-orange-400 rounded-xl w-full text-sm sm:text-base font-semibold text-gray-800 dark:text-white transition-all duration-300 shadow-sm'>
                        <span>{list}</span>
                        <Icon icon={`solar:alt-arrow-${changeIcon}-bold`} width="20" height="20" className="text-teal-600 dark:text-orange-400" />
                    </button>

                    <ul className={`${hide} absolute top-14 w-full p-2 border-2 border-teal-200 dark:border-neutral-700 bg-white dark:bg-neutral-800/95 backdrop-blur-sm rounded-xl text-sm sm:text-base shadow-xl z-10`}>
                        {categories.map((category, index) => (
                            <li key={index} onClick={() => colorText(category)} className={`px-4 py-3 rounded-lg cursor-pointer transition-all duration-200 font-medium ${list === category ? 'bg-gradient-to-r from-teal-500 to-cyan-500 dark:from-orange-500 dark:to-rose-500 text-white' : 'text-gray-700 dark:text-neutral-300 hover:bg-teal-50 dark:hover:bg-neutral-700'}`}>{category}</li>
                        ))}
                    </ul>
                </div>

                {/* Desktop Filter Tabs */}
                <div className='hidden md:flex items-center justify-start gap-3 mb-10 flex-wrap'>
                    {categories.map((category, index) => (
                        <button key={index} onClick={() => colorText(category)} className={`px-6 py-2.5 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 ${list === category ? 'bg-gradient-to-r from-teal-500 to-cyan-500 dark:from-orange-500 dark:to-rose-500 text-white shadow-lg shadow-teal-500/30 dark:shadow-orange-500/30' : 'bg-white dark:bg-neutral-800/60 text-gray-700 dark:text-neutral-300 border-2 border-teal-100 dark:border-neutral-700 hover:border-teal-400 dark:hover:border-orange-400'}`}>{category}</button>
                    ))}
                </div>

                {/* Portfolio Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                    {elements.map((item, index) => {
                        if (item.type === list || list === 'All') {
                            return (
                                <Link to="/" key={index} className="group">
                                    <div className="relative bg-white dark:bg-neutral-800/60 backdrop-blur-sm rounded-2xl border-2 border-teal-100 dark:border-neutral-700 hover:border-teal-400 dark:hover:border-orange-400 overflow-hidden hover:shadow-xl hover:shadow-teal-100 dark:hover:shadow-orange-500/10 transition-all duration-300 hover:-translate-y-0.5">

                                        {/* Image Container */}
                                        <div className="relative overflow-hidden aspect-[4/3]">
                                            <img className='w-full h-full object-cover group-hover:scale-110 transition-transform duration-500' src={item.imgage} alt={item.title} />
                                        </div>

                                        {/* Content */}
                                        <div className="p-5">
                                            <h4 className="text-base sm:text-lg font-bold text-gray-800 dark:text-white mb-2 group-hover:text-teal-600 dark:group-hover:text-orange-400 transition-colors duration-300">{item.title}</h4>
                                            <div className="flex items-center gap-2">
                                                <span className="inline-flex items-center gap-1.5 text-xs sm:text-sm bg-teal-100 dark:bg-orange-500/20 text-teal-700 dark:text-orange-300 px-3 py-1 rounded-full font-semibold">
                                                    <Icon icon="solar:tag-bold" width="14" height="14" />
                                                    {item.type}
                                                </span>
                                            </div>
                                        </div>

                                        {/* Corner decoration */}
                                        <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-teal-400/10 to-transparent dark:from-orange-400/10 rounded-bl-[80px] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                    </div>
                                </Link>
                            )
                        }
                        return null;
                    })}
                </div>

                {/* Empty State */}
                {elements.filter(item => item.type === list || list === 'All').length === 0 && (
                    <div className="flex flex-col items-center justify-center py-20">
                        <Icon icon="solar:folder-open-bold-duotone" width="80" height="80" className="text-gray-300 dark:text-neutral-700 mb-4" />
                        <p className="text-gray-500 dark:text-neutral-400 text-lg">No projects found in this category</p>
                    </div>
                )}
            </main>
        </div>
    )
}

export default Portfolio



const elements = [
    {
        imgage: 'https://i.ibb.co/rdjRmfx/project-1.jpg',
        title: 'Finance',
        type: 'Web development'
    },
    {
        imgage: 'https://i.ibb.co/dDVgrqh/project-2.png',
        title: 'Orizon',
        type: 'Web development'
    },
    {
        imgage: 'https://i.ibb.co/q57RKwr/project-3.jpg',
        title: 'Fundo',
        type: 'Web design'
    },
    {
        imgage: 'https://i.ibb.co/dmrVWgz/project-4.png',
        title: 'Brawlhalla',
        type: 'Applications'
    },
    {
        imgage: 'https://i.ibb.co/0BW81B8/project-5.png',
        title: 'DSM',
        type: 'Web design'
    },
    {
        imgage: 'https://i.ibb.co/qBp2MQ8/project-6.png',
        title: 'MetaSpark',
        type: 'Web design'
    },
    {
        imgage: 'https://i.ibb.co/hZ0d4SZ/project-7.png',
        title: 'Summary',
        type: 'Web development'
    },
    {
        imgage: 'https://i.ibb.co/4tgr4m6/project-8.jpg',
        title: 'Task Manager',
        type: 'Applications'
    },
    {
        imgage: 'https://i.ibb.co/BV8v4RN/project-9.png',
        title: 'Arrival',
        type: 'Web development'
    },
]