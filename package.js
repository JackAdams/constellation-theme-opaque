Package.describe({
  name: 'constellation:theme-opaque',
  version: '0.1.0',
  summary: 'Opaque theme plugin for Constellation',
  git: 'https://github.com/JackAdams/constellation-theme-opaque.git',
  documentation: 'README.md',
  debugOnly: true
});

Package.onUse(function(api) {
  api.versionsFrom('1.1');

  api.use('constellation:console@1.2.3', 'client');

  api.addFiles('theme-opaque.css','client');
  api.addFiles('viewmodel.js','client');
  
  api.imply('constellation:console');
});

Package.onTest(function(api) {
  api.use('tinytest');
});
