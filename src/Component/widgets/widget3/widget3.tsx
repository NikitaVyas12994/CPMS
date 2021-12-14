import React, { memo } from 'react'
import { ChartTypes } from '../../../Config/ApexChart.conf';
import { Charts } from '../../Charts/Charts'
import { widget3Chart } from "./widget3Chart.config";

interface IWidget3Data {
    widget3Data: number[],
    title: string,
    timeStamp: (string | Date)[]
}

const Widget3 = memo((props: IWidget3Data) => {

    const { widget3Data, title, timeStamp } = props

    widget3Chart.xaxis.categories = timeStamp
    widget3Chart.title.text = title

    return (
        <div className="widget-card">
            <div id="profit-chart">
                <Charts options={widget3Chart} series={[{ data: widget3Data }]} type={ChartTypes.bar} />
            </div>
        </div>

    )
})

export {
    Widget3
}
