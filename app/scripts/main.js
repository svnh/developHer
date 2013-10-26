/*global developHer, $*/

window.developHer = {
    Models: {},
    Collections: {},
    Views: {},
    Routers: {},
    init: function () {
        'use strict';
        var jobsView = new developHer.Views.JobsView();
        $('body').append(jobsView.render());
    }
};

$(document).ready(function () {
    'use strict';
    developHer.init();
});
