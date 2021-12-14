import { ChartTypes } from "../../../Config/ApexChart.conf";

export const widget16ChartData = {
    chart: {
        height: 80,
        offsetY: -10,
        type: ChartTypes.radialBar,
    },
    plotOptions: {
        radialBar: {
            hollow: {
                size: '35%',
            },
            dataLabels: {
                name: {
                    show: false
                },
                value: {
                    show: false
                },
            }
        }
    },
    colors: [] as any,
};