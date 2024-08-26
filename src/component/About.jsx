import React from 'react';
import profile from "../assets/profile.jpg";
import Button from './Button';
import abmail from "../assets/abmail.png";
import abtw from "../assets/abtw.png";
import ablink from "../assets/ablink.png";
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

function About() {
  const links = [
    { icon: abmail, url: "mailto:shrey03505@gmail.com" },
    { icon: ablink, url: "https://www.linkedin.com/in/shreyansh-pandey-995805249/" },
    { icon: abtw, url: "https://x.com/shrey_4O4?t=YPXYy4oYGwnllhap6l6HyA&s=09" }
  ];
  const tstack = ["HTML", "CSS", "JavaScript", "React", "Node", "Express", "TypeScript", "Tailwind CSS", "NEXT JS", "Axios", "Framer Motion", "GIT", "ZOD", "MONGODB", "POSTGRES", "Prisma"];
  const { ref, inView } = useInView({
    triggerOnce: true, // Only trigger once when it comes into view
    threshold: 0.20,   // Trigger when 20% of the component is visible
  });

  const imageVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: { scale: 1, opacity: 1, rotate: 0, transition: { duration: 0.8 } }
  };

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { delay: 0.2, duration: 0.8, staggerChildren: 0.2 } }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const iconVariants = {
    whileHover: { scale: 1.2, rotate: 12, transition: { type: "spring", stiffness: 300 } }
  };

  return (
    <motion.div 
      id='about'
      ref={ref} 
      className='bg-custom-radial-gradient2 min-h-screen w-full max-w-full overflow-x-hidden'
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={containerVariants}
    >
      <h1 className='text-center text-5xl font-bold mt-16 px-4'>About Me</h1>
      <div className='flex flex-col md:flex-row items-center justify-center mt-6 px-4'>
        <motion.div variants={imageVariants} className='md:mr-8 mb-6 md:mb-0'>
          <img 
            src={profile} 
            alt="Profile picture of Shreyansh" 
            className='rounded-full h-[250px] w-[250px] md:h-[384px] md:w-[384px] shadow-2xl shadow-gray-600' 
            loading="lazy"
          />
        </motion.div>
        <motion.div variants={itemVariants} className='text-center md:text-left'>
          <div className='text-3xl text-blue-400 font-bold mb-4'>Hi, I'm Shreyansh</div>
          <p className='text-lg font-thin leading-loose mb-6'>
            I'm a Full Stack Developer, currently a student at Madan Mohan Malviya University of Technology.<br />
            I focus on building modern and dynamic web-apps that enhance lead generation and user experience.<br />
            I'm passionate about clean code and innovative design, always striving to create seamless digital experiences that make a real impact.
          </p>
          <div>
            <div className='text-3xl text-blue-400 mb-4'>Tech Stack</div>
            <motion.div className='grid grid-cols-3 lg:grid-cols-4 gap-4' variants={containerVariants}>
              {tstack.map((val, index) => (
                <motion.div key={index} variants={itemVariants}>
                  <Button val={val} />
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
      <div className='flex justify-center gap-6 mt-20 px-4'>
        {links.map((link, index) => (
          <a 
            key={index} 
            href={link.url} 
            target={link.url.startsWith("mailto:") ? "_self" : "_blank"} 
            rel="noopener noreferrer"
          >
            <motion.img 
              src={link.icon} 
              alt="Social Icon"
              variants={iconVariants}
              whileHover="whileHover"
              className="rounded-full h-8 w-8 md:h-10 md:w-10"
            />
          </a>
        ))}
      </div>
    </motion.div>
  );
}

export default About;
