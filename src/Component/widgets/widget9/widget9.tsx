import React, { memo } from 'react'
import './widget9.css'
import { Charts } from '../../Charts/Charts';
import { IWidget9Data } from '../../interfaces/widgetInterface';
import { widget9Chart } from "./widget9Chart.config";

interface IWidget9 {
    title: string,
    widget9Data: IWidget9Data[],
    timeStamp: (Date | string)[]
    currentMonthData: (number | string),
    previousMonthData: (number | string)
}

const Widget9 = memo((props: IWidget9) => {
    let { title, widget9Data, timeStamp, currentMonthData, previousMonthData } = props;

    widget9Chart.xaxis.categories = timeStamp;

    return (
        <div className="widget-card">
            <div className="card-head">
                <h3 className="dark-inverted">{title}</h3>
            </div>
            <div className="revenue-stats">
                <div className="revenue-stat">
                    <span>This Month</span>
                    <span className="current">${currentMonthData}</span>
                </div>
                <div className="revenue-stat">
                    <span>Last Month</span>
                    <span className="dark-inverted">${previousMonthData}</span>
                </div>
            </div>
            <Charts options={widget9Chart} series={widget9Data} />
        </div>
    )
})

export {
    Widget9
}
