'use strict';

/**
 * @ngdoc function
 * @name innPalWebApp.controller:SignupCtrl
 * @description
 * # SignupCtrl
 * Controller of the innPalWebApp
 */
angular.module('innPalWebApp')
  .controller('SignupCtrl', function ($scope, auth) {
   	
   	var init = function(){
   		$scope.user = {
   			firstName: '',
   			lastName: '',
   			password: '',
   			phone: ''
   		}
   	}

   	$scope.submit = function(){
   		auth.signup($scope.user)
   		.then(function(res){

   		}, function(res){

   		})
   	}
  });
