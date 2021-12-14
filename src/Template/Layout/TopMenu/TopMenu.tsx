import React, { useState, useEffect, useRef } from 'react'
import * as Icon from 'react-feather';
import AmericaIcon from "../../../assets/img/icons/flags/united-states-of-america.svg";
import { Widget4 } from "../../../Component/widgets/widget4";

function TopMenu() {
    const [openNotificationModal, setOpenNotificationModal] = useState(false);
    const notificationModalRef = useRef<HTMLInputElement>(null);
    const [isToggled, setIsToggled] = React.useState<boolean>(false);


    useEffect(() => {
        if (localStorage.getItem('themeColor') === 'dark') {
            document.body.classList.add('is-dark');
            setIsToggled(false)
        } else {
            document.body.classList.remove('is-dark');
            setIsToggled(true)
        }
    }, [])

    const toggle = () => {
        if (localStorage.getItem('themeColor') === 'dark') {
            localStorage.setItem('themeColor', 'light')
            document.body.classList.remove('is-dark');
            setIsToggled(true)
        } else {
            localStorage.setItem('themeColor', 'dark')
            document.body.classList.add('is-dark');
            setIsToggled(false)
        }
    }

    useEffect(() => {
        /**
         * Alert if clicked on outside of element
         */
        function handleClickOutside(event: any) {
            if (notificationModalRef.current && !notificationModalRef.current.contains(event.target)) {
                setOpenNotificationModal(false)
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

        <div className="page-title has-text-centered">
            {/* <!-- Sidebar Trigger --> */}
            <div className="hamburger-menu nav-trigger push-resize" data-sidebar="home-sidebar">
                <span className="menu-toggle has-chevron">
                    <span className="icon-box-toggle">
                        <span className="rotate">
                            <i className="icon-line-top"></i>
                            <i className="icon-line-center"></i>
                            <i className="icon-line-bottom"></i>
                        </span>
                    </span>
                </span>
            </div>

            <div className="title-wrap">
                <h1 className="title is-4">Dashboard</h1>
            </div>

            <div className="toolbar ml-auto">
                <div className="toolbar-link">
                    <label className="dark-mode ml-auto">
                        {isToggled
                            ? < input type="checkbox" checked onChange={toggle} />
                            : < input type="checkbox" onChange={toggle} />}
                        <span></span>
                    </label>
                </div>

                <a href='/' className="toolbar-link right-panel-trigger" data-panel="languages-panel">
                    <img src={AmericaIcon} alt="" />
                </a>

                <div className="toolbar-notifications is-hidden-mobile">
                    <div ref={notificationModalRef} onClick={() => setOpenNotificationModal(true)} className={openNotificationModal ? 'dropdown is-spaced is-dots is-right dropdown-trigger is-active' : "dropdown is-spaced is-dots is-right dropdown-trigger"}>
                        <div className="is-trigger" aria-haspopup="true">
                            <Icon.Bell />
                            <span className="new-indicator pulsate"></span>
                        </div>
                        <div className="dropdown-menu" role="menu">
                            <div className="dropdown-content">
                                <div className="heading">
                                    <div className="heading-left">
                                        <h6 className="heading-title">Notifications</h6>
                                    </div>
                                    <div className="heading-right">
                                        <a className="notification-link" href="/admin-profile-notifications.html">See all</a>
                                    </div>
                                </div>
                                <Widget4 />
                            </div>
                        </div>
                    </div>
                </div>
                <a href='/' className="toolbar-link right-panel-trigger" data-panel="activity-panel">
                    <Icon.Grid />
                </a>
            </div>
        </div>
    )
}

export { TopMenu };
