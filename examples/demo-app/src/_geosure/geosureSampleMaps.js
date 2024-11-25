import { bogotaConfig } from './bogotaConfig';
import { londonConfig } from './londonConfig';
import { newyorkConfig } from './newyorkConfig';

export const geosureSampleMaps = [
  {
    "id": "bogota",
    "label": "Bogota",
    "queryType": "sample",
    "imageUrl": "https://images.unsplash.com/photo-1568632234157-ce7aecd03d0d?q=40&h=300&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "description": "City in Colombia",
    // "detail": "The dataset contains a list of 2.5+ magnitude earthquakes in california. Information was generated using USGS website and contains multiple properties (location, magnitude, magtype) for each single entry. Data source: [USGS](https://earthquake.usgs.gov/data/data.php)",
    "size": 54936,
    "visible": true,
    "dataUrl": "https://raw.githubusercontent.com/keplergl/kepler.gl-data/master/earthquakes/data.csv",
    // "configUrl": "https://raw.githubusercontent.com/keplergl/kepler.gl-data/master/earthquakes/config.json",
    "geosureConfig": bogotaConfig
  },
  {
    "id": "london",
    "label": "London",
    "queryType": "sample",
    "imageUrl": "https://images.unsplash.com/photo-1461906903741-bf21de16ae85?q=40&h=300&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "description": "City in England",
    // "detail": "The dataset contains a list of 2.5+ magnitude earthquakes in california. Information was generated using USGS website and contains multiple properties (location, magnitude, magtype) for each single entry. Data source: [USGS](https://earthquake.usgs.gov/data/data.php)",
    "size": 54936,
    "visible": true,
    "dataUrl": "https://raw.githubusercontent.com/keplergl/kepler.gl-data/master/ukcommute/data.csv",
    // "configUrl": "https://raw.githubusercontent.com/keplergl/kepler.gl-data/master/earthquakes/config.json",
    "geosureConfig": londonConfig
  },
  {
    "id": "newyork",
    "label": "New York",
    "queryType": "sample",
    "imageUrl": "https://images.unsplash.com/42/U7Fc1sy5SCUDIu4tlJY3_NY_by_PhilippHenzler_philmotion.de.jpg?q=40&h=300&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "description": "City in New York, United States",
    // "detail": "The dataset contains a list of 2.5+ magnitude earthquakes in california. Information was generated using USGS website and contains multiple properties (location, magnitude, magtype) for each single entry. Data source: [USGS](https://earthquake.usgs.gov/data/data.php)",
    "size": 54936,
    "visible": true,
    "dataUrl": "https://raw.githubusercontent.com/keplergl/kepler.gl-data/master/nyc_earnings/data.arrow",
    // "configUrl": "https://raw.githubusercontent.com/keplergl/kepler.gl-data/master/earthquakes/config.json",
    "geosureConfig": newyorkConfig
  }
];
