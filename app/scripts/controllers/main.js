'use strict';

/**
 * @ngdoc function
 * @name innPalWebApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the innPalWebApp
 */
angular.module('innPalWebApp')
  .controller('MainCtrl', function ($scope, $modal) {
  	$scope.signup = function(){
  		 var modalInstance = $modal.open({
		     templateUrl: '/views/signup.html',
		     controller: 'SignupCtrl'
		});
  	}
  	$scope.login = function(){
  		 var modalInstance = $modal.open({
		     templateUrl: '/views/login.html',
		     controller: 'LoginCtrl'
		});
  	}
      
  });
