'use strict';

/**
 * @ngdoc function
 * @name clientApp.controller:CompEditCtrl
 * @description
 * # CompEditCtrl
 * Controller of the clientApp
 */
angular.module('clientApp')
  .controller('CompEditCtrl', function ($scope, $routeParams, Comp, $location) {
    $scope.editComp = true;
    $scope.comp = {};
    Comp.one($routeParams.id).get().then(function(comp) {
      $scope.comp = comp;
      $scope.saveComp = function() {
        $scope.comp.save().then(function() {
          $location.path('/comp/' + $routeParams.id);
        });
      };
    });
  });
