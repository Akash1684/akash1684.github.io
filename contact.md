---
layout: page
permalink: /contact/
title: Contact - Let us get in touch!
tags: [akash's address,akash's phone]
modified: 19-11-16
comments: false
---
<h4>
If you have an interesting project, need help and have a question, or simply want to say hi, please do not hesitate to contact me.
</h4>

<style>
input {
 border: none;
 border-bottom: 2px solid #a3a3a3;
 margin-bottom: 25px;
 width: 50%;
 margin-right: 2%;
 float: right;
}
textarea{
 border: none;
 border-bottom: 2px solid #a3a3a3;
 margin-bottom: 25px;
 resize: none;
 width: 48%;
 height: 126px;
}
textarea:focus,input:focus {
    border: none;
    border-bottom: 2px solid #191919;
    margin-bottom: 25px;
}
input[type=submit]:hover {
    border:  solid #474545;
}
</style>

<form id="contactform" action="//formspree.io/akash.s1684@gmail.com" method="POST" style="max-width: 100%; width: 100%;  ">
    
    <input type="text" name="name" size="100" placeholder="Your Name" >     
    <input type="email" name="_replyto" size="100" placeholder="Email Address"  >
    <textarea name="message" placeholder="Your message here and I'll answer as soon as possible"></textarea>
    <input type="submit" value="Send" style="border-radius: 10px; width: 100%; color: white; background: #474545; cursor:pointer;">
    
</form>

<div id="map" style="height:200px;width: 100%;border-radius: 10px;max-width:100%;"></div>
<script>
      var marker;
      function initMap() {

        // Create a new StyledMapType object, passing it an array of styles,
        // and the name to be displayed on the map type control.
        var styledMapType = new google.maps.StyledMapType(
            [{"featureType":"administrative","elementType":"all","stylers":[{"saturation":"-100"}]},{"featureType":"administrative.province","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"landscape","elementType":"all","stylers":[{"saturation":-100},{"lightness":65},{"visibility":"on"}]},{"featureType":"poi","elementType":"all","stylers":[{"saturation":-100},{"lightness":"50"},{"visibility":"simplified"}]},{"featureType":"road","elementType":"all","stylers":[{"saturation":"-100"}]},{"featureType":"road.highway","elementType":"all","stylers":[{"visibility":"simplified"}]},{"featureType":"road.arterial","elementType":"all","stylers":[{"lightness":"30"}]},{"featureType":"road.local","elementType":"all","stylers":[{"lightness":"40"}]},{"featureType":"transit","elementType":"all","stylers":[{"saturation":-100},{"visibility":"simplified"}]},{"featureType":"water","elementType":"geometry","stylers":[{"hue":"#ffff00"},{"lightness":-25},{"saturation":-97}]},{"featureType":"water","elementType":"labels","stylers":[{"lightness":-25},{"saturation":-100}]}],
            {name: 'Styled Map'});

        // Create a map object, and include the MapTypeId to add
        // to the map type control.
        
        var map = new google.maps.Map(document.getElementById('map'), {
          center: {lat: 25.6207280, lng: 85.1728860},
          zoom: 6,
          mapTypeControlOptions: {
            mapTypeIds: ['roadmap', 'satellite', 'hybrid', 'terrain',
                    'styled_map']
          }
        });
       
        //Associate the styled map with the MapTypeId and set it to display.
        map.mapTypes.set('styled_map', styledMapType);
        map.setMapTypeId('styled_map');
      
         marker = new google.maps.Marker({
          map: map,
          draggable: true,
          animation: google.maps.Animation.DROP,
          position: {lat: 25.6207280, lng: 85.1728860}
        });
        marker.addListener('click', toggleBounce);
      }

      function toggleBounce() {
        if (marker.getAnimation() !== null) {
          marker.setAnimation(null);
        } else {
          marker.setAnimation(google.maps.Animation.BOUNCE);
        }
      }

 </script>
 <script async defer
    src="https://maps.googleapis.com/maps/api/js?key=AIzaSyBvgTAodpfgCLcfetB0Lg230CJuNUo1ewE&callback=initMap">
  </script>











