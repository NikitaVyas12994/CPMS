import { ChartActiveState, ChartTypes } from "../../../Config/ApexChart.conf";

export let widget17ChartData = {
    chart: {
        type: ChartTypes.radialBar,
        offsetY: -20,
        sparkline: {
            enabled: true
        },
        height: 215
    },
    plotOptions: {
        radialBar: {
            startAngle: -90,
            endAngle: 90,
            hollow: {
                margin: 5,
                size: '40%',
            },
            dataLabels: {
                name: {
                    show: false
                },
                value: {
                    offsetY: -5,
                    fontSize: '14px',
                    fontWeight: 400
                },
            },
        }
    },
    tooltip: {
        enabled: true,
        custom: () => { },
        fixed: {
            enabled: false,
            position: 'topRight',
            offsetX: 43,
            offsetY: 12,
        },
    },
    colors: [] as any,
    states: {
        normal: {
            filter: {
                type: ChartActiveState.none,
            }
        },
        hover: {
            filter: {
                type: ChartActiveState.lighten,
                value: 0.15,
            }
        },
        active: {
            allowMultipleDataPointsSelection: false,
            filter: {
                type: ChartActiveState.none,
            }
        },
    }
};