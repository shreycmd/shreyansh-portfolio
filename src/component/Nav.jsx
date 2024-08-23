import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import AnchorLink from 'react-anchor-link-smooth-scroll';

function Nav() {
    const [nav, setNav] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 0) {
                setNav(true);
            } else {
                setNav(false);
            }
        };
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className={`fixed top-0 left-0 w-full transition-colors duration-300 z-10 ${nav ? 'bg-white bg-opacity-90 shadow-lg' : 'bg-transparent'} backdrop-blur-sm`}
        >
            <div className='flex justify-between p-5 font-bold text-xl'>
                <h3>SP</h3>
                <div className='flex gap-5'>
                    <AnchorLink href='#about'><h3>About</h3></AnchorLink>
                    <AnchorLink href='#work'><h3>Work</h3></AnchorLink>
                    <AnchorLink href='#projects'><h3>Project</h3></AnchorLink>
                    <a href='mailto:shrey03505@gmail.com'><h3>Contact</h3></a>
                </div>
                <div>
                 <h3>SP</h3>
                </div>
            </div>
        </motion.div>
    );
}

export default Nav;
