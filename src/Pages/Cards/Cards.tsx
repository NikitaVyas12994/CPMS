import React, { useCallback, useMemo, useState } from 'react'
import "./Cards.css";
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
import * as widgetData from "../../Config/widgetData";

function Cards() {

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
    }, [],
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
    }, [])

    const [searchString, setSearchString] = useState('');

    const setSearchStringCallback = useCallback((data) => {
        setSearchString(data)
    }, [])

    return (

        <div className="columns is-multiline">
            <Widget7 widget7Data={widgetData.widget7Data} />
            <div className="column is-3">
                <Widget13 widget13Data={widgetData.widget13Data} />
            </div>
            <div className="column is-6">
                <Widget2 widget2Data={widgetData.widget2Data} title='Your Quick Stats' />
            </div>
            <div className='column is-6'>
                <Widget19
                    widget19Data={widgetData.widget19Data} title='Orders Summary'
                    timeStamp={useMemo(() => ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'], [])}
                />
            </div>

            <div className='column is-12'>
                <Widget14 widget14Data={widgetData.widget14Data} />
            </div>
            <div className='column is-5'>
                <Widget24 searchString={searchString} setSearchString={setSearchStringCallback} />
                <div>
                    <Widget16
                        widget16Data={widgetData.widget16Data}
                        title='Additional Stats'
                    />
                </div>
            </div>

            <div className="column is-3">
                <Widget11 widget11Data={widgetData.widget11Data} title='Notifications' />
            </div>

            <div className="column is-3">
                <Widget8
                    widget8Data={widgetData.widget8Data}
                    title='Goal Overview'
                    total='71.5'
                    completed='1,223'
                    inProgress={467}
                />
            </div>

            <div className="column is-3">
                <Widget10 widget10Data={widgetData.widget10Data} />
            </div>

            <div className="column is-3">
                <Widget17 widget17Data={widgetData.widget17Data} />
            </div>

            <div className='column is-7'>
                <Widget18 widget18Data={widgetData.widget18Data}
                    title='Revenue Overview'
                    currentMonthValue='75,648.43'
                    lastMonthValue='91,512.18'
                    timeStamp={useMemo(() => ["2020-09-19", "2020-09-20", "2020-09-21", "2020-09-22", "2020-09-23", "2020-09-24", "2020-09-25"], [])}
                />
            </div>
            <div className="column is-5">
                <Widget25 widget25Data={widgetData.widget25Data} />
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
                    widget20ChartData={widgetData.widget20ChartData}
                    widget20ChartTimeStamp={widgetData.widget20ChartTimeStamp}
                    transactionData={widgetData.transactionData}
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
