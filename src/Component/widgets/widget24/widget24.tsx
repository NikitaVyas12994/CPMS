import React, { memo, Dispatch, SetStateAction } from 'react'
import { Search } from "react-feather";

interface IWidget24 {
    searchString: string,
    setSearchString: Dispatch<SetStateAction<string>>
}

const Widget24 = memo((props: IWidget24) => {

    const { searchString, setSearchString } = props

    return (
        <div className="widget search-widget">
            <div className="field">
                <div className="control">
                    <input type="text" value={searchString} onChange={(e) => setSearchString(e.target.value)} className="input" placeholder="Search..." />
                    <button className="search-button">
                        <Search />
                    </button>
                </div>
            </div>
        </div>
    )
})

export { Widget24 }

