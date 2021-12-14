import { ChartHorizontalAlign, ChartTypes, ChartVerticalAlign } from "../../../Config/ApexChart.conf";

export const widget3Chart = {
    chart: {
        height: 262,
        type: ChartTypes.bar,
        toolbar: {
            show: false
        }
    },
    colors: ['#93E088', '#ff227d', '#FFA981'],
    plotOptions: {
        bar: {
            dataLabels: {
                position: ChartVerticalAlign.top, // top, center, bottom
            },
        }
    },
    dataLabels: {
        enabled: true,
        formatter: function (val: number) {
            return val + "%";
        },
        offsetY: -20,
        style: {
            fontSize: '12px',
            colors: ["#304758"]
        }
    },
    xaxis: {
        categories: [] as any,
        position: ChartVerticalAlign.top,
        axisBorder: {
            show: false
        },
        axisTicks: {
            show: false
        },
        crosshairs: {
            fill: {
                type: 'gradient',
                gradient: {
                    colorFrom: '#D8E3F0',
                    colorTo: '#BED1E6',
                    stops: [0, 100],
                    opacityFrom: 0.4,
                    opacityTo: 0.5,
                }
            }
        },
        tooltip: {
            enabled: true,
        }
    },
    yaxis: {
        axisBorder: {
            show: false
        },
        axisTicks: {
            show: false,
        },
        labels: {
            show: false,
            formatter: function (val: number) {
                return val + "%";
            }
        }

    },
    title: {
        text: '',
        align: ChartHorizontalAlign.left
    },
}