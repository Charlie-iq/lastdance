import React, { useState } from 'react';
import {
    FaTh,
    FaBars,
    FaUserAlt,
    FaRegChartBar,
    FaCommentAlt,
    FaShoppingBag,
    FaThList
}from "react-icons/fa";
import { NavLink } from 'react-router-dom';

const Sidebar = ({children}) => {
    const[isOpen ,setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);
    const menuItem=[
        {
            path:"/",
            name:"Dashboard",
            icon:<FaTh/>
        },
        {
            path:"/about",
            name:"About",
            icon:<FaUserAlt/>
        },
        {
            path:"/analytics",
            name:"Analytics",
            icon:<FaRegChartBar/>
        },
        {
            path:"/comment",
            name:"Comment",
            icon:<FaCommentAlt/>
        },
        {
            path:"/product",
            name:"Product",
            icon:<FaShoppingBag/>
        },
        {
            path:"/productList",
            name:"Product List",
            icon:<FaThList/>
        }
    ];

    return (
        <div className="container flex">
           <div style={{width: isOpen ? "200px" : "50px"}} className="sidebar  bg-black text-white h-screen transition-all duration-500">
               <div className="mt-10 flex items-center p-5 cursor:pointer">
                   <h1 style={{display: isOpen ? "block" : "none"}} className=" text-2xl">CS&IT</h1>
                   <div style={{marginLeft: isOpen ? "50px" : "0px"}} className="cursor:pointer flex items-center ml-10">
                       <FaBars className='cursor:pointer'  onClick={toggle}/>
                   </div>
               </div>
               {menuItem.map((item, index) => (
                   <NavLink
                       to={item.path}
                       key={index}
                       className="link flex items-center px-5 py-3 gap-3 transition-all duration-500 hover:bg-blue-400 hover:text-black"
                       ClassName="active bg-blue-400 text-black"
                   >
                       <div className="icon text-xl">{item.icon}</div>
                       <div style={{display: isOpen ? "block" : "none"}} className="link_text text-lg">{item.name}</div>
                   </NavLink>
               ))}
           </div>
           <main className="w-full p-20">{children}</main>
        </div>
    );
};

export default Sidebar;