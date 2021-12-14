import { ChartTypes } from "../../../Config/ApexChart.conf";
import { themeColors } from "../../../Theme";

export const widget10ChartData = {
    chart: {
        height: 150,
        type: ChartTypes.radialBar,
    },
    plotOptions: {
        radialBar: {
            hollow: {
                size: '72%',
            },
            dataLabels: {
                name: {
                    fontSize: '15px',
                    color: themeColors.lightText,
                    offsetY: -5
                },
                value: {
                    fontSize: '15px',
                    alignSelf: 'center',
                    offsetY: -2,
                    color: themeColors.purple
                },

            }
        }
    },
    labels: ['Growth'],
    colors: [themeColors.purple],
};