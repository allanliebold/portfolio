'use strict';
var app = app || {};

(function(module) {

  function Project(rawDataObj){
    Object.keys(rawDataObj).forEach(key => this[key] = rawDataObj[key]);
  }

  Project.all = [];

  Project.prototype.toHtml = function(){
    let template = Handlebars.compile($('#project-template').text());
    return template(this);
  };

  Project.loadAll = rows => {
    rows.sort((a,b) => (new Date(b.publishedOn)) - (new Date(a.publishedOn)));

    Project.all = rows.map(ele => new Project(ele));
  };

  Project.fetchAll = function() {
    var serverETag;

    $.ajax({
      url: '/../data/projects.json',
      type: 'HEAD',
      success: function(data, message, xhr) {
        serverETag = xhr.getResponseHeader('ETag');
      },
      fail: function (err) {
        console.error(err);
      }
    });

    if (localStorage.rawData && localStorage.ETag === serverETag) {
      Project.loadAll(JSON.parse(localStorage.rawData));
      app.projectView.initIndexPage();
    } else {
      $.getJSON('/../data/projects.json', function(data) {
        localStorage.rawData = JSON.stringify(data);
        localStorage.ETag = serverETag;
        Project.loadAll(data);
        app.projectView.initIndexPage();
      });
    }
  }

  module.Project = Project;

} (app));
