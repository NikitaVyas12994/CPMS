import React, { Dispatch, SetStateAction, memo } from "react";
import { IWidget22Data } from "../../interfaces/widgetInterface";
import "./widget22.css";


interface IWidget22 {
    widget22Data: { [key: string]: IWidget22Data[] },
    setWidget22Data: Dispatch<SetStateAction<{ [key: string]: IWidget22Data[] }>>,
}

const Widget22 = memo((props: IWidget22) => {

    const { widget22Data, setWidget22Data } = props

    const clickItem = (changeKey: string, radioButtonItem: IWidget22Data) => {
        const copyData = { ...widget22Data };
        copyData[changeKey].map((copyItem: IWidget22Data) =>
            copyItem.id === radioButtonItem.id ?
                copyItem.isChecked = true :
                copyItem.isChecked = false
        )
        setWidget22Data({ ...copyData })
    }

    return (
        <div className="widget-card filters-card">
            <a href='/' onClick={(e) => e.preventDefault()} className="button h-button is-primary is-fullwidth is-bold is-raised">Add To Favorites</a>
            {
                Object.entries(widget22Data)?.map(([widget22ItemKey, widget22ItemValue], index) =>
                    <div key={index} className="checkboxes-list">
                        <div className="field">
                            <h5 className="dark-inverted">{widget22ItemKey}</h5>
                            {
                                widget22ItemValue?.map((radioButtonItem, index) =>
                                    <div key={index} className="control">
                                        <label
                                            className="checkbox"
                                            onClick={() => clickItem(widget22ItemKey, radioButtonItem)}>
                                            <input type="radio" name={widget22ItemKey} value={radioButtonItem.title} checked={radioButtonItem?.isChecked} />
                                            <span></span>
                                            {radioButtonItem.title}
                                        </label>
                                    </div>
                                )
                            }
                        </div>
                    </div>
                )
            }
        </div>
    )
})

export {
    Widget22
}