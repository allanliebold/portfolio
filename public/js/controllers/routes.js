'use strict';
var app = app || {};

page('/', app.projectController.index);
page('/about', app.aboutController.index);

page();
