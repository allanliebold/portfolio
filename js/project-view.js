'use strict';

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
