import { useState } from 'react'
import { Link } from 'react-router-dom'
import { IoMdNotificationsOutline } from 'react-icons/io'
import user from '../../../assets/user.jpg'

function Header() {
  const [isActive, setIsActive] = useState(false)

  const toggleActiveClass = () => {
    setIsActive(!isActive)
  }

  const removeActive = () => {
    setIsActive(false)
  }

  return (
    <div>
      <header>
        <nav className="header mx-auto">
          <Link href="/" className="logo">
            Cosmediate
          </Link>
          <div
            className={`nav-menu ${isActive ? 'active' : ''}`}
            style={{ width: '500px' }}
          >
            <input className="form-control" type="text" placeholder="Search" />
          </div>
          <div className="profile">
            <IoMdNotificationsOutline />
            <img className="user-image" src={user} alt="user" />
            <p className="user-name">
              Tim Bouwman
              <p className="user-role">Aēstec Amsterdam </p>
            </p>
          </div>
          <div
            className={`hamburger ${isActive ? 'active' : ''}`}
            onClick={toggleActiveClass}
          >
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
          </div>
        </nav>
      </header>
    </div>
  )
}

export default Header
