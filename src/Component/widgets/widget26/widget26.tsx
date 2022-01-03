/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable array-callback-return */
import React, { useCallback, useState } from "react";
import 'mapbox-gl/dist/mapbox-gl.css';
import { Flag } from "react-feather";
import { MapComponent } from "./MapComponent";
import { Widget26TopMenu } from "./Widget26TopMenu";
import { IWidget26Data } from "../../interfaces/widgetInterface";

interface IWidget26 {
    widget26Data: IWidget26Data[];
}

const Widget26 = (props: IWidget26) => {

    const { widget26Data } = props;

    let locationData: { type: string, features: any } = { type: "FeatureCollection", features: [] };

    widget26Data?.map(widget26Item => {
        let data = {
            properties: {
                name: widget26Item.name,
                logo: widget26Item.logo,
                distance: widget26Item.distance,
                openingCount: widget26Item.openingCount,
                rating: widget26Item.rating,
                description: widget26Item.description
            },
            geometry: {
                type: "Point",
                coordinates: widget26Item.coordinates,
            },
        }
        locationData.features.push(data);
    })


    const [selectedIndex, setSelectedIndex] = useState(-1);
    const [isDarkTheme, setIsDarkTheme] = useState(localStorage.getItem('themeColor') === 'dark');

    const setIsDarkThemeCallback = useCallback(
        (changeColor) => {
            setIsDarkTheme(changeColor)
        }, []);

    return (
        <div
            className="view-wrapper"
            data-naver-offset="214"
            data-menu-item="#sidebar-bubble"
            data-mobile-item="#mobile-bubble"
        >
            <div className="page-content-wrapper">
                {/* <!-- Content --> */}
                <div className="dashboard-map-wrapper">
                    <div className="dashboard-map-wrapper-inner">
                        {/* <MapComponent/> */}
                        <div id="mapbox-1" className="map-section">
                            <MapComponent locations={locationData} selectedIndex={selectedIndex} isDarkTheme={isDarkTheme} />
                        </div>
                        <div className="content-section">
                            <Widget26TopMenu setIsDarkTheme={setIsDarkThemeCallback} />
                            <div className="content-section-body" data-simplebar>
                                {/* <!--Title--> */}
                                <h4 className="content-section-title">Recent widget26Data</h4>
                                {/* <!--Map Box--> */}
                                {
                                    locationData.features.map((locationData: any, index: number) => {
                                        return <div
                                            key={index}
                                            onClick={() => setSelectedIndex(index)}
                                            className={index === selectedIndex ? "box map-box is-active" : "box map-box"}
                                            data-lat={locationData.geometry.coordinates[0]}
                                            data-long={locationData.geometry.coordinates[1]}
                                            data-feature={index}
                                        >
                                            <div className="map-box-place">
                                                <div className="map-box-header">
                                                    <div className="media-flex-center">
                                                        <div className="h-avatar is-small">
                                                            <img
                                                                className="avatar"
                                                                src={locationData.properties.logo}
                                                                alt=""
                                                            />
                                                        </div>
                                                        <div className="flex-meta">
                                                            <span>{locationData.properties.name}</span>
                                                            <span>Open until {locationData.properties.openingCount}</span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="map-box-body">
                                                    <p>{locationData.properties.description}</p>
                                                </div>
                                                <div className="map-box-actions">
                                                    <div className="rating">
                                                        {
                                                            Array.from({
                                                                length: typeof (locationData.properties.rating) == 'number' ?
                                                                    locationData.properties.rating : 0
                                                            }, (item, index) =>
                                                                <i aria-hidden="true" key={index} style={{ marginRight: 2 }} className="fas fa-star highlighted"></i>
                                                            )
                                                        }
                                                    </div>
                                                    <div className="actions">
                                                        <div className="action">
                                                            <Flag />
                                                            <span className="dark-inverted">{locationData.properties.distance} mile</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    })
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export {
    Widget26
}