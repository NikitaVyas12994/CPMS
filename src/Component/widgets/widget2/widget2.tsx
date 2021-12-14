import React, { memo } from 'react'
import { IWidget2Data } from "../../interfaces/widgetInterface";
import "./widget2.css";

interface IWidget2 {
    widget2Data: IWidget2Data[],
    title: string
}

const Widget2 = memo((props: IWidget2) => {

    const { widget2Data, title } = props;

    return (
        <div className="widget-card">
            <h4 className="dark-inverted">{title}</h4>
            <div className="quick-stats">
                <div className="quick-stats-inner">
                    {
                        widget2Data?.map((widget2Item, index) =>
                            <div key={index} className="quick-stat">
                                <div className="media-flex-center">
                                    <div className={`h-icon is-${widget2Item?.iconColor} is-rounded`}>
                                        <i className={widget2Item?.iconName}></i>
                                    </div>
                                    <div className="flex-meta">
                                        <span>{widget2Item?.title}</span>
                                        <span>{widget2Item?.description}</span>
                                    </div>
                                </div>
                            </div>
                        )
                    }
                </div>
            </div>
        </div>
    )
})
export {
    Widget2
}
