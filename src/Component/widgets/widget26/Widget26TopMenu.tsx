import React, { Dispatch, SetStateAction, useEffect, useRef, useState } from "react";
import { Bell } from "react-feather";
import { Widget4 } from "../widget4";

interface IWidget26TopMenu {
    setIsDarkTheme: Dispatch<SetStateAction<boolean>>
}

const Widget26TopMenu = (props: IWidget26TopMenu) => {
    const { setIsDarkTheme } = props;

    const [openNotificationModal, setOpenNotificationModal] = useState(false);
    const notificationModalRef = useRef<HTMLInputElement>(null);
    const [isToggled, setIsToggled] = useState<boolean>(false);


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
            setIsToggled(true);
            setIsDarkTheme(false);
        } else {
            localStorage.setItem('themeColor', 'dark');
            document.body.classList.add('is-dark');
            setIsToggled(false);
            setIsDarkTheme(true);
        }
    }

    useEffect(() => {
        /**
         * modal close on clicked outside of element
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
        <div className="content-section-header">
            <h2 className="title is-4 is-narrow">Locations</h2>
            <div className="toolbar ml-auto">
                <div className="toolbar-link">
                    <label className="dark-mode ml-auto">
                        <input type="checkbox" checked={isToggled} onClick={() => toggle()} />
                        <span></span>
                    </label>
                </div>

                <a
                    href="/#" onClick={(e) => e.preventDefault()}
                    className="toolbar-link right-panel-trigger"
                    data-panel="languages-panel"
                >
                    <img
                        src={'assets/img/icons/flags/united-states-of-america.svg'}
                        alt=""
                    />
                </a>

                <div className="toolbar-notifications is-hidden-mobile">
                    <div ref={notificationModalRef} onClick={() => setOpenNotificationModal(true)}
                        className={openNotificationModal ?
                            'dropdown is-spaced is-dots is-right dropdown-trigger is-active' :
                            "dropdown is-spaced is-dots is-right dropdown-trigger"}>
                        <div className="is-trigger" aria-haspopup="true">
                            <Bell />
                            <span className="new-indicator pulsate"></span>
                        </div>
                        <div className="dropdown-menu" role="menu">
                            <div className="dropdown-content">
                                <div className="heading">
                                    <div className="heading-left">
                                        <h6 className="heading-title">Notifications</h6>
                                    </div>
                                    <div className="heading-right">
                                        <a
                                            className="notification-link"
                                            href="/admin-profile-notifications.html"
                                        >See all</a>
                                    </div>
                                </div>
                                <Widget4 />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export {
    Widget26TopMenu
}