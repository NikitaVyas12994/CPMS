import React from 'react'
import * as Icon from 'react-feather';
import { NavLink } from "react-router-dom";

interface IMobileSideMenu {
    mobileNavActiveNavBar: boolean
}

/**
 * Mobile sidebar
 * @param props mobile sidebar activate status
 * @returns 
 */
function MobileSideMenu(props: IMobileSideMenu) {

    const { mobileNavActiveNavBar } = props

    return (

        <div className={mobileNavActiveNavBar ? 'mobile-main-sidebar is-active' : "mobile-main-sidebar"}>
            <div className="inner">
                <ul className="icon-side-menu">
                    <li>
                        <NavLink
                            to="/Dashboard"
                            className={({ isActive }) =>
                                [

                                    isActive ? 'is-active' : null
                                ]
                                    .filter(Boolean)
                                    .join(" ")
                            }
                        >
                            <Icon.Activity />
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/Cards"
                            className={({ isActive }) =>
                                [

                                    isActive ? 'is-active' : null
                                ]
                                    .filter(Boolean)
                                    .join(" ")
                            }
                        >
                            <Icon.Grid />
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/Cards"
                            className={({ isActive }) =>
                                [

                                    isActive ? 'is-active' : null
                                ]
                                    .filter(Boolean)
                                    .join(" ")
                            }
                        >
                            <Icon.Box />
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/Graphs"
                            className={({ isActive }) =>
                                [

                                    isActive ? 'is-active' : null
                                ]
                                    .filter(Boolean)
                                    .join(" ")
                            }
                        >
                            <Icon.Cpu />
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/Cards"
                            className={({ isActive }) =>
                                [

                                    isActive ? 'is-active' : null
                                ]
                                    .filter(Boolean)
                                    .join(" ")
                            }
                        >
                            <Icon.MessageCircle />
                        </NavLink>
                    </li>
                </ul>

                <ul className="bottom-icon-side-menu">
                    <li>
                        <a className="right-panel-trigger" data-panel="search-panel">
                            <i data-feather="search"></i>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <i data-feather="settings"></i>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default MobileSideMenu
