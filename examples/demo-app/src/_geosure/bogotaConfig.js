export const bogotaConfig = {
    "version": "v1",
    "config": {
        "visState": {
        "filters": [
            {
            "dataId": "earthquakes",
            "id": "vo18yorx",
            "name": "DateTime",
            "type": "timeRange",
            "value": [
                663046722470,
                1301519405470
            ],
            "enlarged": true,
            "plotType": "histogram",
            "yAxis": null
            }
        ],
        "layers": [
            {
            "id": "hty62yd",
            "type": "point",
            "config": {
                "dataId": "earthquakes",
                "label": "Point",
                "color": [
                23,
                184,
                190
                ],
                "columns": {
                "lat": "Latitude",
                "lng": "Longitude",
                "altitude": null
                },
                "isVisible": true,
                "visConfig": {
                "radius": 10,
                "fixedRadius": false,
                "opacity": 0.39,
                "outline": false,
                "thickness": 2,
                "colorRange": {
                    "name": "ColorBrewer PRGn-6",
                    "type": "diverging",
                    "category": "ColorBrewer",
                    "colors": [
                    "#762a83",
                    "#af8dc3",
                    "#e7d4e8",
                    "#d9f0d3",
                    "#7fbf7b",
                    "#1b7837"
                    ],
                    "reversed": false
                },
                "radiusRange": [
                    4.2,
                    96.2
                ],
                "hi-precision": false
                }
            },
            "visualChannels": {
                "colorField": {
                "name": "Magnitude",
                "type": "real"
                },
                "colorScale": "quantize",
                "sizeField": {
                "name": "Magnitude",
                "type": "real"
                },
                "sizeScale": "sqrt"
            }
            }
        ],
        "interactionConfig": {
            "tooltip": {
            "fieldsToShow": {
                "earthquakes": [
                "DateTime",
                "Latitude",
                "Longitude",
                "Depth",
                "Magnitude"
                ]
            },
            "enabled": true
            },
            "brush": {
            "size": 0.5,
            "enabled": false
            }
        },
        "layerBlending": "normal",
        "splitMaps": []
        },
        "mapState": {
        "bearing": 0,
        "dragRotate": false,
        "latitude": 4.7110,
        "longitude": -74.0721,
        "pitch": 0,
        "zoom": 11.0,
        "isSplit": false
        },
        "mapStyle": {
        "styleType": "light",
        "topLayerGroups": {},
        "visibleLayerGroups": {
            "border": false,
            "building": true,
            "label": true,
            "land": true,
            "road": true,
            "water": true
        },
        "buildingLayer": {
            "color": [
            237,
            237,
            237
            ],
            "isVisible": false,
            "opacity": 0.7
        }
        }
    }
};
