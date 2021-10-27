// Google Maps

const companies = [{ 
  sector: 'edinasana',
  name: 'Big Bad Bagels',
  city: 'riga',
  cityName: 'Rīga',
  phone: '+371 24556585',
  email: 'bbb@bigbadbagels.com',
  address: 'Baznīcas iela 8',
  logo: "./images/bbb-logo.png",
  coord: { lat: 56.95688031271806, lng: 24.11925253069052 }, 
},
{
  sector: 'edinasana',
  name: 'Kurts coffee',
  city: 'riga',
  cityName: 'Rīga',
  phone: '+371 23202079',
  email: 'kurtscoffee.riga@gmail.com',
  address: 'Tērbatas iela 2J',
  logo: './images/kurts-logo.png',
  coord: { lat: 56.951192430399956, lng: 24.120726774255203 },
},
{
  sector: 'edinasana',
  name: 'PURCH restaurant',
  city: 'riga',
  cityName: 'Rīga',
  phone: '+371 20200400',
  email: '',
  address: 'Dzelzavas iela 51A',
  logo: './images/purch-logo.png',
  coord: { lat: 56.95841709326254, lng: 24.191152276727728 }
},
{
  sector: 'skaistumkopsana',
  name: 'Grieze',
  city: 'riga',
  cityName: 'Rīga',
  phone: '+371 20015220',
  email: 'grieze@grieze.lv',
  address: 'Ģertrūdes iela 2 - k2',
  logo: './images/grieze-logo.png',
  coord: { lat: 56.9589776257728, lng: 24.119726129076216 }, 
},
{
  sector: 'skaistumkopsana',
  name: 'Strogonovs ',
  city: 'riga',
  cityName: 'Rīga',
  phone: '+371 67283122',
  email: '',
  address: 'Marijas iela 8',
  logo: './images/strogonovs_logo.jpg',
  coord: { lat: 56.949692200867524, lng: 24.123385984893993 }, 
},
{
  sector: 'atputa',
  name: 'Gandrs',
  city: 'riga',
  cityName: 'Rīga',
  phone: '+371 2544 5311 ',
  email: 'veikals@gandrs.lv',
  address: 'Kalnciema iela 30',
  logo: './images/gandrs-logo.svg',
  coord: { lat: 56.94404505791262, lng: 24.070492568260306 },
},
{
  sector: 'edinasana',
  name: 'LaCasa Ogre',
  city: 'ogre',
  cityName: 'Ogre',
  phone: '+371 63470700',
  email: '',
  address: 'Brīvības iela 21',
  logo: './images/lacasa-ogre-logo.jpg',
  coord: { lat: 56.8181364060927, lng: 24.605441556052483 }, 
},
{
  sector: 'atputa',
  name: 'Milžu taka',
  city: 'ogre',
  cityName: 'Ogre',
  phone: '+371XXXXXXXX',
  email: 'info@milzutaka.lv',
  address: '"Ogres Zilie kalni", Dabas parks',
  logo: './images/milzu-taka-logo.png',
  coord: { lat: 56.827816812948264, lng: 24.593429192378306 }, 
},
{
  sector: 'edinasana',
  name: 'Chocolate and pepper',
  city: 'jelgava',
  cityName: 'Jelgava',
  phone: '+371 63010220',
  email: 'info@choco-pepper.lv',
  address: 'Krišjāņa Barona iela 6',
  logo: './images/choc-and-pep-logo.jpg',
  coord: { lat: 56.65409032732801, lng: 23.723595867682334 }, 
},
{
  sector: 'skaistumkopsana',
  name: 'Skaistumburve',
  city: 'jelgava',
  cityName: 'Jelgava',
  phone: '+371 20552222',
  email: 'info@skaistumburve.lv',
  address: 'Pētera iela 13',
  logo: './images/skaistumburve-logo.png',
  coord: { lat: 56.64772725493188, lng: 23.718456700227858 }, 
}];

  $(window).on('load', function(){
    'use strict';
  
  /* ************* Create Goggle maps script ************  */
  
  const script = document.createElement('script');
  script.src = 'https://maps.googleapis.com/maps/api/js?key=AIzaSyCH7D-7k5hlveynQ-xJpa7YTOq6Vrj2lPI&callback=initMap';
  script.async = true;
  document.body.appendChild(script);
  
  /* ************* Create custom zoom buttons ************  */
  
  function ZoomControl (controlDiv, map){
    const controlWrapper = document.createElement('div');
    $(controlWrapper).addClass('zoom-btn-container');
    controlDiv.appendChild(controlWrapper);
  
    const zoomInButton = document.createElement('div');
    $(zoomInButton).addClass('zoom-btn');
    $(zoomInButton).html('<span class="icon-plus"></span>');
    controlWrapper.appendChild(zoomInButton);
  
    const zoomOutButton = document.createElement('div');
    $(zoomOutButton).addClass('zoom-btn');
    $(zoomOutButton).html('<span class="icon-minus"></span>');
    controlWrapper.appendChild(zoomOutButton);
  
    google.maps.event.addDomListener(zoomInButton, 'click', function() {
      map.setZoom(map.getZoom() + 1);
    });
  
    google.maps.event.addDomListener(zoomOutButton, 'click', function() {
      map.setZoom(map.getZoom() - 1);
    });
  }
  
  /* ************* Create info window content ************  */
  
  function createPopupContent(company){
    let contentString = '<div class="info-window">';
    contentString += `<div class="info-window-logo"><img src=${company.logo}></div>`;
    contentString += `<div class="info-window-contacts"><p class="h3">${company.name}</p><div><p>${company.phone}</p>`;
    contentString += `<p>${company.email}</p><p>${company.address}, ${company.cityName}</p></div></div></div>`;
    return contentString;
  }
  
  /* ************* Create markers ************  */
  
  const markerIcon = './images/marker-icon.png';
  const markerIconClk = './images/marker-icon-clicked.png';
  let markers = [];
  let selectedMarker;
  
  function makeMarker(company, map, infowindow) {
    let marker = new google.maps.Marker({
      position: company.coord,
      map: map,
      icon: markerIcon,
      sector: company.sector,
      city: company.city,
      cityName: company.cityName,
      logo: company.logo,
      name: company.name,
      phone: company.phone,
      email: company.email,
      address: company.address
    });
  
    markers.push(marker);
    
    google.maps.event.addListener(marker, 'click', function(event){
      infowindow.setContent(createPopupContent(marker));
      infowindow.open(map, marker);
      if (selectedMarker) {
        selectedMarker.setIcon(markerIcon);
      }
      marker.setIcon(markerIconClk);
          selectedMarker = marker;
  
      google.maps.event.addListener(map, "click", function(event) {
        infowindow.close();
        marker.setIcon(markerIcon);
      });

      $('#location-select').add('#type-select').on('change', function(){
        infowindow.close();
        marker.setIcon(markerIcon);
      });
    });
  }
  
  /* ************* Create marker functions ************  */
  
  function setMapOnAll(map) {
    for (let i = 0; i < markers.length; i++) {
      markers[i].setMap(map);
    }
  }
  
  function hideMarkers() {
    setMapOnAll(null);
  }
  
  /* ************* Create map ************  */
  
  let map;
  
  window.initMap = function() {
  
    // Initialize map
    map = new google.maps.Map(document.getElementById("map"), {
      center: {lat: 56.947, lng: 24.115},
      zoom: 13,
      mapId: '188a28bf3623f836',
      disableDefaultUI: true,
      clickableIcons: false
    });
  
    // Add custom zoom buttons
    const zoomControlDiv = document.createElement('div');
    const zoomControl = new ZoomControl(zoomControlDiv, map);
  
    zoomControlDiv.index = 1;
    map.controls[google.maps.ControlPosition.RIGHT_BOTTOM].push(zoomControlDiv);
  
    // Add info window
    const infowindow = new google.maps.InfoWindow();
  
    // Add all markers and info windows
    companies.forEach(function(company) {
      makeMarker(company, map, infowindow);
    });
  }
  
  function createCard(obj){
    let companyDiv = document.createElement('div');
    $(companyDiv).addClass('company-container-inner row');
    let html = `<div class="col-3"><img class="company-logo" src="${obj.logo}"></div>`;
    html += `<div class="col-5"><p class="company-name">${obj.name}</p></div>`;
    html += `<div class="col-4"><p class="company-phone">${obj.phone}</p>`;
    html += `<p class="company-address">${obj.address}</p></div>`;
    $(companyDiv).html(html);
    $(companyDiv).appendTo('.company-container');
  }

  $('#location-select').add('#type-select').on('change', function(){
    $('li.opt:first').hide();

    let cityVal = $('option:selected', '#location-select').val();
    let typeVal = $('option:selected', '#type-select').val();

    $('.company-container').slideUp(400, 'easeInQuad', function(){ 
      $('.company-container').html('');

      for (let i=0; i < markers.length; i++) {
        let marker = markers[i];
  
        if (cityVal === 'riga'|| cityVal === '') {
          map.setCenter({lat: 56.947, lng: 24.115});
        }
  
        if (cityVal === 'jelgava') {
          map.setCenter({ lat: 56.65122718630456, lng: 23.72430618412634 });
        }
  
        if (cityVal === 'ogre') {
          map.setCenter({ lat: 56.814891589694945, lng: 24.603889246178607 });
        }
  
        if (marker.city === cityVal && typeVal === marker.sector || marker.city === cityVal && typeVal === '') {
          marker.setVisible(true);
          if ($(window).width() > 480) {
            createCard(marker);
          }
        } else {
          marker.setVisible(false);
        }
  
        $('.company-container').slideDown(400, 'easeInQuad');
      }
    });
  });
});


