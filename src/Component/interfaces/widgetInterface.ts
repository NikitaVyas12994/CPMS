

export interface IWidget1Data {
    name: string,
    data: number[]
}
export interface IWidget2Data {
    title?: string,
    description?: string,
    iconColor?: string,
    iconName?: string
}
export interface IWidget5Data {
    title?: string,
    description?: string,
    isChecked?: boolean
}
export interface IWidget6Data {
    name: string,
    data: (number | string)[]
}

export interface IWidget7Data {
    title: string,
    iconName: string,
    iconColor: string,
    amount: (string | number),
    percentage: (string | number),
    isIncrease: boolean,
    description: string
}

export interface IWidget8Data {
    percentage: (string | number),
    label: string,
    color: string
}

export interface IWidget9Data {
    name: string,
    data: (string | number)[]
}

export interface IWidget10Data {
    percentage: (string | number),
    isIncrease: boolean,
    incrementPercentage: (string | number),
    incrementDescription: string,
    performancePercentage: (string | number),
    title: string
}

export interface IWidget11Data {
    title: string,
    count: string
}

export interface IWidget12Data {
    icon: string,
    title: string,
    subtitle: string
}

export interface IWidget13Data {
    name: string,
    companyName: string,
    designation: string,
    address: string,
    mobile: (string | number),
    email: string,
    image: string
}

export interface IWidget14Data {
    title: string,
    icon: string
}

export interface IWidget15Data {
    name: string,
    data: (number | string)[],
    color: string,
    total: (string | number)
}

export interface IWidget16Data {
    total: (string | number),
    value: (string | number),
    description: string,
    color: string
}

export interface IWidget17Data {
    title: string,
    percentage: (number | string)
}

export interface IWidget18Data {
    name: string,
    data: number[]
}

export interface IWidget19Data {
    name: string,
    data: number[]
}

export interface IWidget20ChartData {
    name: string,
    data: (number | string)[]
}

export interface ITransactionData {
    title: string,
    value: (string | number),
    transactionTimeData: (string | Date),
    icon: string,
    iconColor: string
}

export interface IWidget22Data {
    id: number;
    title: string,
    isChecked: boolean
}

export interface IWidget23Data {
    title: string,
    timeStamp: string,
    status: string,
    isChecked: (boolean | undefined),
}

export interface IWidget25Data {
    title: string,
    description: string,
    count: number,
    icon: string,
    color: string,
    status: string,
    statusColor: string
}
export interface IWidget26Data {
    name: string,
    logo: string,
    distance: number,
    openingCount: string,
    rating: number,
    description: string
    coordinates: number[],
}
export interface IWidget27Data {
    name: string,
    data: number[]
}

export interface IWidget28Data {
    title: string,
    data: (number),
    color: string
}

export interface IWidget29Data {
    title: string,
    data: number,
    color: string
}

export interface IWidget30Data {
    title: string,
    data: number,
    color: string
}

export interface IWidget31Data {
    name: string,
    data: (number[] | number[][]),
}