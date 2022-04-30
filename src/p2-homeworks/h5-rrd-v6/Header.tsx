import React from 'react'
import { NavLink } from 'react-router-dom'
import {PATH} from './Pages'
import style from './style.module.css'

function Header() {
    return (
        <div className={style.navContainer}>
            <nav className={style.hidden}>
                <NavLink to={PATH.PRE_JUNIOR} className={style.navLinks} style={({ isActive }) =>
                    (isActive ? {color: 'red'} : {color: 'grey'})}>
                    Pre-Junior
                </NavLink>
                <NavLink to={PATH.JUNIOR} className={style.navLinks} style={({ isActive }) =>
                    (isActive ? {color: 'red'} : {color: 'grey'})}>
                    Junior
                </NavLink>
                <NavLink to={PATH.JUNIOR_PLUS} className={style.navLinks} style={({ isActive }) =>
                    (isActive ? {color: 'red'} : {color: 'grey'})}>
                    Junior+
                </NavLink>
                <div className={style.clicker}>x</div>
            </nav>

        </div>
    )
}

export default Header
