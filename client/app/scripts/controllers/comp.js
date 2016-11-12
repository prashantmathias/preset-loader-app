'use strict';

/**
 * @ngdoc function
 * @name clientApp.controller:CompCtrl
 * @description
 * # CompCtrl
 * Controller of the clientApp
 */
angular.module('clientApp')
  .controller('CompCtrl', function ($scope, Comp) {
    $scope.comps = Comp.getList().$object;
  });
