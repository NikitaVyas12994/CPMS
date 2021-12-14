import React, { memo } from "react";
import { ChartTypes } from "../../../Config/ApexChart.conf";
import { Charts } from "../../Charts/Charts";
import { widget21ChartData } from "./widget21.config";

interface IWidget21 {
    title: string,
    widget21Data: (number | string),
    subTitle: string
}

const Widget21 = memo((props: IWidget21) => {

    const { title, widget21Data, subTitle } = props;

    widget21ChartData.title.text = title;
    widget21ChartData.labels = [subTitle]

    return (
        <div className='widget-card'>
            <Charts options={widget21ChartData} series={[widget21Data]} type={ChartTypes.radialBar} />
        </div>
    )
})

export {
    Widget21
}