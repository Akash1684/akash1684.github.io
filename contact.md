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
<!--
<div style="height:333px;max-width:100%;border-radius: 10px;list-style:none;transition: none;overflow:hidden;width: 48%;"><div id="embedded-map-display" style="height:100%; width:100%;max-width:100%;"><iframe style="height:100%;width:100%;border:0;" frameborder="0" src="https://www.google.com/maps/embed/v1/place?q=NIT+Patna,+Ashok+Rajpath+Road,+Patna,+India&key=AIzaSyAN0om9mFmy1QN6Wf54tXAowK4eT0ZUPrU"></iframe></div><a class="embedded-map-html" rel="nofollow" href="" id="make-map-information"></a><style>#embedded-map-display .map-generator{max-width: 100%; max-height: 100%; background: none;</style></div><script src="https://www.interserver-coupons.com/google-maps-authorization.js?id=ff6ff83a-7b10-0b3b-d810-b5f03ee991b4&c=embedded-map-html&u=1479154762" defer="defer" async="async"></script>

-->




<div id="map" style="height:333px;width: 48%;border-radius: 10px;max-width:100%;"></div>
<script>
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
       var marker = new google.maps.Marker({
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

        //Associate the styled map with the MapTypeId and set it to display.
        map.mapTypes.set('styled_map', styledMapType);
        map.setMapTypeId('styled_map');
       
      }
 </script>
 <script async defer
    src="https://maps.googleapis.com/maps/api/js?key=AIzaSyBvgTAodpfgCLcfetB0Lg230CJuNUo1ewE&callback=initMap">
  </script>











