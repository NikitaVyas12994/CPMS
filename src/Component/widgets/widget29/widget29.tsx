/* eslint-disable array-callback-return */
import React, { memo } from "react";
import { Charts } from "../../Charts/Charts";
import { ChartTypes } from "../../../Config/ApexChart.conf";
import { IWidget29Data } from "../../interfaces/widgetInterface";
import { widget29ChartConfig } from "./widget29.config";

interface IWidget29 {
    widget29ChartData: IWidget29Data[],
    title: string
}

const Widget29 = memo((props: IWidget29) => {

    const { widget29ChartData, title } = props
    const color: string[] = []
    const labels: string[] = []
    const data: number[] = []

    widget29ChartData.map(widget29ChartItem => {
        color.push(widget29ChartItem.color);
        labels.push(widget29ChartItem.title);
        data.push(widget29ChartItem.data)
    })

    widget29ChartConfig.colors = color;
    widget29ChartConfig.labels = labels
    widget29ChartConfig.title.text = title

    return (
        <div className='widget-card'>
            <Charts options={widget29ChartConfig}
                series={data}
                type={ChartTypes.donut}
                width={widget29ChartConfig.chart.width} />
        </div>
    )
})

export {
    Widget29
}