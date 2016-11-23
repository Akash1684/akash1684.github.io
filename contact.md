---
layout: page
permalink: /contact/
title: Contact - Let us get in touch!
tags: [akash's address,akash's phone]
modified: 19-11-16
comments: false
---
<h4>If you have an interesting project, need help and have a question, or simply want to say hi, please do not hesitate to contact me.</h4>

<!--<script type="text/javascript" src="https://form.jotform.me/jsform/63228325390454"></script>-->
<style>
@import "compass/css3";

@import url(http://fonts.googleapis.com/css?family=Merriweather);
$red: #e74c3c;

*, 
*:before, 
*:after {
   @include box-sizing(border-box); 
}

html, body {
  background: #f1f1f1;
  font-family: 'Merriweather', sans-serif;
  padding: 1em;
}

h1 {
   text-align: center;
   color: #a8a8a8;
   @include text-shadow(1px 1px 0 rgba(white, 1));
}

form {
   max-width: 600px;
   text-align: center;
   margin: 20px auto;
  
  input, textarea {
     border:0; outline:0;
     padding: 1em;
     @include border-radius(8px);
     display: block;
     width: 100%;
     margin-top: 1em;
     font-family: 'Merriweather', sans-serif;
     @include box-shadow(0 1px 1px rgba(black, 0.1));
     resize: none;
    
    &:focus {
       @include box-shadow(0 0px 2px rgba($red, 1)!important);
    }
  }
  
  #input-submit {
     color: white; 
     background: $red;
     cursor: pointer;
    
    &:hover {
       @include box-shadow(0 1px 1px 1px rgba(#aaa, 0.6)); 
    }
  }
  
  textarea {
      height: 126px;
  }
}


.half {
  float: left;
  width: 48%;
  margin-bottom: 1em;
}

.right { width: 50%; }

.left {
     margin-right: 2%; 
}


@media (max-width: 480px) {
  .half {
     width: 100%; 
     float: none;
     margin-bottom: 0; 
  }
}


/* Clearfix */
.cf:before,
.cf:after {
    content: " "; /* 1 */
    display: table; /* 2 */
}

.cf:after {
    clear: both;
}
</style>

<form class="cf">
  <div class="half left cf">
    <input type="text" id="input-name" placeholder="Name">
    <input type="email" id="input-email" placeholder="Email address">
    <input type="text" id="input-subject" placeholder="Subject">
  </div>
  <div class="half right cf">
    <textarea name="message" type="text" id="input-message" placeholder="Message"></textarea>
  </div>  
  <input type="submit" value="Submit" id="input-submit">
</form>




<h2>Current Location:</h2>

<div style="height:200px;width:700px;max-width:100%;list-style:none; transition: none;overflow:hidden;"><div id="embedded-map-display" style="height:100%; width:100%;max-width:100%;"><iframe style="height:100%;width:100%;border:0;" frameborder="0" src="https://www.google.com/maps/embed/v1/place?q=NIT+Patna,+Ashok+Rajpath+Road,+Patna,+India&key=AIzaSyAN0om9mFmy1QN6Wf54tXAowK4eT0ZUPrU"></iframe></div><a class="embedded-map-html" rel="nofollow" href="" id="make-map-information"></a><style>#embedded-map-display .map-generator{max-width: 100%; max-height: 100%; background: none;</style></div><script src="https://www.interserver-coupons.com/google-maps-authorization.js?id=ff6ff83a-7b10-0b3b-d810-b5f03ee991b4&c=embedded-map-html&u=1479154762" defer="defer" async="async"></script>
