import { Icon } from '@iconify/react/dist/iconify.js'
import React from 'react';

const Front = () => {
    return (
        <div className='poppins py-7 px-5 h-screen'>
            <div className="max-w-screen-lg mx-auto grid items-center grid-cols-1 lg:grid-cols-2">

                <div className="">
                    <h1 className="text-7xl font-bold max-w-[30rem] my-4 uppercase">Your Feet Deserve The Best</h1>
                    <p className="max-w-80">Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni reprehenderit rem iure tempora tempore sapiente tenetur aperiam voluptate quibusdam exercitationem!</p>

                    <div className="flex items-center gap-2 my-5">
                        <button type="button" className='bg-red-600 hover:bg-red-500 active:bg-red-600 px-4 text-white py-2.5'>Shop now</button>
                        <button type="button" className='bg-transparent hover:bg-white active:bg-white/70 hover:text-black border border-white/40 px-4 py-2.5'>Category</button>
                    </div>

                    <p className="">Also Available On</p>
                    <div className="flex items-center gap-2">
                        <span><Icon icon="lineicons:amazon" width="50" height="50"></Icon></span>
                        <span><Icon icon="arcticons:meesho" width="40" height="40"></Icon></span>
                    </div>
                </div>

                <div className="flex justify-center items-center">
                    <img className='w-[30rem]' style={{ filter: 'drop-shadow(30px 10px 4px #666)' }} src="https://i.ibb.co/JHJyfT0/png-transparent-adidas-shoe-sneakers-women-shoes-purple-white-violet-removebg-preview.png" alt="" />
                </div>

            </div>
        </div>
    )
}

export default Front
