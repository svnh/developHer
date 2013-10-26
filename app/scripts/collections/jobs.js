/*global developHer, Backbone*/

developHer.Collections = developHer.Collections || {};

(function () {
    'use strict';

    developHer.Collections.JobsCollection = Backbone.Collection.extend({

        model: developHer.Models.JobModel

    });

    window.jobsCollection = new developHer.Collections.JobsCollection();

    var loremIpsum ='Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.'

    var job1 = new developHer.Models.JobModel({
		type: 'agriculture',
		period: 'May - September',
		salary: "$1000",
		description: loremIpsum,
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
		description: loremIpsum,
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
		description: loremIpsum,
		position: {
          latitude: 37.874549,
          longitude: -122.45842
        },
        contact: '(415)-357-38-98'
	});

	var job4 = new developHer.Models.JobModel({
		type: 'government',
		period: '-',
		salary: "$100",
		description: loremIpsum,
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
		description: loremIpsum,
		position: {
          latitude:37.986896,
          longitude: -122.56897
        },
        contact: '(415)-357-38-98'
	});

	var job6 = new developHer.Models.JobModel({
		type: 'factory',
		period: '1 year',
		salary: "$11/hour",
		description: loremIpsum,
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
		description: loremIpsum,
		position: {
          latitude: 37.325874,
          longitude: -122.021027
        },
        contact: '(415)-357-38-98'
	});

	jobsCollection.add([job1, job2, job3, job4, job5, job6, job7]);

})();
