import React, { memo, useEffect, useState } from "react";
import { ChartTypes } from "../../../Config/ApexChart.conf";
import { Charts } from "../../Charts/Charts";
import { IWidget31Data } from "../../interfaces/widgetInterface";
import { widget31ChartConfig } from "./widget31.config";

interface IWidget31 {
    widget31ChartData: IWidget31Data[],
    title: string,
    color: string[],
    xaxis: (string | Date)[]
}

const Widget31 = memo((props: IWidget31) => {

    const { widget31ChartData, title, color, xaxis } = props;
    const [widget31DataCopy, setWidget31DataCopy] = useState([])

    widget31ChartConfig.title.text = title;
    widget31ChartConfig.colors = color;
    widget31ChartConfig.xaxis.categories = xaxis;
    widget31ChartConfig.chart.dropShadow.color = color;

    widget31ChartConfig.tooltip['custom'] = ({ dataPointIndex }: any) => {
        let returnData = ''
        widget31ChartData.map((widgetChartItem, index) => {
            let printValue: any = widgetChartItem.data[dataPointIndex];
            if (typeof (printValue) == 'object') {
                switch (true) {
                    case (printValue?.length === 1):
                        printValue = printValue[0]
                        break;
                    case (printValue?.length === 2):
                        printValue = `<b>High</b>: ${Math.max(...printValue)} <b>Low:</b> ${Math.min(...printValue)}`
                        break
                    case (printValue?.length > 2):
                        printValue = `<b>Mid</b>: ${printValue.sort().reverse()[1]} <b>High</b>: ${Math.max(...printValue)} <b>Low</b>: ${Math.min(...printValue)}`
                        break
                    default:
                        printValue = ""
                        break;
                }
            }
            returnData += `<tr class="bb-tooltip-name-data1">
                <td class="name">
                <span style="background-color:${color[index]}"></span>
                ${widgetChartItem.name}
                </td>
                <td class="value">${printValue}</td>
                </tr>`
        })
        return `
            <table class="bb-tooltip">
            <tbody>
                <tr>
                    <th colspan="2">${xaxis[dataPointIndex]}</th>
                </tr>
                ${returnData}
            </tbody>
        </table>`
    }

    useEffect(() => {
        const widget31Data: any = [];
        widget31ChartData.map((widget31Item: any) => {
            const valueArray: any = []
            widget31Item.data?.map((valueItem: any) => {
                let avgData = valueItem
                if (typeof (valueItem) == 'object') {
                    avgData = 0;
                    switch (true) {
                        case (valueItem?.length === 1):
                            avgData = valueItem[0]
                            break;
                        case (valueItem?.length === 2):
                            avgData = Math.max(...valueItem)
                            break;
                        case (valueItem?.length > 2):
                            avgData = valueItem.sort().reverse()[1];
                            break
                        default:
                            avgData = 0
                            break;
                    }
                }
                valueArray.push(avgData)
            })
            widget31Data.push({ name: widget31Item.name, data: valueArray })
        })
        setWidget31DataCopy(widget31Data)
    }, [])

    return (
        <div className='widget-card'>
            <Charts options={widget31ChartConfig} series={widget31DataCopy} type={ChartTypes.line} height={widget31ChartConfig.chart.height} />
        </div>
    )
})

export {
    Widget31
}