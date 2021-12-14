import React, { Dispatch, SetStateAction, memo } from 'react'
import './widget5.css';
import { IWidget5Data } from "../../interfaces/widgetInterface";


interface IWidget5 {
    widget5Data: IWidget5Data[],
    setWidget5Data: Dispatch<SetStateAction<IWidget5Data[]>>,
    title: string
}

const Widget5 = memo((props: IWidget5) => {

    const { widget5Data, setWidget5Data, title } = props;

    const onClickItem = (index: number) => {
        let widGet5DataCopy = [...widget5Data]
        widGet5DataCopy[index].isChecked = widGet5DataCopy[index]?.isChecked === undefined ? true : !widGet5DataCopy[index]?.isChecked
        setWidget5Data(widGet5DataCopy);
    }

    return (
        <div className="widget-card widget-padding">
            <div className="card-head">
                <h3 className="dark-inverted">{title}</h3>
                <a href='/' className="action-link">View All</a>
            </div>
            <div className="active-list">
                <div className="checkboxes-list">
                    {
                        widget5Data?.map((widget5Item, index) =>
                            <div key={index} className="list-item">
                                <div onClick={() => onClickItem(index)}
                                    className={widget5Item?.isChecked === undefined ? 'animated-checkbox' : widget5Item.isChecked ? 'animated-checkbox is-checked' : "animated-checkbox is-unchecked"}>
                                    <input type="checkbox" />
                                    <div className="checkmark-wrap">
                                        <div className="shadow-circle"></div>
                                        <svg className="checkmark" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52 52">
                                            <circle className="checkmark-circle" cx="26" cy="26" r="25" fill="none" />
                                            <path className="checkmark-check" fill="none" d="M14.1 27.2l7.1 7.2 16.7-16.8" />
                                        </svg>
                                    </div>
                                </div>
                                <div className="checkbox-data">
                                    <span className="dark-inverted">{widget5Item?.title}</span>
                                    <span>{widget5Item?.description}</span>
                                </div>
                            </div>
                        )
                    }
                </div>
            </div>
        </div>
    )
})

export {
    Widget5
}
