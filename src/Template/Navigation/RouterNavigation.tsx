import React, { useState, useEffect } from 'react'
import {
    BrowserRouter as Router,
    Routes,
    Route
} from 'react-router-dom'
import { Layout } from "../Layout";
import { LayoutSideBar } from "../Layout/LayoutSideBar";
import PageNotFound from "./PageNotFound";
import ComponentPathList from "./ComponentPathList";

function RouterNavigation() {
    const [pageLoad, setPageLoad] = useState(true);

    useEffect(() => {
        setPageLoad(false)
    }, [])

    return (
        <div className="app-wrapper">
            <div className={pageLoad ? "pageloader is-full is-active" : 'pageloader is-full'}></div>
            <div className={pageLoad ? "infraloader is-full is-active" : 'pageloader is-full'}></div>
            <Router>
                <Routes>
                    <Route path="/" element={<Layout />}>
                        {
                            ComponentPathList?.sideTopMenu.map((componentPathList, index) =>
                                <Route key={index} element={componentPathList.component} path={componentPathList.path} />
                            )
                        }
                    </Route>
                    <Route path="/" element={<LayoutSideBar />}>
                        {
                            ComponentPathList?.sideMenu.map((componentPathList, index) =>
                                <Route key={index} element={componentPathList.component} path={componentPathList.path} />
                            )
                        }
                    </Route>
                    <Route path='*' element={<PageNotFound />} />
                </Routes>
            </Router>
        </div>
    )
}

export default RouterNavigation
