import { ChartTypes, ChartVerticalAlign } from "../../../Config/ApexChart.conf";
import { themeColors } from "../../../Theme";

export const widget19ChartData = {
    chart: {
        height: 250,
        type: ChartTypes.bar,
        toolbar: {
            show: false
        }
    },
    colors: [themeColors.purple, themeColors.orange],
    legend: {
        position: ChartVerticalAlign.bottom
    },
    plotOptions: {
        bar: {
            horizontal: false,
        },
    },
    dataLabels: {
        enabled: false
    },
    stroke: {
        show: false,
    },
    noData: {
        text: "Loading..."
    },
    xaxis: {
        categories: [] as any,
        tickPlacement: 'on',
        labels: {
            show: true,
            rotate: -45,
            hideOverlappingLabels: true,
            rotateAlways: true,
        },
    },
};