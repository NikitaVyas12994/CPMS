import React, { memo } from 'react';
import "./widget16.css";
import { ChartTypes } from "../../../Config/ApexChart.conf";
import { Charts } from '../../Charts/Charts';
import { IWidget16Data } from "../../interfaces/widgetInterface";
import { widget16ChartData } from "./widget16Chart.config";


interface IWidget16 {
    widget16Data: IWidget16Data[],
    title: string
}

const Widget16 = memo((props: IWidget16) => {

    const { widget16Data, title } = props;

    return (
        <div className="widget-card">
            <div className="card-head">
                <h3 className="dark-inverted">{title}</h3>
            </div>
            <div className="chart-group">
                {
                    widget16Data?.map((widget16Item: any, index) => {
                        const percentage = (widget16Item?.value / widget16Item?.total) * 100;
                        const chartConfig = { ...widget16ChartData };
                        chartConfig.colors = [widget16Item?.color];

                        return <div key={index} className="group">
                            <div className="group-content">
                                <div className="chart-container">
                                    <div id="group-radial-1">
                                        <Charts options={chartConfig} series={[percentage]} type={ChartTypes.radialBar} />
                                    </div>
                                </div>
                                <div className="description-text">
                                    <span className="dark-inverted">{widget16Item.value}</span>
                                    <p>{widget16Item.description}</p>
                                </div>
                            </div>
                        </div>
                    })
                }
            </div>
        </div>
    )
})

export {
    Widget16
}