'use strict';

/**
 * @ngdoc function
 * @name innPalWebApp.controller:ProfileCtrl
 * @description
 * # ProfileCtrl
 * Controller of the innPalWebApp
 */
angular.module('innPalWebApp')
  .controller('ProfileCtrl', function ($scope, profile) {
    var init = function(){
    	$scope.profile = profile;
    }

    $scope.logout = function(){
    	profile.logOut();
    }

    init();
  });
