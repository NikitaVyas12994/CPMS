import { ChartHorizontalAlign, ChartPosition, ChartTypes, ChartVerticalAlign } from "../../../Config/ApexChart.conf";

export const widget28ChartConfig = {
    chart: {
        width: 405,
        type: ChartTypes.pie,
    },
    colors: [] as string[],
    labels: [] as string[],
    responsive: [{
        breakpoint: 480,
        options: {
            chart: {
                width: 315,
                toolbar: {
                    show: false
                }
            },
            legend: {
                position: ChartVerticalAlign.top
            }
        }
    }],
    legend: {
        position: ChartPosition.right,
        horizontalAlign: ChartHorizontalAlign.center,
    }
};
