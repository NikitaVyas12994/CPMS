import { ChartTypes } from "../../../Config/ApexChart.conf";

export const widget30ChartConfig = {
    title: {
        text: ''
    },
    chart: {
        height: 295,
        type: ChartTypes.radialBar,
        toolbar: {
            show: false
        }
    },
    colors: [] as string[],
    plotOptions: {
        radialBar: {
            dataLabels: {
                name: {
                    fontSize: '22px',
                },
                value: {
                    fontSize: '16px',
                },
                total: {
                    show: true,
                    label: 'Total',
                    formatter: () => { }
                }
            }
        }
    },
    labels: [] as string[],
};