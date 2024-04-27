import React from 'react'
import './about.css'
import { motion } from "framer-motion"
import { pageVariant } from '../homepage/Homepage'
import { Link } from 'react-router-dom'
const About = ({ theme }) => {
  
  return (
    <motion.main
      variants={pageVariant}
      initial="initial"
      animate="visible"
      exit="exit"
      className={`about ${theme}`}>
      <h2>About us</h2>
      <p>Working on this page Until you can explore 
      <Link className='aboutToHome' to='/'><span> Home</span></Link>
      </p>
    </motion.main>
  )
}

export default About
