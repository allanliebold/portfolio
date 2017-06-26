'use strict';
var app = app || {};

(function(module) {
  var projectView = {};

  projectView.handleNav = function() {
    $('nav').on('click', 'li.tab', function(c) {
      c.preventDefault();
      $('.tab').removeClass('clicked');
      $(this).addClass('clicked');
      $('.tab-content').hide();
      var $tab = $(this).data('content');
      $('#' + $tab).show();
    });

    $('nav .tab:nth-child(2)').click();
  };

  projectView.showNav = function() {
    $('nav').on('mouseover', 'span', function() {
      $('nav ul').toggleClass('shown');
    });

    $('nav ul').on('mouseleave', function() {
      $(this).removeClass('shown');
    });
  }

  $(document).ready(function () {
    projectView.handleNav();
    projectView.showNav();
  })

  projectView.create = function() {
    let project;
    $('#projects').empty();

    project = new app.Project({
      title: $('#title').val(),
      projUrl: $('#projUrl').val(),
      body: $('#projBody').val(),
    });

    $('#projects').append(project.toHtml());
    $('pre code').each(function(i, block) {
      hljs.highlightBlock(block);
    });

    $('#export-field').show();
    $('#project-json').val(`${JSON.stringify(project)},`);
  };


  projectView.initIndexPage = function() {
    app.Project.all.forEach(function(project) {
      $('#projects').append(project.toHtml())
    });

    projectView.handleNav();
  }

  module.projectView = projectView;
} (app));
