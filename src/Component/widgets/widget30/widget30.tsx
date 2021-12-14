import React, { memo } from "react";
import { ChartTypes } from "../../../Config/ApexChart.conf";
import { Charts } from "../../Charts/Charts";
import { IWidget30Data } from "../../interfaces/widgetInterface";
import { widget30ChartConfig } from "./widget30.config";

interface IWidget30 {
    widget30ChartData: IWidget30Data[],
    title: string,
    total: number
}

const Widget30 = memo((props: IWidget30) => {

    const { widget30ChartData, title, total } = props
    const color: string[] = []
    const labels: string[] = []
    const data: number[] = []

    widget30ChartData.map(widget30ChartItem => {
        color.push(widget30ChartItem.color);
        labels.push(widget30ChartItem.title);
        data.push(widget30ChartItem.data)
    })

    widget30ChartConfig.colors = color;
    widget30ChartConfig.labels = labels
    widget30ChartConfig.title.text = title;
    widget30ChartConfig.plotOptions.radialBar.dataLabels.total.formatter = () => {
        return total
    }

    return (
        <div className='widget-card'>
            <Charts options={widget30ChartConfig} series={data}
                type={ChartTypes.radialBar}
                height={widget30ChartConfig.chart.height} />
        </div>
    )
})

export {
    Widget30
}