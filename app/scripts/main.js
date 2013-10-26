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
        var jobView = new developHer.Views.JobView();
        $('body').prepend(jobView.render());
        $('body').prepend(jobView.otherRender());
    }
};

$(document).ready(function () {
    'use strict';
    developHer.init();
});
