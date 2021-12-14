import React, { memo } from "react";
import { Charts } from "../../Charts/Charts";
import "./widget8.css";
import { ChartTypes } from "../../../Config/ApexChart.conf";
import { IWidget8Data } from "../../interfaces/widgetInterface";
import { widget8ChartData } from "./widget8Chart.config";

interface IWidget8 {
    widget8Data: IWidget8Data[],
    title: string,
    total: (string | number),
    completed?: (string | number),
    inProgress?: (string | number)
}

const Widget8 = memo((props: IWidget8) => {

    const { widget8Data, title, total, completed, inProgress } = props

    let series: (number | string)[] = []
    let labels: string[] = []
    let color: string[] = []

    widget8Data.map((Widget8Item: IWidget8Data) => {
        series.push(Widget8Item?.percentage)
        labels.push(Widget8Item?.label)
        color.push(Widget8Item?.color)
    })

    widget8ChartData.plotOptions.radialBar.dataLabels.total.formatter = () => total + '%'
    widget8ChartData.labels = labels;
    widget8ChartData.colors = color;


    return (
        <div className="widget-card full-height">
            {/* < !--Dashboard Card-- > */}
            <div className="card-head">
                <h3 className="dark-inverted">{title}</h3>
            </div>
            <div className="radial-wrap">
                <Charts options={widget8ChartData} series={series} type={ChartTypes.radialBar} height={widget8ChartData.chart.height} />
                <div id="goal-gauge"></div>
                <div className="radial-stats is-dark-bordered-12">
                    <div className="radial-stat is-dark-bordered-12">
                        <span>Completed</span>
                        <span className="dark-inverted">{completed}</span>
                    </div>
                    <div className="radial-stat">
                        <span>In Progress</span>
                        <span className="dark-inverted">{inProgress}</span>
                    </div>
                </div>
            </div>
        </div>
    )
})

export {
    Widget8
}