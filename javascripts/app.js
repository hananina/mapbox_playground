
// import React from "react";
// import ReactDOM from "react-dom";

// require('dotenv').config()

// var hoge = process.env;
// console.log(hoge);
mapboxgl.accessToken = "pk.eyJ1IjoiaGFuYW5pbmEiLCJhIjoiY2ticnlmdDBqMTE5YjJyczRvbXdnam12YyJ9.YOfgwy27DMF-84KQs0oXnQ";
  var map = new mapboxgl.Map({
  container: 'map', // container id
  style: 'mapbox://styles/mapbox/streets-v11',
  center: [139.622, 35.71], // starting position
  zoom: 11 // starting zoom
});

var geocoder = new MapboxGeocoder({ // Initialize the geocoder
  accessToken: mapboxgl.accessToken, // Set the access token
  mapboxgl: mapboxgl, // Set the mapbox-gl instance
  marker: true, // Do not use the default marker style
  autocomplete: true,
});

// Add the geocoder to the map
document.getElementById('geocoder').appendChild(geocoder.onAdd(map));

// to add multiple markers
var geojson = {
  type: 'FeatureCollection',
  features: [{
    type: 'Feature',
    geometry: {
      type: 'Point',
      coordinates: [139.6074332123044,35.71350476083268]
    },
    properties: {
      title: 'Momoi Harappa Park',
      description: 'Doggy friendly Park'
    }
  },
  {
    type: 'Feature',
    geometry: {
      type: 'Point',
      coordinates: [139.61963809323174,35.70512308317922]
    },
    properties: {
      title: 'Ogikubo Town Seven',
      description: 'Super Market'
    }
  },
  {
    type: 'Feature',
    geometry: {
      type: 'Point',
      coordinates: [139.62416119375848,35.70145885190061]
    },
    properties: {
      title: 'Otaguro Park',
      description: 'Nice garden with a pond with Koi fish'
    }
  },
  {
    type: 'Feature',
    geometry: {
      type: 'Point',
      coordinates: [139.62577914350413,35.678119357542656]
    },
    properties: {
      title: 'Kashinomiya Park',
      description: 'Park with kids Play ground'
    }
  },
  {
    type: 'Feature',
    geometry: {
      type: 'Point',
      coordinates: [139.61181128519627,35.7272467271641]
    },
    properties: {
      title: 'Igusa no Mori Park',
      description: 'Another doggy friendly Park'
    }
  }]
};

// add markers to map
geojson.features.forEach(function(marker) {

  // create a HTML element for each feature
  var el = document.createElement('div');
  el.className = 'marker';

  // make a marker for each feature and add to the map
  //popup
  new mapboxgl.Marker(el)
    .setLngLat(marker.geometry.coordinates)
    .setPopup(new mapboxgl.Popup({ offset: 25 }) // add popups
      .setHTML('<h3>' + marker.properties.title + '</h3><p>' + marker.properties.description + '</p>'))
    .addTo(map);
});


// sidebar
const sidebar = document.querySelector('[data-sidebar]');
const closeSidebar = document.querySelector('[data-close-sidebar]');
const openSidebar = document.querySelector('[data-open-sidebar]');
console.log(sidebar);

closeSidebar.addEventListener('click', () => {
  sidebar.classList.add('hide');
  openSidebar.classList.remove('hide');
  closeSidebar.classList.add('hide');
});

openSidebar.addEventListener('click', () => {
  sidebar.classList.remove('hide');
  openSidebar.classList.add('hide');
  closeSidebar.classList.remove('hide');
});