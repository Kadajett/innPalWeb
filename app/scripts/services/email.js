'use strict';

/**
 * @ngdoc service
 * @name innPalWebApp.email
 * @description
 * # email
 * Service in the innPalWebApp.
 */
angular.module('innPalWebApp')
  .service('email', function ($http, $q) {
    var email = this;

    email.sendMessage = function(name, email, phone, sendMessage){
    	var defer = $q.defer();

    	if(name && email && message){
    		// $http.post('https://mandrillapp.com/api/1.0/users/ping.json')
		$http.post('https://mandrillapp.com/api/1.0/messages/send.json', {
			key: 'h8Sw4T25FM_JKEWepQkZKA',
			message: {
				from_email: email,
				to: [
					{
						email: 'contact@innpal.io',
						name: 'Contact Us',
						type: 'to'
					}
				],
				autotext: true,
				subject: 'Mail From innPal.io Contact Form',
				html: '<span> <strong> Message from: </strong>' + name + '<br />' + '<strong> Phone Number: </strong>' + phone + '<br />' + '<strong> Message: </strong>' + sendMessage + '</span>'
			}
		})
		.success(function(res){
			defer.resolve(res)
		})
		.error(function(res){
			defer.reject(res);
		})
    	}
    	else{
    		defer.reject({message: 'Please enter valid information'})
    	}

    	return defer.promise;
    }

    return this;
  });
