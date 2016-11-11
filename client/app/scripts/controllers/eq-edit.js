'use strict';

/**
 * @ngdoc function
 * @name clientApp.controller:EqEditCtrl
 * @description
 * # EqEditCtrl
 * Controller of the clientApp
 */
angular.module('clientApp')
  .controller('EqEditCtrl', function ($scope, $routeParams, Eq, $location) {
    $scope.editEq = true;
    $scope.eq = {};
    Eq.one($routeParams.id).get().then(function(eq) {
      $scope.eq = eq;
      $scope.saveEq = function() {
        $scope.eq.save().then(function() {
          $location.path('/eq/' + $routeParams.id);
        });
      };
    });
  });
