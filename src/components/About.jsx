import React from 'react';

import { Icon } from '@iconify/react/dist/iconify.js';
import Navbar from './Navbar';

const About = () => {
    return (
        <div className='relative w-full'>
            <Navbar />

            {/* main component */}
            <main className='flex-1 p-4 sm:p-7 bg-gradient-to-br from-slate-50 to-teal-50/30 dark:from-[#1a1a1b] dark:to-[#1e1e1f] border border-teal-200 dark:border-neutral-700 text-gray-900 dark:text-white rounded-2xl shadow-sm'>

                {/* Header Section */}
                <div className="mb-3">
                    <h1 className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-teal-600 to-cyan-600 dark:from-orange-400 dark:to-rose-400 bg-clip-text text-transparent">About me</h1>
                </div>
                <hr className="border-2 border-teal-600 dark:border-orange-400 rounded-full w-16 mb-8" />

                {/* Introduction */}
                <div className="mb-12 space-y-4">
                    <p className="text-sm sm:text-base text-gray-700 dark:text-neutral-300 leading-relaxed">
                        I'm a passionate Full Stack Developer focused on building modern, responsive, and user-friendly web applications. I enjoy solving complex problems into simple, beautiful and intuitive designs.
                    </p>
                    <p className="text-sm sm:text-base text-gray-700 dark:text-neutral-300 leading-relaxed">
                        My role is to develop websites that are not only functional but also visually appealing and performance-optimized. I pay attention to clean code, smooth user experience, and practical design. My goal is to deliver reliable web solutions that effectively represent your product and help your business grow. I work on web design using real-world practice projects.
                    </p>
                </div>

                {/* What I'm Doing */}
                <div className="mb-16">
                    <div className="flex justify-start items-center gap-4 mb-8">
                        <div className='flex justify-center items-center h-12 sm:h-14 w-12 sm:w-14 bg-gradient-to-br from-teal-500 to-cyan-500 dark:from-orange-500 dark:to-rose-500 text-white rounded-2xl shadow-lg shadow-teal-500/30 dark:shadow-orange-500/30 transform hover:scale-105 transition-transform duration-300'>
                            <Icon icon="solar:widget-2-bold-duotone" width="28" height="28" />
                        </div>
                        <div>
                            <h3 className="text-xl sm:text-2xl font-bold text-gray-800 dark:text-white">What I'm Doing</h3>
                            <p className="text-xs text-gray-500 dark:text-neutral-400">My expertise & services</p>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        <div className="group relative bg-white dark:bg-neutral-800/60 backdrop-blur-sm p-6 sm:p-7 rounded-2xl border-2 border-teal-100 dark:border-neutral-700 hover:border-teal-400 dark:hover:border-orange-400 hover:shadow-xl hover:shadow-teal-100 dark:hover:shadow-orange-500/10 transition-all duration-300 hover:-translate-y-0.5">
                            <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 text-center sm:text-start">
                                <div className='flex-shrink-0 flex justify-center items-center h-14 w-14 bg-gradient-to-br from-teal-100 to-cyan-100 dark:from-orange-500/20 dark:to-rose-500/20 text-teal-600 dark:text-orange-400 rounded-xl group-hover:scale-110 transition-transform duration-300'>
                                    <Icon icon="hugeicons:quill-write-02" width="32" height="32" />
                                </div>
                                <div className="flex gap-2 flex-col">
                                    <label className="text-base sm:text-lg text-teal-700 dark:text-orange-400 font-bold">Web applications</label>
                                    <p className='text-sm text-gray-700 dark:text-neutral-300'>Building fast, interactive, and scalable web applications using modern technologies.</p>
                                </div>
                            </div>
                        </div>

                        <div className="group relative bg-white dark:bg-neutral-800/60 backdrop-blur-sm p-6 sm:p-7 rounded-2xl border-2 border-teal-100 dark:border-neutral-700 hover:border-teal-400 dark:hover:border-orange-400 hover:shadow-xl hover:shadow-teal-100 dark:hover:shadow-orange-500/10 transition-all duration-300 hover:-translate-y-0.5">
                            <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 text-center sm:text-start">
                                <div className='flex-shrink-0 flex justify-center items-center h-14 w-14 bg-gradient-to-br from-teal-100 to-cyan-100 dark:from-orange-500/20 dark:to-rose-500/20 text-teal-600 dark:text-orange-400 rounded-xl group-hover:scale-110 transition-transform duration-300'>
                                    <Icon icon="solar:code-square-bold-duotone" width="32" height="32" />
                                </div>
                                <div className="flex gap-2 flex-col">
                                    <label className="text-base sm:text-lg text-teal-700 dark:text-orange-400 font-bold">Web development</label>
                                    <p className='text-sm text-gray-700 dark:text-neutral-300'>High-quality development of modern, responsive, and user-focused websites.</p>
                                </div>
                            </div>
                        </div>

                        <div className="group relative bg-white dark:bg-neutral-800/60 backdrop-blur-sm p-6 sm:p-7 rounded-2xl border-2 border-teal-100 dark:border-neutral-700 hover:border-teal-400 dark:hover:border-orange-400 hover:shadow-xl hover:shadow-teal-100 dark:hover:shadow-orange-500/10 transition-all duration-300 hover:-translate-y-0.5">
                            <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 text-center sm:text-start">
                                <div className='flex-shrink-0 flex justify-center items-center h-14 w-14 bg-gradient-to-br from-teal-100 to-cyan-100 dark:from-orange-500/20 dark:to-rose-500/20 text-teal-600 dark:text-orange-400 rounded-xl group-hover:scale-110 transition-transform duration-300'>
                                    <Icon icon="solar:pallete-2-bold-duotone" width="32" height="32" />
                                </div>
                                <div className="flex gap-2 flex-col">
                                    <label className="text-base sm:text-lg text-teal-700 dark:text-orange-400 font-bold">UI Implementation</label>
                                    <p className='text-sm text-gray-700 dark:text-neutral-300'>Converting designs into pixel-perfect, responsive, and accessible web interfaces.</p>
                                </div>
                            </div>
                        </div>

                        <div className="group relative bg-white dark:bg-neutral-800/60 backdrop-blur-sm p-6 sm:p-7 rounded-2xl border-2 border-teal-100 dark:border-neutral-700 hover:border-teal-400 dark:hover:border-orange-400 hover:shadow-xl hover:shadow-teal-100 dark:hover:shadow-orange-500/10 transition-all duration-300 hover:-translate-y-0.5">
                            <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 text-center sm:text-start">
                                <div className='flex-shrink-0 flex justify-center items-center h-14 w-14 bg-gradient-to-br from-teal-100 to-cyan-100 dark:from-orange-500/20 dark:to-rose-500/20 text-teal-600 dark:text-orange-400 rounded-xl group-hover:scale-110 transition-transform duration-300'>
                                    <Icon icon="solar:camera-bold-duotone" width="32" height="32" />
                                </div>
                                <div className="flex gap-2 flex-col">
                                    <label className="text-base sm:text-lg text-teal-700 dark:text-orange-400 font-bold">Photography</label>
                                    <p className='text-sm text-gray-700 dark:text-neutral-300'>High-quality photography with attention to lighting, clarity, and composition.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Testimonials */}
                <div className="mb-16">
                    <div className="flex justify-start items-center gap-4 mb-8">
                        <div className='flex justify-center items-center h-12 sm:h-14 w-12 sm:w-14 bg-gradient-to-br from-teal-500 to-cyan-500 dark:from-orange-500 dark:to-rose-500 text-white rounded-2xl shadow-lg shadow-teal-500/30 dark:shadow-orange-500/30 transform hover:scale-105 transition-transform duration-300'>
                            <Icon icon="solar:chat-round-bold-duotone" width="28" height="28" />
                        </div>
                        <div>
                            <h3 className="text-xl sm:text-2xl font-bold text-gray-800 dark:text-white">Testimonials</h3>
                            <p className="text-xs text-gray-500 dark:text-neutral-400">What clients say</p>
                        </div>
                    </div>

                    <div className="scroll flex items-center gap-3 pb-5 overflow-x-auto">
                        {elements.map((item, index) => {
                            return (
                                <div key={index} className="group relative flex-shrink-0 bg-white dark:bg-neutral-800/60 backdrop-blur-sm p-6 sm:p-7 rounded-2xl border-2 border-teal-100 dark:border-neutral-700 hover:border-teal-400 dark:hover:border-orange-400 hover:shadow-xl hover:shadow-teal-100 dark:hover:shadow-orange-500/10 transition-all duration-300 w-full sm:w-1/2 md:w-1/3">
                                    <div className="flex gap-4 items-start mb-4">
                                        <img className='flex-shrink-0 w-14 h-14 bg-gray-200 dark:bg-neutral-700 rounded-2xl object-cover ring-4 ring-teal-100 dark:ring-orange-500/20 group-hover:ring-teal-400 dark:group-hover:ring-orange-400 transition-all duration-300' src={item.image} alt={item.name} />
                                        <div className="flex-1">
                                            <h4 className="text-base sm:text-lg font-bold text-teal-700 dark:text-orange-400 mb-1">{item.name}</h4>
                                            <div className="flex gap-1 mb-3">
                                                {[...Array(5)].map((_, i) => (
                                                    <Icon key={i} icon="solar:star-bold" className="text-teal-500 dark:text-orange-400" width="14" height="14" />
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                    <p className='text-sm text-gray-700 dark:text-neutral-300 leading-relaxed italic'>"{item.para}"</p>
                                </div>
                            )
                        })}
                    </div>
                </div>

                {/* Clients */}
                <div>
                    <div className="flex justify-start items-center gap-4 mb-8">
                        <div className='flex justify-center items-center h-12 sm:h-14 w-12 sm:w-14 bg-gradient-to-br from-teal-500 to-cyan-500 dark:from-orange-500 dark:to-rose-500 text-white rounded-2xl shadow-lg shadow-teal-500/30 dark:shadow-orange-500/30 transform hover:scale-105 transition-transform duration-300'>
                            <Icon icon="solar:case-bold-duotone" width="28" height="28" />
                        </div>
                        <div>
                            <h3 className="text-xl sm:text-2xl font-bold text-gray-800 dark:text-white">Company logo</h3>
                            <p className="text-xs text-gray-500 dark:text-neutral-400">Trusted by brands</p>
                        </div>
                    </div>

                    <div className="scroll flex items-center gap-8 pt-1 pb-5 overflow-x-auto">
                        {logos.map((logo, index) => {
                            return (
                                <div key={index} className="group flex-shrink-0">
                                    <img className='grayscale dark:grayscale opacity-60 invert dark:invert-0 dark:hover:grayscale-0 hover:opacity-100 w-[140px] sm:w-[170px] transition-all duration-300 hover:scale-110' src={logo} alt={`Company ${index + 1}`} />
                                </div>
                            )
                        })}
                    </div>
                </div>
            </main>
        </div>
    )
}

export default About




const elements = [
    {
        image: 'https://i.ibb.co/xLPhmDv/avatar-1.png',
        name: 'Tobey Maguire',
        para: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, quidem.'
    },
    {
        image: 'https://i.ibb.co/xLPhmDv/avatar-1.png',
        name: 'Andrew Garfield',
        para: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, quidem.'
    },
    {
        image: 'https://i.ibb.co/xLPhmDv/avatar-1.png',
        name: 'Tom Hardy',
        para: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, quidem.'
    },
    {
        image: 'https://i.ibb.co/gJHKBSd/avatar-2.png',
        name: 'Zendaya',
        para: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, quidem.'
    },
    {
        image: 'https://i.ibb.co/gJHKBSd/avatar-2.png',
        name: 'Angourie Rice',
        para: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, quidem.'
    },
]


const logos = [
    "https://i.ibb.co/QDy5FVr/logo-1-color.png",
    "https://i.ibb.co/NZNmXB3/logo-2-color.png",
    "https://i.ibb.co/6D2kqqq/logo-3-color.png",
    "https://i.ibb.co/1KFDhbt/logo-4-color.png",
    "https://i.ibb.co/k9Dy6ZR/logo-5-color.png",
    "https://i.ibb.co/VjShGCm/logo-6-color.png"
]