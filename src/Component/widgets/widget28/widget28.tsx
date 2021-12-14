import React, { memo } from "react";
import { ChartTypes } from "../../../Config/ApexChart.conf";
import { Charts } from "../../Charts/Charts";
import { IWidget28Data } from "../../interfaces/widgetInterface";
import { widget28ChartConfig } from "./widget28.config";

interface IWidget28 {
    widget28ChartData: IWidget28Data[],
}

const Widget28 = memo((props: IWidget28) => {

    const { widget28ChartData } = props
    const color: string[] = []
    const labels: string[] = []
    const data: number[] = []

    widget28ChartData.map(widget28ChartItem => {
        color.push(widget28ChartItem.color);
        labels.push(widget28ChartItem.title);
        data.push(widget28ChartItem.data)
    })

    widget28ChartConfig.colors = color;
    widget28ChartConfig.labels = labels

    return (
        <div className='widget-card'>
            <Charts options={widget28ChartConfig}
                series={data}
                width={widget28ChartConfig.chart.width}
                type={ChartTypes.pie} />
        </div>
    )
})

export {
    Widget28
}