import { ChartTypes, ChartHorizontalAlign } from "../../../Config/ApexChart.conf";
import { themeColors } from "../../../Theme";

export const widget27ChartConfig = {

    chart: {
        type: ChartTypes.bar,
        height: 280,
        toolbar: {
            show: false
        },
    },
    colors: [themeColors.accent, themeColors.secondary, themeColors.orange, themeColors.purple, themeColors.green],
    plotOptions: {
        bar: {
            horizontal: true,
        }
    },
    title: {
        text: '',
        align: ChartHorizontalAlign.left
    },
    dataLabels: {
        enabled: false
    },
    xaxis: {
        categories: [] as any
    }
};