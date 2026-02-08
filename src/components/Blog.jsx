import React from 'react';
import Navbar from './Navbar';
import { Icon } from '@iconify/react/dist/iconify.js';

const Blog = () => {
    return (
        <div className='relative w-full'>
            <Navbar />

            {/* main component */}
            <main className='p-4 sm:p-7 bg-gradient-to-br from-slate-50 to-teal-50/30 dark:from-[#1a1a1b] dark:to-[#1e1e1f] border border-teal-200 dark:border-neutral-700 text-gray-900 dark:text-white rounded-2xl shadow-sm'>

                {/* Header Section */}
                <div className="mb-3">
                    <h1 className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-teal-600 to-cyan-600 dark:from-orange-400 dark:to-rose-400 bg-clip-text text-transparent">Blog</h1>
                </div>
                <hr className="border-2 border-teal-600 dark:border-orange-400 rounded-full w-16 mb-10" />

                {/* Blog Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-2">
                    {elements.map((item, index) => {
                        return (
                            <article key={index} className="group relative bg-white dark:bg-neutral-800/60 backdrop-blur-sm rounded-2xl border-2 border-teal-100 dark:border-neutral-700 hover:border-teal-400 dark:hover:border-orange-400 overflow-hidden hover:shadow-xl hover:shadow-teal-100 dark:hover:shadow-orange-500/10 transition-all duration-300 hover:-translate-y-0.5 cursor-pointer">

                                {/* Image Container */}
                                <div className="relative overflow-hidden aspect-[16/10]">
                                    <img className='w-full h-full object-cover group-hover:scale-110 transition-transform duration-500' src={item.imgage} alt={item.title} />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                                    <div className="absolute top-4 left-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                        <span className="inline-flex items-center gap-1.5 text-xs font-semibold bg-white/90 dark:bg-neutral-900/90 backdrop-blur-sm text-teal-700 dark:text-orange-400 px-3 py-1.5 rounded-full">
                                            <Icon icon="solar:bookmark-bold" width="14" height="14" />
                                            {item.date.split('|')[0].trim()}
                                        </span>
                                    </div>

                                    {/* Read more icon */}
                                    <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                                        <div className="flex items-center justify-center w-10 h-10 bg-gradient-to-r from-teal-500 to-cyan-500 dark:from-orange-500 dark:to-rose-500 rounded-full shadow-lg">
                                            <Icon icon="solar:arrow-right-bold" width="20" height="20" className="text-white" />
                                        </div>
                                    </div>
                                </div>

                                {/* Content */}
                                <div className="p-5 sm:p-6">
                                    <div className="flex items-center gap-2 mb-3">
                                        <Icon icon="solar:calendar-bold-duotone" width="16" height="16" className="text-teal-600 dark:text-orange-400" />
                                        <span className="text-xs sm:text-sm text-gray-600 dark:text-neutral-400 font-medium">
                                            {item.date.split('|')[1].trim()}
                                        </span>
                                    </div>

                                    <h4 className="text-lg sm:text-xl font-bold text-gray-800 dark:text-white mb-3 line-clamp-2 group-hover:text-teal-600 dark:group-hover:text-orange-400 transition-colors duration-300">{item.title}</h4>
                                    <p className="text-sm text-gray-700 dark:text-neutral-300 line-clamp-2 leading-relaxed mb-4">{item.para}</p>

                                    <div className="flex items-center gap-2 text-sm font-semibold text-teal-600 dark:text-orange-400 group-hover:gap-3 transition-all duration-300">
                                        <span>Read more</span>
                                        <Icon icon="solar:arrow-right-line-duotone" width="18" height="18" />
                                    </div>
                                </div>

                                {/* Corner decoration */}
                                <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-teal-400/10 to-transparent dark:from-orange-400/10 rounded-bl-[100px] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                            </article>
                        )
                    })}
                </div>

                {/* Load More Button (Optional) */}
                {/*  <div className="flex justify-center mt-12">
                    <button className="group inline-flex items-center gap-2 px-8 py-3.5 bg-gradient-to-r from-teal-500 to-cyan-500 dark:from-orange-500 dark:to-rose-500 text-white font-semibold rounded-xl shadow-lg shadow-teal-500/30 dark:shadow-orange-500/30 hover:shadow-xl hover:shadow-teal-500/40 dark:hover:shadow-orange-500/40 transform hover:scale-105 transition-all duration-300">
                        <span>Load More Articles</span>
                        <Icon icon="solar:alt-arrow-down-bold" width="20" height="20" className="group-hover:translate-y-1 transition-transform duration-300" />
                    </button>
                </div> */}
            </main>
        </div>
    )
}

export default Blog


const elements = [
    {
        imgage: 'https://i.ibb.co/5rJ1hKc/blog-1.jpg',
        date: 'Design | Feb 23, 2022',
        title: 'Design conferences in 2022',
        para: 'Veritatis et quasi architecto beatae vitae dicta sunt, explicabo.'
    },
    {
        imgage: 'https://i.ibb.co/hLqz9K5/blog-2.jpg',
        date: 'Design | Feb 23, 2022',
        title: 'Best fonts every designer',
        para: 'Sed ut perspiciatis, nam libero tempore, cum soluta nobis est eligendi.'
    },
    {
        imgage: 'https://i.ibb.co/Psk67g4/blog-3.jpg',
        date: 'Design | Feb 23, 2022',
        title: 'Design digest #80',
        para: 'Excepteur sint occaecat cupidatat no proident, quis nostrum exercitationem ullam corporis suscipit.'
    },
    {
        imgage: 'https://i.ibb.co/zJVgZMF/blog-4.jpg',
        date: 'Design | Feb 23, 2022',
        title: 'UI interactions of the week',
        para: 'Enim ad minim veniam, consectetur adipiscing elit, quis nostrud exercitation ullamco laboris nisi.'
    },
    {
        imgage: 'https://i.ibb.co/0hp3qJX/blog-5.jpg',
        date: 'Design | Feb 23, 2022',
        title: 'The forgotten art of spacing',
        para: 'Maxime placeat, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    },
    {
        imgage: 'https://i.ibb.co/QcPtXvn/blog-6.jpg',
        date: 'Design | Feb 23, 2022',
        title: 'Design digest #79',
        para: 'Optio cumque nihil impedit uo minus quod maxime placeat, velit esse cillum.'
    }
]