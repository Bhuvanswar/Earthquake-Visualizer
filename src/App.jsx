import MapView from "./components/MapView";
import LoadingSpinner from "./components/LoadingSpinner";
import { useEarthquakeData } from "./hooks/useEarthquakeData";
import PropTypes from 'prop-types';
import { CONFIG } from './config';

export default function App() {
  const { earthquakes, loading, error } = useEarthquakeData();

  // Debug information
  console.log('=== APP DEBUG INFO ===');
  console.log('Loading:', loading);
  console.log('Error:', error);
  console.log('Earthquakes count:', earthquakes.length);
  console.log('ENV VAR:', import.meta.env.VITE_USGS_API);
  console.log('CONFIG URL:', CONFIG.USGS_API);
  console.log('Window location:', window.location.href);
  console.log('====================');
  
  // Test if environment variable is available
  const apiURL = CONFIG.USGS_API;
  console.log('API URL available:', !!apiURL);

  if (loading) {
    console.log('Showing loading spinner');
    return (
      <div className="flex flex-col items-center p-4">
        <h1 className="text-3xl font-bold text-blue-700 mb-4">
          🌎 Earthquake Visualizer (Leaflet OSM)
        </h1>
        <div className="text-center">
          <p>Loading earthquake data...</p>
          <LoadingSpinner />
        </div>
      </div>
    );
  }
  
  if (error) {
    console.log('Showing error message:', error);
    return (
      <div className="flex flex-col items-center p-4">
        <h1 className="text-3xl font-bold text-blue-700 mb-4">
          🌎 Earthquake Visualizer (Leaflet OSM)
        </h1>
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert">
          <strong className="font-bold">Error: </strong>
          <span className="block sm:inline">{error}</span>
        </div>
        <div className="mt-4 p-4 bg-gray-100 rounded">
          <p><strong>Debug Info:</strong></p>
          <p>API URL: {apiURL || 'Not available'}</p>
          <p>Window location: {window.location.href}</p>
        </div>
      </div>
    );
  }

  console.log('Rendering map with earthquakes:', earthquakes.length);

  return (
    <div className="flex flex-col items-center p-4">
      <h1 className="text-3xl font-bold text-blue-700 mb-4">
        🌎 Earthquake Visualizer (Leaflet OSM)
      </h1>
      <p className="mb-4 text-gray-600">
        Real-time global seismic activity from the USGS API
      </p>
      {earthquakes.length > 0 ? (
        <MapView earthquakes={earthquakes} />
      ) : (
        <div className="text-center p-8 bg-yellow-100 rounded">
          <p>No earthquake data available at this time.</p>
          <p className="mt-2 text-sm">This could be because there have been no significant earthquakes in the past 24 hours.</p>
        </div>
      )}
    </div>
  );
}

App.propTypes = {};