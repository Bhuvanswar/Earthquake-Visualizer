import { useState, useEffect } from "react";
import { CONFIG } from "../config";

export function useEarthquakeData() {
  const [earthquakes, setEarthquakes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let isMounted = true;
    
    const fetchEarthquakes = async () => {
      try {
        console.log('Fetching from API:', CONFIG.USGS_API);
        
        // Check if API URL is defined
        if (!CONFIG.USGS_API) {
          throw new Error('API URL (VITE_USGS_API) is not defined in environment variables');
        }
        
        // Check if it's a valid URL
        try {
          new URL(CONFIG.USGS_API);
        } catch (urlError) {
          throw new Error(`Invalid API URL: ${CONFIG.USGS_API}`);
        }
        
        const res = await fetch(CONFIG.USGS_API);
        
        console.log('Response status:', res.status);
        console.log('Response ok?', res.ok);
        
        if (!res.ok) {
          throw new Error(`Failed to fetch earthquake data: ${res.status} ${res.statusText}`);
        }
        
        const contentType = res.headers.get('content-type');
        console.log('Content type:', contentType);
        
        if (!contentType || !contentType.includes('application/json')) {
          throw new Error('Received non-JSON response from API');
        }
        
        const data = await res.json();
        console.log('Data received:', data);
        console.log('Features count:', data.features ? data.features.length : 'No features');
        
        if (isMounted) {
          setEarthquakes(data.features || []);
          setLoading(false);
        }
      } catch (err) {
        console.error('Error fetching earthquake data:', err);
        const errorMessage = err.message || "An unexpected error occurred while fetching earthquake data";
        if (isMounted) {
          setError(errorMessage);
          setLoading(false);
        }
      }
    };

    fetchEarthquakes();

    // Cleanup function to handle component unmount
    return () => {
      isMounted = false;
    };
  }, []);

  return { earthquakes, loading, error };
}