import React, { memo } from "react";
import { ChartTypes } from "../../../Config/ApexChart.conf";
import { Charts } from "../../Charts/Charts";
import { IWidget31Data } from "../../interfaces/widgetInterface";
import { widget31ChartConfig } from "./widget31.config";

interface IWidget31 {
    widget31ChartData: IWidget31Data[],
    title: string,
    color: string[],
    xaxis: (string | Date)[]
}

const Widget31 = memo((props: IWidget31) => {

    const { widget31ChartData, title, color, xaxis } = props

    widget31ChartConfig.title.text = title;
    widget31ChartConfig.colors = color;
    widget31ChartConfig.xaxis.categories = xaxis;

    return (
        <div className='widget-card'>
            <Charts options={widget31ChartConfig} series={widget31ChartData} type={ChartTypes.line} height={widget31ChartConfig.chart.height} />
        </div>
    )
})

export {
    Widget31
}