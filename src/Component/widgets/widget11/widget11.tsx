import React, { useEffect, useRef, useState, memo, useMemo } from "react";
import * as Icon from "react-feather";
import "./widget11.css";
import { Widget12 } from "../widget12";
import { IWidget11Data, IWidget12Data } from "../../interfaces/widgetInterface";


interface IWidget11 {
    widget11Data: IWidget11Data[],
    title: string
}

const Widget11 = memo((props: IWidget11) => {

    const { widget11Data, title } = props

    const [openNotificationModal, setOpenNotificationModal] = useState<boolean>(false);
    const notificationModalRef = useRef<HTMLInputElement>(null)

    const widget12Data: IWidget12Data[] = useMemo(() => [
        { icon: 'lnil lnil-reload', title: 'Reload', subtitle: 'Reload Widge' },
        { icon: 'lnil lnil-cogs', title: 'Configure', subtitle: 'Configure widget' },
        { icon: 'lnil lnil-cog', title: 'Settings', subtitle: 'Widget Settings' },
        { icon: 'lnil lnil-trash-can-alt', title: 'Remove', subtitle: 'Remove from view' },
    ], [])

    useEffect(() => {
        function handleClickOutside(event: any) {
            if (notificationModalRef.current && !notificationModalRef.current.contains(event.target)) {
                setOpenNotificationModal(false)
            }
        }
        // Bind the event listener
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            // Unbind the event listener on clean up
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    return (
        <div className="widget list-widget is-straight">
            <div className="widget-toolbar">
                <div className="left">
                    <h3>{title}</h3>
                </div>
                <div ref={notificationModalRef} className="right noSelect">
                    <Widget12 openNotificationModal={openNotificationModal} widget12Data={widget12Data} />
                    <div onClick={() => setOpenNotificationModal(true)} className="is-trigger" aria-haspopup="true">
                        <Icon.MoreVertical />
                    </div>
                </div>
            </div>
            <div className="widget-content">
                <ul>
                    {widget11Data?.map((widgetItem, index) =>
                        <li key={index}>
                            <a href='/'>
                                <span>{widgetItem?.title}</span>
                                <span className="tag is-rounded">{widgetItem?.count}</span>
                            </a>
                        </li>
                    )}
                </ul>
            </div>
        </div>
    )
})

export {
    Widget11
}
