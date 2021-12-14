import React, { memo } from "react";

import { IncrementDecrementAnalysis } from "../../Common/IncrementDecrementAnalysis";
import { IWidget7Data } from "../../interfaces/widgetInterface";

interface IWidget7 {
    widget7Data: IWidget7Data[]
}

const Widget7 = memo((props: IWidget7) => {

    const { widget7Data } = props

    return (
        <>
            {widget7Data?.map((widget7Item, index) =>
                <div key={index} className="column is-3">
                    {/* < !--Dashboard Tile-- > */}
                    <div className="widget-tile">
                        <div className="tile-head">
                            <h3 className="dark-inverted">{widget7Item?.title}</h3>
                            <div className={`h-icon is-${widget7Item?.iconColor || 'blue'} is-rounded is-small`}>
                                <i aria-hidden="true" className={widget7Item?.iconName}></i>
                            </div>
                        </div>
                        <div className="tile-body">
                            <span className="dark-inverted">{widget7Item?.amount}</span>
                        </div>
                        <div className="tile-footer">
                            <IncrementDecrementAnalysis
                                isIncrease={widget7Item?.isIncrease}
                                percentage={widget7Item?.percentage}
                                description={widget7Item?.description}
                            />
                        </div>
                    </div>
                </div>
            )}
        </>
    )
})

export {
    Widget7
}
