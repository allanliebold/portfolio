'use strict';

var projArr = [];

function Project(rawDataObj){
  this.title = rawDataObj.title;
  this.projUrl = rawDataObj.projUrl;
  this.createdOn = rawDataObj.createdOn
  this.body = rawDataObj.body;
}

Project.prototype.toHtml = function(){
  var template = $('#project-template').html();
  var templateRender = Handlebars.compile(template);
  this.daysAgo = parseInt((new Date() - new Date(this.createdOn))/60/60/24/1000);
  this.createStatus = this.createdOn ? 'created ${this.daysAgo} days ago' : '(draft)';

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
