import MapView from "./components/MapView";
import LoadingSpinner from "./components/LoadingSpinner";
import { useEarthquakeData } from "./hooks/useEarthquakeData";
import PropTypes from 'prop-types';

export default function App() {
  const { earthquakes, loading, error } = useEarthquakeData();

  if (loading) return <LoadingSpinner />;
  if (error) return <p className="text-red-600 text-center mt-10" role="alert">{error}</p>;

  return (
    <div className="flex flex-col items-center p-4">
      <h1 className="text-3xl font-bold text-blue-700 mb-4">
        🌎 Earthquake Visualizer (Leaflet OSM)
      </h1>
      <p className="mb-4 text-gray-600">
        Real-time global seismic activity from the USGS API
      </p>
      <MapView earthquakes={earthquakes} />
    </div>
  );
}

App.propTypes = {};