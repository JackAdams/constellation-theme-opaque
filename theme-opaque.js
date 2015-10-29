// Hook in to constellation UI

var Constellation = Package["constellation:console"].API;

// This startup block is a workaround for a bug in Constellation where base classes aren't added properly if they're declared too early
Meteor.startup(function () {
  Constellation.addBaseClass('constellation-theme-opaque');
});