import React, { useState } from 'react';
import {
    FaTh,
    FaBars,
    FaUserAlt,
    FaRegChartBar,
    FaCommentAlt,
    FaShoppingBag,
    FaThList,
    FaArchive
 }from "react-icons/fa";
import { BiArchiveOut , BiArchiveIn } from "react-icons/bi";
import { BsFillBoxSeamFill } from "react-icons/bs";
import { NavLink } from 'react-router-dom';

const Sidebar = ({children}) => {
    const[isOpen ,setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);
    const menuItem=[
        {
            path:"/",
            name:"Home",
            icon:<FaTh/>
        },

        {
            path:"/IncomeInsert",
            name:"IncomeInsert",
            icon:<BiArchiveIn/>
        },
        {
            path:"/outcomeInsert",
            name:"outcomeInsert",
            icon:<BiArchiveOut/>
        },
        {
            path:"/IncomeTable",
            name:"Income Record",
            icon:<FaArchive />
        },
        {
            path:"/OutcomeTable",
            name:"Outcome Record",
            icon:<BsFillBoxSeamFill />
        },
    ];

    return (
        <div className="container  flex">
           <div style={{width: isOpen ? "200px" : "50px"}} className="sidebar  bg-black text-white h-screen transition-all duration-500">
               <div className="mt-10 flex items-center p-5 cursor:pointer">
                   <h1 style={{display: isOpen ? "block" : "none"}} className=" text-2xl">CS&IT</h1>
                <div style={{marginLeft: isOpen ? "50px" : "0px", cursor: 'pointer'}} className="flex items-center ml-10">
                <FaBars onClick={toggle}/>
                </div>

               </div>
               {menuItem.map((item, index) => (
                   <NavLink
                       to={item.path}
                       key={index}
                       className=" flex items-center px-5 py-3 gap-3 transition-all duration-500 hover:bg-blue-400 hover:text-black"
                       
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