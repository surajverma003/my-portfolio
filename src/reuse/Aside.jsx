import { Icon } from '@iconify/react/dist/iconify.js';
import React, { useState } from 'react';

const Aside = () => {
    const [showContact, setShowContact] = useState('hidden');
    return (
        <>
            {/* aside */}
            <aside className='relative w-full h-fit p-7 bg-[#1e1e1f] border border-neutral-700 text-white rounded-2xl mb-4 overflow-hidden'>

                <button onClick={() => setShowContact(showContact === 'hidden' ? 'block' : 'hidden')} type="button" className='xl:hidden navRadius-2 linearGradientSowContacts absolute top-0 right-0 text-sm px-3 py-1.5 sm:px-5 sm:py-2.5 bg-[#2b2b2cbf] border border-neutral-700'>
                    <span className='hidden sm:block'>Show Contacts</span>
                    <span className='sm:hidden'><Icon icon="mingcute:down-fill" width="24" height="24"></Icon></span>
                </button>

                <div className="flex flex-row xl:flex-col xl:justify-center items-center">
                    <img className='bg-neutral-700 w-28 sm:w-32 rounded-3xl xl:mt-10 me-5 xl:me-0' src="https://i.ibb.co/HqSZ6hj/my-avatar.png" alt="" />
                    <div className="flex flex-col gap-3 justify-center xl:items-center">
                        <h1 className="texxl sm:text-2xl font-semibold xl:my-5">Suraj Verma</h1>
                        <p className="bg-neutral-600 px-3 py-1 w-fit rounded-md text-[10px] sm:text-[13px]">FULL STACK Developer</p>
                    </div>
                </div>

                <hr className={`${showContact} xl:flex my-8 border-neutral-700`} />

                <div className={`${showContact} xl:block`}>
                    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-1 gap-6 text-sm sm:text-[16px]">
                        <div className="flex gap-5">
                            <span className="flex-shrink-0 flex justify-center items-center h-14 w-14 bg-[#2b2b2cbf] border border-neutral-700 rounded-md"><Icon icon="material-symbols:mark-email-unread" width="24" height="24" /></span>
                            <div className="">
                                <label className="text-[sm] text-slate-400 font-semibold uppercase">Email</label>
                                <p className='text-slate-200 break-all'>sv9876543210@gmail.com</p>
                            </div>
                        </div>

                        <div className="flex gap-5">
                            <span className='flex justify-center items-center h-14 w-14 bg-[#2b2b2cbf] border border-neutral-700 rounded-md'><Icon icon="proicons:phone" width="24" height="24"></Icon></span>
                            <div className="">
                                <label className="text-sm text-slate-400 font-semibold uppercase">Phone</label>
                                <p className='text-slate-200'>+919876543210</p>
                            </div>
                        </div>

                        <div className="flex gap-5">
                            <span className='flex justify-center items-center h-14 w-14 bg-[#2b2b2cbf] border border-neutral-700 rounded-md'><Icon icon="uil:calender" width="24" height="24"></Icon></span>
                            <div className="">
                                <label className="text-sm text-slate-400 font-semibold uppercase">Birthday</label>
                                <p className='text-slate-200'>1 January 2000</p>
                            </div>
                        </div>

                        <div className="flex gap-5">
                            <span className='flex justify-center items-center h-14 w-14 bg-[#2b2b2cbf] border border-neutral-700 rounded-md'><Icon icon="mdi:location" width="24" height="24"></Icon></span>
                            <div className="">
                                <label className="text-sm text-slate-400 font-semibold uppercase">Location</label>
                                <p className='text-slate-200'>Lucknow, India</p>
                            </div>
                        </div>
                    </div>

                    <hr className="my-8 border-neutral-700" />

                    <div className="flex xl:justify-center items-center gap-3 mt-7 mb-3 text-slate-400">
                        <span className='hover:text-[#ffdb70] transition-all'><Icon icon="ri:facebook-fill" width="20" height="20"></Icon></span>
                        <span className='hover:text-[#ffdb70] transition-all'><Icon icon="mingcute:twitter-fill" width="20" height="20"></Icon></span>
                        <span className='hover:text-[#ffdb70] transition-all'><Icon icon="ri:instagram-fill" width="20" height="20"></Icon></span>
                    </div>
                </div>
            </aside >
        </>
    )
}

export default Aside
