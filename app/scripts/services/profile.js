'use strict';

/**
 * @ngdoc service
 * @name innPalWebApp.profile
 * @description
 * # profile
 * Service in the innPalWebApp.
 */
angular.module('innPalWebApp')
  .service('profile', function (localStorageService, $http, $q, $rootScope, $location) {
    var profile = this;

    profile.init = function(){
	profile.user = {};
	profile.getUser();
    }

    profile.pushUserData = function(user){
    	if(user.phone){
    		localStorageService.set('user', user);
    		profile.user = user;
    	}
    }

    profile.getUser = function(){
    	if(localStorageService.get('user')){
    		profile.user = localStorageService.get('user');
    	}
    }

    profile.logOut = function(){
    	localStorageService.set('user', null)
    	$location.path('/');
    }

    profile.isLoggedIn = function(){
    	if(localStorageService.get('user')){
    		return true;
    	}
    	else{
    		return false;
    	}
    }

    profile.pullUser = function(){
    	var defer = $q.defer();

    	$http.get($rootScope.endpoint + 'user?phone=' + profile.user.phone + '&token=' + localStorageService.get('token'))
    	.success(function(res){
    		if(res.success){
    			defer.resolve(res.user);
    		}
    	})

    	return defer.promise;
    }

    profile.init();
    return profile;
  });
