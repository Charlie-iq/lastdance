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
            icon:<FaTh className={` ${isOpen ? 'text-lg' : 'text-xl'}`} />
        },

        {
            path:"/IncomeInsert",
            name:"Income Insert",
            icon:<BiArchiveIn className={` ${isOpen ? 'text-lg' : 'text-xl'}`} />
        },
        {
            path:"/outcomeInsert",
            name:"Outcome Insert",
            icon:<BiArchiveOut className={` ${isOpen ? 'text-lg' : 'text-xl'}`} />
        },
        {
            path:"/IncomeTable",
            name:"Income Record",
            icon:<FaArchive className={` ${isOpen ? 'text-lg' : 'text-xl'}`} />
        },
        {
            path:"/OutcomeTable",
            name:"Outcome Record",
            icon:<BsFillBoxSeamFill className={` ${isOpen ? 'text-lg' : 'text-xl'}`} />
        },
    ];

    return (
        <div className="flex flex-col h-screen">
            <div className="bg-gray-800 text-white flex items-center justify-between px-4 py-3">
                <div className="flex items-center">
                    <FaBars className="cursor-pointer mr-4" onClick={toggle} />
                    <h1 className="text-xl font-bold">CS&IT</h1>
                </div>
            </div>
            <div className="flex flex-grow">
                <div style={{width: isOpen ? "200px" : "50px"}} className="sidebar bg-black text-white transition-all duration-500 overflow-y-auto">
                    {menuItem.map((item, index) => (
                        <NavLink
                            to={item.path}
                            key={index}
                            className="flex items-center px-4 py-3 hover:bg-gray-700 hover:text-white"
                        >
                            {item.icon}
                            <div className={isOpen ? "link_text" : "hidden"}>{item.name}</div>
                        </NavLink>
                    ))}
                </div>
                <main className="flex-1 p-4">{children}</main>
            </div>
        </div>
    );
};

export default Sidebar;
