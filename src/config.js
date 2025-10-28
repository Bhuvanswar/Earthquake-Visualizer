// Fallback URL in case environment variable is not available
const fallbackURL = 'https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_day.geojson';

export const CONFIG = {
  USGS_API: import.meta.env.VITE_USGS_API || fallbackURL,
};