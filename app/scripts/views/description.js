/*global developHer, Backbone, JST*/

developHer.Views = developHer.Views || {};

(function () {
  'use strict';

  developHer.Views.DescriptionView = Backbone.View.extend({

    template: JST['app/scripts/templates/description.ejs'],

    render: function(){
      console.log('rendering');
      return this.template;
    }

  });

})();
