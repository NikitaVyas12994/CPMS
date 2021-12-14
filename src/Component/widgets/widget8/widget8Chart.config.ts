import { ChartTypes } from "../../../Config/ApexChart.conf";
import { themeColors } from "../../../Theme";

export let widget8ChartData = {
    chart: {
        height: 220,
        type: ChartTypes.radialBar,
        offsetY: -10
    },
    plotOptions: {
        radialBar: {
            startAngle: -135,
            endAngle: 135,
            hollow: {
                margin: 15,
                size: '75%',
            },
            dataLabels: {
                name: {
                    fontSize: '12px',
                    offsetY: -5,
                },
                value: {
                    fontSize: '17px',
                    color: themeColors.lightText,
                    alignSelf: 'center',
                    offsetY: 0
                },
                total: {
                    show: true,
                    label: 'Total',
                    color: themeColors.lightText,
                    formatter: () => { }
                }
            },
            track: {
                strokeWidth: '100%',
            }
        }
    },
    labels: [] as any,
    colors: [] as any,
};