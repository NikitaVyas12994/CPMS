import React, { memo } from 'react'
import './widget15.css'
import { Charts } from '../../Charts/Charts';
import { ChartTypes } from "../../../Config/ApexChart.conf";
import { IWidget15Data } from '../../interfaces/widgetInterface';
import { widget15ChartData } from "./widget15Chart.conf";

interface IWidget15 {
    widget15Data: IWidget15Data[],
    yaxisData: (number | string | Date)[]
}

const Widget15 = memo((props: IWidget15) => {
    const { widget15Data, yaxisData } = props;

    return (
        <div className="spark-tiles">
            <div className="columns is-multiline">
                {
                    widget15Data.map(widget15Item => {
                        let chartConfig = { ...widget15ChartData };
                        chartConfig.colors = [widget15Item.color]
                        chartConfig.labels = yaxisData;
                        chartConfig.title.text = widget15Item.name;
                        chartConfig.subtitle.text = widget15Item.total
                        return <div className="column is-3">
                            <div className="spark-tile">
                                <Charts options={chartConfig} series={[{
                                    name: widget15Item.name,
                                    data: widget15Item.data
                                }]}
                                    type={ChartTypes.area}
                                />
                            </div>
                        </div>
                    })
                }
            </div>
        </div>
    )
})
export {
    Widget15
}
