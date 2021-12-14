import React, { memo } from 'react';
import { ChartTypes } from "../../../Config/ApexChart.conf";
import { Charts } from "../../Charts/Charts";
import "./widget10.css";
import { IncrementDecrementAnalysis } from "../../Common/IncrementDecrementAnalysis";
import { IWidget10Data } from "../../interfaces/widgetInterface";
import { widget10ChartData } from "./widget10Chart.config";

interface IWidget10 {
    widget10Data: IWidget10Data
}

const Widget10 = memo((props: IWidget10) => {

    const { widget10Data } = props

    return (
        <div className="widget-card full-height">
            <div className="card-head">
                <h3 className="dark-inverted">{widget10Data?.title}</h3>
            </div>

            <div className="progress-block">
                <div className="value">
                    <span className="dark-inverted">{widget10Data?.percentage}%</span>
                </div>
                <progress className="progress is-primary is-tiny" value={widget10Data?.percentage} max="100">{widget10Data?.percentage}%</progress>
                <div className="progress-foot">
                    <IncrementDecrementAnalysis
                        isIncrease={widget10Data.isIncrease}
                        percentage={widget10Data?.incrementPercentage}
                        description={widget10Data?.incrementDescription}
                    />
                </div>

                <div className="circle-chart-wrapper" id="radial-circle">
                    <Charts options={widget10ChartData} series={[widget10Data?.performancePercentage]} type={ChartTypes.radialBar} height={widget10ChartData.chart.height} />
                </div>
            </div>
        </div>
    )
})

export {
    Widget10
}