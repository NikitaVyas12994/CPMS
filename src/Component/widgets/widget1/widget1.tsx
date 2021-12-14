import React, { memo } from 'react'
import "./widget1.css"
import { Charts } from '../../Charts/Charts';
import { IWidget1Data } from '../../interfaces/widgetInterface';
import { widget1Chart } from "./widget1Chart.config";
import { ChartTypes } from '../../../Config/ApexChart.conf';

interface IWidget1 {
    widget1Data: IWidget1Data[],
    title: string,
    timeStamp: (string | Date)[]
}

const Widget1 = memo((props: IWidget1) => {

    const { widget1Data, title, timeStamp } = props;

    widget1Chart.xaxis.categories = timeStamp;
    widget1Chart.title.text = title;

    return (
        <div className="widget-card">
            <div id="customers-chart">
                <Charts options={widget1Chart} series={widget1Data} type={ChartTypes.area} />
            </div>
        </div>
    )
})

export {
    Widget1
}
