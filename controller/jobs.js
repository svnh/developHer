var mongoose = require('mongoose');
var Job = mongoose.model('Job');

module.exports = {
    getById: function(req, res, next){
      return Job.findById(req.params._id, function (err, job) {
        if (!err) {
          return res.send(job);
        } else {
          return console.log(err);
        }
      });
    },

    list:  function(req, res, next){
      return Job.find(function (err, jobs) {
        if (!err) {
          return res.send(jobs);
        } else {
          return console.log(err);
        }
      });
    },

    add: function(req, res, next) {  // next is for promises
      var job;
      job = new Job({
        owner: "Global",
        salary: req.salary,
        position: { lattitude: req.position.lattitude, longitude: req.position.longitude },
        type: req.type,
        description: req.description,
        duration: req.duration
      });

      job.save(function (err) {
        if (!err) {
          return console.log("Created job with uuid: "+ req.body.uuid);
        } else {
          return console.log(err);
        }
      });

      job.id = job._id;
      return res.send(job);
    }
  }
