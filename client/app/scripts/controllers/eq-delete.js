'use strict';

/**
 * @ngdoc function
 * @name clientApp.controller:EqDeleteCtrl
 * @description
 * # EqDeleteCtrl
 * Controller of the clientApp
 */
angular.module('clientApp')
  .controller('EqDeleteCtrl', function ($scope, $routeParams, Eq, $location) {
    $scope.eq = Eq.one($routeParams.id).get().$object;
      $scope.deleteEq = function() {
        $scope.eq.remove().then(function() {
            $location.path('/eq');
        });
      };
      $scope.back = function() {
        $location.path('/eq/' + $routeParams.id);
      };
  });
