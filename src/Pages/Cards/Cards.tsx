import React, { useCallback, useMemo, useState } from 'react'
import "./Cards.css";
import { themeColors } from '../../Theme';
import * as widgetInterface from "../../Component/interfaces/widgetInterface";
import { Widget2 } from '../../Component/widgets/widget2';
import { Widget7 } from "../../Component/widgets/widget7";
import { Widget8 } from "../../Component/widgets/widget8";
import { Widget10 } from "../../Component/widgets/widget10";
import { Widget11 } from "../../Component/widgets/widget11";
import { Widget13 } from "../../Component/widgets/widget13";
import { Widget14 } from "../../Component/widgets/widget14";
import { Widget16 } from "../../Component/widgets/widget16";
import { Widget17 } from "../../Component/widgets/widget17";
import { Widget18 } from "../../Component/widgets/widget18";
import { Widget19 } from "../../Component/widgets/widget19";
import { Widget20 } from "../../Component/widgets/widget20";
import { Widget21 } from '../../Component/widgets/widget21';
import { Widget22 } from '../../Component/widgets/widget22';
import { Widget23 } from '../../Component/widgets/widget23';
import { Widget24 } from '../../Component/widgets/widget24';
import { Widget25 } from '../../Component/widgets/widget25';


function Cards() {

    const widget2Data: widgetInterface.IWidget2Data[] = useMemo(() => [
        { title: '2,870', description: 'Sales this month', iconColor: 'purple', iconName: 'lnil lnil-analytics-alt-1' },
        { title: '131', description: 'New users', iconColor: 'orange', iconName: 'lnil lnil-handshake' },
        { title: '$398,49', description: 'Earned today', iconColor: 'green', iconName: 'lnil lnil-diamond-alt' },
        { title: '$6542,31', description: 'Sales this month', iconColor: 'info', iconName: 'lnil lnil-bank' }
    ], [])

    const widget7Data: widgetInterface.IWidget7Data[] = useMemo(() => [
        { title: 'Transactions', iconName: 'fas fa-gem', iconColor: 'primary', amount: '8,637', percentage: '2.1', isIncrease: true, description: 'since last month' },
        { title: 'Subscriptions', iconName: 'fas fa-user-plus', iconColor: 'orange', amount: '1,378', percentage: '2.1', isIncrease: false, description: 'going down' },
        { title: 'Referals', iconName: 'fas fa-bullhorn', iconColor: 'green', amount: '1,911', percentage: '4.1', isIncrease: true, description: 'going up' }
    ], [])

    const widget8Data: widgetInterface.IWidget8Data[] = useMemo(() => [
        { percentage: '85', label: 'Productivity', color: themeColors.purple, },
        { percentage: 70, label: 'Efficiency', color: themeColors.accent },
    ], [])

    const widget10Data: widgetInterface.IWidget10Data = useMemo(() => {
        return {
            percentage: 78,
            isIncrease: true,
            incrementPercentage: '6.4',
            incrementDescription: 'since last month',
            performancePercentage: 65,
            title: 'Sales'
        }
    }, [])

    const widget11Data: widgetInterface.IWidget11Data[] = useMemo(() => [
        { title: 'Personal', count: '4' },
        { title: 'Business', count: '9' },
        { title: 'Family', count: '2' },
    ], [])

    const widget13Data: widgetInterface.IWidget13Data = useMemo(() => {
        return {
            name: 'Erik K.',
            companyName: 'Huro Ltd.',
            designation: 'Product Manager',
            address: 'Los Angeles, CA',
            mobile: '+1 444-5156',
            email: 'erikkovalsky@huro.io',
            image: 'https://via.placeholder.com/150x150'
        }
    }, [])

    const widget14Data: widgetInterface.IWidget14Data[] = useMemo(() => [
        { title: 'Energy', icon: 'lnil lnil-bolt-alt' },
        { title: 'Gold', icon: 'lnil lnil-gold-bar' },
        { title: 'Real Estate', icon: 'lnil lnil-apartment' },
        { title: 'Food', icon: 'lnil lnil-leaves' },
        { title: 'Technology', icon: 'lnil lnil-laptop-alt-switch' },
        { title: 'Healthcare', icon: 'lnil lnil-capsule' },
        { title: 'Research', icon: 'lnil lnil-atom' },
        { title: 'Finance', icon: 'lnil lnil-diamond-alt' }
    ], [])

    const widget16Data: widgetInterface.IWidget16Data[] = useMemo(() => [
        { total: 264, value: 70, description: 'New Deals', color: themeColors.green },
        { total: 1023, value: 500, description: 'Proposals', color: themeColors.orange },
        { total: 264, value: 240, description: 'New Deals', color: themeColors.info }
    ], [])

    const widget17Data: widgetInterface.IWidget17Data = useMemo(() => {
        return {
            title: 'Personal Score',
            percentage: "75"
        }
    }, [])

    const widget18Data: widgetInterface.IWidget18Data[] = useMemo(() => [{
        name: 'Returning',
        data: [318.12, 407.21, 284.2, 517, 425, 1209, 1010]
    }, {
        name: 'Newcomers',
        data: [112, 324, 457, 32, 342, 527, 414]
    }, {
        name: 'Abandonned',
        data: [787, 534, 365, 107, 145, 54, 27]
    }], [])

    const widget19Data: widgetInterface.IWidget19Data[] = useMemo(() => [{
        name: 'Design',
        data: [44, 55, 57, 56, 61, 58, 63, 60, 66, 10, 20, 30]
    }, {
        name: 'Development',
        data: [76, 85, 101, 98, 87, 105, 91, 114, 94, 20, 30, 40]
    }], [])

    const widget20ChartData: widgetInterface.IWidget20ChartData[] = useMemo(() => [{
        name: 'Returning',
        data: [318.12, 407.21, 284.2, 517, 425, 1209, 1010]
    }, {
        name: 'Newcomers',
        data: [112, 324, 457, 32, 342, 527, 414]
    }], [])

    const widget20ChartTimeStamp: (string | Date)[] = useMemo(() => ["2020-09-19", "2020-09-20", "2020-09-21", "2020-09-22", "2020-09-23", "2020-09-24", "2020-09-25"], [])

    const transactionData: widgetInterface.ITransactionData[] = useMemo(() => [
        { title: 'Food Delivery', value: '- $41.49', transactionTimeData: 'Oct 16, 2020 - 2:13pm', icon: 'lnil lnil-cart-alt', iconColor: 'orange' },
        { title: 'Food Delivery', value: '+ $41.49', transactionTimeData: 'Oct 16, 2020 - 2:13pm', icon: 'lnil lnil-cart-alt', iconColor: 'green' }
    ], [])

    const [widget22Data, setWidget22Data] = useState<{ [key: string]: widgetInterface.IWidget22Data[] }>(
        {
            Luggage: [
                {
                    id: 1, title: 'All option', isChecked: true
                },
                {
                    id: 2, title: '1 Cabin luggage', isChecked: false
                },
                {
                    id: 3, title: '2 Cabin luggage', isChecked: false
                },
                {
                    id: 4, title: 'none', isChecked: false
                }
            ],
            Stops: [
                {
                    id: 1, title: 'All option', isChecked: true
                },
                {
                    id: 2, title: '1 Cabin luggage', isChecked: false
                },
                {
                    id: 3, title: '2 Cabin luggage', isChecked: false
                },
                {
                    id: 4, title: 'none', isChecked: false
                }
            ],

        })

    const setWidget22DataCallback = useCallback((data) => {
        setWidget22Data(data)
    }, [widget22Data],
    )

    const [widget23Data, setWidget23Data] = useState<{ [key: string]: widgetInterface.IWidget23Data[] }>({
        All: [
            { title: "Review Anna's report", timeStamp: '9:45am', status: 'Pending', isChecked: undefined },
            { title: "Finish document review", timeStamp: '11:30am', status: 'Pending', isChecked: true },
            { title: "Project Meeting", timeStamp: '11:30am', status: 'Pending', isChecked: undefined },
        ],
        Mine: [
            { title: "Call Mike R.", timeStamp: '9:45am', status: 'Pending', isChecked: undefined },
            { title: "Finish document review", timeStamp: '11:30am', status: 'Pending', isChecked: undefined },
            { title: "Project Meeting", timeStamp: '11:30am', status: 'Pending', isChecked: true },
        ]
    });

    const setWidget23DataCallback = useCallback((data) => {
        setWidget23Data(data);
    }, [widget23Data])

    const [searchString, setSearchString] = useState('');

    const setSearchStringCallback = useCallback((data) => {
        setSearchString(data)
    }, [searchString])

    const widget25Data: widgetInterface.IWidget25Data[] = [
        { title: 'Messages', description: 'Inbox messages', count: 5, icon: 'lnil lnil-envelope-alt', color: 'green', status: 'New', statusColor: 'success' },
        { title: 'Tasks', description: 'Pending tasks', count: 3, icon: 'lnil lnil-checkmark-circle', color: 'orange', status: 'Pending', statusColor: 'none' },
        { title: 'Messages', description: 'Inbox messages', count: 5, icon: 'lnil lnil-envelope-alt', color: 'green', status: 'New', statusColor: 'success' },
    ]

    return (

        <div className="columns is-multiline">
            <Widget7 widget7Data={widget7Data} />
            <div className="column is-3">
                <Widget13 widget13Data={widget13Data} />
            </div>
            <div className="column is-6">
                <Widget2 widget2Data={widget2Data} title='Your Quick Stats' />
            </div>
            <div className='column is-6'>
                <Widget19
                    widget19Data={widget19Data} title='Orders Summary'
                    timeStamp={useMemo(() => ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'], [])}
                />
            </div>

            <div className='column is-12'>
                <Widget14 widget14Data={widget14Data} />
            </div>
            <div className='column is-5'>
                <Widget24 searchString={searchString} setSearchString={setSearchStringCallback} />
                <div>
                    <Widget16
                        widget16Data={widget16Data}
                        title='Additional Stats'
                    />
                </div>
            </div>

            <div className="column is-3">
                <Widget11 widget11Data={widget11Data} title='Notifications' />
            </div>

            <div className="column is-3">
                <Widget8
                    widget8Data={widget8Data}
                    title='Goal Overview'
                    total='71.5'
                    completed='1,223'
                    inProgress={467}
                />
            </div>

            <div className="column is-3">
                <Widget10 widget10Data={widget10Data} />
            </div>

            <div className="column is-3">
                <Widget17 widget17Data={widget17Data} />
            </div>

            <div className='column is-7'>
                <Widget18 widget18Data={widget18Data}
                    title='Revenue Overview'
                    currentMonthValue='75,648.43'
                    lastMonthValue='91,512.18'
                    timeStamp={useMemo(() => ["2020-09-19", "2020-09-20", "2020-09-21", "2020-09-22", "2020-09-23", "2020-09-24", "2020-09-25"], [])}
                />
            </div>
            <div className="column is-5">
                <Widget25 widget25Data={widget25Data} />
                <div>
                    <Widget21
                        title='Bitcoin (BTC) Popularity'
                        widget21Data='67'
                        subTitle='(30 days)'
                    />
                </div>
            </div>
            <div className='column is-12'>
                <Widget20
                    title='Monthly Summary'
                    income='5,000.00'
                    expenses='263.19'
                    widget20ChartData={widget20ChartData}
                    widget20ChartTimeStamp={widget20ChartTimeStamp}
                    transactionData={transactionData}
                />
            </div>
            <div className='column is-3'>
                <Widget22 widget22Data={widget22Data} setWidget22Data={setWidget22DataCallback} />
            </div>
            <div className='column is-4'>
                <Widget23 title='Todo'
                    widget23Data={widget23Data}
                    setWidget23Data={setWidget23DataCallback}
                />
            </div>
        </div>
    )
}

export { Cards };
