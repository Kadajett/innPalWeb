'use strict';

/**
 * @ngdoc function
 * @name innPalWebApp.controller:LoginCtrl
 * @description
 * # LoginCtrl
 * Controller of the innPalWebApp
 */
angular.module('innPalWebApp')
  .controller('LoginCtrl', function ($scope, auth, $modalInstance) {
    
    var init = function(){
    	$scope.data = {
    		phone: '',
    		password: ''
    	}
    }

    $scope.submit = function(){
    	$scope.loginLoading = true;
    	$scope.loginFailed = false;
    	auth.login($scope.data)
    	.then(function(){
    		$scope.loginLoading = false;
    		$modalInstance.close()
    	}, function(){
    		$scope.loginLoading = false;
    		$scope.loginFailed = true;
    	})
    }

    init();
  });
