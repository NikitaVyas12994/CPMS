import React, { memo } from "react";
import "./widget14.css";
import { IWidget14Data } from "../../interfaces/widgetInterface";

interface IWidget14 {
    widget14Data: IWidget14Data[]
}

const Widget14 = memo((props: IWidget14) => {

    const { widget14Data } = props

    return (
        <div className="asset-category">
            {
                widget14Data?.map((widget14Item, index) =>
                    <div key={index} className="category">
                        <div className="asset">
                            <div className="asset-logo"><i className={widget14Item?.icon}></i></div>
                        </div>
                        <div className="asset-name">{widget14Item?.title}</div>
                    </div>
                )
            }
        </div>
    )
})

export {
    Widget14
}