; (function () {
	"use strict";
	angular.module('meetings')
	.controller('MapController',
		['$scope', '$http', 'Marker', 'Map',
		  function ($scope, $http, Marker, Map) {


		$scope.map = Map.map;
		$scope.markers = Map.markers;


		$scope.$on('update', function(event, coords) {		
			$scope.markers = Map.markers;
		  });

	}]);
})();