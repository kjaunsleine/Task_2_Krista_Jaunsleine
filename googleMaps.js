!function(e){var a={};function o(n){if(a[n])return a[n].exports;var t=a[n]={i:n,l:!1,exports:{}};return e[n].call(t.exports,t,t.exports,o),t.l=!0,t.exports}o.m=e,o.c=a,o.d=function(e,a,n){o.o(e,a)||Object.defineProperty(e,a,{enumerable:!0,get:n})},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,a){if(1&a&&(e=o(e)),8&a)return e;if(4&a&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&a&&"string"!=typeof e)for(var t in e)o.d(n,t,function(a){return e[a]}.bind(null,t));return n},o.n=function(e){var a=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(a,"a",a),a},o.o=function(e,a){return Object.prototype.hasOwnProperty.call(e,a)},o.p="",o(o.s=74)}({74:function(e,a,o){"use strict";var n=[{sector:"edinasana",name:"Big Bad Bagels",city:"riga",cityName:"Rīga",phone:"+371 24556585",email:"bbb@bigbadbagels.com",address:"Baznīcas iela 8",logo:"./images/bbb-logo.png",coord:{lat:56.95688031271806,lng:24.11925253069052}},{sector:"edinasana",name:"Kurts coffee",city:"riga",cityName:"Rīga",phone:"+371 23202079",email:"kurtscoffee.riga@gmail.com",address:"Tērbatas iela 2J",logo:"./images/kurts-logo.png",coord:{lat:56.951192430399956,lng:24.120726774255203}},{sector:"edinasana",name:"PURCH restaurant",city:"riga",cityName:"Rīga",phone:"+371 20200400",email:"",address:"Dzelzavas iela 51A",logo:"./images/purch-logo.png",coord:{lat:56.95841709326254,lng:24.191152276727728}},{sector:"skaistumkopsana",name:"Grieze",city:"riga",cityName:"Rīga",phone:"+371 20015220",email:"grieze@grieze.lv",address:"Ģertrūdes iela 2 - k2",logo:"./images/grieze-logo.png",coord:{lat:56.9589776257728,lng:24.119726129076216}},{sector:"skaistumkopsana",name:"Strogonovs ",city:"riga",cityName:"Rīga",phone:"+371 67283122",email:"",address:"Marijas iela 8",logo:"./images/strogonovs_logo.jpg",coord:{lat:56.949692200867524,lng:24.123385984893993}},{sector:"atputa",name:"Gandrs",city:"riga",cityName:"Rīga",phone:"+371 2544 5311 ",email:"veikals@gandrs.lv",address:"Kalnciema iela 30",logo:"./images/gandrs-logo.svg",coord:{lat:56.94404505791262,lng:24.070492568260306}},{sector:"edinasana",name:"LaCasa Ogre",city:"ogre",cityName:"Ogre",phone:"+371 63470700",email:"",address:"Brīvības iela 21",logo:"./images/lacasa-ogre-logo.jpg",coord:{lat:56.8181364060927,lng:24.605441556052483}},{sector:"atputa",name:"Milžu taka",city:"ogre",cityName:"Ogre",phone:"+371XXXXXXXX",email:"info@milzutaka.lv",address:'"Ogres Zilie kalni", Dabas parks',logo:"./images/milzu-taka-logo.png",coord:{lat:56.827816812948264,lng:24.593429192378306}},{sector:"edinasana",name:"Chocolate and pepper",city:"jelgava",cityName:"Jelgava",phone:"+371 63010220",email:"info@choco-pepper.lv",address:"Krišjāņa Barona iela 6",logo:"./images/choc-and-pep-logo.jpg",coord:{lat:56.65409032732801,lng:23.723595867682334}},{sector:"skaistumkopsana",name:"Skaistumburve",city:"jelgava",cityName:"Jelgava",phone:"+371 20552222",email:"info@skaistumburve.lv",address:"Pētera iela 13",logo:"./images/skaistumburve-logo.png",coord:{lat:56.64772725493188,lng:23.718456700227858}}];$(window).on("load",(function(){var e=document.createElement("script");e.src="https://maps.googleapis.com/maps/api/js?key=AIzaSyCH7D-7k5hlveynQ-xJpa7YTOq6Vrj2lPI&callback=initMap",e.async=!0,document.body.appendChild(e);var a="./images/marker-icon.png",o=[],t=void 0,i=void 0;function s(e){var a=document.createElement("div");$(a).addClass("company-container-inner row");var o='<div class="col-3"><img class="company-logo" src="'+e.logo+'"></div>';o+='<div class="col-5"><p class="company-name">'+e.name+"</p></div>",o+='<div class="col-4"><p class="company-phone">'+e.phone+"</p>",o+='<p class="company-address">'+e.address+"</p></div>",$(a).html(o),$(a).appendTo(".company-container")}window.initMap=function(){i=new google.maps.Map(document.getElementById("map"),{center:{lat:56.947,lng:24.115},zoom:13,mapId:"188a28bf3623f836",disableDefaultUI:!0,clickableIcons:!1});var e=document.createElement("div");new function(e,a){var o=document.createElement("div");$(o).addClass("zoom-btn-container"),e.appendChild(o);var n=document.createElement("div");$(n).addClass("zoom-btn"),$(n).html('<span class="icon-plus"></span>'),o.appendChild(n);var t=document.createElement("div");$(t).addClass("zoom-btn"),$(t).html('<span class="icon-minus"></span>'),o.appendChild(t),google.maps.event.addDomListener(n,"click",(function(){a.setZoom(a.getZoom()+1)})),google.maps.event.addDomListener(t,"click",(function(){a.setZoom(a.getZoom()-1)}))}(e,i),e.index=1,i.controls[google.maps.ControlPosition.RIGHT_BOTTOM].push(e);var s=new google.maps.InfoWindow;n.forEach((function(e){!function(e,n,i){var s=new google.maps.Marker({position:e.coord,map:n,icon:a,sector:e.sector,city:e.city,cityName:e.cityName,logo:e.logo,name:e.name,phone:e.phone,email:e.email,address:e.address});o.push(s),google.maps.event.addListener(s,"click",(function(e){i.setContent(function(e){var a='<div class="info-window">';return a+='<div class="info-window-logo"><img src='+e.logo+"></div>",(a+='<div class="info-window-contacts"><p class="h3">'+e.name+"</p><div><p>"+e.phone+"</p>")+"<p>"+e.email+"</p><p>"+e.address+", "+e.cityName+"</p></div></div></div>"}(s)),i.open(n,s),t&&t.setIcon(a),s.setIcon("./images/marker-icon-clicked.png"),t=s,google.maps.event.addListener(n,"click",(function(e){i.close(),s.setIcon(a)})),$("#location-select").add("#type-select").on("change",(function(){i.close(),s.setIcon(a)}))}))}(e,i,s)}))},$("#location-select").add("#type-select").on("change",(function(){$("li.opt:first").hide();var e=$("option:selected","#location-select").val(),a=$("option:selected","#type-select").val();$(".company-container").slideUp(400,"easeInQuad",(function(){$(".company-container").html("");for(var n=0;n<o.length;n++){var t=o[n];"riga"!==e&&""!==e||i.setCenter({lat:56.947,lng:24.115}),"jelgava"===e&&i.setCenter({lat:56.65122718630456,lng:23.72430618412634}),"ogre"===e&&i.setCenter({lat:56.814891589694945,lng:24.603889246178607}),t.city===e&&a===t.sector||t.city===e&&""===a?(t.setVisible(!0),$(window).width()>577&&s(t)):t.setVisible(!1),$(".company-container").slideDown(400,"easeInQuad")}}))}))}))}});
//# sourceMappingURL=googleMaps.js.map