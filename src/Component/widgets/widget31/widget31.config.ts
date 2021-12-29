import { ChartTypes, ChartCurve, ChartHorizontalAlign, ChartPosition } from "../../../Config/ApexChart.conf";
import { widget31ChartData } from "../../../Config/widgetData";

export const widget31ChartConfig: any = {
    chart: {
        height: 350,
        type: ChartTypes.line,
        zoom: {
            enabled: false
        },
        toolbar: {
            show: false
        },
        dropShadow: {
            enabled: true,
            color: [] as any,
            top: 8,
            blur: 3,
            opacity: 0.5
        },
    },
    colors: [] as string[],
    stroke: {
        curve: ChartCurve.straight,
        width: 1.5,
    },
    title: {
        text: '',
    },

    markers: {
        size: 4,
        hover: {
            size: 6,
        }
    },
    xaxis: {
        categories: [] as (Date | string)[],
    },
    legend: {
        position: ChartPosition.left,
        horizontalAlign: ChartHorizontalAlign.left,
        floating: true,
        offsetY: 16,
        offsetX: 20,
        markers: {
            width: 12,
            height: 12,
            radius: 0
        }
    },
    grid: {
        show: false,
    },
    tooltip: {
        // custom: 
    }


}

//     < td class="name" >
//         <span style="background-color:#797bf2" > </span>
// data1
//     < /td>
//     < td class="value" > <b>Mid: </b> 120 <b>High:</b > 135 < b > Low: </> 110</td >
//         </tr>
//         < tr class="bb-tooltip-name-data2" >
//             <td class="name" >
//                 <span style="background-color:#ff227d" > </span>
// data2
//     < /td>
//     < td class="value" > 500 < /td></tr > <tr class="bb-tooltip-name-data3" >
//         <td class="name" > <span style="background-color:#FFA981" >
//             </span>data3</td > <td class="value" > <b>Mid: </b> 245 <b>High:</b > 280 < b > Low: </> 235
//                 < /td></tr > <tr class="bb-tooltip-name-data4" >
//                     <td class="name" > <span style="background-color:#8269B2" > </span>data4</td >
//                         <td class="value" > <b>Mid: </b> 200 <b>High:</b > 210 < b > Low: </> 180</td >
//                             </tr>