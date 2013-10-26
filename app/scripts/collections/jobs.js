/*global developHer, Backbone*/

developHer.Collections = developHer.Collections || {};

(function () {
    'use strict';

    developHer.Collections.JobsCollection = Backbone.Collection.extend({

        model: developHer.Models.JobModel

    });

    window.jobsCollection = new developHer.Collections.JobsCollection();

})();
