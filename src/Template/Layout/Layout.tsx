import React from 'react'
import { SideMenu } from "./SideMenu";
import { TopMenu } from "./TopMenu";
import {
    Outlet
} from 'react-router-dom'
import './Layout.css'

function Layout() {
    return (
        <>
            <SideMenu />
            <div className="view-wrapper" data-naver-offset="150" data-menu-item="#home-sidebar-menu"
                data-mobile-item="#home-sidebar-menu-mobile">
                <div className="page-content-wrapper">
                    <div className="page-content is-relative">
                        <TopMenu />
                        <Outlet />
                    </div>
                </div>
            </div>
        </>
    )
}

export { Layout };
