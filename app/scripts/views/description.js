/*global developHer, Backbone, JST*/

developHer.Views = developHer.Views || {};

(function () {
  'use strict';

  developHer.Views.DescriptionView = Backbone.View.extend({

    initialize: function(model){
      this.model = model;
    },

    template: JST['app/scripts/templates/description.ejs'],

    render: function(){
      return this.template(this.model.attributes);
    }

  });

})();
