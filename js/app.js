'use strict';

var projArr = [];

function Project(rawDataObj){
  this.title = rawDataObj.title;
  this.projUrl = rawDataObj.projUrl;
  this.createdOn = rawDataObj.createdOn
  this.body = rawDataObj.body;
}

Project.prototype.toHtml = function(){
  var $newProject = $('.template').clone();
  $newProject.removeClass('template');

  $newProject.find('h1').html(this.title);
  $newProject.find('.project-link a').attr('href', this.projUrl);
  $newProject.find('.project-body').html(this.body);

  $newProject.find('time').html('about ' + parseInt((new Date() - new Date(this.createdOn))/60/60/24/1000) + ' days ago');
  $newProject.append('<hr>');
  console.log($newProject);
  return $newProject;
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
