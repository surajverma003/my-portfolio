import React from 'react';

import { Icon } from '@iconify/react/dist/iconify.js';
import Navbar from './Navbar';

const Resume = () => {
    return (
        <div className='relative w-full'>
            <Navbar />

            {/* main component */}
            <main className='flex-1 p-4 sm:p-7 bg-gradient-to-br from-slate-50 to-teal-50/30 dark:from-[#1a1a1b] dark:to-[#1e1e1f] border border-teal-200 dark:border-neutral-700 text-gray-900 dark:text-white rounded-2xl shadow-sm overflow-hidden'>

                {/* Header Section */}
                <div className="mb-3">
                    <h1 className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-teal-600 to-cyan-600 dark:from-orange-400 dark:to-rose-400 bg-clip-text text-transparent">Resume</h1>
                </div>
                <hr className="border-2 border-teal-600 dark:border-orange-400 rounded-full w-16 mb-10" />

                <article className="resume" data-page="resume">

                    {/* Education */}
                    <div className="mb-16">
                        <div className="flex justify-start items-center gap-4 mb-8">
                            <div className='flex justify-center items-center h-12 sm:h-14 w-12 sm:w-14 bg-gradient-to-br from-teal-500 to-cyan-500 dark:from-orange-500 dark:to-rose-500 text-white rounded-2xl shadow-lg shadow-teal-500/30 dark:shadow-orange-500/30 transform hover:scale-105 transition-transform duration-300'>
                                <Icon icon="solar:diploma-bold-duotone" width="28" height="28" />
                            </div>
                            <div>
                                <h3 className="text-xl sm:text-2xl font-bold text-gray-800 dark:text-white">Education</h3>
                                <p className="text-xs text-gray-500 dark:text-neutral-400">Academic background</p>
                            </div>
                        </div>

                        <div className="">
                            <ul className="flex flex-col gap-3">
                                <li className="relative group">
                                    <div className="relative bg-white dark:bg-neutral-800/60 backdrop-blur-sm p-5 sm:p-7 rounded-2xl border-2 border-teal-100 dark:border-neutral-700 hover:border-teal-400 dark:hover:border-orange-400 hover:shadow-xl hover:shadow-teal-100 dark:hover:shadow-orange-500/10 transition-all duration-300 group-hover:-translate-y-0.5">
                                        <h4 className="text-base sm:text-lg font-bold text-teal-700 dark:text-orange-400 mb-2">Indira Gandhi National Open University (IGNOU)</h4>
                                        <span className='inline-flex items-center gap-2 text-xs sm:text-sm bg-teal-100 dark:bg-orange-500/20 text-teal-800 dark:text-orange-300 px-3 py-1.5 rounded-full font-semibold mb-3'><Icon icon="solar:calendar-bold" width="14" height="14" />2020 — 2025</span>
                                        <p className="text-sm sm:text-base text-gray-700 dark:text-neutral-300 leading-relaxed mt-3">Bachelor of Computer Applications (BCA) graduate from IGNOU with a focus on computer fundamentals and web technologies.</p>
                                    </div>
                                </li>

                                <li className="relative group">
                                    <div className="relative bg-white dark:bg-neutral-800/60 backdrop-blur-sm p-5 sm:p-7 rounded-2xl border-2 border-teal-100 dark:border-neutral-700 hover:border-teal-400 dark:hover:border-orange-400 hover:shadow-xl hover:shadow-teal-100 dark:hover:shadow-orange-500/10 transition-all duration-300 group-hover:-translate-y-0.5">
                                        <h4 className="text-base sm:text-lg font-bold text-teal-700 dark:text-orange-400 mb-2">CBSE BOARD XII</h4>
                                        <span className='inline-flex items-center gap-2 text-xs sm:text-sm bg-teal-100 dark:bg-orange-500/20 text-teal-800 dark:text-orange-300 px-3 py-1.5 rounded-full font-semibold mb-3'><Icon icon="solar:calendar-bold" width="14" height="14" />2019 — 2020</span>
                                        <p className="text-sm sm:text-base text-gray-700 dark:text-neutral-300 leading-relaxed mt-3">Completed higher secondary education in (Arts with Economics), Focused on learning core subjects while developing a disciplined approach to studies.</p>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>

                    {/* Experience */}
                    <div className="mb-16">
                        <div className="flex justify-start items-center gap-4 mb-8">
                            <div className='flex justify-center items-center h-12 sm:h-14 w-12 sm:w-14 bg-gradient-to-br from-teal-500 to-cyan-500 dark:from-orange-500 dark:to-rose-500 text-white rounded-2xl shadow-lg shadow-teal-500/30 dark:shadow-orange-500/30 transform hover:scale-105 transition-transform duration-300'>
                                <Icon icon="solar:case-round-bold-duotone" width="28" height="28" />
                            </div>
                            <div>
                                <h3 className="text-xl sm:text-2xl font-bold text-gray-800 dark:text-white">Experience</h3>
                                <p className="text-xs text-gray-500 dark:text-neutral-400">Professional journey</p>
                            </div>
                        </div>

                        <div className="">
                            <ol className="flex flex-col gap-3">
                                <li className="relative group">
                                    <div className="relative bg-white dark:bg-neutral-800/60 backdrop-blur-sm p-5 sm:p-7 rounded-2xl border-2 border-teal-100 dark:border-neutral-700 hover:border-teal-400 dark:hover:border-orange-400 hover:shadow-xl hover:shadow-teal-100 dark:hover:shadow-orange-500/10 transition-all duration-300 group-hover:-translate-y-0.5">
                                        <h4 className="text-base sm:text-lg font-bold text-teal-700 dark:text-orange-400 mb-2">Nemo enims ipsam voluptatem</h4>
                                        <span className='inline-flex items-center gap-2 text-xs sm:text-sm bg-emerald-100 dark:bg-emerald-500/20 text-emerald-800 dark:text-emerald-300 px-3 py-1.5 rounded-full font-semibold mb-3'><Icon icon="solar:clock-circle-bold" width="14" height="14" />2023 — Present</span>
                                        <p className="text-sm sm:text-base text-gray-700 dark:text-neutral-300 leading-relaxed mt-3">Nemo enims ipsam voluptatem, blanditiis praesentium voluptum delenit atque corrupti, quos dolores et quas molestias exceptur.</p>
                                    </div>
                                </li>

                                <li className="relative group">
                                    <div className="relative bg-white dark:bg-neutral-800/60 backdrop-blur-sm p-5 sm:p-7 rounded-2xl border-2 border-teal-100 dark:border-neutral-700 hover:border-teal-400 dark:hover:border-orange-400 hover:shadow-xl hover:shadow-teal-100 dark:hover:shadow-orange-500/10 transition-all duration-300 group-hover:-translate-y-0.5">
                                        <h4 className="text-base sm:text-lg font-bold text-teal-700 dark:text-orange-400 mb-2">Ratione voluptatem</h4>
                                        <span className='inline-flex items-center gap-2 text-xs sm:text-sm bg-teal-100 dark:bg-orange-500/20 text-teal-800 dark:text-orange-300 px-3 py-1.5 rounded-full font-semibold mb-3'><Icon icon="solar:calendar-bold" width="14" height="14" />2021 — 2022</span>
                                        <p className="text-sm sm:text-base text-gray-700 dark:text-neutral-300 leading-relaxed mt-3">Ratione voluptatem sequi nesciunt, facere quisquams facere menda ossimus, omnis voluptas assumenda est omnis..</p>
                                    </div>
                                </li>

                                <li className="relative group">
                                    <div className="relative bg-white dark:bg-neutral-800/60 backdrop-blur-sm p-5 sm:p-7 rounded-2xl border-2 border-teal-100 dark:border-neutral-700 hover:border-teal-400 dark:hover:border-orange-400 hover:shadow-xl hover:shadow-teal-100 dark:hover:shadow-orange-500/10 transition-all duration-300 group-hover:-translate-y-0.5">
                                        <h4 className="text-base sm:text-lg font-bold text-teal-700 dark:text-orange-400 mb-2">Duis aute irure dolor</h4>
                                        <span className='inline-flex items-center gap-2 text-xs sm:text-sm bg-teal-100 dark:bg-orange-500/20 text-teal-800 dark:text-orange-300 px-3 py-1.5 rounded-full font-semibold mb-3'><Icon icon="solar:calendar-bold" width="14" height="14" />2017 — 2020</span>
                                        <p className="text-sm sm:text-base text-gray-700 dark:text-neutral-300 leading-relaxed mt-3">Duis aute irure dolor in reprehenderit in voluptate, quila voluptas mag odit aut fugit, sed consequuntur magni dolores eos.</p>
                                    </div>
                                </li>
                            </ol>
                        </div>
                    </div>

                    {/* Skills */}
                    <div>
                        <div className="flex justify-start items-center gap-4 mb-8">
                            <div className='flex justify-center items-center h-12 sm:h-14 w-12 sm:w-14 bg-gradient-to-br from-teal-500 to-cyan-500 dark:from-orange-500 dark:to-rose-500 text-white rounded-2xl shadow-lg shadow-teal-500/30 dark:shadow-orange-500/30 transform hover:scale-105 transition-transform duration-300'>
                                <Icon icon="solar:star-bold-duotone" width="28" height="28" />
                            </div>
                            <div>
                                <h3 className="text-xl sm:text-2xl font-bold text-gray-800 dark:text-white">My Skills</h3>
                                <p className="text-xs text-gray-500 dark:text-neutral-400">Technical proficiency</p>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-3">
                            {[
                                { name: 'Frontend Development', tech: 'HTML, CSS, JS, React', percent: 80 },
                                { name: 'Backend Development', tech: 'Node, Express', percent: 60 },
                                { name: 'Database Management', tech: 'MongoDB, MySQL', percent: 73 },
                                { name: 'UI/UX Design', tech: 'Design Basics', percent: 85 }
                            ].map((skill, index) => (
                                <div key={index} className="relative group bg-white dark:bg-neutral-800/60 backdrop-blur-sm p-6 rounded-2xl border-2 border-teal-100 dark:border-neutral-700 hover:border-teal-400 dark:hover:border-orange-400 hover:shadow-xl hover:shadow-teal-100 dark:hover:shadow-orange-500/10 transition-all duration-300 hover:-translate-y-0.5">
                                    <div className="flex justify-between items-start mb-3">
                                        <div>
                                            <h5 className="font-bold text-gray-800 dark:text-white text-sm sm:text-base">{skill.name}</h5>
                                            <p className="text-xs text-gray-500 dark:text-neutral-400 mt-1">{skill.tech}</p>
                                        </div>
                                        <span className="text-lg sm:text-xl font-bold bg-gradient-to-r from-teal-600 to-cyan-600 dark:from-orange-400 dark:to-rose-400 bg-clip-text text-transparent">{skill.percent}%</span>
                                    </div>

                                    <div className="w-full bg-teal-100 dark:bg-neutral-700 rounded-full h-1.5 overflow-hidden shadow-inner mt-4">
                                        <div className="bg-gradient-to-r from-teal-500 via-teal-600 to-cyan-600 dark:from-orange-400 dark:via-orange-500 dark:to-rose-500 h-1.5 rounded-full shadow-lg transition-all duration-1000 ease-out relative overflow-hidden" style={{ width: `${skill.percent}%` }}>
                                            <div className="absolute inset-0 bg-white/20 animate-pulse"></div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </article>
            </main>
        </div>
    )
}

export default Resume