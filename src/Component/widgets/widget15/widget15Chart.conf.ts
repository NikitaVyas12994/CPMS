import { ChartCurve, ChartTypes } from "../../../Config/ApexChart.conf";

export const widget15ChartData = {
    chart: {
        id: 'sparkline1',
        group: 'sparklines',
        type: ChartTypes.area,
        height: 130,
        sparkline: {
            enabled: true
        },
    },
    colors: [] as any,
    stroke: {
        width: [2],
        curve: ChartCurve.straight
    },
    fill: {
        opacity: 1,
    },
    grid: {
        padding: {
            right: 0,
            left: 0
        }
    },
    enabled: false,
    labels: [] as any,
    yaxis: {
        min: 0
    },
    title: {
        text: '',
        offsetX: 5,
        style: {
            fontSize: '24px',
            cssClass: 'apexcharts-yaxis-title',
            color: '#a2a5b9'
        }
    },
    subtitle: {
        text: '' as (number | string),
        offsetX: 5,
        style: {
            fontSize: '24px',
            fontWeight: '600',
            cssClass: 'apexcharts-yaxis-title'
        }
    },
    series: [{
    }]
}