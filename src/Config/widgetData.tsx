import { themeColors } from "../Theme";
import * as widgetInterface from "../Component/interfaces/widgetInterface";

export const widget27Data: widgetInterface.IWidget27Data[] = [{
    name: 'Spaceships',
    data: [400, 430, 448, 470, 540, 580, 690, 1100, 1200, 1380]
}]

export const widget27AxisData: string[] = ['South Korea', 'Canada', 'United Kingdom', 'Netherlands', 'Italy', 'France', 'Japan',
    'United States', 'China', 'Germany'
]

export const widget28ChartData: widgetInterface.IWidget28Data[] = [
    { title: 'Team A', data: 44, color: themeColors.accent },
    { title: 'Team B', data: 55, color: themeColors.secondary },
    { title: 'Team C', data: 13, color: themeColors.orange },
    { title: 'Team D', data: 43, color: themeColors.info },
    { title: 'Team E', data: 22, color: themeColors.purple }
]

export const widget29ChartData: widgetInterface.IWidget29Data[] = [
    { title: 'Team A', data: 44, color: themeColors.accent },
    { title: 'Team B', data: 55, color: themeColors.secondary },
    { title: 'Team C', data: 13, color: themeColors.orange },
    { title: 'Team D', data: 43, color: themeColors.info },
    { title: 'Team E', data: 22, color: themeColors.purple }
]


export const widget30ChartData: widgetInterface.IWidget30Data[] = [
    { title: 'Team A', data: 90, color: themeColors.accent },
    { title: 'Team B', data: 75, color: themeColors.secondary },
    { title: 'Team C', data: 40, color: themeColors.orange },
    { title: 'Team D', data: 60, color: themeColors.purple }
]

export const widget31ChartData: widgetInterface.IWidget31Data[] = [{
    name: "Session Duration",
    data: [[40, 45, 50], [50, 52, 54], [35, 38, 40], [23, 24, 25], [31, 33, 35], [25, 26, 27]]
},
{
    name: "Page Views",
    data: [[35], [41], [62], [42, 40], [13], [18]]
},
{
    name: 'Total Visits',
    data: [87, 57, 74, 99, 75, 38]
}]