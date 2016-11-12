'use strict';

/**
 * @ngdoc function
 * @name clientApp.controller:CompViewCtrl
 * @description
 * # CompViewCtrl
 * Controller of the clientApp
 */
angular.module('clientApp')
  .controller('CompViewCtrl', function ($scope, $routeParams, Comp) {
    $scope.viewComp = true;
    $scope.comp = Comp.one($routeParams.id).get().$object;
  });
