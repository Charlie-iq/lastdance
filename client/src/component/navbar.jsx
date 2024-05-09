import React from 'react'
import { FaBars, FaSearch,FaBell, FaUserCircle } from 'react-icons/fa'

const  Navbar = ({sidebarToggle,setSidebarToggle}) => {
  return (
    <nav className='bg-gray-800 px-4 py-3 flex justify-between '>
      <div className='flex items-center text-xl'>
        <FaBars className='text-white me-4 cursor-pointer' 
        onClick={ ()=> setSidebarToggle(!sidebarToggle)}/>
        <span className='text-white font-semibold flex justify-center '>Al-Anbar University</span>
      </div>

    </nav>
  )
}

export default Navbar
