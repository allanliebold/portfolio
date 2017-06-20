'use strict';

var projArr = [];

function Project(rawDataObj){
  this.title = rawDataObj.title;
  this.projUrl = rawDataObj.projUrl;
  this.createdOn = rawDataObj.createdOn;
  this.projBody = rawDataObj.projBody;
}

Project.prototype.toHtml = function(){
  var template = $('#project-template').html();
  var templateRender = Handlebars.compile(template);
  return templateRender(this);
};

rawData.sort(function(a, b) {
  return (new Date(b.createdOn) - new Date(a.createdOn));
});

rawData.forEach(function(projObject) {
  projArr.push(new Project(projObject));
});

projArr.forEach(function(project) {
  $('#projects').append(project.toHtml());
});

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
    url: 'https://api.github.com/users/ragnaroksedge/repos?callback=?',
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
    $.getJSON('/../data/hackerIpsum.json', function(data) {
      localStorage.rawData = JSON.stringify(data);
      localStorage.ETag = serverETag;
      Project.loadAll(data);
      prjoectView.initIndexPage();
    });
  }
}
