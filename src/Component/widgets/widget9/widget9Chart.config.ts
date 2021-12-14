import { ChartTypes } from "../../../Config/ApexChart.conf"

export const widget9Chart = {
    chart: {
        height: 250,
        type: ChartTypes.line,
        zoom: {
            enabled: false
        },
        toolbar: {
            show: false
        }
    },
    colors: ['#797bf2'],
    dataLabels: {
        enabled: false
    },
    stroke: {
        width: [2, 2, 2],
        curve: 'smooth'
    },
    grid: {
        row: {
            colors: ['transparent', 'transparent'], // takes an array which will be repeated on columns
            opacity: 0.5
        },
    },
    xaxis: {
        categories: [] as any,
    },
    tooltip: {
        y: {
            formatter: function (val: number) {
                return "$" + val
            }
        }
    }
};