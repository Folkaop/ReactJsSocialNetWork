import React from 'react'
import s from './Navbar.module.css'
import {NavLink} from "react-router-dom";

const Navbar = () => {
    return  <nav className={s.Navbar}>
        <div>
            <NavLink to="/profile" className={x => x.isActive ? s.activeLink : s.Item}>Profile</NavLink>
        </div>
        <div>
            <NavLink to="/dialogs" className={x => x.isActive ? s.activeLink : s.Item}>Messages</NavLink>
        </div>
        <div>
            <NavLink to="/news" className={x => x.isActive ? s.activeLink : s.Item}>News</NavLink>
        </div>
        <div>
            <NavLink to="/music" className={x => x.isActive ? s.activeLink : s.Item}>Music</NavLink>
        </div>
        <div>
            <NavLink to="/settings" className={x => x.isActive ? s.activeLink : s.Item}>Settings</NavLink>
        </div>
    </nav>
}

export default Navbar;