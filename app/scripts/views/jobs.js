/*global developHer, Backbone, JST*/

var loadMap = function(){
  var map;

  function initialize() {
    var mapOptions = {
      zoom: 6,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    map = new google.maps.Map(document.getElementById('map-canvas'),
        mapOptions);

    var icons = {
      agriculture: {
        icon: './markers/agriculture.png',
        sound: 'agriculture',
        position: {
          latitude: 37.591927,
          longitude: -122.34375
        }
      },
      factory: {
        icon: './markers/factory.png',
        sound: 'factory',
        position: {
          latitude: 37.5919,
          longitude: -121.8375
        }
      },
      construction: {
        icon: './markers/construction.png',
        sound: 'construction',
        position: {
          latitude: 38,
          longitude: -122
        }
      },
      custodian: {
        icon: './markers/custodian.png',
        sound: 'custodian',
        position: {
          latitude: 39,
          longitude: -122
        }
      },
      government: {
        icon: './markers/government.png',
        sound: 'government',
        position: {
          latitude: 37,
          longitude: -121
        }
      },
      childcare: {
        icon: './markers/childcare.png',
        sound: 'childcare',
        position: {
          latitude: 37,
          longitude: -122.89
        }
      },
      manuallabor: {
        icon: './markers/manuallabor.png',
        sound: 'manuallabor',
        position: {
          latitude: 36,
          longitude: -122.8
        }
      }
    };

    var addMarker = function(feature) {
      var pos = new google.maps.LatLng(feature.position.latitude,
                                         feature.position.longitude);
      var marker = new google.maps.Marker({
        position: pos,
        // icon: icons[feature.type].icon,
        icon: feature.icon,
        map: map
      });
      google.maps.event.addListener(marker, 'mouseover', function() {
        playSound(feature.sound);
      });

      google.maps.event.addListener(marker, 'click', function() {
        console.log(feature.sound)
      });

    };
    // Try HTML5 geolocation
    if(navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(function(position) {
        var pos = new google.maps.LatLng(position.coords.latitude,
                                         position.coords.longitude);
        for (var icon in icons) {
          addMarker(icons[icon]);
        }
        
        var myLocation = new google.maps.Marker({
            position: pos,
            map: map,
            title:"My location"
        });

        google.maps.event.addListener(myLocation, 'mouseover', function() {
          playSound('location');
        });

        map.setCenter(pos);
      }, function() {
        handleNoGeolocation(true);
      });
    } else {
      // Browser doesn't support Geolocation
      handleNoGeolocation(false);
    }
  }

  function handleNoGeolocation(errorFlag) {
    if (errorFlag) {
      var content = 'Error: The Geolocation service failed.';
    } else {
      var content = 'Error: Your browser doesn\'t support geolocation.';
    }

    var options = {
      map: map,
      position: new google.maps.LatLng(60, 105),
      content: content
    };

    var infowindow = new google.maps.InfoWindow(options);
    map.setCenter(options.position);
  };

  window.playSound = function(sound){
      document.getElementById(sound).load()
      document.getElementById(sound).play()
  }

  google.maps.event.addDomListener(window, 'load', initialize);
};

developHer.Views = developHer.Views || {};

(function () {
  'use strict';

  developHer.Views.JobsView = Backbone.View.extend({

    template: JST['app/scripts/templates/jobs.ejs'],

    render: function(){
      loadMap();
      return this.template;
    }

  });

})();
