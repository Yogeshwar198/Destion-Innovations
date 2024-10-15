import React, { useContext } from 'react'
import { FaCog, FaHome, FaPoll, FaRegFileAlt } from 'react-icons/fa'
import { CgProfile } from "react-icons/cg";
import { StoreContext } from '../context/store'
import { NavLink } from 'react-router-dom'


const Sidebar = () => {
    const { sidebarToggle } = useContext(StoreContext)

    

   

    return  (
        <div className={`${sidebarToggle ? "hidden" : "block"} w-64 bg-gray-800 fixed h-full px-4 py-2`} >
            <div className='my-2 mb-4'>
                <h1 className='text-2xl text-white font-bold'>Dashboard</h1>
            </div>
            <hr />
            <ul className='mt-3 text-white font-bold'>
                <li className='mb-2 rounded hover:shadow hover:bg-blue-500 py-2'>
                    <NavLink to='/' className='px-3'>
                        <FaHome className='inline-block w-6 h-6 mr-2 -mt-2'></FaHome>
                        Home
                    </NavLink>
                </li>
                <li className='mb-2 rounded hover:shadow hover:bg-blue-500 py-2'>
                    <NavLink to='/todo' className='px-3 '>
                        <FaRegFileAlt className='inline-block w-6 h-6 mr-2 -mt-2'></FaRegFileAlt>
                        Todo
                    </NavLink>
                </li>
                <li className='mb-2 rounded hover:shadow hover:bg-blue-500 py-2'>
                    <NavLink to='/report' className='px-3 '>
                        <FaPoll className='inline-block w-6 h-6 mr-2 -mt-2'></FaPoll>
                        Report
                    </NavLink>
                </li>
                <li className='mb-2 rounded hover:shadow hover:bg-blue-500 py-2'>
                    <NavLink to='/profile' className='px-3 '>
                        <CgProfile className='inline-block w-6 h-6 mr-2 -mt-2'></CgProfile>
                        Profile
                    </NavLink>
                </li>
                <li className='mb-2 rounded hover:shadow hover:bg-blue-500 py-2'>
                    <NavLink to='/setting' className='px-3 '>
                        <FaCog className='inline-block w-6 h-6 mr-2 -mt-2'></FaCog>
                        Setting
                    </NavLink>
                </li>
            </ul>
        </div >
    ) 
}

export default Sidebar