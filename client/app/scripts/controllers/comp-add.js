'use strict';

/**
 * @ngdoc function
 * @name clientApp.controller:CompAddCtrl
 * @description
 * # CompAddCtrl
 * Controller of the clientApp
 */
angular.module('clientApp')
  .controller('CompAddCtrl', function ($scope, Comp, $location) {
    $scope.Comp = {};
    $scope.saveComp = function() {
      Comp.post($scope.comp).then(function() {
          $location.path('/comp');
      });
    };
  });
