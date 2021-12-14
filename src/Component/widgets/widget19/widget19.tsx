import React, { memo } from "react";
import { ChartTypes } from "../../../Config/ApexChart.conf";
import { Charts } from '../../Charts/Charts';
import { IWidget19Data } from "../../interfaces/widgetInterface";
import { widget19ChartData } from "./widget19Chart.config";

interface IWidget19 {
    title: string,
    widget19Data: IWidget19Data[],
    timeStamp: (string | Date)[]
}

const Widget19 = memo((props: IWidget19) => {

    const { title, widget19Data, timeStamp } = props;
    widget19ChartData.xaxis.categories = timeStamp;

    return (
        <div className="widget-card">
            <div className="card-head">
                <h3 className="dark-inverted">{title}</h3>
            </div>
            <div id="bar-chart">
                <Charts options={widget19ChartData} series={widget19Data} type={ChartTypes.bar} />
            </div>
        </div>
    )
})

export {
    Widget19
}