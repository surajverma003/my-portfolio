import React, { useEffect, useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import Navbar from './Navbar';
import { Icon } from '@iconify/react/dist/iconify.js';

// Fix for default marker icon in React-Leaflet
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
	iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
	iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
	shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
});

const Contact = () => {
	const [isDarkMode, setIsDarkMode] = useState(false);
	const position = [28.6139, 77.2090]; // New Delhi coordinates

	useEffect(() => {
		const darkModeCheck = document.documentElement.classList.contains('dark');
		setIsDarkMode(darkModeCheck);

		// Listen for theme changes
		const observer = new MutationObserver((mutations) => {
			mutations.forEach((mutation) => {
				if (mutation.attributeName === 'class') {
					const isDark = document.documentElement.classList.contains('dark');
					setIsDarkMode(isDark);
				}
			});
		});

		observer.observe(document.documentElement, {
			attributes: true,
		});

		return () => observer.disconnect();
	}, []);

	return (
		<div className='relative w-full'>
			<Navbar />

			{/* main component */}
			<main className='flex-1 p-4 sm:p-7 bg-gradient-to-br from-slate-50 to-teal-50/30 dark:from-[#1a1a1b] dark:to-[#1e1e1f] border border-teal-200 dark:border-neutral-700 text-gray-900 dark:text-white rounded-2xl shadow-sm'>
				
				{/* Header Section */}
				<div className="mb-3">
					<h1 className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-teal-600 to-cyan-600 dark:from-orange-400 dark:to-rose-400 bg-clip-text text-transparent">Contact</h1>
					<p className="text-sm sm:text-base text-gray-600 dark:text-neutral-400 mt-2">Get in touch with me</p>
				</div>
				<hr className="border-2 border-teal-600 dark:border-orange-400 rounded-full w-16 mb-10" />

				{/* Contact Info Cards */}
				<div className="grid grid-cols-1 md:grid-cols-3 gap-2 mb-10">
					<div className="group relative bg-white dark:bg-neutral-800/60 backdrop-blur-sm p-5 rounded-2xl border-2 border-teal-100 dark:border-neutral-700 hover:border-teal-400 dark:hover:border-orange-400 hover:shadow-xl hover:shadow-teal-100 dark:hover:shadow-orange-500/10 transition-all duration-300 hover:-translate-y-0.5">
						<div className="flex items-start gap-4">
							<div className='flex-shrink-0 flex justify-center items-center h-12 w-12 bg-gradient-to-br from-teal-100 to-cyan-100 dark:from-orange-500/20 dark:to-rose-500/20 text-teal-600 dark:text-orange-400 rounded-xl group-hover:scale-110 transition-transform duration-300'>
								<Icon icon="solar:letter-bold-duotone" width="24" height="24" />
							</div>
							<div className="overflow-hidden">
								<h3 className="text-xs text-gray-500 dark:text-neutral-400 font-medium mb-1">EMAIL</h3>
								<p className="text-sm sm:text-base text-gray-800 dark:text-white font-semibold overflow-x-auto scroll pb-1 scroll height-fix">sv9773529406@gmail.com</p>
							</div>
						</div>
					</div>

					<div className="group relative bg-white dark:bg-neutral-800/60 backdrop-blur-sm p-5 rounded-2xl border-2 border-teal-100 dark:border-neutral-700 hover:border-teal-400 dark:hover:border-orange-400 hover:shadow-xl hover:shadow-teal-100 dark:hover:shadow-orange-500/10 transition-all duration-300 hover:-translate-y-0.5">
						<div className="flex items-start gap-4">
							<div className='flex-shrink-0 flex justify-center items-center h-12 w-12 bg-gradient-to-br from-teal-100 to-cyan-100 dark:from-orange-500/20 dark:to-rose-500/20 text-teal-600 dark:text-orange-400 rounded-xl group-hover:scale-110 transition-transform duration-300'>
								<Icon icon="solar:phone-bold-duotone" width="24" height="24" />
							</div>
							<div>
								<h3 className="text-xs text-gray-500 dark:text-neutral-400 font-medium mb-1">PHONE</h3>
								<p className="text-sm sm:text-base text-gray-800 dark:text-white font-semibold">+91 977352 9406</p>
							</div>
						</div>
					</div>

					<div className="group relative bg-white dark:bg-neutral-800/60 backdrop-blur-sm p-5 rounded-2xl border-2 border-teal-100 dark:border-neutral-700 hover:border-teal-400 dark:hover:border-orange-400 hover:shadow-xl hover:shadow-teal-100 dark:hover:shadow-orange-500/10 transition-all duration-300 hover:-translate-y-0.5">
						<div className="flex items-start gap-4">
							<div className='flex-shrink-0 flex justify-center items-center h-12 w-12 bg-gradient-to-br from-teal-100 to-cyan-100 dark:from-orange-500/20 dark:to-rose-500/20 text-teal-600 dark:text-orange-400 rounded-xl group-hover:scale-110 transition-transform duration-300'>
								<Icon icon="solar:map-point-bold-duotone" width="24" height="24" />
							</div>
							<div>
								<h3 className="text-xs text-gray-500 dark:text-neutral-400 font-medium mb-1">LOCATION</h3>
								<p className="text-sm sm:text-base text-gray-800 dark:text-white font-semibold">New Delhi, India</p>
							</div>
						</div>
					</div>
				</div>

				{/* Map Section */}
				<div className="mb-10">
					<div className="flex justify-start items-center gap-4 mb-6">
						<div className='flex justify-center items-center h-12 sm:h-14 w-12 sm:w-14 bg-gradient-to-br from-teal-500 to-cyan-500 dark:from-orange-500 dark:to-rose-500 text-white rounded-2xl shadow-lg shadow-teal-500/30 dark:shadow-orange-500/30 transform hover:scale-105 transition-transform duration-300'>
							<Icon icon="solar:map-bold-duotone" width="28" height="28" />
						</div>
						<div>
							<h3 className="text-xl sm:text-2xl font-bold text-gray-800 dark:text-white">Location Map</h3>
							<p className="text-xs text-gray-500 dark:text-neutral-400">Find me here</p>
						</div>
					</div>

					<div className="w-full rounded-2xl overflow-hidden border-2 border-teal-200 dark:border-neutral-700 h-[300px] sm:h-[400px] shadow-xl">
						<MapContainer center={position} zoom={11} style={{ height: '100%', width: '100%' }} scrollWheelZoom={false}>
							<TileLayer attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors' url={isDarkMode ? 'https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png' : 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'}/>
							<Marker position={position}>
								<Popup><div className="text-gray-900 font-semibold"><p>New Delhi, India</p></div></Popup>
							</Marker>
						</MapContainer>
					</div>
				</div>

				{/* Contact Form */}
				<div>
					<div className="flex justify-start items-center gap-4 mb-8">
						<div className='flex justify-center items-center h-12 sm:h-14 w-12 sm:w-14 bg-gradient-to-br from-teal-500 to-cyan-500 dark:from-orange-500 dark:to-rose-500 text-white rounded-2xl shadow-lg shadow-teal-500/30 dark:shadow-orange-500/30 transform hover:scale-105 transition-transform duration-300'>
							<Icon icon="solar:chat-round-bold-duotone" width="28" height="28" />
						</div>
						<div>
							<h3 className="text-xl sm:text-2xl font-bold text-gray-800 dark:text-white">Contact Form</h3>
							<p className="text-xs text-gray-500 dark:text-neutral-400">Send me a message</p>
						</div>
					</div>

					<form onSubmit={(e) => e.preventDefault()} className="bg-white dark:bg-neutral-800/60 backdrop-blur-sm p-6 sm:p-8 rounded-2xl border-2 border-teal-100 dark:border-neutral-700 hover:shadow-xl  transition-all duration-300">
						<div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-5">
							<div className="relative">
								<div className="absolute left-4 top-1/2 -translate-y-1/2 text-teal-600 dark:text-orange-400">
									<Icon icon="solar:user-bold" width="20" height="20" />
								</div>
								<input type="text" autoComplete='name' className='w-full pl-12 pr-4 py-3.5 border-2 border-teal-100 dark:border-neutral-700 bg-gray-50 dark:bg-neutral-900/50 hover:border-teal-300 dark:hover:border-orange-400/50 focus:border-teal-500 dark:focus:border-orange-400 focus:outline-none rounded-xl text-gray-800 dark:text-white placeholder:text-gray-500 dark:placeholder:text-neutral-400 transition-all duration-300' placeholder='Full name' />
							</div>

							<div className="relative">
								<div className="absolute left-4 top-1/2 -translate-y-1/2 text-teal-600 dark:text-orange-400">
									<Icon icon="solar:letter-bold" width="20" height="20" />
								</div>
								<input type="email" className='w-full pl-12 pr-4 py-3.5 border-2 border-teal-100 dark:border-neutral-700 bg-gray-50 dark:bg-neutral-900/50 hover:border-teal-300 dark:hover:border-orange-400/50 focus:border-teal-500 dark:focus:border-orange-400 focus:outline-none rounded-xl text-gray-800 dark:text-white placeholder:text-gray-500 dark:placeholder:text-neutral-400 transition-all duration-300' placeholder='Email address' />
							</div>
						</div>

						<div className="relative mb-6">
							<div className="absolute left-4 top-4 text-teal-600 dark:text-orange-400">
								<Icon icon="solar:document-text-bold" width="20" height="20" />
							</div>
							<textarea className='w-full pl-12 pr-4 py-3.5 border-2 border-teal-100 dark:border-neutral-700 bg-gray-50 dark:bg-neutral-900/50 hover:border-teal-300 dark:hover:border-orange-400/50 focus:border-teal-500 dark:focus:border-orange-400 focus:outline-none rounded-xl text-gray-800 dark:text-white placeholder:text-gray-500 dark:placeholder:text-neutral-400 transition-all duration-300 resize-none' rows="6" placeholder='Your message'></textarea>
						</div>

						<button type="submit" className='group w-full sm:w-auto inline-flex justify-center items-center gap-2.5 px-8 py-3.5 bg-gradient-to-r from-teal-500 to-cyan-500 dark:from-orange-500 dark:to-rose-500 text-white font-semibold rounded-xl shadow-lg shadow-teal-500/30 dark:shadow-orange-500/30 hover:shadow-xl hover:shadow-teal-500/40 	 transition-all duration-300'>
							<span>Send Message</span>
							<Icon icon="solar:plain-2-bold" width="20" height="20" className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
						</button>
					</form>
				</div>
			</main>
		</div>
	)
}

export default Contact