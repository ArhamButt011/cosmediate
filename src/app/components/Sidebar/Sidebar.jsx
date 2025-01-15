import React from 'react'
import {
  CDBSidebar,
  CDBSidebarFooter,
  CDBSidebarContent,
  CDBSidebarMenu,
} from 'cdbreact'
import { NavLink } from 'react-router-dom'
import { LuLogOut } from 'react-icons/lu'
import { RxDashboard } from 'react-icons/rx'
import { CiMail } from 'react-icons/ci'
import { MdOutlineDateRange } from 'react-icons/md'
import { CgProfile } from 'react-icons/cg'
import { IoSettingsOutline } from 'react-icons/io5'
import Header from '../Header/Header'

const MySidebar = () => {
  return (
    <div>
      <Header />
      {/* <Navbar className="Nav" bg="dark" expand="lg" variant="dark">
        <Navbar.Brand className="app-logo mt-3" href="/users">
          Varsity Hub
        </Navbar.Brand>
        <div className="d-flex justify-content-end ml-auto pr-5">
          <button
            className="btn btn-primary-custom"
            // onClick={handleLogoutClick}
          >
            Logout
          </button>
        </div>
      </Navbar> */}
      <div className="sidebar">
        <CDBSidebar textColor="#333" backgroundColor="#f0f0f0">
          <CDBSidebarContent>
            <CDBSidebarMenu style={{ textAlign: 'center' }}>
              {/* <NavLink to="/" activeClassName="activeClicked">
                <CDBSidebarMenuItem icon="home">Home</CDBSidebarMenuItem>
              </NavLink> */}
              <NavLink to="/dashboard" activeClassName="activeClicked">
                <div className="menu-item">
                  <RxDashboard className="sidebar-icons" />
                  <div className="sidebar-text">DASHBOARD</div>
                </div>
              </NavLink>
              <NavLink to="/inbox" activeClassName="activeClicked">
                <div className="menu-item">
                  <CiMail className="sidebar-icons" />
                  <div className="sidebar-text">INBOX</div>
                </div>
              </NavLink>
              <NavLink to="/schedule" activeClassName="activeClicked">
                <div className="menu-item">
                  <MdOutlineDateRange className="sidebar-icons" />
                  <div className="sidebar-text">SCHEDULE</div>
                </div>
              </NavLink>
              <NavLink to="/reviews" activeClassName="activeClicked">
                <div className="menu-item">
                  <CgProfile className="sidebar-icons" />
                  <div className="sidebar-text">REVIEWS</div>
                </div>
              </NavLink>
              <NavLink to="/settings" activeClassName="activeClicked">
                <div className="menu-item">
                  <IoSettingsOutline className="sidebar-icons" />
                  <div className="sidebar-text">SETTINGS</div>
                </div>
              </NavLink>
            </CDBSidebarMenu>
          </CDBSidebarContent>
          <CDBSidebarFooter style={{ textAlign: 'center' }}>
            <div className="logout">
              <LuLogOut />
              <div className="logout-text">LOGOUT</div>
            </div>
          </CDBSidebarFooter>
        </CDBSidebar>
      </div>
    </div>
  )
}

export default MySidebar
