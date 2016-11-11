'use strict';

/**
 * @ngdoc overview
 * @name clientApp
 * @description
 * # clientApp
 *
 * Main module of the application.
 */
angular
  .module('clientApp', [
    'ngRoute',
    'restangular'
  ])
  .config(function ($routeProvider, RestangularProvider) {

    RestangularProvider.setBaseUrl('http://localhost:3000');

    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/eq', {
        templateUrl: 'views/eq.html',
        controller: 'EqCtrl',
        controllerAs: 'eq'
      })
      .when('/create/eq', {
        templateUrl: 'views/eq-add.html',
        controller: 'EqAddCtrl',
        controllerAs: 'eqAdd'
      })
      .when('/eq/:id', {
        templateUrl: 'views/eq-view.html',
        controller: 'EqViewCtrl',
        controllerAs: 'eqView'
      })
      .when('/eq/:id/delete', {
        templateUrl: 'views/eq-delete.html',
        controller: 'EqDeleteCtrl',
        controllerAs: 'eqDelete'
      })
      .when('/eq/:id/edit', {
        templateUrl: 'views/eq-edit.html',
        controller: 'EqEditCtrl',
        controllerAs: 'eqEdit'
      })
      .otherwise({
        redirectTo: '/'
      });
  })
  .factory('EqRestangular', function(Restangular) {
    return Restangular.withConfig(function(RestangularConfigurer) {
      RestangularConfigurer.setRestangularFields({
        id: '_id'
      });
    });
  })
  .factory('Eq', function(EqRestangular) {
    return EqRestangular.service('eq');
  })
