import React, { useState } from 'react';
import Navbar from './Navbar';
import { Icon } from '@iconify/react/dist/iconify.js';
import { Link } from 'react-router-dom';

const Portfolio = () => {
    const [list, setList] = useState('All');
    const [hide, setHide] = useState('hidden');
    const [changeIcon, setChangeIcon] = useState('up');

    const colorText = (e) => {
        removeTextColor();
        setList(e.target.innerText);
        e.target.style.color = '#ffdb70';
        setHide('hidden');
    }

    const removeTextColor = () => {
        document.getElementById('All').style.color = "#d4d4d4";
        document.getElementById('Web design').style.color = "#d4d4d4";
        document.getElementById('Applications').style.color = "#d4d4d4";
        document.getElementById('Web development').style.color = "#d4d4d4";

        document.querySelector('.c_1').style.color = "#d4d4d4";
        document.querySelector('.c_2').style.color = "#d4d4d4";
        document.querySelector('.c_3').style.color = "#d4d4d4";
        document.querySelector('.c_4').style.color = "#d4d4d4";
    }

    const showCategory = () => {
        setHide(hide === 'hidden' ? 'block' : 'hidden');
        setChangeIcon(changeIcon === 'up' ? 'down' : 'up');
    }
    
    return (
        <div className='relative w-full'>
            <Navbar />

            {/* main component */}
            <main className='p-4 sm:p-7 bg-[#1e1e1f] border border-neutral-700 text-white rounded-2xl'>
                <h1 className="text-3xl sm:text-4xl font-semibold">Portfolio</h1>
                <hr className="border-2 border-[#ffdb70] rounded-sm w-12 my-5" />

                <div className="relative md:hidden">
                    <button onClick={showCategory} type="button" className='flex justify-between items-center px-4 py-2.5 border border-neutral-700 bg-transparent rounded-xl w-full mb-2 text-sm sm:text-[16px]'>
                        <span>{list}</span>
                        <span><Icon icon={`mingcute:${changeIcon}-fill`} width="24" height="24"></Icon></span>
                    </button>

                    <ul className={`${hide} text-neutral-300 absolute top-13 w-full p-2.5 border border-neutral-700 bg-[#1e1e1f] rounded-xl text-sm sm:text-[16px]`}>
                        <li onClick={colorText} className='px-4 py-2.5 rounded-lg hover:bg-neutral-700 transition-all' id='All'>All</li>
                        <li onClick={colorText} className='px-4 py-2.5 rounded-lg hover:bg-neutral-700 transition-all' id='Web design'>Web design</li>
                        <li onClick={colorText} className='px-4 py-2.5 rounded-lg hover:bg-neutral-700 transition-all' id='Applications'>Applications</li>
                        <li onClick={colorText} className='px-4 py-2.5 rounded-lg hover:bg-neutral-700 transition-all' id='Web development'>Web development</li>
                    </ul>
                </div>

                <ul className='hidden md:flex items-center justify-start gap-10 text-neutral-300 px-3 mb-7'>
                    <li className='c_1 text-[#ffdb70] hover:text-neutral-400 transition-all' onClick={colorText}>All</li>
                    <li className='c_2 hover:text-neutral-400 transition-all' onClick={colorText}>Web design</li>
                    <li className='c_3 hover:text-neutral-400 transition-all' onClick={colorText}>Applications</li>
                    <li className='c_4 hover:text-neutral-400 transition-all' onClick={colorText}>Web development</li>
                </ul>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-8 my-5 text-sm sm:text-[16px]">
                    {
                        elements.map((item, index) => {
                            if (item.type === list) {
                                return (
                                    <Link to="/" key={index} className="">
                                        <div className="overflow-hidden rounded-2xl">
                                            <img className='hover:scale-[1.14] transition-all rounded-xl ' src={item.imgage} alt="" />
                                        </div>
                                        <div className="flex flex-col justify-center items-start gap-1 mt-3 ps-2">
                                            <h4 className="">{item.title}</h4>
                                            <p className="text-[16px] text-neutral-400">{item.type}</p>
                                        </div>
                                    </Link>
                                )
                            }

                            else if (list === 'All') {
                                return (
                                    <Link to="/" key={index} className="">
                                        <div className="overflow-hidden rounded-2xl">
                                            <img className='hover:scale-[1.14] transition-all rounded-xl ' src={item.imgage} alt="" />
                                        </div>
                                        <div className="flex flex-col justify-center items-start gap-1 mt-3 ps-2">
                                            <h4 className="">{item.title}</h4>
                                            <p className="text-[16px] text-neutral-400">{item.type}</p>
                                        </div>
                                    </Link>
                                )
                            }

                            return '';
                        })
                    }
                </div>

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