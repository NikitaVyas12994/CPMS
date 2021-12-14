import React, { memo } from 'react';
import { ChartTypes } from '../../../Config/ApexChart.conf';
import { Charts } from '../../Charts/Charts';
import { IWidget18Data } from "../../interfaces/widgetInterface";
import { widget18ChartData } from "./widget18Chart.config";
import "./widget18.css";

interface IWidget18 {
    widget18Data: IWidget18Data[],
    title: string,
    currentMonthValue: (string | number),
    lastMonthValue: (string | number),
    timeStamp: (string | Date)[]
}

const Widget18 = memo((props: IWidget18) => {

    const {
        widget18Data,
        title,
        currentMonthValue,
        lastMonthValue,
        timeStamp
    } = props

    widget18ChartData.xaxis.categories = timeStamp;

    return (
        <div className="widget-card" >
            <div className="card-head">
                <h3 className="dark-inverted">{title}</h3>
            </div>
            <div className="revenue-chart">
                <div className="revenue-stat">
                    <span>This Month</span>
                    <span className="current">${currentMonthValue}</span>
                </div>
                <div className="revenue-stat">
                    <span>Last Month</span>
                    <span className="dark-inverted">${lastMonthValue}</span>
                </div>
                <div className="revenue-stat">
                    <span>Last Month</span>
                    <span className="dark-inverted">${lastMonthValue}</span>
                </div>
            </div>
            <div id="revenue-chart">
                <Charts options={widget18ChartData} series={widget18Data} type={ChartTypes.area} />
            </div>
        </div >
    )
})

export {
    Widget18
}