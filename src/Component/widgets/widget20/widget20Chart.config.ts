import { ChartCurve, ChartTypes, ChartXaxisType } from "../../../Config/ApexChart.conf";
import { themeColors } from "../../../Theme";

export const widget20ChartConfig = {
    chart: {
        type: ChartTypes.area,
        height: 220,
        foreColor: themeColors.grey,
        stacked: true,
        toolbar: {
            show: false
        },
    },
    colors: [themeColors.orange, themeColors.purple],
    stroke: {
        curve: ChartCurve.smooth,
        width: 3
    },
    title: {
        text: '',
        align: 'left'
    },
    dataLabels: {
        enabled: false
    },
    markers: {
        size: 0,
        strokeColor: themeColors.white,
        strokeWidth: 3,
        strokeOpacity: 1,
        fillOpacity: 1,
        hover: {
            size: 6
        }
    },
    yaxis: {
        labels: {
            formatter: function (val: number) {
                return val
            },
            offsetX: 0,
            offsetY: -5
        },
        tooltip: {
            enabled: true
        }
    },
    xaxis: {
        type: ChartXaxisType.datetime,
        categories: [] as any
    },
    legend: {
        position: 'top',
        horizontalAlign: 'left'
    },
    tooltip: {
        x: {
            format: "dd MMM yyyy"
        },
    },
    fill: {
        type: "solid",
        fillOpacity: 0
    }
};