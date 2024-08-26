import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { FaBars, FaTimes } from 'react-icons/fa';

function Nav() {
    const [nav, setNav] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 0) {
                setNav(true);
            } else {
                setNav(false);
                setMenuOpen(false);
            }
        };
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className={`fixed top-0 w-full transition-colors duration-300 z-10 ${nav ? 'bg-white bg-opacity-30 md:shadow-lg' : 'bg-transparent'} backdrop-blur-sm`}
        >
            <div className='flex justify-between p-5 font-bold text-xl'>
                <h3 className='text-2xl'>SP</h3>

                {/* Hamburger Icon for Smaller Screens */}
                <div className='md:hidden' onClick={toggleMenu}>
                    {menuOpen ? null : <FaBars size={24} />}
                </div>

                {/* Navigation Links for larger screens */}
                <div className={`hidden md:flex gap-5 md:items-center`}>
                    <AnchorLink href='#about'>
                        <h3>About</h3>
                    </AnchorLink>
                    <AnchorLink href='#work'>
                        <h3>Work</h3>
                    </AnchorLink>
                    <AnchorLink href='#projects'>
                        <h3>Project</h3>
                    </AnchorLink>
                    <a href='mailto:shrey03505@gmail.com'>
                        <h3>Contact</h3>
                    </a>
                </div>

                {/* Placeholder for right-aligned content */}
                <div className='hidden md:block'>
                    <h3>SP</h3>
                </div>
            </div>

            {/* Overlay and Mobile Menu with Animation */}
            <AnimatePresence>
                {menuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: '-100%' }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: '-100%' }}
                        transition={{ duration: 0.5 }}
                        className="fixed top-0 left-0 w-full h-fit z-20 bg-white bg-opacity-80 backdrop-blur-sm md:hidden flex flex-col justify-center items-center"
                    >
                        <div className='absolute top-4 right-5' onClick={toggleMenu}>
                            <FaTimes size={24} />
                        </div>
                        
                        <div className='grid grid-cols-1 text-center gap-5 font-bold'>
                            <AnchorLink href='#about' onClick={() => setMenuOpen(false)}>
                                <h3>About</h3>
                            </AnchorLink>
                            <AnchorLink href='#work' onClick={() => setMenuOpen(false)}>
                                <h3>Work</h3>
                            </AnchorLink>
                            <AnchorLink href='#projects' onClick={() => setMenuOpen(false)}>
                                <h3>Project</h3>
                            </AnchorLink>
                            <a href='mailto:shrey03505@gmail.com' onClick={() => setMenuOpen(false)}>
                                <h3>Contact</h3>
                            </a>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.div>
    );
}

export default Nav;
