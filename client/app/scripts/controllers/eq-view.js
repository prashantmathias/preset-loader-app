'use strict';

/**
 * @ngdoc function
 * @name clientApp.controller:EqViewCtrl
 * @description
 * # EqViewCtrl
 * Controller of the clientApp
 */
angular.module('clientApp')
  .controller('EqViewCtrl', function ($scope, $routeParams, Eq) {
    $scope.viewEq = true;
    $scope.eq = Eq.one($routeParams.id).get().$object;
  });
