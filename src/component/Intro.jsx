import React from 'react'
import Type from './Typewriter'
import lc from "../assets/lc.png" 
import linkedin from "../assets/linkedin.png"
import tweet from "../assets/twitter.png"
import git from "../assets/github-mark-c791e9551fe4/github-mark/github-mark.png"

import { motion } from 'framer-motion';
import AnchorLink from 'react-anchor-link-smooth-scroll'
 const connect=[{
  "text":"Get in touch",
  "link":"mailto:shrey03505@gmail.com"
 },
{
  "text":"View my work",
  "link":"https://github.com/shreycmd"
}]
const links = [
  { icon: lc, url: "https://leetcode.com/u/johnwicksp003/" },
  { icon: linkedin, url: "https://www.linkedin.com/in/shreyansh-pandey-995805249/ " },
  { icon: tweet, url: "https://x.com/shrey_4O4?t=YPXYy4oYGwnllhap6l6HyA&s=09" },
  { icon: git, url: "https://github.com/shreycmd" }
];
function Intro() {
  return (
    <div className="relative h-screen w-screen max-w-full">
      <div className="bg-custom-radial-gradient flex flex-col justify-center items-center absolute inset-0">
        {/* Animated name with fade-in effect */}
        <motion.p
          className="text-center font-bold text-6xl mt-48"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 2 }}
        >
          Shreyansh Pandey
        </motion.p>
        
        <Type />

        {/* Animated subtitle with delay */}
        <motion.p
          className="mt-10 text-xl text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 2, delay: 0.5 }}
        >
          Full-stack developer crafting seamless web solutions from front to back.
        </motion.p>

        {/* Animated social icons with hover effect */}
        <div className="flex gap-5 mt-10">
        {links.map((link, index) => (
          <a key={index} href={link.url} target="_blank" rel="noopener noreferrer">
            <motion.img
              src={link.icon}
              className="rounded-full h-10 w-10"
              whileHover={{ scale: 1.25, rotate: 10 }}
              whileTap={{ scale: 0.9 }}
            />
          </a>
        ))}
      </div>

        {/* Animated buttons with bounce effect */}
        <div className="w-full  text-center grid grid-cols-1 items-center justify-center md:flex  md:justify-evenly mt-4 ">
          {connect.map((text, index) => (
            <a key={index} href={text.link} target="_blank" rel="noopener noreferrer">
            <motion.button
              key={index}
              className="border-2 border-black rounded-xl mt-4 px-4 md:px-8 py-2 hover:bg-sky-300"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              {text.text}
            </motion.button>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Intro;
