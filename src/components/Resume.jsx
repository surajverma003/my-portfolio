import React from 'react';

import { Icon } from '@iconify/react/dist/iconify.js';
import Navbar from './Navbar';

const Resume = () => {
    return (
        <div className='relative w-full'>
            <Navbar />

            {/* main component */}
            <main className='flex-1 p-4 sm:p-7 bg-[#1e1e1f] border border-neutral-700 text-white rounded-2xl'>
                <h1 className="text-3xl sm:text-4xl font-semibold">Resume</h1>
                <hr className="border-2 border-[#ffdb70] rounded-sm w-12 my-5" />

                <article className="resume" data-page="resume">

                    {/* Education */}
                    <div className="">
                        <div className="flex justify-start items-center gap-5">
                            <span className='flex justify-center items-center h-10 sm:h-12 w-10 sm:w-12 bg-[#2b2b2cbf] border border-neutral-700 rounded-full'><Icon icon="ion:book-outline"></Icon></span>
                            <h3 className="text-[18px] sm:text-[24px] font-semibold">Education</h3>
                        </div>


                        <ul className="studyList mt-4 flex flex-col gap-7 text-sm sm:text-[16px]">
                            <li className="flex flex-col justify-center items-start gap-2">
                                <h4 className="font-semibold">University Of Engineering Pune </h4>
                                <span className='text-[#ffdb70c2]'>2021 — 2024</span>
                                <p className="text-neutral-300">
                                    Nemo enims ipsam voluptatem, blanditiis praesentium voluptum delenit atque corrupti, quos dolores et
                                    quas molestias
                                    exceptur.
                                </p>
                            </li>

                            <li className="flex flex-col justify-center items-start gap-2">
                                <h4 className="font-semibold">New york academy of Texas</h4>
                                <span className='text-[#ffdb70c2]'>2018 — 2024</span>
                                <p className="text-neutral-300">
                                    Ratione voluptatem sequi nesciunt, facere quisquams facere menda ossimus, omnis voluptas assumenda est
                                    omnis..
                                </p>
                            </li>

                            <li className="flex flex-col justify-center items-start gap-2">
                                <h4 className="font-semibold">High school of art and design</h4>
                                <span className='text-[#ffdb70c2]'>2017 — 2018</span>
                                <p className="text-neutral-300">
                                    Duis aute irure dolor in reprehenderit in voluptate, quila voluptas mag odit aut fugit, sed consequuntur
                                    magni dolores
                                    eos.
                                </p>
                            </li>
                        </ul>
                    </div>


                    {/* Experience */}
                    <div className="mt-12">
                        <div className="flex justify-start items-center gap-5">
                            <span className='flex justify-center items-center h-10 sm:h-12 w-10 sm:w-12 bg-[#2b2b2cbf] border border-neutral-700 rounded-full'><Icon icon="ion:book-outline" width="18" height="18"></Icon></span>
                            <h3 className="text-[18px] sm:text-[24px] font-semibold">Experience</h3>
                        </div>


                        <ol className="mt-4 flex flex-col gap-7 text-sm sm:text-[16px]">
                            <li className="flex flex-col justify-center items-start gap-2">
                                <h4 className="font-semibold">Creative director</h4>
                                <span className='text-[#ffdb70c2]'>2015 — Present</span>
                                <p className="text-neutral-300">
                                    Nemo enims ipsam voluptatem, blanditiis praesentium voluptum delenit atque corrupti, quos dolores et
                                    quas molestias
                                    exceptur.
                                </p>
                            </li>

                            <li className="flex flex-col justify-center items-start gap-2">
                                <h4 className="font-semibold">Art director</h4>
                                <span className='text-[#ffdb70c2]'>2013 — 2015</span>
                                <p className="text-neutral-300">
                                    Ratione voluptatem sequi nesciunt, facere quisquams facere menda ossimus, omnis voluptas assumenda est
                                    omnis..
                                </p>
                            </li>

                            <li className="flex flex-col justify-center items-start gap-2">
                                <h4 className="font-semibold">Web designer</h4>
                                <span className='text-[#ffdb70c2]'>2010 — 2013</span>
                                <p className="text-neutral-300">
                                    Duis aute irure dolor in reprehenderit in voluptate, quila voluptas mag odit aut fugit, sed consequuntur
                                    magni dolores
                                    eos.
                                </p>
                            </li>
                        </ol>
                    </div>


                    {/* Progress Bar */}
                    <div className="mt-16">
                        <div className="flex justify-start items-center gap-5">
                            <h3 className="text-[18px] sm:text-[24px] font-semibold">My Skills</h3>
                        </div>

                        <div className="flex flex-col gap-7 p-6 bg-neutral-800/70 text-sm sm:text-[16px] font-semibold rounded-2xl mt-5 border border-neutral-700">
                            <div className="">
                                <h5 className="mb-2">Web design 60%</h5>
                                <div className="w-full bg-gray-200 rounded-full h-2 dark:bg-gray-700">
                                    <div className="bg-[#ffdb70] h-2 rounded-full w-[60%]"></div>
                                </div>
                            </div>

                            <div className="">
                                <h5 className="mb-2">Graphic design 90%</h5>
                                <div className="w-full bg-gray-200 rounded-full h-2 dark:bg-gray-700">
                                    <div className="bg-[#ffdb70] h-2 rounded-full w-[90%]"></div>
                                </div>
                            </div>

                            <div className="">
                                <h5 className="mb-2">Branding 70%</h5>
                                <div className="w-full bg-gray-200 rounded-full h-2 dark:bg-gray-700">
                                    <div className="bg-[#ffdb70] h-2 rounded-full w-[70%]"></div>
                                </div>
                            </div>

                            <div className="">
                                <h5 className="mb-2">WordPress 50%</h5>
                                <div className="w-full bg-gray-200 rounded-full h-2 dark:bg-gray-700">
                                    <div className="bg-[#ffdb70] h-2 rounded-full w-[50%]"></div>
                                </div>
                            </div>
                        </div>
                    </div>

                </article>
            </main>
        </div>
    )
}

export default Resume
