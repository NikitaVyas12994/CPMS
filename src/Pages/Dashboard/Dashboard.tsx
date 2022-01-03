import React, { useState, useMemo, useCallback } from "react";
import { IWidget1Data, IWidget6Data, IWidget9Data, IWidget15Data, IWidget5Data } from "../../Component/interfaces/widgetInterface";
import { Widget1 } from "../../Component/widgets/widget1";
import { Widget15 } from "../../Component/widgets/widget15";
import { Widget3 } from "../../Component/widgets/widget3";
import { Widget5 } from "../../Component/widgets/widget5";
import { Widget6 } from "../../Component/widgets/widget6";
import { Widget9 } from "../../Component/widgets/widget9";
import { themeColors } from "../../Theme";

const Dashboard = () => {

    const widget1Data: IWidget1Data[] = useMemo(() => [{
        name: 'Returning',
        data: [31, 40, 28, 51, 42, 109, 100]
    }, {
        name: 'Newcomers',
        data: [11, 32, 45, 32, 34, 52, 41]
    }, {
        name: 'Abandonned',
        data: [78, 53, 36, 10, 14, 5, 2]
    }], [])

    // set initial undefine state for remove is-unchecked animation
    const [widget5Data, setWidget5Data] = useState<IWidget5Data[]>([
        { title: 'Call Mr. Markstrom', description: 'Review the project initial wireframes', isChecked: undefined },
        { title: 'Finish wireframes', description: 'Make all requested changes and publish', isChecked: undefined },
        { title: 'Update timesheets', description: 'Update all the team timesheets', isChecked: undefined },
        { title: 'Request payout', description: 'send project invoice to client', isChecked: true }
    ])

    const setWidget5DataCallback = useCallback((data) => {
        setWidget5Data(data)
    }, [])


    const widget1TimeStamp = useMemo(() =>
        ["2020-09-19T00:00:00.000Z", "2020-09-20T01:30:00.000Z", "2020-09-21T02:30:00.000Z", "2020-09-22T03:30:00.000Z", "2020-09-23T04:30:00.000Z", "2020-09-24T05:30:00.000Z", "2020-09-25T06:30:00.000Z"]
        , [])


    const widget6Data: IWidget6Data[] = useMemo(() => [{
        name: 'Design',
        data: [44, 55, 57, 56, 61, 58, 63, 60, 66]
    }, {
        name: 'Development',
        data: [76, 85, 101, 98, 87, 105, 91, 114, 94]
    }, {
        name: 'Management',
        data: [35, 41, 36, 26, 45, 48, 52, 53, 41]
    }], [])

    const widget9Data: IWidget9Data[] = useMemo(() => [{
        name: "Revenue",
        data: [10835, 40214, 36257, 51411, 45697, 61221, 65295, 91512, 75648]
    }], [])

    const widget15Data: IWidget15Data[] = useMemo(() => [
        {
            name: 'Total Sales',
            data: [472, 454, 547, 385, 562, 247, 652, 318, 379, 391, 622, 515, 355, 415, 358, 271, 932, 534, 615, 278, 546, 435, 192, 465],
            color: themeColors.orange,
            total: '9,374'
        },
        {
            name: 'Total Profit',
            data: [47, 45, 54, 38, 56, 24, 65, 31, 37, 39, 62, 51, 35, 41, 35, 27, 93, 53, 61, 27, 54, 43, 19, 46],
            color: themeColors.green,
            total: '11,320'
        },
        {
            name: 'Total Order',
            data: [72, 54, 47, 85, 62, 47, 52, 18, 79, 91, 22, 15, 55, 15, 58, 71, 32, 34, 15, 78, 46, 35, 92, 65],
            color: themeColors.purple,
            total: '9,374'
        }
    ], [])

    return (

        <div className="columns is-multiline">
            <div className="column is-6">
                <Widget1
                    widget1Data={widget1Data}
                    title='Customer'
                    timeStamp={widget1TimeStamp}
                />
            </div>
            <div className="column is-6">
                <Widget3
                    title='Profit Evolution'
                    timeStamp={useMemo(() => ["May", "Jun", "Jul", "Aug", "Sep"], [])}
                    widget3Data={useMemo(() => [2.3, 3.1, 4.0, 10.1, 4.0], [])}
                />
            </div>

            <div className="column is-12">
                <Widget6
                    title="Team Efficiency"
                    timeStamp={useMemo(() => ['Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct'], [])}
                    widget6Data={widget6Data}
                />
            </div>
            <div className="column is-12">
                <Widget9
                    title='Revenue'
                    widget9Data={widget9Data}
                    timeStamp={useMemo(() => ['Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct'], [])}
                    currentMonthData='75,648.43'
                    previousMonthData='91,512.18'
                />
            </div>
            <div className="column is-12">
                <Widget15
                    yaxisData={useMemo(() => ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '21', '23', '24'], [])}
                    widget15Data={widget15Data} />
            </div>
            <div className="column is-4">
                <Widget5 widget5Data={widget5Data} setWidget5Data={setWidget5DataCallback} title='Todo Today' />
            </div>
        </div>
    )
}

export { Dashboard }
