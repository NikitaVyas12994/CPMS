import { themeColors } from "../Theme";
import * as widgetInterface from "../Component/interfaces/widgetInterface";


export const widget2Data: widgetInterface.IWidget2Data[] = [
    { title: '2,870', description: 'Sales this month', iconColor: 'purple', iconName: 'lnil lnil-analytics-alt-1' },
    { title: '131', description: 'New users', iconColor: 'orange', iconName: 'lnil lnil-handshake' },
    { title: '$398,49', description: 'Earned today', iconColor: 'green', iconName: 'lnil lnil-diamond-alt' },
    { title: '$6542,31', description: 'Sales this month', iconColor: 'info', iconName: 'lnil lnil-bank' }
]

export const widget7Data: widgetInterface.IWidget7Data[] = [
    { title: 'Transactions', iconName: 'fas fa-gem', iconColor: 'primary', amount: '8,637', percentage: '2.1', isIncrease: true, description: 'since last month' },
    { title: 'Subscriptions', iconName: 'fas fa-user-plus', iconColor: 'orange', amount: '1,378', percentage: '2.1', isIncrease: false, description: 'going down' },
    { title: 'Referals', iconName: 'fas fa-bullhorn', iconColor: 'green', amount: '1,911', percentage: '4.1', isIncrease: true, description: 'going up' }
]

export const widget8Data: widgetInterface.IWidget8Data[] = [
    { percentage: '85', label: 'Productivity', color: themeColors.purple, },
    { percentage: 70, label: 'Efficiency', color: themeColors.accent },
]

export const widget10Data: widgetInterface.IWidget10Data = {
    percentage: 78,
    isIncrease: true,
    incrementPercentage: '6.4',
    incrementDescription: 'since last month',
    performancePercentage: 65,
    title: 'Sales'
}

export const widget11Data: widgetInterface.IWidget11Data[] = [
    { title: 'Personal', count: '4' },
    { title: 'Business', count: '9' },
    { title: 'Family', count: '2' },
]

export const widget13Data: widgetInterface.IWidget13Data = {
    name: 'Erik K.',
    companyName: 'Huro Ltd.',
    designation: 'Product Manager',
    address: 'Los Angeles, CA',
    mobile: '+1 444-5156',
    email: 'erikkovalsky@huro.io',
    image: 'https://via.placeholder.com/150x150'
}

export const widget14Data: widgetInterface.IWidget14Data[] = [
    { title: 'Energy', icon: 'lnil lnil-bolt-alt' },
    { title: 'Gold', icon: 'lnil lnil-gold-bar' },
    { title: 'Real Estate', icon: 'lnil lnil-apartment' },
    { title: 'Food', icon: 'lnil lnil-leaves' },
    { title: 'Technology', icon: 'lnil lnil-laptop-alt-switch' },
    { title: 'Healthcare', icon: 'lnil lnil-capsule' },
    { title: 'Research', icon: 'lnil lnil-atom' },
    { title: 'Finance', icon: 'lnil lnil-diamond-alt' }
]

export const widget16Data: widgetInterface.IWidget16Data[] = [
    { total: 264, value: 70, description: 'New Deals', color: themeColors.green },
    { total: 1023, value: 500, description: 'Proposals', color: themeColors.orange },
    { total: 264, value: 240, description: 'New Deals', color: themeColors.info }
]

export const widget17Data: widgetInterface.IWidget17Data = {
    title: 'Personal Score',
    percentage: "75"
}

export const widget18Data: widgetInterface.IWidget18Data[] = [{
    name: 'Returning',
    data: [318.12, 407.21, 284.2, 517, 425, 1209, 1010]
}, {
    name: 'Newcomers',
    data: [112, 324, 457, 32, 342, 527, 414]
}, {
    name: 'Abandonned',
    data: [787, 534, 365, 107, 145, 54, 27]
}]

export const widget19Data: widgetInterface.IWidget19Data[] = [{
    name: 'Design',
    data: [44, 55, 57, 56, 61, 58, 63, 60, 66, 10, 20, 30]
}, {
    name: 'Development',
    data: [76, 85, 101, 98, 87, 105, 91, 114, 94, 20, 30, 40]
}]

