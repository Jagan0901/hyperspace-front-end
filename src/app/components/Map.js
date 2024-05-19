import React, { useEffect, useState } from "react";
import mapboxgl from "mapbox-gl";
import MapboxDraw from "@mapbox/mapbox-gl-draw";
import "mapbox-gl/dist/mapbox-gl.css";
import "@mapbox/mapbox-gl-draw/dist/mapbox-gl-draw.css";

mapboxgl.accessToken = "ACCESS_TOKEN"; //Here once we add our access token instead of ACCESS_TOKEN. We'll get the result.

const Map = () => {
  const [map, setMap] = useState(null);

  useEffect(() => {
    const initializeMap = ({ setMap, mapContainer }) => {
      const map = new mapboxgl.Map({
        container: mapContainer,
        style: "mapbox://styles/mapbox/streets-v11",
        center: [-74.5, 40],
        zoom: 9,
      });

      const draw = new MapboxDraw();
      map.addControl(draw);

      map.on("load", () => {
        setMap(map);
        map.resize();
      });
    };

    if (!map) initializeMap({ setMap, mapContainer: "map" });
  }, [map]);

  return <div id="map" style={{ width: "100%", height: "100vh" }} />;
};

export default Map;
