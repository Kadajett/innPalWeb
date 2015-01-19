'use strict';

/**
 * @ngdoc function
 * @name innPalWebApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the innPalWebApp
 */
angular.module('innPalWebApp')
  .controller('MainCtrl', function ($scope, $modal, $interval) {

  	var init = function(){
  		resizeHomeBg();
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
