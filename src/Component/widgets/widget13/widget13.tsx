import React, { memo } from "react";
import * as Icon from "react-feather";
import { IWidget13Data } from "../../interfaces/widgetInterface";

interface IWidget13 {
    widget13Data: IWidget13Data
}

const Widget13 = memo((props: IWidget13) => {

    const { widget13Data } = props

    return (
        <div className="contact-widget is-reversed is-straight">
            <div className="widget-content">
                <div className="left">
                    <div className="h-avatar is-medium">
                        <img className="avatar is-squared"
                            src={widget13Data?.image}
                            data-demo-src="assets/img/avatars/photos/8.jpg" alt=""
                            data-user-popover="3" />
                    </div>
                </div>
                <div className="right">
                    <h3>{widget13Data?.name}</h3>
                    <div className="company">
                        <span>{widget13Data?.companyName}</span>
                        <p>{widget13Data?.designation}</p>
                    </div>
                    <div className="contact-info">
                        <span>
                            <Icon.MapPin />
                            <span>{widget13Data?.address}</span>
                        </span>
                        <span>
                            <Icon.Phone />
                            <span>{widget13Data?.mobile}</span>
                        </span>
                    </div>
                </div>
            </div>

            <p className="email">{widget13Data?.email}</p>
        </div>
    )
})

export {
    Widget13
}