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
   		$scope.signupLoading = true;
   		$scope.signupError = false;
   		auth.signup($scope.user)
   		.then(function(res){
   			$scope.signupLoading = false;
   			if(res.success){

   			}
   		}, function(res){
   			$scope.signupLoading = false;
   			$scope.signupError = true;
   		})
   	}
  });
