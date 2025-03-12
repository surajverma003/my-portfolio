import React from 'react';
import Navbar from './Navbar';

const Blog = () => {
    return (
        <div className='relative w-full'>
            <Navbar />

            {/* main component */}
            <main className='p-4 sm:p-5 md:p-7 bg-[#1e1e1f] border border-neutral-700 text-white rounded-2xl'>
                <h1 className="text-3xl sm:text-4xl font-semibold">Blog</h1>
                <hr className="border-2 border-[#ffdb70] rounded-sm w-12 my-5" />

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5 md:gap-7 my-9 mb-0 text-sm sm:text-[16px]">
                    {
                        elements.map((item, index) => {
                            return (
                                <div key={index} className="bg-[#2b2b2cbf] rounded-2xl">
                                    <div className="overflow-hidden rounded-2xl">
                                        <img className='hover:scale-[1.14] transition-all rounded-xl' src={item.imgage} alt="" />
                                    </div>
                                    <div className="flex flex-col justify-center items-start gap-3 mt-3 p-4">
                                        <h4 className="">{item.date}</h4>
                                        <h4 className="text-xl sm:text-2xl font-semibold">{item.title}</h4>
                                        <p className="text-neutral-400">{item.para}</p>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>

            </main>
        </div>
    )
}

export default Blog



const elements = [
    {
        imgage: 'https://i.ibb.co/5rJ1hKc/blog-1.jpg',
        date: 'Design | Fab 23, 2022',
        title: 'Design conferences in 2022',
        para: 'Veritatis et quasi architecto beatae vitae dicta sunt, explicabo.'
    },
    {
        imgage: 'https://i.ibb.co/hLqz9K5/blog-2.jpg',
        date: 'Design | Fab 23, 2022',
        title: 'Best fonts every designer',
        para: 'Sed ut perspiciatis, nam libero tempore, cum soluta nobis est eligendi.'
    },
    {
        imgage: 'https://i.ibb.co/Psk67g4/blog-3.jpg',
        date: 'Design | Fab 23, 2022',
        title: 'Design digest #80',
        para: 'Excepteur sint occaecat cupidatat no proident, quis nostrum exercitationem ullam corporis suscipit.'
    },
    {
        imgage: 'https://i.ibb.co/zJVgZMF/blog-4.jpg',
        date: 'Design | Fab 23, 2022',
        title: 'UI interactions of the week',
        para: 'Enim ad minim veniam, consectetur adipiscing elit, quis nostrud exercitation ullamco laboris nisi.'
    },
    {
        imgage: 'https://i.ibb.co/0hp3qJX/blog-5.jpg',
        date: 'Design | Fab 23, 2022',
        title: 'The forgotten art of spacing',
        para: 'Maxime placeat, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    },
    {
        imgage: 'https://i.ibb.co/QcPtXvn/blog-6.jpg',
        date: 'Design | Fab 23, 2022',
        title: 'Design digest #79',
        para: 'Optio cumque nihil impedit uo minus quod maxime placeat, velit esse cillum.'
    }
]