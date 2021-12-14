import React, { useState, useEffect, useRef } from 'react'
import logo from "../../../assets/img/logos/logo/logo.svg";
import logoLight from "../../../assets/img/logos/logo/logo-light.svg";
import * as Icon from 'react-feather';
import MobileSideMenu from "./MobileSideMenu";
import MobileNavBar from "./MobileNavBar";
import WebsiteProfileModal from "./WebsiteProfileModal";
import { NavLink } from "react-router-dom";

function SideMenu() {
    const [mobileNavActiveNavBar, setMobileNavActiveNavBar] = useState(false)
    const [myProfileDropdown, setMyProfileDropdown] = useState(false)
    const [myProfileWebsite, setMyProfileWebsite] = useState(false)
    const websiteProfileModalRef = useRef<HTMLInputElement>(null);
    const mobileProfileModalRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
        /**
         * Alert if clicked on outside of element
         */
        function handleClickOutside(event: any) {
            if (websiteProfileModalRef.current && !websiteProfileModalRef.current.contains(event.target)) {
                setMyProfileWebsite(false)
            }
            if (mobileProfileModalRef.current && !mobileProfileModalRef.current.contains(event.target)) {
                setMyProfileDropdown(false)
            }
        }

        // Bind the event listener
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            // Unbind the event listener on clean up
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    return (
        <>
            {/* <!--Mobile navbar--> */}
            <MobileNavBar
                setMobileNavActiveNavBar={setMobileNavActiveNavBar}
                mobileNavActiveNavBar={mobileNavActiveNavBar}
                mobileProfileModalRef={mobileProfileModalRef}
                myProfileDropdown={myProfileDropdown}
                setMyProfileDropdown={setMyProfileDropdown} />
            {/* Mobile sidebar */}
            <MobileSideMenu mobileNavActiveNavBar={mobileNavActiveNavBar} />
            {/* <!--Sidebar--> */}
            <div className="main-sidebar">
                <div className="sidebar-brand">
                    <a href="/">
                        <img className="light-image" src={logo} alt="" />
                        <img className="dark-image" src={logoLight} alt="" />
                    </a>
                </div>

                <div className="sidebar-inner">
                    <div className="naver"></div>
                    <ul className="icon-menu">
                        <li>
                            <NavLink
                                to="/Dashboard"
                                className={({ isActive }) =>
                                    [

                                        isActive ? 'is-selected is-active' : null
                                    ]
                                        .filter(Boolean)
                                        .join(" ")
                                }
                            >
                                <Icon.Activity className="sidebar-svg"></Icon.Activity>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/Cards"
                                className={({ isActive }) =>
                                    [

                                        isActive ? 'is-selected is-active' : null
                                    ]
                                        .filter(Boolean)
                                        .join(" ")
                                }
                            >
                                <Icon.Grid className="sidebar-svg" />
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/Graphs"
                                className={({ isActive }) =>
                                    [

                                        isActive ? 'is-selected is-active' : null
                                    ]
                                        .filter(Boolean)
                                        .join(" ")
                                }
                            >
                                <Icon.Box className="sidebar-svg" />
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/Graphs"
                                className={({ isActive }) =>
                                    [

                                        isActive ? 'is-selected is-active' : null
                                    ]
                                        .filter(Boolean)
                                        .join(" ")
                                }
                            >
                                <Icon.Cpu className="sidebar-svg" data-feather="cpu" />
                            </NavLink>
                        </li>
                        <li id="messages-menu">
                            <NavLink
                                to="/Cards"
                                className={({ isActive }) =>
                                    [

                                        isActive ? 'is-selected is-active' : null
                                    ]
                                        .filter(Boolean)
                                        .join(" ")
                                }
                            >
                                {/* <a href="admin-messaging-chat.html" id="open-messages" data-content="Messaging"> */}
                                <Icon.MessageCircle className="sidebar-svg" />
                                {/* </a> */}
                            </NavLink>
                        </li>
                    </ul>
                    {/* <!-- User account --> */}
                    <ul className="bottom-menu">
                        {/* <!-- Notifications --> */}
                        <li className="right-panel-trigger" data-panel="search-panel">
                            <a id="open-search" data-content="Search">
                                <Icon.Search className="sidebar-svg"
                                    data-feather="search" />
                            </a>
                        </li>
                        {/* <!-- Wallet --> */}
                        <li>
                            <a href="./admin-profile-settings.html" id="open-settings" data-content="Settings">
                                <Icon.Settings className="sidebar-svg" />
                            </a>
                        </li>
                        {/* <!-- Profile --> */}
                        <WebsiteProfileModal websiteProfileModalRef={websiteProfileModalRef}
                            setMyProfileWebsite={setMyProfileWebsite} myProfileWebsite={myProfileWebsite} />
                    </ul>
                </div>
            </div>
        </>
    )
}

export { SideMenu };
