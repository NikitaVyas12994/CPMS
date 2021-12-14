import React from 'react'

interface IWebsiteProfileModal {
    websiteProfileModalRef: any,
    setMyProfileWebsite: any,
    myProfileWebsite: boolean
}

function WebsiteProfileModal(props: IWebsiteProfileModal) {

    const { websiteProfileModalRef, setMyProfileWebsite, myProfileWebsite } = props

    return (
        <li id="user-menu">
            <div id="profile-menu" ref={websiteProfileModalRef} onClick={() => setMyProfileWebsite(true)} className={myProfileWebsite ? 'dropdown profile-dropdown dropdown-trigger is-spaced is-up is-active' : "dropdown profile-dropdown dropdown-trigger is-spaced is-up"}>
                <img src="https://via.placeholder.com/150x150" data-demo-src="assets/img/avatars/photos/8.jpg" alt="" />
                <span className="status-indicator"></span>

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
                        <a href="/admin-profile-view.html" className="dropdown-item is-media">
                            <div className="icon">
                                <i className="lnil lnil-user-alt"></i>
                            </div>
                            <div className="meta">
                                <span>Profile</span>
                                <span>View your profile</span>
                            </div>
                        </a>
                        <a className="dropdown-item is-media layout-switcher">
                            <div className="icon">
                                <i className="lnil lnil-layout"></i>
                            </div>
                            <div className="meta">
                                <span>Layout</span>
                                <span>Switch to admin/webapp</span>
                            </div>
                        </a>
                        <hr className="dropdown-divider" />
                        <a href="#" className="dropdown-item is-media">
                            <div className="icon">
                                <i className="lnil lnil-briefcase"></i>
                            </div>
                            <div className="meta">
                                <span>Projects</span>
                                <span>All my projects</span>
                            </div>
                        </a>
                        <a href="#" className="dropdown-item is-media">
                            <div className="icon">
                                <i className="lnil lnil-users-alt"></i>
                            </div>
                            <div className="meta">
                                <span>Team</span>
                                <span>Manage your team</span>
                            </div>
                        </a>
                        <hr className="dropdown-divider" />
                        <a href="#" className="dropdown-item is-media">
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
                                    <i data-feather="log-out"></i>
                                </span>
                                <span>Logout</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </li>
    )
}

export default WebsiteProfileModal
