import React, { Dispatch, SetStateAction, useState, memo } from "react";
import { IWidget23Data } from "../../interfaces/widgetInterface";

interface IWidget23 {
    title: string,
    widget23Data: { [key: string]: IWidget23Data[] },
    setWidget23Data: Dispatch<SetStateAction<{ [key: string]: IWidget23Data[] }>>
}

const Widget23 = memo((props: IWidget23) => {

    const { title, widget23Data, setWidget23Data } = props;

    const [clickKey, setClickKey] = useState(Object.keys(widget23Data)[0]);

    const onClickItem = (index: number) => {
        let widGet5DataCopy = { ...widget23Data }
        widGet5DataCopy[clickKey][index].isChecked = widGet5DataCopy[clickKey][index]?.isChecked === undefined ?
            true :
            !widGet5DataCopy[clickKey][index]?.isChecked
        setWidget23Data(widGet5DataCopy);
    }

    return (
        <div className="list-widget list-widget-v2 tabbed-widget">
            <div className="widget-head">
                <h3 className="dark-inverted">{title}</h3>
                <div className="tabbed-controls">
                    {
                        Object.keys(widget23Data)?.map((keyData, index) =>
                            <a key={index} onClick={(e) => { setClickKey(keyData) }} className={keyData === clickKey ? "tabbed-control is-active" : "tabbed-control"}>
                                <span>{keyData}</span>
                            </a>
                        )
                    }
                    <div className="tabbed-naver"></div>
                </div>
            </div>

            {
                Object.entries(widget23Data).map(([widget22Key, widget22Value], index) =>
                    <div key={index} className={widget22Key === clickKey ? "inner-list-wrapper is-active" : 'inner-list-wrapper'}>
                        <div className="inner-list">
                            {/* <!--List Item--> */}
                            {
                                widget22Value?.map((widget23Item, index) =>
                                    <div key={index} className="inner-list-item media-flex-center">
                                        <div onClick={() => onClickItem(index)}
                                            className={widget23Item.isChecked === undefined ? "animated-checkbox" : widget23Item.isChecked ? "animated-checkbox is-checked" : "animated-checkbox is-unchecked"}>
                                            <input type="checkbox" />
                                            <div className="checkmark-wrap">
                                                <div className={widget23Item.isChecked ? "shadow-circle is-opaque" : 'shadow-circle'}></div>
                                                <svg className="checkmark" xmlns="http://www.w3.org/2000/svg"
                                                    viewBox="0 0 52 52">
                                                    <circle className="checkmark-circle" cx="26" cy="26" r="25"
                                                        fill="none" />
                                                    <path className="checkmark-check" fill="none"
                                                        d="M14.1 27.2l7.1 7.2 16.7-16.8" />
                                                </svg>
                                            </div>
                                        </div>
                                        <div className="flex-meta is-light">
                                            <a href="/#" onClick={(e) => e.preventDefault()}>{widget23Item.title}</a>
                                            <span>at {widget23Item.timeStamp}</span>
                                        </div>
                                        <div className="flex-end">
                                            <span className="tag is-rounded">{widget23Item.status}</span>
                                        </div>
                                    </div>)
                            }
                        </div>

                    </div>
                )

            }

        </div>
    )
})

export {
    Widget23
}