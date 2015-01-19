'use strict';

/**
 * @ngdoc function
 * @name innPalWebApp.controller:NavCtrl
 * @description
 * # NavCtrl
 * Controller of the innPalWebApp
 */
angular.module('innPalWebApp')
  .controller('NavCtrl', function ($scope, profile) {
    var init = function(){
    	$scope.profile = profile;
    }

    $scope.isLoggedIn = function(){
    	if(profile.isLoggedIn()){
    		return true;
    	}
    	else{
    		return false;
    	}
    }

    init();
  });
