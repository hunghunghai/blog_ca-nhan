import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Navbar() {
    const styteNav = ({isActive}) => {
        return {
            background: isActive ? 'blue' : 'white',
            color: isActive ? 'white' : 'black',
            borderRadius: isActive?'10px':'0'
        }
    }
    return (
        <ul className="nav justify-content-end my-5">
            <li className="nav-item">
                <NavLink className="nav-link" style={styteNav} to={'/'}>
                    Home
                </NavLink>
            </li>
            <li className="nav-item">
                <NavLink className="nav-link" style={styteNav} to={'/About'} >
                    About
                </NavLink>
            </li>
            <li className="nav-item">
                <NavLink className="nav-link" style={styteNav} to={'/User'} >
                    User
                </NavLink>
            </li>
            <li className="nav-item">
                <NavLink className="nav-link" style={styteNav} to={'/Contact'}>
                    Contact
                </NavLink>
            </li>
        </ul>
    )
}
