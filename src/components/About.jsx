import React from 'react';

import { Icon } from '@iconify/react/dist/iconify.js';
import Navbar from './Navbar';

const About = () => {
    return (
        <div className='relative w-full'>
            <Navbar />

            {/* main component */}
            <main className='flex-1 p-4 sm:p-7 bg-[#1e1e1f] border border-neutral-700 text-white rounded-2xl'>
                <h1 className="text-3xl sm:text-4xl font-semibold">About me</h1>
                <hr className="border-2 border-[#ffdb70] rounded-sm w-12 my-5" />

                <p className="text-sm md:text-[16px] text-neutral-300">I'm Creative Director and UI/UX Designer from Sydney, Australia, working in web development and print media. I enjoy turning complex problems into simple, beautiful and intuitive designs.</p>
                <p className="text-sm md:text-[16px] text-neutral-300 mt-4">My job is to build your website so that it is functional and user-friendly but at the same time attractive. Moreover, I add personal touch to your product and make sure that is eye-catching and easy to use. My aim is to bring across your message and identity in the most creative way. I created web design for many famous brand companies.</p>


                {/* What I'm Doing */}
                <h1 className="mt-10 mb-3 text-xl sm:text-2xl font-semibold">What I'm Doing</h1>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10 text-sm sm:text-[16px] w-full">
                    <div className="flex flex-col sm:flex-row items-center sm:items-start gap-5 bg-neutral-700/40 p-7 rounded-2xl text-center sm:text-start">
                        <span className='flex justify-center items-center h-10 w-10 text-[#ffdb70] rounded-md'><Icon icon="hugeicons:quill-write-02" width="50" height="50"></Icon></span>
                        <div className="flex gap-2 flex-col">
                            <label className="text-[18px] sm:text-xl text-slate-200 font-semibold">Web Design</label>
                            <p className='text-neutral-400'>The most modern and high-quality design made at a level.</p>
                        </div>
                    </div>

                    <div className="flex flex-col sm:flex-row items-center sm:items-start gap-5 bg-neutral-700/40 p-7 rounded-2xl text-center sm:text-start">
                        <span className='flex justify-center items-center h-10 w-10 text-[#ffdb70] rounded-md'><Icon icon="solar:code-square-broken" width="50" height="50"></Icon></span>
                        <div className="flex gap-2 flex-col">
                            <label className="text-[18px] sm:text-xl text-slate-200 font-semibold">Web development</label>
                            <p className='text-neutral-400'>High-quality development of sites at the professional level.</p>
                        </div>
                    </div>

                    <div className="flex flex-col sm:flex-row items-center sm:items-start gap-5 bg-neutral-700/40 p-7 rounded-2xl text-center sm:text-start">
                        <span className='flex justify-center items-center h-10 w-10 text-[#ffdb70] rounded-md'><Icon icon="proicons:phone" width="50" height="50"></Icon></span>
                        <div className="flex gap-2 flex-col">
                            <label className="text-[18px] sm:text-xl text-slate-200 font-semibold">Mobile apps</label>
                            <p className='text-neutral-400'>Professional development of applications for iOS and Android.</p>
                        </div>
                    </div>

                    <div className="flex flex-col sm:flex-row items-center sm:items-start gap-5 bg-neutral-700/40 p-7 rounded-2xl text-center sm:text-start">
                        <span className='flex justify-center items-center h-10 w-10 text-[#ffdb70] rounded-md'><Icon icon="solar:camera-broken" width="50" height="50"></Icon></span>
                        <div className="flex gap-2 flex-col">
                            <label className="text-[18px] sm:text-xl text-slate-200 font-semibold">Photography</label>
                            <p className='text-neutral-400'>I make high-quality photos of any category at a professional level.</p>
                        </div>
                    </div>
                </div>



                {/* Testimonials */}
                <h1 className="mt-14 mb-2 text-xl sm:text-2xl font-semibold">Testimonials</h1>
                <div className="scroll flex items-center gap-5 pb-10 mb-10 overflow-x-auto pt-9">
                    {
                        elements.map((item, index) => {
                            return (
                                <div key={index} className="border border-gray-700 flex-shrink-0 bg-neutral-700/40 p-7 rounded-2xl w-full md:w-1/2">
                                    <div className="flex gap-3 relative">
                                        <img className='lightShadow w-20 bg-neutral-700 rounded-2xl absolute -top-14' src={item.image} alt="" />
                                        <label className="relative left-24 -top-1 text-[16px] sm:text-xl text-slate-200 mb-3 font-semibold">{item.name}</label>
                                    </div>
                                    <p className='text-neutral-400'>{item.para}</p>
                                </div>
                            )
                        })
                    }
                </div>


                {/* Clients */}
                <h1 className="mt-14 mb-12 text-2xl font-semibold">Company logo</h1>
                <div className="scroll flex items-center gap-5 pb-10 mb-10 w-full overflow-hidden overflow-x-auto">
                    {
                        logos.map((logo, index) => {
                            return (
                                <img key={index} className='grayscale hover:grayscale-0 w-[170px] transition-all' src={logo} alt={logo.substring(25)} />
                            )
                        })
                    }
                </div>
            </main>
        </div>
    )
}

export default About




const elements = [
    {
        image: 'https://i.ibb.co/xLPhmDv/avatar-1.png',
        name: 'Nikhil Kamble',
        para: 'Sanskar was hired to create a corporate identity. We were very pleased with the work'
    },
    {
        image: 'https://i.ibb.co/gJHKBSd/avatar-2.png',
        name: 'Sakshi Mishra',
        para: 'Sanskar was hired to create a corporate identity. We were very pleased with the work'
    },
    {
        image: 'https://i.ibb.co/xLPhmDv/avatar-1.png',
        name: 'Sakshi Mishra',
        para: 'Sanskar was hired to create a corporate identity. We were very pleased with the work'
    },
    {
        image: 'https://i.ibb.co/gJHKBSd/avatar-2.png',
        name: 'Sakshi Mishra',
        para: 'Sanskar was hired to create a corporate identity. We were very pleased with the work'
    },
    {
        image: 'https://i.ibb.co/xLPhmDv/avatar-1.png',
        name: 'Sakshi Mishra',
        para: 'Sanskar was hired to create a corporate identity. We were very pleased with the work'
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