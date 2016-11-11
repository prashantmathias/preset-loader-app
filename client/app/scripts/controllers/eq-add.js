'use strict';

/**
 * @ngdoc function
 * @name clientApp.controller:EqAddCtrl
 * @description
 * # EqAddCtrl
 * Controller of the clientApp
 */
angular.module('clientApp')
  .controller('EqAddCtrl', function ($scope, Eq, $location) {
    $scope.Eq = {};
    $scope.saveEq = function() {
      Eq.post($scope.eq).then(function() {
          $location.path('/eq');
      });
    };
  });
