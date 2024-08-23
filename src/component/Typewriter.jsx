import React from 'react'
import { useTypewriter, Cursor } from 'react-simple-typewriter'


const Type = () => {
  const [text] = useTypewriter({
    words: ['Frontend DEV', 'Backend DEV', 'API Integration','Full Stack Dev'],
    loop: 110000,
   
  })

  return (
    <div className='App text-center text-3xl font-semiboldbold text-sky-400 mt-10'>
      <span>{text}</span>
      <Cursor cursorColor='black' />
    </div>
  )
}
export default Type