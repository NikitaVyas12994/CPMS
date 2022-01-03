import React from 'react'
import * as Icon from 'react-feather';
import { Widget4 } from "../../../Component/widgets/widget4";

interface IMobileNavBar {
    setMobileNavActiveNavBar: any,
    mobileNavActiveNavBar: any,
    mobileProfileModalRef: any,
    myProfileDropdown: any,
    setMyProfileDropdown: any
}

/**
 * 
 * @param props 
 * @returns 
 */
function MobileNavBar(props: IMobileNavBar) {

    const { setMobileNavActiveNavBar, mobileNavActiveNavBar, mobileProfileModalRef, myProfileDropdown, setMyProfileDropdown } = props

    return (
        <nav className="navbar mobile-navbar no-shadow is-hidden-desktop is-hidden-tablet" aria-label="main navigation">
            <div className="container">
                {/* <!-- Brand --> */}
                <div className="navbar-brand">
                    {/* <!-- Mobile menu toggler icon --> */}
                    <div className="brand-start">
                        <div onClick={() => setMobileNavActiveNavBar(!mobileNavActiveNavBar)} className={mobileNavActiveNavBar ? 'navbar-burger is-active' : "navbar-burger"}>
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                    </div>

                    <a className="navbar-item is-brand" href="index.html">
                        <img className="light-image" src={'assets/img/logos/logo/logo.svg'} alt="" />
                        <img className="dark-image" src={'assets/img/logos/logo/logo-light.svg'} alt="" />
                    </a>

                    <div className="brand-end">
                        <div className="navbar-item has-dropdown is-notification is-hidden-tablet is-hidden-desktop">
                            <a href='/' onClick={(e) => e.preventDefault()} className="navbar-link is-arrowless" >
                                <Icon.Bell />
                                <span className="new-indicator pulsate"></span>
                            </a>
                            <div className="navbar-dropdown is-boxed is-right">
                                <div className="heading">
                                    <div className="heading-left">
                                        <h6 className="heading-title">Notifications</h6>
                                    </div>
                                    <div className="heading-right">
                                        <a href='/' onClick={(e) => e.preventDefault()} className="notification-link" >See all</a>
                                    </div>
                                </div>
                                <div className="inner has-slimscroll">
                                    <Widget4 />
                                </div>
                            </div>
                        </div>
                        <div ref={mobileProfileModalRef} className={myProfileDropdown ? 'dropdown is-right is-spaced dropdown-trigger user-dropdown is-active' : "dropdown is-right is-spaced dropdown-trigger user-dropdown"}>
                            <div className="is-trigger" aria-haspopup="true">
                                <div onClick={() => setMyProfileDropdown(true)} className="profile-avatar">
                                    <img className="avatar" src="https://via.placeholder.com/150x150" data-demo-src="assets/img/avatars/photos/8.jpg" alt="" />
                                </div>
                            </div>
                            <div className="dropdown-menu" role="menu">
                                <div className="dropdown-content">
                                    <div className="dropdown-head">
                                        <div className="h-avatar is-large">
                                            <img className="avatar" src="https://via.placeholder.com/150x150" data-demo-src="assets/img/avatars/photos/8.jpg" alt="" />
                                        </div>
                                        <div className="meta">
                                            <span>Erik Kovalsky</span>
                                            <span>Product Manager</span>
                                        </div>
                                    </div>
                                    <a href='/' onClick={(e) => e.preventDefault()} className="dropdown-item is-media">
                                        <div className="icon">
                                            <i className="lnil lnil-user-alt"></i>
                                        </div>
                                        <div className="meta">
                                            <span>Profile</span>
                                            <span>View your profile</span>
                                        </div>
                                    </a>
                                    <a href='/' onClick={(e) => e.preventDefault()} className="dropdown-item is-media layout-switcher">
                                        <div className="icon">
                                            <i className="lnil lnil-layout"></i>
                                        </div>
                                        <div className="meta">
                                            <span>Layout</span>
                                            <span>Switch to admin/webapp</span>
                                        </div>
                                    </a>
                                    <hr className="dropdown-divider" />
                                    <a href='/' onClick={(e) => e.preventDefault()} className="dropdown-item is-media">
                                        <div className="icon">
                                            <i className="lnil lnil-briefcase"></i>
                                        </div>
                                        <div className="meta">
                                            <span>Projects</span>
                                            <span>All my projects</span>
                                        </div>
                                    </a>
                                    <a href='/' onClick={(e) => e.preventDefault()} className="dropdown-item is-media">
                                        <div className="icon">
                                            <i className="lnil lnil-users-alt"></i>
                                        </div>
                                        <div className="meta">
                                            <span>Team</span>
                                            <span>Manage your team</span>
                                        </div>
                                    </a>
                                    <hr className="dropdown-divider" />
                                    <a href='/' onClick={(e) => e.preventDefault()} className="dropdown-item is-media">
                                        <div className="icon">
                                            <i className="lnil lnil-cog"></i>
                                        </div>
                                        <div className="meta">
                                            <span>Settings</span>
                                            <span>Account settings</span>
                                        </div>
                                    </a>
                                    <hr className="dropdown-divider" />
                                    <div className="dropdown-item is-button">
                                        <button className="button h-button is-primary is-raised is-fullwidth logout-button">
                                            <span className="icon is-small">
                                                <Icon.LogOut />
                                            </span>
                                            <span>Logout</span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </nav>
    )
}

export default MobileNavBar
