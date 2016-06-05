
import 'core-js/shim';
import 'angular';
import 'angular-ui-router';

//import './base';

import appRouter from './app-router';
import AppController from './app-controller';

// will be created by gulp task scriptsTemplatecache (-> tasks/develop/javascript.js)
//import '../dist/script-templates'; 

/**
 *
 * @ngdoc overview
 * @name Angular-AMD
 * @desc Instantiate Angular-AMD app. Uses data from package.json to
 *       determine app name and version.
 * @requires ui.router
 * @constant {string} version App version number from `package.json`.
 * @constant {string} appName App name from `package.json`.
 * @constant {string} API_URL Base url for accessing API.
 */
angular.module('angular-amd', [
  'ui.router'//,
  //'angular-amd.base'
])
  // Gets app specific router. Only app level routes are housed here,
  // modules' routes should be kept in module's route files.
  .config(appRouter)

  // Set up constants that are going to be available throughout the application.
  .constant('version', '1.0.0')
  .constant('appName', 'angular-amd')

  .controller('AppController', AppController)