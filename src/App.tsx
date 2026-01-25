import "./App.css";
import MapDisplay from "./components/MapDisplay";
import "@arcgis/core/assets/esri/themes/dark/main.css";

// Check out this page for vite app with elevaton profile: https://www.youtube.com/watch?v=SeFUjIg_BaM
function App() {
  return (
    <>
      <MapDisplay />
    </>
  );
}

export default App;
