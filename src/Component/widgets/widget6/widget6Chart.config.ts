import { ChartTypes, ChartVerticalAlign } from "../../../Config/ApexChart.conf"

export const widget6Chart = {
    chart: {
        height: 250,
        type: ChartTypes.bar,
        toolbar: {
            show: false
        }
    },
    colors: ['#797bf2', '#8269B2', '#FFA981'],
    legend: {
        position: ChartVerticalAlign.top
    },
    plotOptions: {
        bar: {
            horizontal: false,
            endingShape: 'rounded',
            columnWidth: '55%',
        },
    },
    dataLabels: {
        enabled: false
    },
    stroke: {
        show: true,
        width: 2,
        colors: ['transparent']
    },
    xaxis: {
        categories: [] as any,
    },
    yaxis: {
        labels: {
            formatter: function (val: number) {
                return val + 70
            }
        }
    },
    fill: {
        opacity: 1
    },
    tooltip: {
        y: {
            formatter: function (val: number) {
                return val + 'hrs'
            }
        }
    },
}