'use strict';

export default [
  '$scope',
  '$state',
  function($scope,
           $state) {

    console.log('> AppController');

    // ui-router state
    $scope.state = $state;

  }
];