import React, { useState } from 'react';
import { Icon } from '@iconify/react/dist/iconify.js';

const Aside = () => {
    const [showContact, setShowContact] = useState('hidden');

    const user = {
        name: "Suraj Verma",
        role: "Frontend Developer",
        avatar: "https://i.ibb.co/HqSZ6hj/my-avatar.png",
        contacts: [
            { label: "Email", value: "sv9773529406@gmail.com", link: "mailto:sv9773529406@gmail.com", icon: "solar:letter-bold-duotone" },
            { label: "Phone", value: "+91 97735 29406", link: "tel:+919773529406", icon: "solar:phone-bold-duotone" },
            { label: "Birthday", value: "03 June", icon: "solar:calendar-bold-duotone" },
            { label: "Location", value: "New Delhi, India", link: "https://www.google.com/maps/search/?api=1&query=New+Delhi+India", icon: "solar:map-point-bold-duotone" }
        ],
        socials: [
            { name: "GitHub", url: "https://github.com/surajverma003/", icon: "mdi:github" },
            { name: "LinkedIn", url: "https://www.linkedin.com/in/surajverma003/", icon: "mdi:linkedin" }
        ]
    };

    return (
        <aside className='relative w-full h-fit p-6 sm:p-7 bg-gradient-to-br from-slate-50 to-teal-50/30 dark:from-[#1a1a1b] dark:to-[#1e1e1f] border border-teal-200 dark:border-neutral-700 text-gray-900 dark:text-white rounded-2xl mb-2 sm:mb-3 overflow-hidden shadow-lg'>

            {/* Toggle Button for Mobile */}
            <button onClick={() => setShowContact(showContact === 'hidden' ? 'block' : 'hidden')} type="button"
                className='xl:hidden navRadius-2 absolute top-2 right-2 sm:top-4 sm:right-4 px-4 py-2 sm:px-5 sm:py-2.5 bg-gradient-to-r from-teal-500 to-cyan-500 dark:from-orange-500 dark:to-rose-500 text-white text-xs sm:text-sm font-semibold rounded-xl shadow-lg shadow-teal-500/30 dark:shadow-orange-500/30 hover:shadow-xl transform hover:scale-105 transition-all duration-300 z-10'>
                <span className='hidden sm:block'>{showContact === 'hidden' ? 'Show Contacts' : 'Hide Contacts'}</span>
                <span className={`sm:hidden transition-transform duration-300 ${showContact === 'block' ? 'rotate-180' : ''}`}>
                    <Icon icon="solar:alt-arrow-down-bold" width="20" height="20" />
                </span>
            </button>

            {/* Profile Section */}
            <div className="flex flex-row xl:flex-col xl:justify-center items-center gap-5 xl:gap-0">
                <div className="relative group">
                    <div className="absolute inset-0 bg-gradient-to-br from-teal-500 to-cyan-500 dark:from-orange-500 dark:to-rose-500 rounded-3xl blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-300"></div>
                    <img className='relative bg-gray-200 dark:bg-neutral-700 w-20 sm:w-32 xl:w-40 rounded-3xl xl:mt-10 ring-2 ring-teal-100 dark:ring-orange-500/20 group-hover:ring-teal-400 dark:group-hover:ring-orange-400 transition-all duration-300' src={user.avatar} alt={user.name} />
                </div>

                <div className="flex flex-col gap-2 xl:gap-0 justify-center xl:items-center text-left xl:text-center">
                    <h1 className="text-xl sm:text-2xl xl:text-3xl font-bold bg-gradient-to-r from-teal-600 to-cyan-600 dark:from-orange-400 dark:to-rose-400 bg-clip-text text-transparent xl:my-5">{user.name}</h1>
                    <span className="inline-flex items-center gap-2 text-xs sm:text-sm bg-teal-100 dark:bg-orange-500/20 text-teal-800 dark:text-orange-300 px-3 py-1.5 rounded-full font-semibold mb-3">
                        <Icon icon="solar:code-bold" width="14" height="14" />
                        {user.role}
                    </span>
                </div>
            </div>

            <hr className={`${showContact} xl:flex my-6 xl:my-8 border-t-2 border-teal-200 dark:border-neutral-700`} />

            {/* Contact Information */}
            <div className={`${showContact} xl:block`}>
                <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-1 gap-2">
                    {user.contacts.map((contact, index) => (
                        <div key={index}>
                            {contact.link ? (
                                <a href={contact.link} target={contact.label === "Location" ? "_blank" : "_self"} rel="noreferrer" className="group flex gap-4 p-3 sm:p-4 bg-white dark:bg-neutral-800/60 backdrop-blur-sm rounded-xl border border-teal-100 dark:border-neutral-700 hover:border-teal-400 dark:hover:border-orange-400 hover:shadow-lg hover:shadow-teal-100 dark:hover:shadow-orange-500/10 transition-all duration-300">
                                    <span className="flex-shrink-0 flex justify-center items-center h-12 w-12 bg-gradient-to-br from-teal-100 to-cyan-100 dark:from-orange-500/20 dark:to-rose-500/20 text-teal-600 dark:text-orange-400 rounded-xl group-hover:scale-110 transition-transform duration-300">
                                        <Icon icon={contact.icon} width="24" height="24" />
                                    </span>
                                    <div className="flex-1 min-w-0">
                                        <label className="block text-[10px] sm:text-xs text-gray-500 dark:text-neutral-400 font-bold uppercase tracking-wide mb-1 cursor-pointer">{contact.label}</label>
                                        <p className='text-sm sm:text-base text-gray-800 dark:text-white font-medium group-hover:text-teal-600 dark:group-hover:text-orange-400 transition-colors whitespace-nowrap scroll height-fix overflow-x-auto pb-1'>{contact.value}</p>
                                    </div>
                                </a>) : (
                                <div className="group flex gap-4 p-3 sm:p-4 bg-white dark:bg-neutral-800/60 backdrop-blur-sm rounded-xl border-2 border-teal-100 dark:border-neutral-700 hover:border-teal-400 dark:hover:border-orange-400 hover:shadow-lg hover:shadow-teal-100 dark:hover:shadow-orange-500/10 transition-all duration-300">
                                    <span className="flex-shrink-0 flex justify-center items-center h-12 w-12 bg-gradient-to-br from-teal-100 to-cyan-100 dark:from-orange-500/20 dark:to-rose-500/20 text-teal-600 dark:text-orange-400 rounded-xl">
                                        <Icon icon={contact.icon} width="24" height="24" />
                                    </span>
                                    <div className="flex-1 min-w-0">
                                        <label className="block text-[10px] sm:text-xs text-gray-500 dark:text-neutral-400 font-bold uppercase tracking-wide mb-1 ">{contact.label}</label>
                                        <p className='text-sm sm:text-base text-gray-800 dark:text-white font-medium'>{contact.value}</p>
                                    </div>
                                </div>)
                            }
                        </div>
                    ))}
                </div>

                <hr className="my-6 xl:my-8 border-t-2 border-teal-200 dark:border-neutral-700" />

                {/* Social Links */}
                <div className="flex xl:justify-center items-center gap-2">
                    {user.socials.map((social, index) => (
                        <a key={index} href={social.url} target='_blank' rel='noopener noreferrer' className='group relative flex justify-center items-center h-12 w-12 sm:h-14 sm:w-14 bg-white dark:bg-neutral-800/60 border-2 border-teal-100 dark:border-neutral-700 hover:border-teal-400 dark:hover:border-orange-400 rounded-xl text-gray-600 dark:text-white hover:text-white transition-all duration-300 hover:scale-110 overflow-hidden' aria-label={social.name}>
                            <div className="absolute inset-0 bg-gradient-to-br from-teal-500 to-cyan-500 dark:from-orange-500 dark:to-rose-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                            <Icon icon={social.icon} width="26" height="26" className="relative z-10" />
                        </a>
                    ))}
                </div>
            </div>
        </aside>
    );
};

export default Aside;