export const widget20ChartData: widgetInterface.IWidget20ChartData[] = [{
    name: 'Returning',
    data: [318.12, 407.21, 284.2, 517, 425, 1209, 1010]
}, {
    name: 'Newcomers',
    data: [112, 324, 457, 32, 342, 527, 414]
}]

export const widget20ChartTimeStamp: (string | Date)[] = ["2020-09-19", "2020-09-20", "2020-09-21", "2020-09-22", "2020-09-23", "2020-09-24", "2020-09-25"]

export const transactionData: widgetInterface.ITransactionData[] = [
    { title: 'Food Delivery', value: '- $41.49', transactionTimeData: 'Oct 16, 2020 - 2:13pm', icon: 'lnil lnil-cart-alt', iconColor: 'orange' },
    { title: 'Food Delivery', value: '+ $41.49', transactionTimeData: 'Oct 16, 2020 - 2:13pm', icon: 'lnil lnil-cart-alt', iconColor: 'green' }
]
export const widget25Data: widgetInterface.IWidget25Data[] = [
    { title: 'Messages', description: 'Inbox messages', count: 5, icon: 'lnil lnil-envelope-alt', color: 'green', status: 'New', statusColor: 'success' },
    { title: 'Tasks', description: 'Pending tasks', count: 3, icon: 'lnil lnil-checkmark-circle', color: 'orange', status: 'Pending', statusColor: 'none' },
    { title: 'Messages', description: 'Inbox messages', count: 5, icon: 'lnil lnil-envelope-alt', color: 'green', status: 'New', statusColor: 'success' },
]

export const widget26Data: widgetInterface.IWidget26Data[] = [
    {
        name: "Fast Pizza",
        logo: "assets/img/icons/logos/fastpizza.svg",
        distance: 0.3,
        openingCount: "6pm",
        rating: 3,
        description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Memini me adesse meam.",
        coordinates: [-77.038659, 38.931567],
    },
    {
        name: "Envato",
        logo: "assets/img/icons/logos/envato.svg",
        distance: 0.8,
        openingCount: "5pm",
        rating: 5,
        description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Memini me adesse meam.",
        coordinates: [-77.003168, 38.894651],
    },
    {
        name: "Lipflow",
        logo: "assets/img/icons/logos/lipflow.svg",
        distance: 1.2,
        openingCount: "8pm",
        rating: 2,
        description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Memini me adesse meam.",
        coordinates: [-77.090372, 38.881189],
    },
    {
        name: "Metamovies",
        logo: "assets/img/icons/logos/metamovies.svg",
        distance: 0.5,
        openingCount: "11pm",
        rating: 1,
        description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Memini me adesse meam.",
        coordinates: [-77.111561, 38.882342],
    },
    {
        name: "Slicer",
        logo: "assets/img/icons/logos/slicer.svg",
        distance: 0.2,
        openingCount: "4:30pm",
        rating: 3,
        description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Memini me adesse meam.",
        coordinates: [-77.052477, 38.943951],
    },
    {
        name: "Drop",
        logo: "assets/img/icons/logos/drop.svg",
        distance: 2.1,
        openingCount: "7pm",
        rating: 3,
        description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Memini me adesse meam.",
        coordinates: [-77.043444, 38.909664],
    },
    {
        name: "Fresco",
        logo: "assets/img/icons/logos/fresco.svg",
        distance: 0.6,
        openingCount: "6pm",
        rating: 3,
        description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Memini me adesse meam.",
        coordinates: [-77.031706, 38.914581],
    },
    {
        name: "Vego LLC",
        logo: "assets/img/icons/logos/vego.svg",
        distance: 0.3,
        openingCount: "9pm",
        rating: 3,
        description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Memini me adesse meam.",
        coordinates: [-77.007481, 38.876516],
    },
    {
        name: "Hairz",
        logo: "assets/img/icons/logos/hairz.svg",
        distance: 0.3,
        openingCount: "6pm",
        rating: 3,
        description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Memini me adesse meam.",
        coordinates: [-77.020945, 38.878241],
    }
]

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