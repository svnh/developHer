module.exports = function(app) {
  var index = require('../controller/index'),
  jobs = require('../controller/jobs');



  app.get('/', index.index);

  app.get('/job', jobs.list);
  app.get('/job/:id', jobs.getById);
  app.post('/job', jobs.add)
};