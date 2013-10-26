/*global developHer, Backbone, JST*/

developHer.Views = developHer.Views || {};

var createJob = function(){
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

$(document).ready(function(){
  $('.login').on("click", function(e){
    e.preventDefault();
    $('#myModal').modal('toggle');
    $('#jobModal').modal('toggle');
  });

  $('.create').on("click", function(e){
    e.preventDefault();
    $('#jobModal').modal('toggle');
  });
});

(function () {
  'use strict';

  developHer.Views.JobView = Backbone.View.extend({

    el: '#modal-content',
    template: JST['app/scripts/templates/job.ejs'],
    otherTemplate: JST['app/scripts/templates/createJob.ejs'],

    render: function(){
      return this.template;
    },

    otherRender: function(){
      return this.otherTemplate;
    }

  });

})();
