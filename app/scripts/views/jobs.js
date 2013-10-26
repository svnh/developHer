/*global developHer, Backbone, JST*/

loadMap = function(){
  var map;

  function initialize() {
    var mapOptions = {
      zoom: 9,
      mapTypeId: google.maps.MapTypeId.ROADMAP,
      disableDefaultUI: true,
      zoomControl: true
    }

    map = new google.maps.Map(document.getElementById('map-canvas'),
        mapOptions);

    map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);

    var addMarker = function(feature) {
      var pos = new google.maps.LatLng(feature.get('position').latitude, feature.get('position').longitude);
      var marker = new google.maps.Marker({
        position: pos,
        animation: google.maps.Animation.DROP,
        // icon: icons[feature.type].icon,
        //icon: feature.icon,
        icon: ('./markers/' + feature.get('type') + '.png' ),
        map: map
      });
      google.maps.event.addListener(marker, 'mouseover', function() {
        playSound(feature.get('type'));
      });

      google.maps.event.addListener(marker, 'click', function() {
        var descriptionView = new developHer.Views.DescriptionView(feature);
        $('body').prepend(descriptionView.render());
        showModal(feature)
      });

    };
    // Try HTML5 geolocation
    if(navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(function(position) {
        var pos = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
        _.each(jobsCollection.models, function(jobModel) {
          addMarker(jobModel);
        });
        
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

  window.showModal = function(feature){
    $('#newModal').modal('toggle');
    
    $('#md-description').on('mouseover', function(){
      playSound(feature.get('type')+'Work')
    });
  };
  
  window.playSound = function(sound){
    $.each($('audio'), function () {
      if (this.paused !== true) this.pause();
    });
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
