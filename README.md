# (Earthquake Visualizer)[https://rgq77m-5173.csb.app/Earthquake-Visualizer/]

A real-time earthquake visualization application built with React, Vite, and Leaflet maps. This application displays recent seismic activity from the USGS API on an interactive world map.

## Features

- Real-time visualization of global earthquake data
- Interactive map with zoom and pan capabilities
- Detailed earthquake information (magnitude, depth, location, time)
- Responsive design that works on desktop and mobile devices
- Loading states and error handling
- Accessible UI with proper ARIA attributes

## Technologies Used

- **React** - Frontend library
- **Vite** - Build tool and development server
- **Leaflet** - Interactive maps
- **React-Leaflet** - React components for Leaflet maps
- **Tailwind CSS** - Styling framework
- **USGS API** - Earthquake data source

## Getting Started

1. Clone the repository:
   ```bash
   git clone <repository-url>
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a [.env](file:///c:/Users/bhuva/OneDrive/Desktop/projects/Earthquake/.env) file in the root directory with:
   ```
   VITE_USGS_API=https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_day.geojson
   ```

4. Start the development server:
   ```bash
   npm run dev
   ```

5. Build for production:
   ```bash
   npm run build
   ```

## Project Structure

```
src/
  ├── components/
  │   ├── MapView.jsx      # Interactive map component
  │   └── LoadingSpinner.jsx # Loading indicator
  ├── hooks/
  │   └── useEarthquakeData.js # Custom hook for fetching data
  ├── App.jsx             # Main application component
  ├── config.js           # Configuration settings
  └── main.jsx            # Application entry point
```

## Learn More

- [USGS Earthquake API](https://earthquake.usgs.gov/earthquakes/feed/)
- [Leaflet Documentation](https://leafletjs.com/)
- [React Documentation](https://reactjs.org/)
- [Vite Documentation](https://vitejs.dev/)
