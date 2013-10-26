/*global developHer, Backbone*/

developHer.Collections = developHer.Collections || {};

(function () {
    'use strict';

    developHer.Collections.JobsCollection = Backbone.Collection.extend({

        model: developHer.Models.JobModel

    });

    window.jobsCollection = new developHer.Collections.JobsCollection();

    var job1 = new developHer.Models.JobModel({
		type: 'agriculture',
		period: 'May - September',
		salary: "$1000",
		description: "farmWork",
		position: {
          latitude: 37.591927,
          longitude: -122.34375
        },
        contact: '(415)-357-38-98'
	});

    var job2 = new developHer.Models.JobModel({
		type: 'construction',
		period: '3 months',
		salary: "$1000",
		description: "construction work",
		position: {
          latitude: 38,
          longitude: -122
        },
        contact: '(415)-357-38-98'
	});

	var job3 = new developHer.Models.JobModel({
		type: 'custodian',
		period: '2 weeks',
		salary: "$1070",
		description: "custodian work",
		position: {
          latitude: 39,
          longitude: -122
        },
        contact: '(415)-357-38-98'
	});

	var job4 = new developHer.Models.JobModel({
		type: 'government',
		period: '-',
		salary: "$100",
		description: "government work",
		position: {
          latitude: 37,
          longitude: -121
        },
        contact: '(415)-357-38-98'
	});

	var job5 = new developHer.Models.JobModel({
		type: 'childcare',
		period: 'permanent',
		salary: "$1200",
		description: "childcare work",
		position: {
          latitude: 37.69951,
          longitude: -122.423401
        },
        contact: '(415)-357-38-98'
	});

	var job6 = new developHer.Models.JobModel({
		type: 'factory',
		period: '1 year',
		salary: "$11/hour",
		description: "factory work",
		position: {
          latitude: 37.5919,
          longitude: -121.8375
        },
        contact: '(415)-357-38-98'
	});

	var job7 = new developHer.Models.JobModel({
		type: 'manuallabor',
		period: '20 hours',
		salary: "$300",
		description: "lifting boxes",
		position: {
          latitude: 37.325874,
          longitude: -122.021027
        },
        contact: '(415)-357-38-98'
	});

	jobsCollection.add([job1, job2, job3, job4, job5, job6, job7]);

})();
