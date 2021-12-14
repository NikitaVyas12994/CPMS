import React, { memo } from 'react'
import { IWidget25Data } from '../../interfaces/widgetInterface'


interface IWidget25 {
    widget25Data: IWidget25Data[]
}

const Widget25 = memo((props: IWidget25) => {

    const { widget25Data } = props;

    return (
        <div className="incoming">
            <div className="flex-table">

                {/* <!--Table header--> */}
                <div className="flex-table-header">
                    <span className="is-grow-lg">Type</span>
                    <span>Count</span>
                    <span>Status</span>
                    <span className="cell-end">Actions</span>
                </div>

                {/* <!--Table item--> */}
                {
                    widget25Data?.map((widget25Item, index) =>
                        <div key={index} className="flex-table-item">
                            <div className="flex-table-cell is-media is-grow-lg" data-th="">
                                <div className={`h-icon is-${widget25Item.color}`}>
                                    <i className={widget25Item.icon}></i>
                                </div>
                                <div>
                                    <span className="item-name dark-inverted">{widget25Item.title}</span>
                                    <span className="item-meta">
                                        <span>{widget25Item.description}</span>
                                    </span>
                                </div>
                            </div>
                            <div className="flex-table-cell cell-center " data-th="Count">
                                <span className="light-text">{widget25Item.count}</span>
                            </div>
                            <div className="flex-table-cell" data-th="Status">
                                <span className={widget25Item.statusColor === 'success' ? "tag is-success is-rounded" : "tag is-rounded"}>{widget25Item.status}</span>
                            </div>
                            <div className="flex-table-cell cell-end" data-th="Actions">
                                <a className="action-link is-pushed-mobile">Open</a>
                            </div>
                        </div>
                    )
                }
            </div>
        </div>
    )
})

export { Widget25 }
