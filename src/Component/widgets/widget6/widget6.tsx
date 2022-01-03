import React, { memo } from 'react'
import { ChartTypes } from '../../../Config/ApexChart.conf';
import { Charts } from '../../Charts/Charts';
import { IWidget6Data } from '../../interfaces/widgetInterface';
import { widget6Chart } from "./widget6Chart.config";

interface IWidget6 {
    widget6Data: IWidget6Data[],
    title: string,
    timeStamp: (string | Date)[]
}

const Widget6 = memo((props: IWidget6) => {

    let { title, widget6Data, timeStamp } = props;

    widget6Data = widget6Data.map((widget6Item) => {
        return {
            name: widget6Item.name,
            data: widget6Item.data.map((chartData: any) => {
                return chartData - 70
            })
        }
    })

    widget6Chart.xaxis.categories = timeStamp;

    return (
        <div className="widget-card">
            <div id="profit-chart">
                <div className="card-head">
                    <h3 className="dark-inverted">{title}</h3>
                    <a href="/" onClick={e => e.preventDefault()} className="action-link">Reportes</a>
                </div>
                <Charts options={widget6Chart} series={widget6Data} type={ChartTypes.bar} />
            </div>
        </div>
    )
})

export {
    Widget6
}
