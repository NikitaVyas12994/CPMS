import { ChartHorizontalAlign, ChartPosition, ChartTypes } from "../../../Config/ApexChart.conf";

export const widget29ChartConfig = {
    title: {
        text: ''
    },
    chart: {
        width: 405,
        type: ChartTypes.donut
    },
    labels: [] as string[],
    colors: [] as string[],
    responsive: [{
        breakpoint: 480,
        options: {
            chart: {
                width: 280,
                toolbar: {
                    show: false
                },
            },
            legend: {
                position: ChartPosition.top
            }
        }
    }],
    legend: {
        position: ChartPosition.right,
        horizontalAlign: ChartHorizontalAlign.center,
    }
};