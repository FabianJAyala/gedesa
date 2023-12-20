import React, { useEffect } from 'react';

const centerCords = {
  lat: -19.0477332,
  lng: -65.2587783
};

const markersOnMap = [
  {
    placeName: "Tienda Best - Sucre",
    LatLng: [
      {
        lat: -19.0477332,
        lng: -65.2587783
      }
    ],
    content: '<strong>Lunes a viernes:</strong><br/><br/>09:00 a 13:00 y 15:00 a 19:00<br/><br/><strong>Sábado:</strong><br/> 09:00 a 13:00'
  },
];

const addMarkerInfo = () => {
  for (let i = 0; i < markersOnMap.length; i++) {
    const contentString = '<div id="content"><h3>' + markersOnMap[i].placeName +
      '</h3><p>' + markersOnMap[i].content + '</p></div>';

    const marker = new window.google.maps.Marker({
      position: markersOnMap[i].LatLng[0],
      map: window.map,
      icon: 'https://www.best.com.bo/wp-content/uploads/2023/06/favicon-logo-best-2023-100x100-1-e1685650420388.jpg',
    });

    const infowindow = new window.google.maps.InfoWindow({
      content: contentString,
      maxWidth: 200
    });

    marker.addListener('click', () => {
      closeOtherInfo();
      infowindow.open(marker.get('map'), marker);
      window.InforObj[0] = infowindow;
    });
  }
};

const closeOtherInfo = () => {
  if (window.InforObj.length > 0) {
    window.InforObj[0].set("marker", null);
    window.InforObj[0].close();
    window.InforObj.length = 0;
  }
};

const initMap = () => {
  window.map = new window.google.maps.Map(document.getElementById('map'), {
    zoom: 14,
    center: centerCords
  });
  addMarkerInfo();
};

const MapComponent = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://maps.google.com/maps/api/js?key=AIzaSyCZEsY97Ye1D1Q3zdpEVKdTCbCGlp6-FRo';
    script.async = true;
    script.defer = true;
    script.onload = initMap;

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div>
      <style>
        {`
          #map {
            height: 500px;
            width: 100%;
          }
        `}
      </style>
      <div id="map"></div>
    </div>
  );
};

export default MapComponent;
