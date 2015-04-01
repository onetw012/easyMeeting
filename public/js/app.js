;(function(){
	"use strict";
	angular.module('meetings', ['ngRoute', 'uiGmapgoogle-maps'])
	.config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {
		$routeProvider.
			when('/map', {templateUrl: './js/templates/map.html', controller: 'MapController'}).
	/*	    when('/addEvent', {templateUrl: './js/templates/addEvent.html', controller: 'AddEventController'}).*/
		    when('/profile', {templateUrl: './js/templates/profile.html'}).
		    otherwise({redirectTo: '/map'});
	}]);
})();