import React, { useState } from 'react'
import '../make/navbar.css'
import { Search } from "lucide-react"

import Cart from '../assets/cart.png'
import Logo from '../assets/toy.png'
import { Menu, ArrowLeft, Home, Info, LogIn, UserPlus } from "lucide-react"
import { Link, useLocation } from "react-router-dom"

function Navbar() {
    const [isOpen, setIsOpen] = useState(false)
    const location = useLocation()

    return (
        <div className='navbar'>
            <div className="hamburger" onClick={() => setIsOpen(true)}>
                <Menu size={39} />
            </div>
            <div className='logo'>
                <img src={Logo} alt="logo" />
            </div>
            <div className='bar'>


                {isOpen && <div className="overlay" onClick={() => setIsOpen(false)}></div>}

                {/* Sidebar */}
                <div className={`sidebar ${isOpen ? "open" : ""}`}>
                    <div className="sidebar-header">
                        <ArrowLeft size={28} className="back-btn" onClick={() => setIsOpen(false)} />
                        <h2>Menu</h2>
                    </div>

                    <nav className="sidebar-links">
                        <Link className={location.pathname === "/" ? "active" : ""} to="/" onClick={() => setIsOpen(false)}>
                            <Home size={20} /> <span>Home</span>
                        </Link>
                        <Link className={location.pathname === "/about" ? "active" : ""} to="/about" onClick={() => setIsOpen(false)}>
                            <Info size={20} /> <span>About</span>
                        </Link>
                        <Link className={location.pathname === "/sin" ? "active" : ""} to="/sin" onClick={() => setIsOpen(false)}>
                            <LogIn size={20} /> <span>Login</span>
                        </Link>
                        <Link className={location.pathname === "/create" ? "active" : ""} to="/create" onClick={() => setIsOpen(false)}>
                            <UserPlus size={20} /> <span>Signup</span>
                        </Link>
                    </nav>
                </div>

                <div className="search-box">
                    <input type="text" placeholder="Search" />
                    <Search className="icon" />
                </div>
            </div>
            <div className='gpp'>
                <Link to='/sin'><button>Login</button></Link>
                 <Link to='/order'> 
                <div className='sho'>
                  <img src={Cart} alt="cart" />
                </div></Link>
            </div>
        </div>
    )
}

export default Navbar
