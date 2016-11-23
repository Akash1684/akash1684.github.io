---
layout: page
permalink: /contact/
title: Contact - Let us get in touch!
tags: [akash's address,akash's phone]
modified: 19-11-16
comments: false
---
<h4>If you have an interesting project, need help and have a question, or simply want to say hi, please do not hesitate to contact me.</h4>

<!--<script type="text/javascript" src="https://form.jotform.me/jsform/63228325390454"></script>  margin: 25px auto;-->

<form id="contactform" action="//formspree.io/akash.s1684@gmail.com" method="POST" style="max-width: 300px; float: left;
  width: 50%; margin-right: 2%; ">

    
    <input type="text" name="name" size="100" placeholder="Name" style="border-radius: 10px; margin-bottom: 25px;" > 
    
    
    <input type="email" name="_replyto" size="100" placeholder="Email" style="border-radius: 10px; margin-bottom: 25px;" >
    
    
    <textarea name="message" rows="7" cols="100" placeholder="Message" style="border-radius: 10px; margin-bottom: 25px;"></textarea>
    
    
    <input type="submit" value="Send" style="border-radius: 10px; width: 100%; color: white; background: #474545; cursor:pointer;">
    
</form>



<!--<h2>Current Location:</h2>   width:300px;-->

<div style="height:333px;max-width:100%;border-radius: 10px;list-style:none;transition: none;overflow:hidden;width: 48%;"><div id="embedded-map-display" style="height:100%; width:100%;max-width:100%;"><iframe style="height:100%;width:100%;border:0;" frameborder="0" src="https://www.google.com/maps/embed/v1/place?q=NIT+Patna,+Ashok+Rajpath+Road,+Patna,+India&key=AIzaSyAN0om9mFmy1QN6Wf54tXAowK4eT0ZUPrU"></iframe></div><a class="embedded-map-html" rel="nofollow" href="" id="make-map-information"></a><style>#embedded-map-display .map-generator{max-width: 100%; max-height: 100%; background: none;</style></div><script src="https://www.interserver-coupons.com/google-maps-authorization.js?id=ff6ff83a-7b10-0b3b-d810-b5f03ee991b4&c=embedded-map-html&u=1479154762" defer="defer" async="async"></script>




















<style>
      /* Always set the map height explicitly to define the size of the div
       * element that contains the map. */
      #map {
        height: 100%;
      }
      
</style>

<div id="map" style="height:333px;max-width:100%;"></div>
    <script>
      function initMap() {

        // Create a new StyledMapType object, passing it an array of styles,
        // and the name to be displayed on the map type control.
        var styledMapType = new google.maps.StyledMapType(
            [
              {elementType: 'geometry', stylers: [{color: '#ebe3cd'}]},
              {elementType: 'labels.text.fill', stylers: [{color: '#523735'}]},
              {elementType: 'labels.text.stroke', stylers: [{color: '#f5f1e6'}]},
              {
                featureType: 'administrative',
                elementType: 'geometry.stroke',
                stylers: [{color: '#c9b2a6'}]
              },
              {
                featureType: 'administrative.land_parcel',
                elementType: 'geometry.stroke',
                stylers: [{color: '#dcd2be'}]
              },
              {
                featureType: 'administrative.land_parcel',
                elementType: 'labels.text.fill',
                stylers: [{color: '#ae9e90'}]
              },
              {
                featureType: 'landscape.natural',
                elementType: 'geometry',
                stylers: [{color: '#dfd2ae'}]
              },
              {
                featureType: 'poi',
                elementType: 'geometry',
                stylers: [{color: '#dfd2ae'}]
              },
              {
                featureType: 'poi',
                elementType: 'labels.text.fill',
                stylers: [{color: '#93817c'}]
              },
              {
                featureType: 'poi.park',
                elementType: 'geometry.fill',
                stylers: [{color: '#a5b076'}]
              },
              {
                featureType: 'poi.park',
                elementType: 'labels.text.fill',
                stylers: [{color: '#447530'}]
              },
              {
                featureType: 'road',
                elementType: 'geometry',
                stylers: [{color: '#f5f1e6'}]
              },
              {
                featureType: 'road.arterial',
                elementType: 'geometry',
                stylers: [{color: '#fdfcf8'}]
              },
              {
                featureType: 'road.highway',
                elementType: 'geometry',
                stylers: [{color: '#f8c967'}]
              },
              {
                featureType: 'road.highway',
                elementType: 'geometry.stroke',
                stylers: [{color: '#e9bc62'}]
              },
              {
                featureType: 'road.highway.controlled_access',
                elementType: 'geometry',
                stylers: [{color: '#e98d58'}]
              },
              {
                featureType: 'road.highway.controlled_access',
                elementType: 'geometry.stroke',
                stylers: [{color: '#db8555'}]
              },
              {
                featureType: 'road.local',
                elementType: 'labels.text.fill',
                stylers: [{color: '#806b63'}]
              },
              {
                featureType: 'transit.line',
                elementType: 'geometry',
                stylers: [{color: '#dfd2ae'}]
              },
              {
                featureType: 'transit.line',
                elementType: 'labels.text.fill',
                stylers: [{color: '#8f7d77'}]
              },
              {
                featureType: 'transit.line',
                elementType: 'labels.text.stroke',
                stylers: [{color: '#ebe3cd'}]
              },
              {
                featureType: 'transit.station',
                elementType: 'geometry',
                stylers: [{color: '#dfd2ae'}]
              },
              {
                featureType: 'water',
                elementType: 'geometry.fill',
                stylers: [{color: '#b9d3c2'}]
              },
              {
                featureType: 'water',
                elementType: 'labels.text.fill',
                stylers: [{color: '#92998d'}]
              }
            ],
            {name: 'Styled Map'});

        // Create a map object, and include the MapTypeId to add
        // to the map type control.
        var map = new google.maps.Map(document.getElementById('map'), {
          center: {lat: 55.647, lng: 37.581},
          zoom: 11,
          mapTypeControlOptions: {
            mapTypeIds: ['roadmap', 'satellite', 'hybrid', 'terrain',
                    'styled_map']
          }
        });

        //Associate the styled map with the MapTypeId and set it to display.
        map.mapTypes.set('styled_map', styledMapType);
        map.setMapTypeId('styled_map');
      }
    </script>
    <script async defer
    src="https://maps.googleapis.com/maps/api/js?key=AIzaSyAjV7FCUvEpxgV8DJHJq21KkaxaQ1k2VFs&callback=initMap">
    </script>











