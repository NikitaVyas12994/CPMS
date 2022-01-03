/* eslint-disable react-hooks/exhaustive-deps */
import React, { useRef, useEffect, useState } from 'react';
import mapboxgl from 'mapbox-gl';
import MapboxGeocoder from '@mapbox/mapbox-gl-geocoder';
import '@mapbox/mapbox-gl-geocoder/dist/mapbox-gl-geocoder.css';
import { themeColors } from "../../../Theme/themeColor";

mapboxgl.accessToken = process.env.REACT_APP_MAPBOX_TOKEN;

let map;

const MapComponent = (props) => {

    const { locations, selectedIndex, isDarkTheme } = props;
    const [searchBox, setSearchBox] = useState(0)

    const mapContainerRef = useRef(null);
    const geoRef = useRef(null);

    //set popup
    const displayPopup = (place) => {
        var popup = document.getElementsByClassName("mapboxgl-popup");
        if (popup.length) {
            popup[0].remove();
        }

        map.flyTo({
            center: place.coordinates,
            zoom: 15,
            bearing: 0,
            essential: true, // this animation is considered essential with respect to prefers-reduced-motion
        });

        var template = `<div class="map-box-location">
            <div class="map-box-header">
            <div class="media-flex-center">
                <div class="h-avatar is-small">
                <img
                    class="avatar"
                    src="${place.logo}"
                    alt=""
                />
                </div>
                <div class="flex-meta">
                <span>${place.name}</span>
                <span>Open until ${place.openingCount}</span>
                </div>
            </div>
            </div>
            <div class="map-box-body">
            <p>${place.description}</p>
            </div>
        </div>`

        new mapboxgl.Popup()
            .setLngLat(place.coordinates)
            .setHTML(template)
            .addTo(map);
    }


    const loadLayers = () => {
        // Do nothing if source already added
        if (map.getSource('places')) {
            return
        }
        var storageTheme = localStorage.getItem('themeColor') === 'dark';
        //set marker json
        map.addSource("places", {
            type: "geojson",
            data: locations,
        });

        // Add a layer showing the places.
        map.addLayer({
            id: "places",
            type: "circle",
            source: "places",
            paint: {
                "circle-color": storageTheme ? themeColors.accent : themeColors.primary,
                "circle-radius": 6,
                "circle-stroke-width": 2,
                "circle-stroke-color": storageTheme ? '#ddd' : "#fff",
            },
        });

        map.on("click", "places", function (e) {
            var coordinates = e.features[0].geometry.coordinates.slice();
            var description = e.features[0].properties.description;
            var logo = e.features[0].properties.logo;
            var name = e.features[0].properties.name;
            var openingCount = e.features[0].properties.openingCount;

            // Ensure that if the map is zoomed out such that multiple
            // copies of the feature are visible, the popup appears
            // over the copy being pointed to.
            while (Math.abs(e.lngLat.lng - coordinates[0]) > 180) {
                coordinates[0] += e.lngLat.lng > coordinates[0] ? 360 : -360;
            }

            displayPopup({
                coordinates,
                name,
                description,
                logo,
                openingCount
            })
        });

        // Change the cursor to a pointer when the mouse is over the places layer.
        map?.on("mouseenter", "places", function () {
            map.getCanvas().style.cursor = "pointer";
        });

        // Change it back to a pointer when it leaves.
        map?.on("mouseleave", "places", function () {
            map.getCanvas().style.cursor = "";
        });
    }

    // Initialize map when component mounts
    useEffect(() => {
        setSearchBox(searchBox + 1)
        const coordinateArray = []
        locations.features.map(locationsItem =>
            coordinateArray.push(locationsItem.geometry.coordinates)
        )
        map = new mapboxgl.Map({
            container: mapContainerRef.current,
            style: localStorage.getItem('themeColor') === 'dark' ? "mapbox://styles/mapbox/dark-v10" : 'mapbox://styles/mapbox/light-v10',
            center: locations.features[0].geometry.coordinates,
            zoom: 14,
        });

        const bounds = new mapboxgl.LngLatBounds(
            coordinateArray[0],
            coordinateArray[0]
        );

        // Extend the 'LngLatBounds' to include every coordinate in the bounds result.
        for (const coord of coordinateArray) {
            bounds.extend(coord);
        }

        map.fitBounds(bounds, {
            padding: 50
        });

        map.on('styledata', () => {
            var loadingStyles = () => {
                if (!map.isStyleLoaded()) {
                    setTimeout(loadingStyles, 1500)
                    return
                }
                loadLayers()
            }
            loadingStyles()
        })
        if (searchBox === 0) {
            var geocoder = new MapboxGeocoder({
                accessToken: mapboxgl.accessToken,
                mapboxgl: mapboxgl,
                marker: true,
            });
            document.getElementById("geocoder").appendChild(geocoder.onAdd(map));
        }
        return () => { map.remove(); setSearchBox(0) }
    }, []);

    useEffect(() => {
        if (selectedIndex !== -1) {
            var coordinates = locations.features[selectedIndex].geometry.coordinates.slice();
            var description = locations.features[selectedIndex].properties.description;
            var logo = locations.features[selectedIndex].properties.logo;
            var name = locations.features[selectedIndex].properties.name;
            var openingCount = locations.features[selectedIndex].properties.openingCount;

            map.center = locations.features[selectedIndex].geometry.coordinates;
            displayPopup({
                coordinates,
                name,
                description,
                logo,
                openingCount
            })
        }
    }, [selectedIndex])

    //change map theme
    useEffect(() => {
        map.setStyle(isDarkTheme ? "mapbox://styles/mapbox/dark-v10" : 'mapbox://styles/mapbox/light-v10')
    }, [isDarkTheme])

    return (
        <div className='map-section' style={{
            position: 'absolute',
            top: 0,
            bottom: 0,
            left: 0,
            right: 0,
            height: '100%',
            width: '100%'
        }} ref={mapContainerRef} >
            <div id="geocoder" ref={geoRef} className="geocoder"></div>
        </div>
    );
};

export { MapComponent };