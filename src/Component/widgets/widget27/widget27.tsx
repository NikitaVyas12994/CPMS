import React, { memo } from "react";
import { ChartTypes } from "../../../Config/ApexChart.conf";
import { Charts } from "../../Charts/Charts";
import { IWidget27Data } from "../../interfaces/widgetInterface";
import { widget27ChartConfig } from "./widget27.config";


interface IWidget27 {
    widget27Data: IWidget27Data[],
    yaxisData: string[],
    title: string
}

const Widget27 = memo((props: IWidget27) => {

    const { widget27Data, yaxisData, title } = props

    widget27ChartConfig.xaxis.categories = yaxisData;
    widget27ChartConfig.title.text = title;

    return (
        <div className='widget-card'>
            <Charts options={widget27ChartConfig}
                series={widget27Data}
                height={widget27ChartConfig.chart.height}
                type={ChartTypes.bar}
            />
        </div>
    )
})

export {
    Widget27
}