'use strict';
var app = app || {};

(function(module) {
  const aboutController = {};

  aboutController.index = () => {
    $('section').hide();
    $('#about').show();
    app.repos.requestRepos(app.repoView.index);
  }

  module.aboutController = aboutController;
})(app);
