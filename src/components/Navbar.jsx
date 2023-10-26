import { Link } from 'react-router-dom'
import { useLocation } from 'react-router-dom'
import { useState } from 'react'

// Assets
import navLogo from '../assets/shared/logo.svg'
import navOpen from '../assets/shared/icon-hamburger.svg'
import navClose from '../assets/shared/icon-close.svg'

const Navbar = () => {
  const [navState, setNavState] = useState(false)
  const location = useLocation()

  return (
    <nav className='nav'>
      <div className="nav_logo">
        <img src={navLogo} aria-disabled alt="" />
      </div>
      <div className='nav_separator'></div>
      <div 
        className={`nav_menu_area ${navState === true ? 'active' : ''}`}
        onClick={() => setNavState(false)}
      ></div>
      <button className='nav_menu_btn'>
        <img 
          className={`${navState === false ? 'active' : ''}`}
          src={navOpen} 
          alt="Open Navigation Menu" 
          onClick={() => setNavState(true)}
        />
        <img 
          className={`${navState === true ? 'active' : ''}`}
          src={navClose} 
          alt="Close Navigation Menu" 
          onClick={() => setNavState(false)}
        />
      </button>
      <div className={`nav_bg ${navState === true ? 'active' : ''}`}>
        <ul className='nav_menu'>
          <li>
            <Link 
              to={'/'} 
              aria-description='home page' 
              className={`${location.pathname === '/' ? 'active' : ''}`}
              onClick={() => setNavState(false)}
            >
            <span>00</span>Home
            </Link>
          </li>
          <li>
            <Link 
              to={'/destination'} 
              aria-description='destination page' 
              className={`${location.pathname === '/destination' ? 'active' : ''}`}
              onClick={() => setNavState(false)}
            >
              <span>01</span>Destination
            </Link>
          </li>
          <li>
            <Link 
              to={'/crew'} 
              aria-description='crew page' 
              className={`${location.pathname === '/crew' ? 'active' : ''}`}
              onClick={() => setNavState(false)}
            >
              <span>02</span>Crew
            </Link>
          </li>
          <li>
            <Link 
              to={'/technology'} 
              aria-description='technology page' 
              className={`${location.pathname === '/technology' ? 'active' : ''}`}
              onClick={() => setNavState(false)}
            >
              <span>03</span>Technology
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar