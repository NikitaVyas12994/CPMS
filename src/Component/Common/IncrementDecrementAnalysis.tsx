import React from 'react'
import * as Icon from 'react-feather';

interface IIncrementDecrementAnalysis {
    isIncrease: boolean,
    percentage: (string | number),
    description: (string)
}

function IncrementDecrementAnalysis(props: IIncrementDecrementAnalysis) {

    const { isIncrease, percentage, description } = props

    return (
        <>
            {
                isIncrease ?
                    <>
                        <span className="text-h-green">+{percentage}% <Icon.TrendingUp></Icon.TrendingUp></span>
                        <span>{description}</span>
                    </>
                    :
                    <>
                        <span className="text-h-red">-{percentage}%  <Icon.TrendingDown></Icon.TrendingDown></span>
                        <span>{description}</span>
                    </>
            }
        </>
    )
}

export { IncrementDecrementAnalysis }
