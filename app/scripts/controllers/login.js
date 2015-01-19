'use strict';

/**
 * @ngdoc function
 * @name innPalWebApp.controller:LoginCtrl
 * @description
 * # LoginCtrl
 * Controller of the innPalWebApp
 */
angular.module('innPalWebApp')
  .controller('LoginCtrl', function ($scope, auth) {
    
    var init = function(){
    	var data = {
    		phone: '',
    		password: ''
    	}
    }

    $scope.submit = function(){
    	auth.login($scope.data)
    }

  });
