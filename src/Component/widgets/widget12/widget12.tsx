import React, { memo } from "react";
import "./widget12.css";
import { IWidget12Data } from "../../interfaces/widgetInterface";

interface IWidget12 {
    widget12Data: IWidget12Data[],
    openNotificationModal: boolean
}

const Widget12 = memo((props: IWidget12) => {

    const { widget12Data, openNotificationModal } = props

    return (
        <div className={`dropdown is-spaced is-dots is-right dropdown-trigger is-pushed-mobile is-up${openNotificationModal ? ' is-active' : ''}`} style={{ paddingBottom: '25px', right: '-27px' }}>
            <div className="dropdown-menu" role="menu">
                <div className="dropdown-content noSelect">
                    {
                        widget12Data?.map((widget12Item, index) =>
                            <span key={index}>
                                {
                                    widget12Data.length - 1 === index && <hr className="dropdown-divider" />
                                }
                                <a key={index} href="/" className="dropdown-item is-media">
                                    <div className="icon">
                                        <i className={widget12Item?.icon}></i>
                                    </div>
                                    <div className="meta">
                                        <span>{widget12Item?.title}</span>
                                        <span>{widget12Item?.subtitle}</span>
                                    </div>
                                </a>
                            </span>
                        )
                    }
                </div>
            </div>
        </div>
    )
})

export {
    Widget12
}