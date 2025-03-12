import './App.css';
import React from 'react';

import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Portfolio from './components/Portfolio';
import About from './components/About';
import Resume from './components/Resume';
import Blog from './components/Blog';
import Contact from './components/Contact';
import Aside from './reuse/Aside';


const App = () => {

    return (
        <div className="max-w-screen-xl mx-auto">
            <BrowserRouter>
                <div className='poppins xl:flex gap-4 xl:gap-6 px-4 my-4 mt-20 md:mt-4 xl:mx-0 xl:my-20 min-h-screen relative'>
                    <div className="aside-scroll h-full xl:sticky top-0"><Aside /></div>
                    <div className="flex-1 h-full xl:mb-4 overflow-hidden">
                        <Routes> 
                            <Route exact path='/my-portfolio' element={<About />} />
                            <Route exact path='/about' element={<About />} />
                            <Route exact path='/resume' element={<Resume />} />
                            <Route exact path='/portfolio' element={<Portfolio />} />
                            <Route exact path='/blog' element={<Blog />} />
                            <Route exact path='/contact' element={<Contact />} />
                        </Routes>
                    </div>
                </div>
            </BrowserRouter>
        </div>
    )
}

export default App
