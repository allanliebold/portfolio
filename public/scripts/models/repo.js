'use strict';
var app = app || {};

(function(module) {
  const repos = {};

  repos.all = [];

  repos.requestRepos = function(callback) {
    $.ajax({
      url: 'https://api.github.com/users/ragnaroksedge/repos',
      method: 'GET',
      headers: {'Authorization': 'token ' + githubToken}
    }).then(function(data) {
      repos.all = data;
      callback();
    })
  };

  repos.with = attr => repos.all.filter(repo => repo[attr]);

  module.repos = repos;
})(app);
