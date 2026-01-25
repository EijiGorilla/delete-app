import { useState } from "react";
import "../index.css";
import "@arcgis/core/assets/esri/themes/dark/main.css";

import "@arcgis/map-components/components/arcgis-scene";
import "@arcgis/map-components/components/arcgis-elevation-profile";

// 2 D <-> 3D
// https://developers.arcgis.com/javascript/latest/sample-code/views-switch-2d-3d/

export default function MapDisplay() {
  const [mapView, setMapView] = useState();
  const arcgisMap = document.querySelector("arcgis-scene");

  return (
    <arcgis-scene
      basemap="dark-gray-vector"
      viewingMode="local"
      ground="world-elevation"
      id="arcgis-scene-id"
      onarcgisViewReadyChange={(event) => {
        setMapView(event.target);
      }}
    >
      <arcgis-elevation-profile
        referenceElement="arcgis-scene-id"
        slot="bottom-right"
        unit="millimeters"
      ></arcgis-elevation-profile>
    </arcgis-scene>
  );
}
