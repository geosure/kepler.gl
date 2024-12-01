export const geosureMapConfig = {
    "version": "v1",
    "config": {
      "visState": {
        "filters": [],
        "layers": [
          {
            "id": "qk5739",
            "type": "point",
            "config": {
              "dataId": "physical",
              "columnMode": "points",
              "label": "Physical Score",
              "color": [255, 203, 153],
              "highlightColor": [252, 242, 26, 255],
              "columns": {
                "lat": "latitude",
                "lng": "longitude"
              },
              "isVisible": true,
              "visConfig": {
                "radius": 14,
                "fixedRadius": false,
                "opacity": 0.8,
                "outline": false,
                "thickness": 2,
                "strokeColor": null,
                "colorRange": {
                  "name": "ColorBrewer RdYlGn-6",
                  "type": "diverging",
                  "category": "ColorBrewer",
                  "colors": [
                    "#1a9850",
                    "#91cf60",
                    "#d9ef8b",
                    "#fee08b",
                    "#fc8d59",
                    "#d73027"
                  ],
                  "reversed": true
                },
                "strokeColorRange": {
                  "name": "Global Warming",
                  "type": "sequential",
                  "category": "Uber",
                  "colors": [
                    "#5A1846",
                    "#900C3F",
                    "#C70039",
                    "#E3611C",
                    "#F1920E",
                    "#FFC300"
                  ]
                },
                "radiusRange": [0, 50],
                "filled": true,
                "billboard": false,
                "allowHover": true,
                "showNeighborOnHover": false,
                "showHighlightColor": true
              },
              "hidden": false,
              "textLabel": []
            },
            "visualChannels": {
              "colorField": {
                "name": "physical",
                "type": "real"
              },
              "colorScale": "quantile",
              "strokeColorField": null,
              "strokeColorScale": "quantile",
              "sizeField": null,
              "sizeScale": "linear"
            }
          },
          {
            "id": "3gnm1mg",
            "type": "point",
            "config": {
              "dataId": "battles",
              "columnMode": "points",
              "label": "point",
              "color": [255, 203, 153],
              "highlightColor": [252, 242, 26, 255],
              "columns": {
                "lat": "latitude",
                "lng": "longitude"
              },
              "isVisible": true,
              "visConfig": {
                "radius": 15,
                "fixedRadius": false,
                "opacity": 0.8,
                "outline": false,
                "thickness": 2,
                "strokeColor": null,
                "colorRange": {
                  "name": "Global Warming",
                  "type": "sequential",
                  "category": "Uber",
                  "colors": [
                    "#5A1846",
                    "#900C3F",
                    "#C70039",
                    "#E3611C",
                    "#F1920E",
                    "#FFC300"
                  ]
                },
                "strokeColorRange": {
                  "name": "Global Warming",
                  "type": "sequential",
                  "category": "Uber",
                  "colors": [
                    "#5A1846",
                    "#900C3F",
                    "#C70039",
                    "#E3611C",
                    "#F1920E",
                    "#FFC300"
                  ]
                },
                "radiusRange": [0, 50],
                "filled": true,
                "billboard": false,
                "allowHover": true,
                "showNeighborOnHover": false,
                "showHighlightColor": true
              },
              "hidden": false,
              "textLabel": [
                {
                  "field": null,
                  "color": [255, 255, 255],
                  "size": 18,
                  "offset": [0, 0],
                  "anchor": "start",
                  "alignment": "center",
                  "outlineWidth": 0,
                  "outlineColor": [255, 0, 0, 255],
                  "background": false,
                  "backgroundColor": [0, 0, 200, 255]
                }
              ]
            },
            "visualChannels": {
              "colorField": {
                "name": "sub_event_type",
                "type": "string"
              },
              "colorScale": "ordinal",
              "strokeColorField": null,
              "strokeColorScale": "quantile",
              "sizeField": null,
              "sizeScale": "linear"
            }
          }
        ],
        "effects": [],
        "interactionConfig": {
          "tooltip": {
            "fieldsToShow": {
              "physical": [
                {
                  "name": "district",
                  "id": "district",
                  "displayName": "district",
                  "format": "",
                  "fieldIdx": 12,
                  "type": "string",
                  "analyzerType": "STRING"
                },
                {
                  "name": "city",
                  "id": "city",
                  "displayName": "city",
                  "format": "",
                  "fieldIdx": 9,
                  "type": "string",
                  "analyzerType": "STRING"
                },
                {
                  "name": "country",
                  "id": "country",
                  "displayName": "country",
                  "format": "",
                  "fieldIdx": 4,
                  "type": "string",
                  "analyzerType": "STRING"
                },
                {
                  "name": "physical",
                  "id": "physical",
                  "displayName": "physical",
                  "format": "",
                  "fieldIdx": 19,
                  "type": "real",
                  "analyzerType": "FLOAT"
                },
                {
                  "name": "geosure_id",
                  "id": "geosure_id",
                  "displayName": "geosure_id",
                  "format": "",
                  "fieldIdx": 0,
                  "type": "string",
                  "analyzerType": "STRING"
                }
              ]
            },
            "compareMode": false,
            "compareType": "absolute",
            "enabled": true
          },
          "brush": {
            "size": 0.5,
            "enabled": false
          },
          "geocoder": {
            "enabled": false
          },
          "coordinate": {
            "enabled": true
          }
        },
        "layerBlending": "normal",
        "overlayBlending": "normal",
        "splitMaps": [],
        "animationConfig": {
          "currentTime": null,
          "speed": 1
        },
        "editor": {
          "features": [],
          "visible": true
        }
      }
    }
  };