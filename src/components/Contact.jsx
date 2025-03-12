import React from 'react';

import { Icon } from '@iconify/react/dist/iconify.js';
import Navbar from './Navbar';

const Contact = () => {

	/* window.addEventListener('beforeunload', (event) => {
		event.preventDefault();
		event.returnValue = '';
	}); */

	return (
		<div className='relative w-full'>
			<Navbar />

			{/* main component */}
			<main className='flex-1 p-4 sm:p-7 bg-[#1e1e1f] border border-neutral-700 text-white rounded-2xl'>
				<h1 className="text-3xl sm:text-4xl font-semibold">Contact</h1>
				<hr className="border-2 border-[#ffdb70] rounded-sm w-12 my-5" />

				<iframe
					title="map"
					className="w-full mt-8 rounded-xl border border-neutral-700"
					src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d199344.77310039362!2d80.77735585786097!3d26.84859608364255!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399bfd991f32b16b%3A0x93ccba8909978be7!2sLucknow%2C%20Uttar%20Pradesh!5e1!3m2!1sen!2sin!4v1737829615868!5m2!1sen!2sin"
					width="600"
					height="400"
					allowFullScreen=""
					loading="lazy"
					referrerPolicy="no-referrer-when-downgrade"
				></iframe>

				{/* Contact form */}
				<form onSubmit={(e) => e.preventDefault()} className="flex justify-center gap-4 flex-col my-10 text-sm sm:text-[16px]">
					<h1 className="text-2xl mt-4 font-semibold">Contact Form</h1>

					<div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
						<input type="text" autoComplete='name' className='px-4 py-2.5 border border-neutral-700 bg-transparent hover:bg-[#2b2b2cbf] rounded-xl' placeholder='Full name' />
						<input type="email" className='px-4 py-2.5 border border-neutral-700 bg-transparent hover:bg-[#2b2b2cbf] rounded-lg' placeholder='Email address' />
					</div>

					<textarea className='px-4 py-2.5 border border-neutral-700 bg-transparent hover:bg-[#2b2b2cbf] rounded-lg w-full' rows="5" placeholder='Your message'></textarea>

					<button type="submit" className='flex justify-center items-center gap-3 float-end px-6 py-3 border border-neutral-700 hover:text-black hover:bg-[#ffdb70] bg-transparent rounded-lg w-fit transition-all'>
						<span className='sm:hidden'><Icon icon="lineicons:telegram" width="18" height="18"></Icon></span>
						<span className='hidden sm:block'>Send Message</span>
					</button>
				</form>
			</main>
		</div>
	)
}

export default Contact
