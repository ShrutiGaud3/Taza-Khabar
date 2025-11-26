import React, { useContext } from 'react'
import ThemeContext from '../context/theme/ThemeContext'

const Footer = () => {

    const {theme} = useContext(ThemeContext)

  return (
    
    <footer className= {theme ? "border border-t border-gray-700 bg-gray-900" : "border border-t border-gray-700 bg-gray-200"}>
      <p className='text-center my-2 text-gray-600 font-bold'>Taza Khabar 2025</p>
    </footer>
  )
}

export default Footer