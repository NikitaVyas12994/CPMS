import React, { useEffect, useRef, useState, memo, useMemo } from "react";
import * as Icon from "react-feather";
import { Widget12 } from "../widget12";
import { Charts } from "../../Charts/Charts";
import { ChartTypes } from "../../../Config/ApexChart.conf";
import { IWidget12Data, IWidget17Data } from "../../interfaces/widgetInterface";
import "./widget17.css";
import { themeColors } from "../../../Theme";
import { widget17ChartData } from "./widget17Chart.config";

interface IWidget17 {
    widget17Data: IWidget17Data
}

const Widget17 = memo((props: IWidget17) => {

    const { title, percentage } = props?.widget17Data

    const [openNotificationModal, setOpenNotificationModal] = useState<boolean>(false);
    const notificationModalRef = useRef<HTMLInputElement>(null);

    const chartColor = themeColors.green

    const widget12Data: IWidget12Data[] = useMemo(() => [
        { icon: 'lnil lnil-reload', title: 'Reload', subtitle: 'Reload Widge' },
        { icon: 'lnil lnil-cogs', title: 'Configure', subtitle: 'Configure widget' },
        { icon: 'lnil lnil-cog', title: 'Settings', subtitle: 'Widget Settings' },
        { icon: 'lnil lnil-trash-can-alt', title: 'Remove', subtitle: 'Remove from view' },
    ], []);

    widget17ChartData.colors = [chartColor];
    widget17ChartData.tooltip.custom = () => `<div>
                            <table class="bb-tooltip">
                                <tbody>
                                    <tr class="bb-tooltip-name-data">
                                        <td class="name">
                                            <span style="background-color:${chartColor}"></span>data
                                        </td>
                                        <td class="value">${percentage}</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>`

    useEffect(() => {
        function handleClickOutside(event: any) {
            if (notificationModalRef.current && !notificationModalRef.current.contains(event.target)) {
                setOpenNotificationModal(false)
            }
        }
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);


    return (
        <div className="widget gauge-widget card-height is-straight">
            <div className='card-warper'>
                <div className="widget-toolbar">
                    <div className="left">
                        <h3 className="is-bigger">{title}</h3>
                    </div>
                    <div ref={notificationModalRef} className="right">
                        <Widget12 openNotificationModal={openNotificationModal} widget12Data={widget12Data} />
                        <div onClick={() => setOpenNotificationModal(true)} className="is-trigger" aria-haspopup="true">
                            <Icon.MoreVertical />
                        </div>
                    </div>
                </div>
                <div className="gauge-wrap">
                    <div id="gauge-holder" className="gauge-holder chart-wrapper bold-font">
                        <Charts options={widget17ChartData} series={[percentage]} type={ChartTypes.radialBar} height={widget17ChartData.chart.height} />
                        <div className='range-warper-style'>
                            <p style={{ marginLeft: '5%' }}>0</p>
                            <p>100</p>
                        </div>
                    </div>
                </div>
                <div className="widget-content" >
                    <p>Your score has been calculated based on the latest metrics</p>
                </div>
            </div>
        </div>
    )
})

export {
    Widget17
}