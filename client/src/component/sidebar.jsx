import React from 'react'
import {FaHome} from 'react-icons/fa'
import { BiArchiveOut } from "react-icons/bi";
import { BiArchiveIn } from "react-icons/bi";
import { MdDashboard } from "react-icons/md";
import { BiSolidInfoCircle } from "react-icons/bi";

const Sidebar = ({sidebarToggle}) => {
  return (
    <div className={`${sidebarToggle ? "hidden" : "block" } w-64 bg-gray-800 fixed h-full px-4 py-2`}>
    
      <div className='my-2 mb-4'>
        <h1 className='text-2x text-white font-bold'>Admin Dashboard</h1>
      </div>
      <hr/>
      <ul className='mt-3 text-white font-bold'>
        <li className='mb-2 rounded hover:shadow hover:bg-blue-500 py-2'>
          <a href='' className="px-3">
           <FaHome className="inline-block w-6 h-6 mr-2 -mt-1"></FaHome> Home
          </a>
        </li>
      </ul>
      <ul className='mt-3 text-white font-bold'>
        <li className='mb-2 rounded hover:shadow hover:bg-blue-500 py-2'>
          <a href='' className="px-3">
           <BiArchiveIn className="inline-block w-6 h-6 mr-2 -mt-1"></BiArchiveIn> Incoming record
          </a>
        </li>
      </ul>
      <ul className='mt-3 text-white font-bold'>
        <li className='mb-2 rounded hover:shadow hover:bg-blue-500 py-2'>
          <a className="px-3">
           <BiArchiveOut className="inline-block w-6 h-6 mr-2 -mt-1"></BiArchiveOut> Outgoing record 
          </a>
        </li>
        
      </ul>
      <ul className='mt-3 text-white font-bold'>
        <li className='mb-2 rounded hover:shadow hover:bg-blue-500 py-2'>
          <a href='' className="px-3">
           <MdDashboard className="inline-block w-6 h-6 mr-2 -mt-1"></MdDashboard> Admin Dashboard
          </a>
        </li>
      </ul>
      <ul className='mt-3 text-white font-bold'>
        <li className='mb-2 rounded hover:shadow hover:bg-blue-500 py-2'>
          <a href='' className="px-3">
           <BiSolidInfoCircle className="inline-block w-6 h-6 mr-2 -mt-1"></BiSolidInfoCircle> About
          </a>
        </li>
      </ul>
    </div>
  )
}

export default Sidebar
