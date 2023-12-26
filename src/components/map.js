import React, { useEffect } from 'react';

import business from "../images/gedesa-favicon.ico"
import './styles/map.css';

const Map = () => {
  useEffect(() => {
    const mapOptions = {
      center: { lat: -16.545278, lng: -68.089022 },
      zoom: 16,
    };
    const map = new window.google.maps.Map(document.getElementById('map'), mapOptions);

    const businessPositions = [
      { lat: -16.545278, lng: -68.089022 },
    ];

    const businessIcon = {
      url: business,
      scaledSize: new window.google.maps.Size(40, 40),
    };

    businessPositions.forEach((position) => {
      const marker = new window.google.maps.Marker({
        position,
        map,
        icon: businessIcon,
      });
      const tooltipContent = '<h6>Gedesa Costanera 1000</h6></br><strong>Horarios de Atención</strong></br>Lunes a Viernes de 8:30 a 17:00</br>Sábado de 9:00 a 12:30';
      const infoWindow = new window.google.maps.InfoWindow({
        content: tooltipContent,
      });

      marker.addListener('mouseover', () => {
        infoWindow.open(map, marker);
      });

      marker.addListener('mouseout', () => {
        infoWindow.close();
      });
    });

  }, []);

  return <div id="map"></div>;
};

export default Map;