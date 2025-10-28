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
        const res = await fetch(CONFIG.USGS_API);
        
        if (!res.ok) {
          throw new Error(`Failed to fetch earthquake data: ${res.status} ${res.statusText}`);
        }
        
        const data = await res.json();
        
        if (isMounted) {
          setEarthquakes(data.features || []);
          setLoading(false);
        }
      } catch (err) {
        if (isMounted) {
          setError(err.message || "An unexpected error occurred");
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