import React from 'react'
import { SideMenu } from "./SideMenu";
import {
    Outlet
} from 'react-router-dom'
import './Layout.css'

function LayoutSideBar() {
    return (
        <>
            <SideMenu />
            <Outlet />
        </>
    )
}

export { LayoutSideBar };
