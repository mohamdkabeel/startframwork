import React from 'react'
import { Link, NavLink } from 'react-router-dom'

export default function Navbar() {
    return <>
        <nav className='container flex justify-around items-center py-10 fixed top-0 left-0 right-0 mx-auto' >
            <div className="logo text-white">
                <NavLink to="" className='h1'>
                    START FRAMWORK
                </NavLink>
            </div>
            <div className="lists">
                <ul className='flex justify-between items-center px-5'>
                    <li className='list text-white px-7' ><NavLink to="about">About</NavLink></li>
                    <li className='list text-white px-7' ><NavLink to="portfolio">Portfolio</NavLink></li>
                    <li className='list text-white px-7' ><NavLink to="contact">Contact</NavLink></li>
                </ul>
            </div>
        </nav>
    </>
}
