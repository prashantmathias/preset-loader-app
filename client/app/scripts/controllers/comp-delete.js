'use strict';

/**
 * @ngdoc function
 * @name clientApp.controller:CompDeleteCtrl
 * @description
 * # CompDeleteCtrl
 * Controller of the clientApp
 */
angular.module('clientApp')
  .controller('CompDeleteCtrl', function ($scope, $routeParams, Comp, $location) {
    $scope.comp = Comp.one($routeParams.id).get().$object;
      $scope.deleteComp = function() {
        $scope.comp.remove().then(function() {
            $location.path('/comp');
        });
      };
      $scope.back = function() {
        $location.path('/comp/' + $routeParams.id);
      };
  });
