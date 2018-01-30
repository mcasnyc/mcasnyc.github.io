document.addEventListener('DOMContentLoaded', function() {
  mapboxgl.accessToken = 'pk.eyJ1IjoicXVpbm5sZW9uZyIsImEiOiJjajBycXU2cW0wMmNhMzNsOHI5eDhjcTR1In0.HY7Agz2EKIcB1kc7idYsiQ';
  var map = new mapboxgl.Map({
      container: 'map',
      style: 'mapbox://styles/quinnleong/cjd0ndufr1ot72rnvwx29u3zg',
      center: [-33.198779, 22.392542],
      zoom: 1
  });

  var geojson = {
    type: 'FeatureCollection',
    features: [
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [-118.259805, 34.043687]
      },
      properties: {
        title: 'Chekhov Studio International',
        link: 'http://chekhovstudio.com/'
      }
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [4.900227, 52.368022]
      },
      properties: {
        title: 'tiny hero PRODUCTIONS',
        link: 'http://www.tinyhero.nl/'
      }
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [9.996229, 53.549020]
      },
      properties: {
        title: 'Michael Chekhov Europe',
        link: 'http://www.michaelchekhov.eu/'
      }
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [-73.788762, 42.249000]
      },
      properties: {
        title: 'The Michael Chekhov School',
        link: 'https://michaelchekhovschool.org/'
      }
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [-73.546663, 42.323069]
      },
      properties: {
        title: 'The Actor\'s Ensemble',
        link: 'http://www.actorsensemble.org/'
      }
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [12.575201, 44.066164]
      },
      properties: {
        title: 'BANYANTEATRO – Gianluca Reggiani',
        link: 'mailto:reg.gia@alice.it'
      }
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [4.353096, 50.844686]
      },
      properties: {
        title: 'Michael Chekhov Studio Brussels',
        link: 'http://www.studiomichaelchekhov.org'
      }
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [12.499404, 41.903306]
      },
      properties: {
        title: 'Michael Chekhov Studio Roma',
        link: 'http://www.michaelchekhovroma.it/'
      }
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [-73.788441, 42.250947]
      },
      properties: {
        title: 'Michael Chekhov Association (MICHA)',
        link: 'http://www.michaelchekhov.org'
      }
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [-87.632413, 41.870657]
      },
      properties: {
        title: 'The Moving Dock Theater Company',
        link: 'http://www.movingdock.org/'
      }
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [-0.128893, 51.506371]
      },
      properties: {
        title: 'Michael Chekhov Centre UK',
        link: 'http://www.michaelchekhov.org.uk/'
      }
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [-9.131024, 38.726734]
      },
      properties: {
        title: 'act FOR ALL',
        link: 'http://www.act-escoladeactores.com/'
      }
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [13.404099, 52.515707]
      },
      properties: {
        title: 'Michael Tschechow Studio Berlin',
        link: 'http://www.mtsb.de/'
      }
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [-43.180510, -22.909881]
      },
      properties: {
        title: 'Michael Chekhov Brasil',
        link: 'http://www.michaelchekhov.com.br/'
      }
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [-73.994679, 40.727131]
      },
      properties: {
        title: 'The Maggie Flanigan Studio',
        link: 'http://www.maggieflaniganstudio.com/'
      }
    }]
  };

  geojson.features.forEach(function(marker) {
    var el = document.createElement('div');
    el.className = 'marker';

    new mapboxgl.Marker(el)
      .setLngLat(marker.geometry.coordinates)
      .setPopup(new mapboxgl.Popup({ offset: 25 })
        .setHTML('<a class=\'map-marker-title\' target=\'_blank\' href=' + marker.properties.link + '>' + marker.properties.title + '</h3>')
      )
      .addTo(map);
  });

  map.scrollZoom.disable();
  map.addControl(new mapboxgl.NavigationControl());
})
