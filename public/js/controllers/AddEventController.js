; (function(){
	"use strict";
	angular.module('meetings')
	.controller('AddEventController', 
		['$scope', '$http', 'Map',
	 	  function($scope, $http, Map){

		$scope.event = {			
			latitude: 0,
			longitude: 0,
			name: "",
			desc: "",
			private: false,
			dateOfEvent: null
		};


		$scope.$on('update', function(event, marker) {		
		    $scope.event.latitude = marker.coords.latitude;
		    $scope.event.longitude = marker.coords.longitude;
		  });


		$scope.submitForm = function() {
		        // check to make sure the form is completely valid
		        if ($scope.eventForm.$valid) {
		           var dateOfCreation = new Date();
		           var objToSend = {
		           		coords: {latitude: $scope.event.latitude, longitude: $scope.event.longitude},
		           		name: $scope.event.name,
		           		description: $scope.event.desc,
		           		participants: null,
		           		private: $scope.event.private,
		           		author: null,
		           		dateOfEvent: $scope.event.dateOfEvent,
		           		dateOfCreation: dateOfCreation
		           	};
		           	console.log(objToSend);
		           $http({method: 'POST', url: '/api/createEvent', 
		           	data: objToSend})
		           	.success(function(data, status, headers, config) {
		           		   console.log(headers);		           		    			
		           	})
		           	.error(function(data, status, headers, config) {
		           		   console.log("ERROR!: " + data + status + headers + config);
		           	});
		        }
		};
	}]);
})();