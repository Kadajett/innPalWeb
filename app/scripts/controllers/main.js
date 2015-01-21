'use strict';

/**
 * @ngdoc function
 * @name innPalWebApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the innPalWebApp
 */
angular.module('innPalWebApp')
  .controller('MainCtrl', function ($scope, $modal, $interval, email) {

  	var init = function(){
  		resizeHomeBg();
  		$scope.email = {
  			name: '',
  			phone: '',
  			email: '',
  			message: ''
  		}
  	}

  	$scope.sendMail = function(){
  		$scope.sendingMail = true;
  		email.sendMessage($scope.email.name, $scope.email.email, $scope.email.phone, $scope.email.message)
  		.then(function(res){
  			debugger;
  		}, function(status){
  			debugger;
  		})

  	}

  	var resizeHomeBg = function(){
  		$interval(function(){

  			var homeHead = document.getElementById('homeHeader');
  			if(homeHead){
  				homeHead.style['height'] = window.innerHeight + 'px';
  			}
  			
  		}, 20)
  	}

  	
      init();
  });
