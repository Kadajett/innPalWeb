'use strict';

/**
 * @ngdoc service
 * @name innPalWebApp.auth
 * @description
 * # auth
 * Service in the innPalWebApp.
 */
angular.module('innPalWebApp')
  .service('auth', function ($http, $q, $rootScope) {
   var auth = this;

   this.signup = function(user){
   	var defer = $q.defer();

   	$http.post($rootScope.endpoint + '/user.php', {'firstName': user.firstName, 'lastName': user.lastName, 'password': user.password, 'phone': user.phone})
   	.success(function(res){
   		if(res.success){
   			defer.resolve(res);
   		}else{
   			defer.reject(res.message);
   		}
   	})

   	return defer.promise;
   }

    this.login = function(user){
   	var defer = $q.defer();

   	$http.post($rootScope.endpoint + '/login.php', {'password': user.password, 'phone': user.phone})
   	.success(function(res){
   		if(res.success){
   			defer.resolve(res);
   		}else{
   			defer.reject(res.message);
   		}
   	})

   	return defer.promise;
   }


   return this;
  });
