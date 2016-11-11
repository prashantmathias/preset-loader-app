'use strict';

/**
 * @ngdoc function
 * @name clientApp.controller:EqCtrl
 * @description
 * # EqCtrl
 * Controller of the clientApp
 */
angular.module('clientApp')
  .controller('EqCtrl', function ($scope, Eq) {
    $scope.eqs = Eq.getList().$object;
  });
