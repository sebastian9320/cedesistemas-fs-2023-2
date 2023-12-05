import { useEffect, useState } from "react"

export const useCurrentPosition = () => {

  const [latitude, setLatitude] = useState();
  const [longitude, setLongitude] = useState();

  const getCurrentUserLocation = () => {
    if("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition((position) => {
        setLongitude(position.coords.longitude)
        setLatitude(position.coords.latitude)
      })
    }
  }

  useEffect(() => {
    getCurrentUserLocation();
  }, [])

  return {
    latitude,
    longitude
  }
}
