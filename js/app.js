"use strict";

var projArr = [];

function Project(name, url){
  this.name = name;
  this.url = url;
  projArr.push(this);
}

var dunGen = new Project('DunGen and Dragons', '');
