'use strict';
var app = app || {};

(function(module) {
  function About(job, location, years){
    this.job = job;
    this.location = location;
    this.years = years;
  }

  About.all = [
    new About('Code Fellows Student', 'Seattle, WA', '2017'),
    new About('Security Guard, JMETS', 'Lemoore, CA', '2016-2017'),
    new About('Petty Officer, US Navy', 'Augusta, GA', '2009-2015'),
    new About('Sales Associate, Circuit City', 'Long Beach, CA', '2007-2009'),
    new About('Film Student, CSU Long Beach', 'Long Beach, CA', '2004-2007'),
    new About('Student, West Hills Community College', 'Lemoore, CA', '2001-2003'),
  ];

  About.placesLived = () => {
    return About.all
      .map((entry) => entry.location)
      .reduce(function (allPlaces, place){
        if (!allPlaces.includes(place)) {
          allPlaces.push(place);
        }
        return allPlaces;
      }, []);
  };

  module.About = About;
} (app));
