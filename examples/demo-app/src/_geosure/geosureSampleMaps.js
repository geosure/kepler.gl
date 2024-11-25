import { londonConfig } from './londonConfig';
console.log(londonConfig)

export const geosureSampleMaps = [
    {
      "id": "london",
      "label": "London",
      "queryType": "sample",
      "imageUrl": "https://images.unsplash.com/photo-1461906903741-bf21de16ae85?q=80&w=4470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      // "description": "Location, magnitude and type of 2.5+ magnitude earthquakes in california.",
      // "detail": "The dataset contains a list of 2.5+ magnitude earthquakes in california. Information was generated using USGS website and contains multiple properties (location, magnitude, magtype) for each single entry. Data source: [USGS](https://earthquake.usgs.gov/data/data.php)",
      "size": 54936,
      "visible": true,
      "dataUrl": "https://raw.githubusercontent.com/keplergl/kepler.gl-data/master/earthquakes/data.csv",
      // "configUrl": "https://raw.githubusercontent.com/keplergl/kepler.gl-data/master/earthquakes/config.json",
      "geosureConfig": londonConfig
    }
  ];
