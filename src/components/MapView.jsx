import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import PropTypes from 'prop-types';
import 'leaflet/dist/leaflet.css';

// Fix for missing marker icons
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
});

const center = [20, 0];

export default function MapView({ earthquakes }) {
  console.log('MapView rendering with earthquakes:', earthquakes.length);
  
  return (
    <MapContainer 
      center={center} 
      zoom={2} 
      scrollWheelZoom 
      className="w-full h-[80vh] rounded shadow"
      aria-label="Earthquake visualization map"
    >
      <TileLayer
        attribution="&copy; OpenStreetMap contributors"
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {earthquakes.map(eq => {
        const [lng, lat, depth] = eq.geometry.coordinates;
        const { mag, place, time } = eq.properties;
        console.log('Rendering marker for earthquake:', eq.id);
        return (
          <Marker 
            key={eq.id} 
            position={[lat, lng]}
            alt={`Earthquake at ${place} with magnitude ${mag}`}
          >
            <Popup>
              <div className="text-sm">
                <strong>{place}</strong><br />
                Magnitude: {mag}<br />
                Depth: {depth} km<br />
                Time: {new Date(time).toLocaleString()}
              </div>
            </Popup>
          </Marker>
        );
      })}
    </MapContainer>
  );
}

MapView.propTypes = {
  earthquakes: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    geometry: PropTypes.shape({
      coordinates: PropTypes.arrayOf(PropTypes.number).isRequired,
    }).isRequired,
    properties: PropTypes.shape({
      mag: PropTypes.number.isRequired,
      place: PropTypes.string.isRequired,
      time: PropTypes.number.isRequired,
    }).isRequired,
  })).isRequired,
};