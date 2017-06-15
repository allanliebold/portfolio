'use strict';

var projectView = {};

projectView.handleNav = function() {
  $('nav').on('click', 'li.tab', function() {
    $('.tab-content').hide();
    var $tab = $(this).data('content');
    $('#' + $tab).show();
  });

  $('nav .tab:nth-child(2)').click();
};

$(document).ready(function () {
  projectView.handleNav();
})
