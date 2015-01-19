'use strict';

/**
 * @ngdoc function
 * @name innPalWebApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the innPalWebApp
 */
angular.module('innPalWebApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
