import { ChartCurve, ChartTypes, ChartXaxisType } from "../../../Config/ApexChart.conf";
import { themeColors } from "../../../Theme";

export const widget18ChartData = {
    chart: {
        height: 280,
        type: ChartTypes.area,
        offsetY: -10,
        toolbar: {
            show: false
        }
    },
    colors: [themeColors.accent, themeColors.info, themeColors.orange],
    yaxis: {
        labels: {
            formatter: function (val: number) {
                return val.toFixed(2);
            }
        }
    },
    xaxis: {
        type: ChartXaxisType.datetime,
        categories: [] as any
    },
    legend: {
        show: false
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
        y: {
            formatter: function (value: any) {
                return '$' + value
            }
        }
    },
};