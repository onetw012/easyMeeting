;(function () {
	"use strict";
	angular.module('meetings')
	.controller('TabsController', ['$scope', '$location', function ($scope, $location) {
		$scope.tabs = [
		    { link : '#/map', label : 'Map' },
		    /*{ link : '#/addEvent', label : 'Add new event' },*/
		    { link : '#/profile', label : 'Profile' }
		  ]; 
		  
		$scope.selectedTab = $scope.tabs[0];    
		$scope.setSelectedTab = function(tab) {
		  $scope.selectedTab = tab;
		};
		
		$scope.tabClass = function(tab) {
		  if ($scope.selectedTab == tab) {
		    return "active";
		  } else {
		    return "";
		  }
		};
	}]);
})();