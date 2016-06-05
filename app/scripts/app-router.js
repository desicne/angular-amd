'use strict';

/**
 * Configure routes for main app.
 *
 * @description
 * Top-level app router and configuration, used to provide fallback and
 * utility routes (500, 404) while delegating most of the routing jobs to
 * modules' routers.
 *
 * @requires $stateProvider
 * @requires $urlRouterProvider
 * @requires $httpProvider
 */
export default [
  '$stateProvider',
  '$urlRouterProvider',
  '$httpProvider',
  '$provide',
  function($stateProvider,
           $urlRouterProvider,
           $httpProvider,
           $provide) {
    
    $httpProvider.defaults.withCredentials = true;

    // Sets default route which triggers in case requested route wasn't
    // specified anywhere throughout the entire application.
    $urlRouterProvider.otherwise(function($injector, $location) {
      $injector.invoke(['$state', function($state) {
        $state.go('root.home');
      }]);
    });

    /* ROOT resolves data needed everywhere and defines shared parent AppController */
    $stateProvider
      .state('root', {
        views: {
          '': {
            templateUrl: 'scripts/base/layout.html',
            controller: 'AppController'
          },
          'header@root': {
            templateUrl: 'scripts/base/header.html',
            controller: 'AppController'
          },
          'main@root': {
            templateUrl: 'scripts/base/main.html'
          },
          'footer@root': {
            templateUrl: 'scripts/base/footer.html'
          }
        }
      })

      /* HOME FEED: activity feed for the user */
      .state('root.home', {
        url: '/feed',
        views: {
          'main@root': {
            templateUrl: 'scripts/home/home.html',
            controller: 'AppController'
          }
        }
      });
  }
];