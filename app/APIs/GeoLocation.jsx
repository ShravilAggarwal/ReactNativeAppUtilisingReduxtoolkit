import React from "react";
import { Image } from "react-native";

/*go to myprojects.geoapify.com and create an account 
then use the map tiles (static map api) for free (1 million tokens/mo)*/
const API_KEY = "YOUR_API_KEY"; 

const MapImage = ({ lat, lng }) => {
  const zoom = 7;
  const width = 600;
  const height = 400;
  const style = "osm-carto";

  const mapUrl = `https://maps.geoapify.com/v1/staticmap?style=${style}&width=${width}&height=${height}&marker=lonlat:${lng},${lat};color:%23ff0000;size:large&zoom=${zoom}&apiKey=${API_KEY}`;

  return (
    <Image
      source={{uri: mapUrl}}
      alt="Map view"
      style={{ borderRadius: 12, width: "98%", height: 220 }}
    />
  );
};

export default MapImage;