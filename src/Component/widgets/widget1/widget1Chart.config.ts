import { ChartCurve, ChartHorizontalAlign, ChartTypes, ChartVerticalAlign, ChartXaxisType } from "../../../Config/ApexChart.conf";

export const widget1Chart = {
    chart: {
        height: 295,
        type: ChartTypes.area,
        toolbar: {
            show: false
        }
    },
    colors: ['#797bf2', '#039be5', '#ffa981'],
    xaxis: {
        type: ChartXaxisType.datetime,
        categories: [] as any
    },
    title: {
        text: '',
        align: ChartHorizontalAlign.left
    },
    legend: {
        position: ChartVerticalAlign.top,
    },
    dataLabels: {
        enabled: false
    },
    stroke: {
        width: [2, 2, 2],
        curve: ChartCurve.smooth
    },
    tooltip: {
        x: {
            format: 'dd/MM/yy HH:mm'
        },
    },
};