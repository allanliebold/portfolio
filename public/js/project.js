'use strict';
var app = app || {};

(function(module) {

function Project(rawDataObj){
  this.title = rawDataObj.title;
  this.projUrl = rawDataObj.projUrl;
  this.createdOn = rawDataObj.createdOn;
  this.projBody = rawDataObj.projBody;
}

Project.all = [];

Project.prototype.toHtml = function(){
  let template = Handlebars.compile($('#project-template').text());
  return template(this);
};

Project.loadAll = function(rawData) {
  rawData.sort(function(a,b) {
    return (new Date(b.publishedOn)) - (new Date(a.publishedOn));
  });

  rawData.forEach(function(ele) {
    Project.all.push(new Project(ele));
  })
}

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
    projectView.initIndexPage();
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
