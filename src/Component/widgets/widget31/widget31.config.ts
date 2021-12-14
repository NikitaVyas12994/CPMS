import { ChartTypes, ChartCurve, ChartHorizontalAlign, ChartPosition } from "../../../Config/ApexChart.conf";

export const widget31ChartConfig = {
    chart: {
        height: 350,
        type: ChartTypes.line,
        zoom: {
            enabled: false
        },
        toolbar: {
            show: false
        }
    },
    colors: [] as string[],
    stroke: {
        curve: ChartCurve.straight,
        width: 1
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
    }
}