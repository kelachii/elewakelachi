import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import logo from '../assets/images/logo.png'
import '../styles/header.css'
import Button from './Button'

const Header = () => {
    return (
        <div className='header'>
            <nav className='navig'>

                <div>  <NavLink to='/' className='logo'>
                    <img src={logo} alt='logo' />
                </NavLink></div>

                <div className='nav-links'>
                    <ul className='nav-list'>

                        <li>
                            <Link>Home</Link>
                        </li>

                        <li>
                            <Link>About</Link>
                        </li>

                        <li>
                            <Link>Skills</Link>
                        </li>

                        <li>
                            <Link>Projects</Link>
                        </li>

                        <li>
                            <a href='Kelachi_Elewa_CV.pdf'
                                download="Kelachi_Elewa_CV.pdf">Resume</a>
                        </li>

                    </ul>

                </div>
                <Button />

            </nav >
        </div >
    )
}

export default Header