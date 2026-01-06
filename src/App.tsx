import "./App.css";
import MapDisplay from "./components/MapDisplay";

function App() {
  // Catch failed dynamic imports
  window.addEventListener("unhandledrejection", (event) => {
    const message = event.reason?.message || "";

    if (message.includes("Failed to fetch dynamically imported module")) {
      event.preventDefault(); // Hide error from user
      window.location.reload(); // Silent refresh
    }
  });

  // Catch other asset loading errors
  window.addEventListener("error", (event) => {
    const message = event.message || "";

    if (
      message.includes("Loading chunk") ||
      message.includes("ChunkLoadError")
    ) {
      event.preventDefault();
      window.location.reload();
    }
  });
  return (
    <>
      <MapDisplay />
    </>
  );
}

export default App;
