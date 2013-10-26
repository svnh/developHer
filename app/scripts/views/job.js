/*global developHer, Backbone, JST*/

developHer.Views = developHer.Views || {};

createJob = function(){
	var newJob = new developHer.Models.JobModel({
		type: $('#type').val(),
		period: $('#period').val(),
		salary: $('#salary').val(),
		requirements: $('#requirements').val(),
		description: $('#description').val()
	});

	jobsCollection.add([newJob]);
	$('.close').click();
};

(function () {
  'use strict';

  developHer.Views.JobView = Backbone.View.extend({

    template: JST['app/scripts/templates/job.ejs'],

    render: function(){
      return this.template;
    }

  });

})();
