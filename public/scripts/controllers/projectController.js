'use strict';
var app = app || {};

(function(module) {
  const projectController = {};
  projectController.index = () => {
    app.Project.fetchAll(app.projectView.initIndexPage);

    $('section').hide();
    $('#projects').show();

    app.repos.requestRepos(app.repoView.index);
  }

  module.projectController = projectController;
})(app);
