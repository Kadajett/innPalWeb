'use strict';

/**
 * @ngdoc service
 * @name innPalWebApp.auth
 * @description
 * # auth
 * Service in the innPalWebApp.
 */
angular.module('innPalWebApp')
  .service('auth', function ($http, $q, $rootScope, profile, localStorageService) {
   var auth = this;

   this.signup = function(user){
   	var defer = $q.defer();
   	if(user && user.firstName && user.lastName && user.phone && user.password){
   		$http.post($rootScope.endpoint + '/user.php', {'firstName': user.firstName, 'lastName': user.lastName, 'password': user.password, 'phone': user.phone})
	   	.success(function(res){
	   		if(res.success){
	   			profile.pushUserData(res.user);
	   			localStorageService.set('token', res.token);
	   			defer.resolve(res);
	   		}else{
	   			defer.reject(res.message);
	   		}
	   	})

   	}
   	else{
   		defer.reject('Failed Login')
   	}
   	
   	return defer.promise;
   }

    this.login = function(user){
   	var defer = $q.defer();

   	if(user.phone && user.password){
   		$http.post($rootScope.endpoint + '/login.php', {'password': user.password, 'phone': user.phone})
	   	.success(function(res){
	   		if(res.success){
	   			profile.pushUserData(res.user)
	   			localStorageService.set('token', res.token)
	   			defer.resolve(res);
	   		}else{
	   			defer.reject(res.message);
	   		}
	   	})

   	}
   	else{
   		defer.reject('Invalid Credentials')
   	}
   	
   	return defer.promise;
   }


   return this;
  });
